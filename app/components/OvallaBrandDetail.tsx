"use client";

import { useEffect, useRef } from "react";

/* NOTE: Brand copy below is interim placeholder text written to match the
   site's tone. Replace line-by-line when official ōvalla brand materials
   (positioning, product lines, imagery) are supplied. */

const mono = "'IBM Plex Mono',monospace";
const serif = "'Nanum Myeongjo',serif";
const garamond = "'Cormorant Garamond',serif";

const eyebrow: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "#7d8a6a",
};

const cardBase: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(36,31,25,0.08)",
  borderRadius: 18,
  overflow: "hidden",
};

const lines = [
  {
    title: "Skin Rituals",
    body: "Daily essentials built on botanical extracts and clinically familiar actives — the quiet core of the ōvalla routine.",
  },
  {
    title: "Intensive Care",
    body: "Concentrated treatments for moments that call for more — recovery, radiance, and barrier repair.",
  },
  {
    title: "Body & Beyond",
    body: "The ōvalla philosophy carried past the face — textures made for skin you live in all day.",
  },
];

const markets = ["Korea", "Japan", "United States", "Singapore"];

export default function OvallaBrandDetail({
  accent = "#8fa06d",
}: {
  accent?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll(".ov-reveal"));
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((e) => io.observe(e));
    const t = setTimeout(() => els.forEach((e) => e.classList.add("in")), 2600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      style={
        {
          "--accent": accent,
          fontFamily: "'Jost',sans-serif",
          background: "#efe9e2",
          color: "#241f19",
          minHeight: "100vh",
          WebkitFontSmoothing: "antialiased",
        } as React.CSSProperties
      }
    >
      <style>{`
        .ov-page ::selection { background: rgba(143,160,109,0.24); }
        .ov-reveal { opacity:0; transform:translateY(26px); transition:opacity 1s cubic-bezier(.2,.7,.2,1), transform 1s cubic-bezier(.2,.7,.2,1); }
        .ov-reveal.in { opacity:1; transform:none; }
        @media (prefers-reduced-motion: reduce) {
          .ov-reveal { opacity:1; transform:none; transition:none; }
        }
        @media (max-width:720px) {
          .ov-hero-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      <div className="ov-page">
        {/* ===== HEADER ===== */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px clamp(24px,5vw,72px)",
            background: "rgba(239,233,226,0.82)",
            backdropFilter: "saturate(1.2) blur(12px)",
            WebkitBackdropFilter: "saturate(1.2) blur(12px)",
            borderBottom: "1px solid rgba(36,31,25,0.08)",
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#241f19",
              textDecoration: "none",
              fontSize: 13,
              letterSpacing: "0.08em",
            }}
          >
            <span style={{ fontSize: 17, lineHeight: 1 }}>←</span> Back to Solvia
          </a>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span
              style={{
                fontFamily: garamond,
                fontWeight: 600,
                fontSize: 22,
                letterSpacing: "0.05em",
              }}
            >
              ōvalla
            </span>
            <span
              style={{
                fontFamily: mono,
                fontSize: 10,
                letterSpacing: "0.28em",
                color: "#9a8a6e",
              }}
            >
              DISTRIBUTED BY SOLVIA
            </span>
          </div>
        </header>

        {/* ===== HERO ===== */}
        <section
          style={{
            position: "relative",
            color: "#f7f4ec",
            overflow: "hidden",
            minHeight: "62vh",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img
            src="/assets/forest-light.webp"
            alt="Light falling through a forest canopy — the ōvalla mood"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(18,20,14,0.25) 0%, rgba(18,20,14,0.1) 40%, rgba(18,20,14,0.82) 100%)",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1160,
              margin: "0 auto",
              padding: "clamp(96px,16vh,180px) clamp(24px,5vw,72px) clamp(48px,7vh,84px)",
            }}
          >
            <p style={{ ...eyebrow, color: "#cdd8b4" }}>Cosmetics · KR · JP · US · SG</p>
            <h1
              style={{
                fontFamily: garamond,
                fontWeight: 600,
                fontSize: "clamp(52px,8vw,96px)",
                lineHeight: 1,
                margin: "16px 0 14px",
                letterSpacing: "0.03em",
              }}
            >
              ōvalla
            </h1>
            <p
              style={{
                fontFamily: garamond,
                fontStyle: "italic",
                fontSize: "clamp(19px,2.3vw,26px)",
                color: "rgba(247,244,236,0.85)",
                margin: 0,
                maxWidth: 560,
              }}
            >
              Skincare in the register of light — quiet formulas from Korea,
              made to be lived with.
            </p>
          </div>
        </section>

        <main
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "clamp(56px,9vh,110px) clamp(24px,5vw,72px)",
          }}
        >
          {/* ===== PHILOSOPHY ===== */}
          <section className="ov-reveal">
            <p style={eyebrow}>01 · The Brand</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 18px",
              }}
            >
              Less noise, more skin
            </h2>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.85,
                color: "rgba(36,31,25,0.65)",
                maxWidth: 680,
                fontWeight: 300,
                margin: 0,
              }}
            >
              ōvalla is Solvia&apos;s cosmetics house — a Korean skincare brand that
              trades maximalist routines for a small number of formulas that earn
              their place. Botanical extracts, proven actives, and textures tuned
              for daily ritual rather than shelf display. Full brand and product
              detail is being prepared for this page; partners can request the
              current line sheet below.
            </p>
          </section>

          {/* ===== LINES ===== */}
          <section className="ov-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <p style={eyebrow}>02 · Collections</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 34px",
              }}
            >
              Three ways into the ritual
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 18,
              }}
            >
              {lines.map((l) => (
                <div key={l.title} style={{ ...cardBase, padding: "28px 26px 24px" }}>
                  <div
                    style={{
                      fontFamily: garamond,
                      fontWeight: 600,
                      fontSize: 21,
                      letterSpacing: "0.03em",
                      marginBottom: 10,
                    }}
                  >
                    {l.title}
                  </div>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.75,
                      color: "rgba(36,31,25,0.62)",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {l.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== MARKETS ===== */}
          <section className="ov-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <p style={eyebrow}>03 · Where ōvalla Lives</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 30px",
              }}
            >
              Four markets and growing
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {markets.map((m) => (
                <span
                  key={m}
                  style={{
                    fontFamily: mono,
                    fontSize: 12,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    padding: "12px 22px",
                    borderRadius: 999,
                    background: "#fff",
                    border: "1px solid rgba(36,31,25,0.1)",
                    color: "rgba(36,31,25,0.72)",
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </section>

          {/* ===== CTA ===== */}
          <section
            id="enquire"
            className="ov-reveal"
            style={{
              marginTop: "clamp(64px,10vh,120px)",
              background: "#1e211a",
              color: "#f4f2ea",
              borderRadius: 22,
              padding: "clamp(40px,6vw,72px)",
              textAlign: "center",
            }}
          >
            <p style={{ ...eyebrow, color: "#cdd8b4" }}>Partnership</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "16px 0 12px",
              }}
            >
              Request the ōvalla line sheet
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(244,242,234,0.66)",
                maxWidth: 560,
                margin: "0 auto 32px",
                fontWeight: 300,
              }}
            >
              Current catalogue, pricing tiers and market availability — our
              partnership team responds within two business days.
            </p>
            <a
              href="mailto:partners@solviamedical.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--accent)",
                color: "#161a10",
                textDecoration: "none",
                padding: "16px 32px",
                borderRadius: 999,
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              partners@solviamedical.com <span style={{ fontSize: 15 }}>→</span>
            </a>
          </section>
        </main>

        {/* ===== FOOTER ===== */}
        <footer
          style={{
            borderTop: "1px solid rgba(36,31,25,0.08)",
            padding: "28px clamp(24px,5vw,72px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 12.5, color: "rgba(36,31,25,0.5)" }}>
            © Solvia Medical — ōvalla
          </span>
          <a
            href="/"
            style={{
              fontSize: 12.5,
              color: "rgba(36,31,25,0.65)",
              textDecoration: "none",
              letterSpacing: "0.06em",
            }}
          >
            ← Back to Solvia
          </a>
        </footer>
      </div>
    </div>
  );
}
