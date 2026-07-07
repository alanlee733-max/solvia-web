"use client";

import { useEffect, useRef } from "react";

/* Brand copy sourced from the official ōvalla brochure v3.3 (English).
   Product imagery lives in /public/assets/ovalla/. */

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

const chip: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 9.5,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  padding: "5px 10px",
  borderRadius: 999,
  background: "rgba(125,138,106,0.12)",
  color: "#5d6b4a",
};

const values = [
  {
    title: "Healthy Body & Mind",
    body: "True beauty begins with mental and physical health — routines built to be lived with, not performed.",
  },
  {
    title: "Safe Ingredients, Proven Technology",
    body: "The best product is made from safe ingredients and verified technology — nothing added for show.",
  },
  {
    title: "Environment & Social Responsibility",
    body: "Beauty cannot be completed without the support of nature — sustainability is a duty, not a slogan.",
  },
];

const ritual = [
  {
    step: "Step 1",
    name: "Fucocentella™ Energizing Essenskin",
    vol: "130 ml · 4.39 fl. oz.",
    ppm: "CICA Fucocentella 10,000 ppm",
    tags: ["Calming", "Pore Refining"],
    body: "Softens like a toner and moisturizes like a cream in one step — clearing final impurities and balancing pH so skin is ready for what follows.",
  },
  {
    step: "Step 2",
    name: "Fucocentella™ Multi Repair Serum",
    vol: "30 ml · 1.01 fl. oz.",
    ppm: "CICA Fucocentella 20,000 ppm",
    tags: ["Moisturizing", "Anti-aging"],
    body: "Targets wrinkles, dryness and loss of firmness with a double dose of the Fucocentella essence, penetrating fast to rehydrate and recondition.",
  },
  {
    step: "Step 3",
    name: "Fucocentella™ Revitalizing Intensive Cream",
    vol: "50 ml · 1.69 fl. oz.",
    ppm: "CICA Fucocentella 10,000 ppm",
    tags: ["Hydrating", "Nourishing"],
    body: "A lightweight, ultra-soft cream for naturally brightened, hydrated, restored skin — made to soothe dry and sensitive complexions.",
  },
];

const ritualClaims = [
  "Low pH formula",
  "Hypoallergenic",
  "Dermatologically tested",
  "Allergen-free",
];

const lineup = [
  {
    name: "Lengkuas Spa Foaming Cleanser",
    vol: "120 ml",
    img: "/assets/ovalla/cleanser.webp",
    tags: ["Deep Cleansing", "Micro-Bubbles", "All Skin Types"],
    body: "Lengkuas — blue ginger — works deep pore cleansing while herb extracts invigorate and nourish, under the brand's signature fragrance.",
  },
  {
    name: "All Day Blue Shield Sunscreen",
    vol: "SPF 50+ / PA++++ · 50 ml",
    img: "/assets/ovalla/sunscreen.webp",
    tags: ["Non-greasy", "Powerful Protection"],
    body: "A light, fast-absorbing matte finish with Arabian cotton extract for broad-spectrum defence against UVA ageing and UVB burning.",
  },
  {
    name: "Fucocentella Mist Serum — ōvalla x akiki",
    vol: "100 ml",
    img: "/assets/ovalla/mist.webp",
    tags: ["Double Layer", "EWG Green*"],
    body: "A double-layer face mist that boosts hydration under or over makeup — calming Fucocentella care in an ultra-light spray. *Except fragrance.",
  },
  {
    name: "Botanique™ Multi Dry Oil",
    vol: "Bergamot & Neroli / Orchid & Blossom · 50 ml",
    img: "/assets/ovalla/dry-oil.webp",
    tags: ["Vegan Certified", "Face · Body · Hair"],
    body: "Seven botanical fermented oils in a dry-oil texture — long-lasting hydration that softens the look of stretch marks and wakes a vivid glow.",
  },
  {
    name: "Fucocentella Serum in Cushion",
    vol: "SPF 38 / PA++ · Beige / Pink Beige",
    img: "/assets/ovalla/cushion.webp",
    tags: ["V-Label Vegan", "High Coverage"],
    body: "A high-adhesion, semi-matte CICA cushion — anti-wrinkle, brightening and sun protection, free from oxybenzone and octinoxate.",
  },
  {
    name: "Ovalla Signature Mini Set",
    vol: "Cream · Dry Oil · Foaming Cleanser",
    img: null,
    tags: ["Portable", "Travel Kit", "Gift Set"],
    body: "The signature textures in travel form — the easiest first meeting with the brand, and the one partners reorder most.",
  },
];

const routineMap = [
  { label: "Cleansing", item: "Lengkuas Spa Foaming Cleanser" },
  { label: "Basic 3-Step", item: "Essenskin → Serum → Intensive Cream" },
  { label: "Sun Care", item: "All Day Blue Shield Sunscreen" },
  { label: "Daily Hydration", item: "Fucocentella Mist Serum" },
  { label: "Base", item: "Serum in Cushion SPF 38" },
  { label: "Multi Care", item: "Botanique Multi Dry Oil" },
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
        .ov-card-img { transition:transform .8s cubic-bezier(.2,.7,.2,1); }
        .ov-lineup-card:hover .ov-card-img { transform:scale(1.045); }
        @media (prefers-reduced-motion: reduce) {
          .ov-reveal { opacity:1; transform:none; transition:none; }
        }
        @media (max-width:720px) {
          .ov-ritual-grid { grid-template-columns:1fr !important; }
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
            minHeight: "68vh",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img
            src="/assets/forest-light.webp"
            alt="Light through a forest canopy — the ōvalla mood"
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
                "linear-gradient(180deg, rgba(18,20,14,0.3) 0%, rgba(18,20,14,0.08) 42%, rgba(18,20,14,0.84) 100%)",
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
            <p style={{ ...eyebrow, color: "#cdd8b4" }}>
              Premium Skin Care · KR · JP · US · SG
            </p>
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
                maxWidth: 600,
              }}
            >
              Sustainable Beauty — Oval, the shape of infinity, joined with
              Bella: beauty made to last.
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
          {/* ===== 01 · BRAND ===== */}
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
              Beauty in pursuit of sustainability
            </h2>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.85,
                color: "rgba(36,31,25,0.65)",
                maxWidth: 680,
                fontWeight: 300,
                margin: "0 0 34px",
              }}
            >
              ōvalla began with years of asking what true beauty is, how it is
              gained, and how it is kept. The answer became a brand: safe
              ingredients, proven technology, and a conviction that beauty
              cannot be completed without the support of nature.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 18,
              }}
            >
              {values.map((v) => (
                <div key={v.title} style={{ ...cardBase, padding: "28px 26px 24px" }}>
                  <div
                    style={{
                      fontFamily: garamond,
                      fontWeight: 600,
                      fontSize: 20,
                      letterSpacing: "0.02em",
                      marginBottom: 10,
                    }}
                  >
                    {v.title}
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
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 02 · FUCOCENTELLA ===== */}
          <section
            className="ov-reveal"
            style={{
              marginTop: "clamp(64px,10vh,120px)",
              background: "#1e211a",
              color: "#f4f2ea",
              borderRadius: 22,
              padding: "clamp(36px,5.5vw,64px)",
            }}
          >
            <p style={{ ...eyebrow, color: "#cdd8b4" }}>02 · Signature Formula</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 14px",
              }}
            >
              Fucocentella™
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: "rgba(244,242,234,0.7)",
                maxWidth: 640,
                fontWeight: 300,
                margin: 0,
              }}
            >
              Inspired by the pairing of Fucose and Centella Asiatica, ōvalla
              research developed its own Fucocentella™ formula — activating the
              skin&apos;s natural moisturizing process and delivering the CICA
              care the line is built around. It runs through the ritual from
              essenskin to serum, cream, mist and cushion.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 26 }}>
              {["Fucose", "Centella Asiatica", "CICA Care Solution", "Natural Moisture Activation"].map(
                (t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: mono,
                      fontSize: 10.5,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      padding: "9px 16px",
                      borderRadius: 999,
                      border: "1px solid rgba(205,216,180,0.35)",
                      color: "#cdd8b4",
                    }}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </section>

          {/* ===== 03 · 3-STEP RITUAL ===== */}
          <section className="ov-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <p style={eyebrow}>03 · The Ritual</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 10px",
              }}
            >
              Three steps, one formula
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                margin: "0 0 30px",
              }}
            >
              {ritualClaims.map((c) => (
                <span key={c} style={chip}>
                  {c}
                </span>
              ))}
            </div>
            <div
              className="ov-ritual-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(280px,420px) 1fr",
                gap: 18,
                alignItems: "start",
              }}
            >
              <div style={{ ...cardBase }}>
                <img
                  src="/assets/ovalla/main.webp"
                  alt="Fucocentella 3-step line — Essenskin, Multi Repair Serum, Intensive Cream"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {ritual.map((r) => (
                <div key={r.step} style={{ ...cardBase }}>
                  <div style={{ padding: "22px 22px 20px" }}>
                    <div
                      style={{
                        fontFamily: garamond,
                        fontStyle: "italic",
                        fontSize: 17,
                        color: "var(--accent)",
                        marginBottom: 6,
                      }}
                    >
                      {r.step}
                    </div>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: 15.5,
                        letterSpacing: "0.02em",
                        lineHeight: 1.4,
                        marginBottom: 4,
                      }}
                    >
                      {r.name}
                    </div>
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: 10.5,
                        letterSpacing: "0.1em",
                        color: "rgba(36,31,25,0.5)",
                        marginBottom: 12,
                      }}
                    >
                      {r.vol} · {r.ppm}
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "rgba(36,31,25,0.62)",
                        fontWeight: 300,
                        margin: "0 0 14px",
                      }}
                    >
                      {r.body}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {r.tags.map((t) => (
                        <span key={t} style={chip}>
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </section>

          {/* ===== 04 · FULL LINEUP ===== */}
          <section className="ov-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <p style={eyebrow}>04 · Beyond the Ritual</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 34px",
              }}
            >
              The full ōvalla shelf
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                gap: 18,
              }}
            >
              {lineup.map((p) => (
                <div key={p.name} className="ov-lineup-card" style={{ ...cardBase }}>
                  {p.img ? (
                    <div
                      style={{
                        aspectRatio: "16 / 10",
                        background: "#f6f3ec",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        className="ov-card-img"
                        src={p.img}
                        alt={p.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          padding: 14,
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        aspectRatio: "16 / 10",
                        background:
                          "repeating-linear-gradient(135deg,#e6e3d4,#e6e3d4 17px,#ddd9c6 17px,#ddd9c6 34px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: garamond,
                          fontStyle: "italic",
                          fontSize: 22,
                          color: "#6c705a",
                        }}
                      >
                        Signature Set
                      </span>
                    </div>
                  )}
                  <div style={{ padding: "20px 22px 20px" }}>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: 15.5,
                        letterSpacing: "0.02em",
                        lineHeight: 1.4,
                        marginBottom: 4,
                      }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: 10.5,
                        letterSpacing: "0.1em",
                        color: "rgba(36,31,25,0.5)",
                        marginBottom: 12,
                      }}
                    >
                      {p.vol}
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "rgba(36,31,25,0.62)",
                        fontWeight: 300,
                        margin: "0 0 14px",
                      }}
                    >
                      {p.body}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {p.tags.map((t) => (
                        <span key={t} style={chip}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 05 · ROUTINE MAP ===== */}
          <section className="ov-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <p style={eyebrow}>05 · Routine Map</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 30px",
              }}
            >
              A day with ōvalla
            </h2>
            <div style={{ ...cardBase }}>
              {routineMap.map((r, i) => (
                <div
                  key={r.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 24,
                    padding: "16px 26px",
                    borderTop: i === 0 ? "none" : "1px solid rgba(36,31,25,0.07)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#7d8a6a",
                    }}
                  >
                    {r.label}
                  </span>
                  <span style={{ fontSize: 14.5, fontWeight: 400, textAlign: "right" }}>
                    {r.item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 06 · MARKETS ===== */}
          <section className="ov-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <p style={eyebrow}>06 · Where ōvalla Lives</p>
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

          {/* ===== 07 · CTA ===== */}
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
              Bring ōvalla to your market
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
              Full catalogue, pricing tiers and market availability — our
              partnership team responds within two business days.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
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
              <a
                href="/assets/ovalla/ovalla-brochure.pdf"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "#f4f2ea",
                  textDecoration: "none",
                  padding: "16px 32px",
                  borderRadius: 999,
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  border: "1px solid rgba(244,242,234,0.4)",
                }}
              >
                Download Brochure
              </a>
            </div>
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
            © Solvia Medical — ōvalla · Sustainable Beauty
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
