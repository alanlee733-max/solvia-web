import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  type?: string;
  message?: string;
  // honeypot — real users never fill this
  company_website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Silently accept bots so they don't retry, but never forward.
  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const company = (body.company || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !company || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 422 });
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        company,
        email,
        phone: (body.phone || "").trim(),
        type: (body.type || "").trim(),
        message,
      }),
    });

    const text = await res.text();
    let upstreamOk = res.ok;
    try {
      upstreamOk = upstreamOk && JSON.parse(text).ok !== false;
    } catch {
      // Apps Script sometimes returns non-JSON on a 200 — treat 200 as success.
    }

    if (!upstreamOk) {
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "upstream_unreachable" }, { status: 502 });
  }
}
