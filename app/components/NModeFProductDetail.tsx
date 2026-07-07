"use client";

import { useEffect, useRef } from "react";

const mono = "'IBM Plex Mono',monospace";
const serif = "'Nanum Myeongjo',serif";
const garamond = "'Cormorant Garamond',serif";

const eyebrow: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "#8a6a34",
};

const cardBase: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(36,31,25,0.08)",
  borderRadius: 18,
  overflow: "hidden",
};

/* Product facts sourced from manufacturer documentation
   (packaging specification, COA, MSDS, full ingredient list). */
const actives = [
  {
    pct: "5.0%",
    name: "Niacinamide",
    role: "Brightening functional ingredient",
    body: "Registered brightening active at the full functional concentration, verified by external assay on every finished lot.",
  },
  {
    pct: "0.04%",
    name: "Adenosine",
    role: "Wrinkle-care functional ingredient",
    body: "Registered wrinkle-improvement active, externally assayed per lot to hold label concentration.",
  },
];

const formula = [
  {
    title: "Sodium Deoxycholate",
    body: "A conditioning agent featured in professional firming-care formulas — the signature of the V Fat Care concept.",
  },
  {
    title: "Ectoin",
    body: "A stress-protection molecule that supports the skin barrier through intensive care routines.",
  },
  {
    title: "Ceramide NP + Hyaluronate",
    body: "Barrier lipids and deep hydration to keep treated skin supple between sessions.",
  },
  {
    title: "Shea Butter & Squalane",
    body: "A cushioned emollient base that leaves a smooth, non-greasy finish after massage.",
  },
  {
    title: "Panthenol & Allantoin",
    body: "Classic soothers that calm skin following device or manual body care.",
  },
  {
    title: "Scutellaria Root Extract",
    body: "Baical skullcap extract rounds out the formula with antioxidant plant care.",
  },
];

const specs = [
  { label: "Format", value: "V Fat Care Cream", monoVal: false },
  { label: "Volume", value: "50 ml / 1.69 fl. oz.", monoVal: true },
  { label: "Texture", value: "Light-yellow viscous cream", monoVal: false },
  { label: "pH", value: "6.9 (25 °C)", monoVal: true },
  { label: "Container", value: "Opaque airless PETG pump", monoVal: false },
  { label: "Shelf life", value: "36 months · EXP printed", monoVal: true },
  { label: "Origin", value: "Republic of Korea", monoVal: false },
];

const quality = [
  {
    title: "CGMP facility",
    body: "Produced at Kei.H Co., Ltd (Yeoju, Korea), certified as a Cosmetic GMP compliant site by the Korean MFDS.",
  },
  {
    title: "ISO 22716:2007",
    body: "Manufacturing and quality management independently certified to the international cosmetic GMP standard.",
  },
  {
    title: "Lot-by-lot release",
    body: "Every lot is released against microbial limits (<100 cfu/g), stability, and external assay of both functional actives.",
  },
];

const steps = [
  {
    num: "01",
    title: "Dispense",
    body: "One to two pumps onto the palm — the airless container keeps the formula fresh to the last dose.",
  },
  {
    num: "02",
    title: "Apply",
    body: "Spread liberally over the abdomen, waist, arms or thighs — wherever contour care is the focus.",
  },
  {
    num: "03",
    title: "Absorb",
    body: "Massage and pat until fully absorbed. In studio, apply directly after a CoreSlim session.",
  },
];

export default function NModeFProductDetail({
  accent = "#b98a3c",
}: {
  accent?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll(".nm-reveal"));
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
        .nm-page ::selection { background: rgba(185,138,60,0.24); }
        .nm-reveal { opacity:0; transform:translateY(26px); transition:opacity 1s cubic-bezier(.2,.7,.2,1), transform 1s cubic-bezier(.2,.7,.2,1); }
        .nm-reveal.in { opacity:1; transform:none; }
        .nm-prow { transition:background .3s ease; }
        .nm-prow:hover { background:rgba(185,138,60,0.09); }
        @keyframes nmSheen {
          0%   { transform:translateX(-70%) rotate(14deg); opacity:0; }
          35%  { opacity:.5; }
          100% { transform:translateX(140%) rotate(14deg); opacity:0; }
        }
        .nm-sheen { animation:nmSheen 5.5s cubic-bezier(.4,.2,.2,1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .nm-reveal { opacity:1; transform:none; transition:none; }
          .nm-sheen { animation:none; opacity:0; }
        }
        @media (max-width:720px) {
          .nm-hero-grid { grid-template-columns:1fr !important; }
          .nm-two-col { grid-template-columns:1fr !important; }
        }
      `}</style>

      <div className="nm-page">
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
            <span style={{ fontWeight: 500, fontSize: 19, letterSpacing: "0.16em" }}>
              N MODE F
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

        {/* ===== 1 · HERO ===== */}
        <section
          style={{
            position: "relative",
            background: "#1c1712",
            color: "#f4ecdd",
            overflow: "hidden",
            padding: "clamp(64px,10vh,120px) clamp(24px,5vw,72px)",
          }}
        >
          <div
            className="nm-sheen"
            aria-hidden
            style={{
              position: "absolute",
              top: "-30%",
              left: 0,
              width: "34%",
              height: "160%",
              background:
                "linear-gradient(90deg, transparent, rgba(230,182,82,0.14), transparent)",
              pointerEvents: "none",
            }}
          />
          <div
            className="nm-hero-grid"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "clamp(32px,5vw,72px)",
              maxWidth: 1160,
              margin: "0 auto",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ ...eyebrow, color: "#c9a35c", marginBottom: 22 }}>
                Functional Body Care · Dual-Functional Cosmetic
              </p>
              <h1
                style={{
                  fontFamily: serif,
                  fontWeight: 700,
                  fontSize: "clamp(40px,6vw,72px)",
                  lineHeight: 1.06,
                  margin: 0,
                  letterSpacing: "0.02em",
                }}
              >
                N MODE F
              </h1>
              <p
                style={{
                  fontFamily: garamond,
                  fontStyle: "italic",
                  fontSize: "clamp(20px,2.4vw,27px)",
                  color: "rgba(244,236,221,0.78)",
                  margin: "14px 0 26px",
                }}
              >
                V Fat Care Cream — the topical partner to professional contour work.
              </p>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  maxWidth: 520,
                  color: "rgba(244,236,221,0.66)",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                A Korean functional cream built for the body: registered brightening
                and wrinkle-care actives in a barrier-respecting emollient base,
                designed to extend studio contour care into the daily routine.
              </p>
              <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
                <a
                  href="#enquire"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "var(--accent)",
                    color: "#1c1408",
                    textDecoration: "none",
                    padding: "15px 28px",
                    borderRadius: 999,
                    fontSize: 13,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Enquire <span style={{ fontSize: 15 }}>→</span>
                </a>
                <a
                  href="/coreslim"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    color: "#f4ecdd",
                    textDecoration: "none",
                    padding: "15px 28px",
                    borderRadius: 999,
                    fontSize: 13,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 400,
                    border: "1px solid rgba(244,236,221,0.4)",
                  }}
                >
                  Pairs with CoreSlim
                </a>
              </div>
            </div>

            {/* Stylized product silhouette (no photography yet) */}
            <div
              aria-hidden
              style={{
                justifySelf: "center",
                width: "min(240px,60vw)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0,
              }}
            >
              <div
                style={{
                  width: 74,
                  height: 46,
                  borderRadius: "10px 10px 4px 4px",
                  background: "linear-gradient(180deg,#3d332a,#2a221b)",
                  border: "1px solid rgba(230,182,82,0.25)",
                }}
              />
              <div
                style={{
                  width: 150,
                  height: 300,
                  borderRadius: "26px 26px 34px 34px",
                  background:
                    "linear-gradient(160deg,#f7f1e6 8%,#e9ddc8 45%,#d9c8a8 100%)",
                  border: "1px solid rgba(230,182,82,0.35)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: "#40342a",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.45), inset -14px 0 34px rgba(151,117,66,0.18)",
                }}
              >
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 9,
                    letterSpacing: "0.34em",
                    color: "#8a6a34",
                  }}
                >
                  DUAL FUNCTIONAL
                </span>
                <span
                  style={{
                    fontFamily: serif,
                    fontWeight: 700,
                    fontSize: 24,
                    letterSpacing: "0.08em",
                  }}
                >
                  N MODE F
                </span>
                <span
                  style={{
                    fontFamily: garamond,
                    fontStyle: "italic",
                    fontSize: 14,
                    color: "#6c5a44",
                  }}
                >
                  V Fat Care Cream
                </span>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "#8a7a62",
                    marginTop: 10,
                  }}
                >
                  50 ml · 1.69 FL.OZ.
                </span>
              </div>
            </div>
          </div>
        </section>

        <main
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "clamp(56px,9vh,110px) clamp(24px,5vw,72px)",
          }}
        >
          {/* ===== 2 · FUNCTIONAL ACTIVES ===== */}
          <section className="nm-reveal">
            <p style={eyebrow}>01 · Functional Actives</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 10px",
              }}
            >
              Two registered actives, held at full strength
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(36,31,25,0.65)",
                maxWidth: 640,
                fontWeight: 300,
                margin: "0 0 34px",
              }}
            >
              N MODE F is formulated as a dual-functional cosmetic under Korean MFDS
              conventions. Both actives are quantified by external laboratories on
              every finished lot — not just in the master formula.
            </p>
            <div
              className="nm-two-col"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
              }}
            >
              {actives.map((a) => (
                <div key={a.name} style={{ ...cardBase, padding: "30px 30px 26px" }}>
                  <div
                    style={{
                      fontFamily: garamond,
                      fontStyle: "italic",
                      fontSize: 44,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    {a.pct}
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: 19,
                      letterSpacing: "0.04em",
                      margin: "12px 0 2px",
                    }}
                  >
                    {a.name}
                  </div>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 10.5,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8a6a34",
                      marginBottom: 12,
                    }}
                  >
                    {a.role}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: "rgba(36,31,25,0.62)",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {a.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 3 · FORMULA ===== */}
          <section className="nm-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <p style={eyebrow}>02 · Inside the Formula</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 34px",
              }}
            >
              Contour care that respects the barrier
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: 18,
              }}
            >
              {formula.map((f) => (
                <div key={f.title} style={{ ...cardBase, padding: "26px 26px 22px" }}>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: 16.5,
                      letterSpacing: "0.03em",
                      marginBottom: 10,
                    }}
                  >
                    {f.title}
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
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 4 · HOW TO USE ===== */}
          <section className="nm-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <p style={eyebrow}>03 · Ritual</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 34px",
              }}
            >
              In studio, or between sessions
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: 18,
              }}
            >
              {steps.map((s) => (
                <div key={s.num} style={{ ...cardBase, padding: "28px 26px 24px" }}>
                  <div
                    style={{
                      fontFamily: garamond,
                      fontStyle: "italic",
                      fontSize: 34,
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: 14,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: 17,
                      letterSpacing: "0.05em",
                      marginBottom: 8,
                    }}
                  >
                    {s.title}
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
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 5 · SPECS ===== */}
          <section className="nm-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <p style={eyebrow}>04 · Product Data</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 30px",
              }}
            >
              Specifications
            </h2>
            <div style={{ ...cardBase }}>
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className="nm-prow"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 24,
                    padding: "17px 26px",
                    borderTop: i === 0 ? "none" : "1px solid rgba(36,31,25,0.07)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.06em",
                      color: "rgba(36,31,25,0.55)",
                    }}
                  >
                    {s.label}
                  </span>
                  <span
                    style={{
                      fontFamily: s.monoVal ? mono : "inherit",
                      fontSize: s.monoVal ? 13.5 : 15,
                      fontWeight: s.monoVal ? 400 : 500,
                      textAlign: "right",
                    }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 6 · QUALITY ===== */}
          <section className="nm-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <p style={eyebrow}>05 · Made in Korea</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 10px",
              }}
            >
              Documented quality, lot by lot
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(36,31,25,0.65)",
                maxWidth: 640,
                fontWeight: 300,
                margin: "0 0 34px",
              }}
            >
              Certificates of analysis, origin and GMP compliance travel with the
              product — documentation Solvia provides to partners for registration
              and import in each market.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 18,
              }}
            >
              {quality.map((q) => (
                <div key={q.title} style={{ ...cardBase, padding: "28px 26px 24px" }}>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: 17,
                      letterSpacing: "0.04em",
                      marginBottom: 10,
                    }}
                  >
                    {q.title}
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
                    {q.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 7 · ENQUIRE ===== */}
          <section
            id="enquire"
            className="nm-reveal"
            style={{
              marginTop: "clamp(64px,10vh,120px)",
              background: "#1c1712",
              color: "#f4ecdd",
              borderRadius: 22,
              padding: "clamp(40px,6vw,72px)",
              textAlign: "center",
            }}
          >
            <p style={{ ...eyebrow, color: "#c9a35c" }}>Partnership</p>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "16px 0 12px",
              }}
            >
              Bring N MODE F to your market
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(244,236,221,0.66)",
                maxWidth: 560,
                margin: "0 auto 32px",
                fontWeight: 300,
              }}
            >
              Distribution, private studio programs and pairing protocols with
              CoreSlim — our partnership team responds within two business days.
            </p>
            <a
              href="mailto:partners@solviamedical.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--accent)",
                color: "#1c1408",
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
            © Solvia Medical — N MODE F · V Fat Care Cream
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
