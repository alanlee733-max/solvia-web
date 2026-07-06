"use client";

import { useEffect, useRef } from "react";

interface CoreSlimProductDetailProps {
  /** Champagne accent color — design options: #c8964f, #e4c592, #b06f44 */
  accent?: string;
  /** Show the optional XL pad card in the Configuration section */
  showXLPad?: boolean;
}

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

const programs = [
  { area: "Abdomen", freq: "300 Hz", session: "30 min", course: "10 sessions · 2–3× / week" },
  { area: "Love handles", freq: "250 Hz", session: "20 min", course: "10 sessions · 2–3× / week" },
  { area: "Back", freq: "350 Hz", session: "30 min", course: "8 sessions · 2× / week" },
  { area: "Arms", freq: "700 Hz", session: "20 min", course: "8 sessions · 2× / week" },
  { area: "Thighs", freq: "400 Hz", session: "20 min", course: "8 sessions · 2× / week" },
  { area: "Calves", freq: "600 Hz", session: "20 min", course: "8 sessions · 2× / week" },
];

const specs = [
  { label: "Modality", value: "Mid-low frequency", monoVal: false },
  { label: "Frequency", value: "1–1,000 Hz", monoVal: true },
  { label: "Dimensions (W×D×H)", value: "415 × 350 × 200 mm", monoVal: true },
  { label: "Weight", value: "14 kg", monoVal: true },
  { label: "Power", value: "220 V / 60 Hz", monoVal: true },
  { label: "Pads", value: "12 + optional XL", monoVal: false },
];

const steps = [
  {
    num: "01",
    title: "Contract",
    body: "A precise mid-low frequency signal prompts the muscle to contract beneath the pad.",
  },
  {
    num: "02",
    title: "Repeat",
    body: "Contraction and release cycle across the area, drawing on the body’s own energy.",
  },
  {
    num: "03",
    title: "Contour",
    body: "Repeated sessions build tone alongside slimming care for firmer, defined lines.",
  },
];

const benefits = [
  {
    title: "No yo-yo rebound",
    body: "Building tone alongside slimming care helps results hold, rather than snapping back.",
  },
  {
    title: "Fully customizable",
    body: "Frequency and intensity tune to each area and each client, from a saved preset or by hand.",
  },
  {
    title: "Several areas at once",
    body: "Up to 12 pads work abdomen, waist, arms, thighs and calves in a single session.",
  },
  {
    title: "Non-invasive, no downtime",
    body: "A comfortable, hands-off session — clients return to their day straight after.",
  },
];

export default function CoreSlimProductDetail({
  accent = "#c8964f",
  showXLPad = true,
}: CoreSlimProductDetailProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll(".cs-reveal"));
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
    // failsafe: reveal anything still hidden after load
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
        .cs-page ::selection { background: rgba(200,150,79,0.24); }
        @keyframes csBeamIn {
          0%   { opacity:0; transform:rotate(19deg) translateY(-32%) scaleY(.55); }
          60%  { opacity:1; }
          100% { opacity:1; transform:rotate(19deg) translateY(0) scaleY(1); }
        }
        @keyframes csPoolIn {
          0%,45% { opacity:0; transform:translateX(-50%) scale(.7); }
          100%   { opacity:1; transform:translateX(-50%) scale(1); }
        }
        @keyframes csDust {
          0%   { transform:translate(0,0); opacity:0; }
          20%  { opacity:.9; }
          100% { transform:translate(-16px,-120px); opacity:0; }
        }
        .cs-beam { animation:csBeamIn 2.6s cubic-bezier(.2,.7,.2,1) both; }
        .cs-pool { animation:csPoolIn 2.9s cubic-bezier(.2,.7,.2,1) both; }
        .cs-mote { animation:csDust 7s linear infinite; }
        .cs-reveal { opacity:0; transform:translateY(26px); transition:opacity 1s cubic-bezier(.2,.7,.2,1), transform 1s cubic-bezier(.2,.7,.2,1); }
        .cs-reveal.in { opacity:1; transform:none; }
        .cs-prow { transition:background .3s ease; }
        .cs-prow:hover { background:rgba(200,150,79,0.09); }
        .cs-table-wrap { overflow-x:auto; }
        .cs-table { min-width:640px; }
        @media (prefers-reduced-motion: reduce) {
          .cs-reveal { opacity:1; transform:none; transition:none; }
          .cs-beam, .cs-pool, .cs-mote { animation:none; opacity:1; }
        }
        @media (max-width:720px) {
          .cs-hero-grid { grid-template-columns:1fr !important; }
          .cs-beam { opacity:.6 !important; }
          .cs-ov-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      <div className="cs-page">
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
              CORESLIM
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

        {/* ===== 1 · HERO (signature beam) ===== */}
        <section
          style={{
            position: "relative",
            background: "#1c1712",
            color: "#f4ecdd",
            overflow: "hidden",
            padding: "clamp(56px,9vh,110px) 0 clamp(52px,8vh,96px)",
          }}
        >
          <div
            className="cs-beam"
            style={{
              position: "absolute",
              top: "-178px",
              left: "62%",
              width: "clamp(260px,32vw,440px)",
              height: "150%",
              background:
                "linear-gradient(rgba(228,197,146,0) 0%, rgba(228,197,146,0.3) 42%, rgba(228,197,146,0.06) 100%)",
              transform: "rotate(19deg)",
              filter: "blur(14px)",
              pointerEvents: "none",
            }}
          />
          {[
            { top: "44%", left: "66%", size: 4, opacity: 0.8, delay: "0s" },
            { top: "52%", left: "72%", size: 3, opacity: 0.6, delay: "2.4s" },
            { top: "38%", left: "78%", size: 3, opacity: 0.7, delay: "4.1s" },
          ].map((m, i) => (
            <div
              key={i}
              className="cs-mote"
              style={{
                position: "absolute",
                top: m.top,
                left: m.left,
                width: m.size,
                height: m.size,
                borderRadius: "50%",
                background: `rgba(228,197,146,${m.opacity})`,
                animationDelay: m.delay,
                pointerEvents: "none",
              }}
            />
          ))}

          <div
            className="cs-hero-grid"
            style={{
              position: "relative",
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 clamp(24px,5vw,72px)",
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: "clamp(28px,4vw,56px)",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}
              >
                <span style={{ width: 32, height: 1, background: "var(--accent)" }} />
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 12,
                    letterSpacing: "0.34em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                  }}
                >
                  Aesthetic · Body Contouring
                </span>
              </div>
              <h1
                style={{
                  fontFamily: serif,
                  fontWeight: 800,
                  fontSize: "clamp(52px,9vw,104px)",
                  lineHeight: 0.94,
                  margin: 0,
                  color: "#fffdf9",
                }}
              >
                CoreSlim
              </h1>
              <p
                style={{
                  fontFamily: garamond,
                  fontStyle: "italic",
                  fontSize: "clamp(22px,3vw,36px)",
                  color: "rgba(244,236,221,0.66)",
                  margin: "16px 0 0",
                }}
              >
                Tuned to every area.
              </p>
              <p
                style={{
                  fontSize: "clamp(15px,1.4vw,17px)",
                  lineHeight: 1.85,
                  color: "rgba(244,236,221,0.72)",
                  fontWeight: 300,
                  maxWidth: 440,
                  margin: "22px 0 0",
                }}
              >
                <b>
                  A mid-low frequency body-contouring device for professional aesthetic
                  studios — customizable, non-invasive, no downtime.
                </b>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginTop: 34,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="/#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "var(--accent)",
                    color: "#241109",
                    textDecoration: "none",
                    padding: "15px 30px",
                    borderRadius: 999,
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Enquire with Solvia <span style={{ fontSize: 15 }}>→</span>
                </a>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    color: "rgba(244,236,221,0.55)",
                  }}
                >
                  Distributed by Solvia · Made in Korea
                </span>
              </div>
            </div>

            {/* product image where the beam lands */}
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(228,197,146,0.22)",
                background: "#ffffff",
              }}
            >
              <img
                src="/assets/coreslim/hero.png"
                alt="CoreSlim main unit"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "6%",
                }}
              />
              <div
                className="cs-pool"
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "-18%",
                  transform: "translateX(-50%)",
                  width: "86%",
                  height: "86%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,242,208,0.7), rgba(228,197,146,0.1) 54%, transparent 72%)",
                  mixBlendMode: "soft-light",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </section>

        <main
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "clamp(56px,9vh,104px) clamp(24px,5vw,72px) 0",
          }}
        >
          {/* ===== 2 · OVERVIEW ===== */}
          <section
            className="cs-reveal cs-ov-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.85fr 1.15fr",
              gap: "clamp(36px,5vw,72px)",
              alignItems: "center",
            }}
          >
            <div>
              <span style={eyebrow}>Overview</span>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 700,
                  fontSize: "clamp(28px,3.6vw,46px)",
                  lineHeight: 1.1,
                  margin: "16px 0 0",
                }}
              >
                Movement,
                <br />
                without the workout.
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px,1.4vw,17px)",
                  lineHeight: 1.9,
                  color: "#4c463d",
                  fontWeight: 300,
                  margin: "22px 0 0",
                }}
              >
                CoreSlim works the muscle through controlled contraction and release,
                energizing a targeted area the way exercise does — without effort, and
                without downtime for the client.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid rgba(36,31,25,0.08)",
              }}
            >
              <img
                src="/assets/coreslim/in-use.png"
                alt="CoreSlim pads in use on a client"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
          </section>

          {/* ===== 3 · HOW IT WORKS ===== */}
          <section className="cs-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: "clamp(28px,4vh,44px)",
              }}
            >
              <div>
                <span style={eyebrow}>How It Works</span>
                <h2
                  style={{
                    fontFamily: serif,
                    fontWeight: 700,
                    fontSize: "clamp(26px,3.4vw,40px)",
                    margin: "14px 0 0",
                  }}
                >
                  Contract · Repeat · Contour
                </h2>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                gap: "clamp(16px,2vw,24px)",
              }}
            >
              {steps.map((s) => (
                <div key={s.num} style={{ ...cardBase, padding: "clamp(26px,3vw,34px)" }}>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      color: "var(--accent)",
                    }}
                  >
                    {s.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: serif,
                      fontWeight: 700,
                      fontSize: 20,
                      margin: "16px 0 10px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: "#6a6256",
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

          {/* ===== 4 · KEY BENEFITS ===== */}
          <section className="cs-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <span style={eyebrow}>Key Benefits</span>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 clamp(28px,4vh,40px)",
              }}
            >
              Built for repeatable results.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: "clamp(16px,2vw,22px)",
              }}
            >
              {benefits.map((b) => (
                <div
                  key={b.title}
                  style={{ ...cardBase, borderRadius: 16, padding: "clamp(24px,2.6vw,30px)" }}
                >
                  <h3
                    style={{
                      fontFamily: serif,
                      fontWeight: 700,
                      fontSize: 17,
                      margin: "0 0 10px",
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.75,
                      color: "#6a6256",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 5 · PROGRAMS BY AREA ===== */}
          <section className="cs-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <span style={eyebrow}>Programs by Area</span>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 clamp(24px,3.5vh,36px)",
              }}
            >
              Frequency, tuned per area.
            </h2>
            <div className="cs-table-wrap" style={{ ...cardBase }}>
              <div className="cs-table">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr 1fr 1.8fr",
                    padding: "16px clamp(20px,2.6vw,32px)",
                    background: "#241f19",
                    color: "#f4ecdd",
                    fontFamily: mono,
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  <span>Area</span>
                  <span>Frequency</span>
                  <span>Session</span>
                  <span>Suggested course</span>
                </div>
                {programs.map((p, i) => (
                  <div
                    key={p.area}
                    className="cs-prow"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.4fr 1fr 1fr 1.8fr",
                      alignItems: "center",
                      padding: "16px clamp(20px,2.6vw,32px)",
                      borderBottom:
                        i < programs.length - 1 ? "1px solid rgba(36,31,25,0.07)" : "none",
                    }}
                  >
                    <span style={{ fontWeight: 500 }}>{p.area}</span>
                    <span style={{ fontFamily: mono, fontSize: 13, color: "#8a6a34" }}>
                      {p.freq}
                    </span>
                    <span style={{ color: "#6a6256" }}>{p.session}</span>
                    <span style={{ color: "#6a6256", fontSize: 13.5 }}>{p.course}</span>
                  </div>
                ))}
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: "#7a7266",
                fontWeight: 300,
                margin: "16px 2px 0",
              }}
            >
              Lower frequencies (250–400 Hz) suit areas with a thicker fat layer; higher
              frequencies (500–700 Hz) suit finer areas. Vary the frequency every few
              sessions for the best response.
            </p>
          </section>

          {/* ===== 6 · CONFIGURATION ===== */}
          <section className="cs-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <span style={eyebrow}>Configuration</span>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 clamp(28px,4vh,40px)",
              }}
            >
              What’s in the set.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: "clamp(16px,2vw,22px)",
              }}
            >
              <div
                style={{
                  background: "#3a2b28",
                  color: "#f4ecdd",
                  borderRadius: 18,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    background: "linear-gradient(160deg,#f5f0e7,#e6dbc8)",
                  }}
                >
                  <img
                    src="/assets/coreslim/main-unit.png"
                    alt="CoreSlim main unit"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: "7%",
                    }}
                  />
                </div>
                <div style={{ padding: "22px 24px 26px" }}>
                  <h3 style={{ fontFamily: serif, fontWeight: 700, fontSize: 19, margin: 0 }}>
                    Main unit
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.7,
                      color: "rgba(244,236,221,0.66)",
                      fontWeight: 300,
                      margin: "8px 0 0",
                    }}
                  >
                    Control console with saved presets and manual tuning.
                  </p>
                </div>
              </div>
              <div style={cardBase}>
                <div style={{ position: "relative", aspectRatio: "4/3", background: "#f5f0e7" }}>
                  <img
                    src="/assets/coreslim/mini-pads.png"
                    alt="CoreSlim mini pads"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "22px 24px 26px" }}>
                  <h3 style={{ fontFamily: serif, fontWeight: 700, fontSize: 19, margin: 0 }}>
                    Mini pads ×12
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.7,
                      color: "#6a6256",
                      fontWeight: 300,
                      margin: "8px 0 0",
                    }}
                  >
                    Twelve pads to run multiple areas in one session.
                  </p>
                </div>
              </div>
              {showXLPad && (
                <div style={cardBase}>
                  {/* placeholder stripes until the XL pad photo arrives */}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "4/3",
                      background:
                        "repeating-linear-gradient(135deg,#e7ddcf,#e7ddcf 14px,#e0d5c4 14px,#e0d5c4 28px)",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-end",
                      padding: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: mono,
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        color: "var(--accent)",
                        border: "1px solid currentColor",
                        padding: "5px 10px",
                        borderRadius: 999,
                      }}
                    >
                      OPTIONAL
                    </span>
                  </div>
                  <div style={{ padding: "22px 24px 26px" }}>
                    <h3 style={{ fontFamily: serif, fontWeight: 700, fontSize: 19, margin: 0 }}>
                      XL pad
                    </h3>
                    <p
                      style={{
                        fontSize: 13.5,
                        lineHeight: 1.7,
                        color: "#6a6256",
                        fontWeight: 300,
                        margin: "8px 0 0",
                      }}
                    >
                      A larger pad for broad areas — added on request.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* ===== 7 · SPECIFICATIONS ===== */}
          <section className="cs-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <span style={eyebrow}>Specifications</span>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 clamp(24px,3.5vh,36px)",
              }}
            >
              Specifications.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: "0 clamp(36px,5vw,64px)",
                ...cardBase,
                padding: "clamp(12px,2vw,26px) clamp(24px,3vw,40px)",
              }}
            >
              {specs.map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(36,31,25,0.08)",
                  }}
                >
                  <span style={{ fontSize: 13.5, color: "#7a7266" }}>{s.label}</span>
                  <span
                    style={
                      s.monoVal
                        ? { fontFamily: mono, fontSize: 13.5, fontWeight: 500 }
                        : { fontSize: 14, fontWeight: 500 }
                    }
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 8 · DISTRIBUTOR / CTA ===== */}
          <section
            id="enquire"
            className="cs-reveal"
            style={{
              marginTop: "clamp(64px,10vh,120px)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 28,
              background: "#241f19",
              borderRadius: 22,
              padding: "clamp(36px,4.6vw,60px)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-40%",
                left: "60%",
                width: 340,
                height: "180%",
                background:
                  "linear-gradient(180deg,rgba(228,197,146,0), rgba(228,197,146,0.14), rgba(228,197,146,0))",
                transform: "rotate(19deg)",
                filter: "blur(16px)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", maxWidth: 560 }}>
              <span style={{ ...eyebrow, color: "var(--accent)" }}>Distributor</span>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 700,
                  fontSize: "clamp(28px,3.4vw,44px)",
                  margin: "14px 0 0",
                  color: "#fffdf9",
                  lineHeight: 1.14,
                }}
              >
                Bring CoreSlim to your market.
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.85,
                  color: "rgba(244,236,221,0.7)",
                  fontWeight: 300,
                  margin: "18px 0 0",
                }}
              >
                Solvia is the overseas distribution partner for CoreSlim, supplying
                professional aesthetic studios and importers worldwide. Talk to us about
                pricing, volume and territory.
              </p>
            </div>
            <a
              href="/#contact"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--accent)",
                color: "#241109",
                textDecoration: "none",
                padding: "16px 34px",
                borderRadius: 999,
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              Enquire with Solvia <span style={{ fontSize: 15 }}>→</span>
            </a>
          </section>
        </main>

        {/* ===== FOOTER ===== */}
        <footer
          style={{
            marginTop: "clamp(64px,10vh,120px)",
            background: "#1c1712",
            color: "rgba(244,236,221,0.72)",
          }}
        >
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "clamp(44px,6vh,72px) clamp(24px,5vw,72px)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 28,
                paddingBottom: "clamp(28px,4vh,40px)",
                borderBottom: "1px solid rgba(228,197,146,0.18)",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: garamond,
                    fontWeight: 600,
                    fontSize: 24,
                    letterSpacing: "0.3em",
                    paddingLeft: "0.3em",
                    color: "#fffdf9",
                  }}
                >
                  SOLVIA
                </div>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.7,
                    fontWeight: 300,
                    margin: "12px 0 0",
                    maxWidth: 360,
                  }}
                >
                  Overseas distribution partner for CoreSlim — supplying professional
                  aesthetic studios and importers worldwide.
                </p>
              </div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 11.5,
                  letterSpacing: "0.06em",
                  lineHeight: 2,
                  color: "rgba(244,236,221,0.6)",
                }}
              >
                <div>Manufacturer · K1MEDGLOBAL Inc. (Korea)</div>
                <div>Distributor · Solvia</div>
                <div style={{ marginTop: 8 }}>
                  <a href="/#contact" style={{ color: "var(--accent)", textDecoration: "none" }}>
                    Enquire →
                  </a>
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.75,
                fontWeight: 300,
                color: "rgba(244,236,221,0.5)",
                margin: "clamp(20px,3vh,28px) 0 0",
                maxWidth: 760,
              }}
            >
              CoreSlim is an aesthetic care device intended for professional
              body-contouring and slimming care in aesthetic studios. It is not a medical
              device and is not intended to diagnose, treat, or cure any medical
              condition.
            </p>
            <p
              style={{
                fontFamily: mono,
                fontSize: 10.5,
                letterSpacing: "0.14em",
                color: "rgba(244,236,221,0.32)",
                margin: "18px 0 0",
              }}
            >
              © SOLVIA · CORESLIM BY K1MEDGLOBAL
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
