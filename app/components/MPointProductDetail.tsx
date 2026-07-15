"use client";

import { useEffect, useRef } from "react";

interface MPointProductDetailProps {
  /** Azure accent color — design options: #4f96d6, #6aa9df, #3f86c9 */
  accent?: string;
}

const mono = "'IBM Plex Mono',monospace";
const serif = "'Nanum Myeongjo',serif";
const garamond = "'Cormorant Garamond',serif";

const IMG_BASE = "/assets/mpoint";

const eyebrow: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "#356795",
};

const cardBase: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(23,37,51,0.09)",
  borderRadius: 18,
  overflow: "hidden",
};

// Dark navy container used behind transparent product renders. Reads as an
// intentional panel even before the WebP files are dropped into /assets/mpoint.
const shotBg =
  "radial-gradient(120% 120% at 50% 12%, #17293d 0%, #0d1a29 62%, #0a1421 100%)";

const technology = [
  {
    num: "01",
    title: "Radiofrequency for skin",
    body: "RF energy is delivered to the dermal layer. The manufacturer positions this thermal response as a way to support collagen and elastin remodeling and the appearance of firmer, smoother skin.",
  },
  {
    num: "02",
    title: "Low-frequency for muscle",
    body: "Low-frequency electrical stimulation induces facial-muscle contractions — intended to support muscle conditioning, facial firmness and areas affected by age-related volume loss.",
  },
  {
    num: "03",
    title: "Dual-Technology Crossover Mode",
    body: "Crossover Mode coordinates both energy modalities through the same electrode within a single session, addressing the skin and muscle layers without separate manual procedures.",
  },
  {
    num: "04",
    title: "Micro-vibration delivery",
    body: "Low-frequency micro-vibration applies fine mechanical stimulation to the skin surface to help support the diffusion of topically applied active ingredients.",
  },
];

const rfProcess = [
  { step: "01", title: "Energy delivery", body: "RF energy is delivered into the dermis." },
  { step: "02", title: "Tissue response", body: "A controlled thermal response occurs within the dermal tissue." },
  { step: "03", title: "Collagen & elastin", body: "The process is designed to support collagen and elastin remodeling." },
  { step: "04", title: "Normalized skin", body: "Skin is guided toward a firmer, more even appearance." },
];

const benefits = [
  {
    title: "Hands-free in 20 minutes",
    body: "Position the electrodes and let a single ~20-minute session run — no manual treatment technique required.",
  },
  {
    title: "Dual energy, one electrode",
    body: "RF for the skin and low-frequency stimulation for the muscle are delivered through one 5-channel electrode system.",
  },
  {
    title: "Full-face coverage",
    body: "Five channels position electrodes across the eyes, mouth, forehead, cheeks and jawline for broad, flexible placement.",
  },
  {
    title: "Non-invasive, no downtime",
    body: "Needle-free and incision-free. Designed for an immediate return to daily activities after treatment.",
  },
  {
    title: "Hygienic single-use electrode",
    body: "A reusable probe adaptor pairs with a single-use electrode that is discarded after each treatment.",
  },
  {
    title: "Comfortable, technique-free",
    body: "Once the electrodes are placed the session is passive, freeing the practitioner for other room tasks.",
  },
];

const components = [
  {
    name: "Main unit",
    desc: "Touchscreen-based MPOINT treatment console.",
    img: `${IMG_BASE}/MPOINT_Main_Console_Transparent.webp`,
    alt: "MPOINT main console with five probe adaptors",
  },
  {
    name: "Probe adaptors ×5",
    desc: "Five-channel connection system for electrode placement.",
    img: `${IMG_BASE}/MPOINT_Probe_Adaptor_Pair_Transparent.webp`,
    alt: "MPOINT reusable probe adaptors",
  },
  {
    name: "Single-use electrode",
    desc: "Front and back electrode components, discarded after each use.",
    img: `${IMG_BASE}/MPOINT_Single_Use_Electrode_Front.webp`,
    alt: "MPOINT single-use electrode, front",
  },
  {
    name: "Mobile cart",
    desc: "Dedicated wheeled cart for treatment-room mobility.",
    img: "",
    alt: "",
  },
];

const workflow = [
  "Position the single-use electrodes according to the approved treatment protocol and instructions for use.",
  "Select the applicable treatment settings on the MPOINT console.",
  "Run the ~20-minute hands-free session.",
  "Remove and discard the single-use electrodes after treatment.",
];

const specs = [
  { label: "Category", value: "Facial lifting / aesthetic care", monoVal: false },
  { label: "Energy modalities", value: "RF + low-frequency stimulation", monoVal: false },
  { label: "Added function", value: "Low-frequency micro-vibration", monoVal: false },
  { label: "Electrode system", value: "5-channel", monoVal: true },
  { label: "Applicator", value: "Reusable adaptor + single-use electrode", monoVal: false },
  { label: "Session", value: "~20 min · hands-free", monoVal: true },
  { label: "Treatment", value: "Non-invasive · needle-free · no downtime", monoVal: false },
  { label: "Coverage", value: "Full face", monoVal: false },
  { label: "Origin", value: "Made in Korea", monoVal: false },
];

export default function MPointProductDetail({
  accent = "#4f96d6",
}: MPointProductDetailProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll(".mp-reveal"));
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
          background: "#eef1f6",
          color: "#1b2733",
          minHeight: "100vh",
          WebkitFontSmoothing: "antialiased",
        } as React.CSSProperties
      }
    >
      <style>{`
        .mp-page ::selection { background: rgba(79,150,214,0.26); }
        @keyframes mpAurora {
          0%   { opacity:0; transform:rotate(-14deg) translateY(-26%) scaleY(.6); }
          60%  { opacity:1; }
          100% { opacity:1; transform:rotate(-14deg) translateY(0) scaleY(1); }
        }
        @keyframes mpPoolIn {
          0%,45% { opacity:0; transform:translateX(-50%) scale(.7); }
          100%   { opacity:1; transform:translateX(-50%) scale(1); }
        }
        @keyframes mpDrift {
          0%   { transform:translate(0,0); opacity:0; }
          20%  { opacity:.9; }
          100% { transform:translate(14px,-120px); opacity:0; }
        }
        @keyframes mpPulse {
          0%,100% { opacity:.55; transform:scale(1); }
          50%     { opacity:1; transform:scale(1.08); }
        }
        .mp-aurora { animation:mpAurora 2.6s cubic-bezier(.2,.7,.2,1) both; }
        .mp-pool { animation:mpPoolIn 2.9s cubic-bezier(.2,.7,.2,1) both; }
        .mp-mote { animation:mpDrift 7s linear infinite; }
        .mp-node { animation:mpPulse 3.4s ease-in-out infinite; }
        .mp-reveal { opacity:0; transform:translateY(26px); transition:opacity 1s cubic-bezier(.2,.7,.2,1), transform 1s cubic-bezier(.2,.7,.2,1); }
        .mp-reveal.in { opacity:1; transform:none; }
        .mp-prow { transition:background .3s ease; }
        .mp-prow:hover { background:rgba(79,150,214,0.09); }
        .mp-table-wrap { overflow-x:auto; }
        .mp-table { min-width:640px; }
        @media (prefers-reduced-motion: reduce) {
          .mp-reveal { opacity:1; transform:none; transition:none; }
          .mp-aurora, .mp-pool, .mp-mote, .mp-node { animation:none; opacity:1; }
        }
        @media (max-width:720px) {
          .mp-hero-grid { grid-template-columns:1fr !important; }
          .mp-aurora { opacity:.6 !important; }
          .mp-ov-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      <div className="mp-page">
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
            background: "rgba(238,241,246,0.82)",
            backdropFilter: "saturate(1.2) blur(12px)",
            WebkitBackdropFilter: "saturate(1.2) blur(12px)",
            borderBottom: "1px solid rgba(23,37,51,0.08)",
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#1b2733",
              textDecoration: "none",
              fontSize: 13,
              letterSpacing: "0.08em",
            }}
          >
            <span style={{ fontSize: 17, lineHeight: 1 }}>←</span> Back to Solvia
          </a>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontWeight: 500, fontSize: 19, letterSpacing: "0.24em" }}>
              MPOINT
            </span>
            <span
              style={{
                fontFamily: mono,
                fontSize: 10,
                letterSpacing: "0.28em",
                color: "#7d8b99",
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
            background: "#0d1a29",
            color: "#eaf2fb",
            overflow: "hidden",
            padding: "clamp(56px,9vh,110px) 0 clamp(52px,8vh,96px)",
          }}
        >
          {/* aurora beam — dark navy with blue flowing light (MPOINT identity) */}
          <div
            className="mp-aurora"
            style={{
              position: "absolute",
              top: "-160px",
              left: "56%",
              width: "clamp(280px,36vw,520px)",
              height: "150%",
              background:
                "linear-gradient(rgba(79,150,214,0) 0%, rgba(79,150,214,0.32) 44%, rgba(134,189,235,0.08) 100%)",
              transform: "rotate(-14deg)",
              filter: "blur(16px)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-20%",
              right: "-8%",
              width: 520,
              height: 520,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(79,150,214,0.22), transparent 66%)",
              filter: "blur(10px)",
              pointerEvents: "none",
            }}
          />
          {[
            { top: "46%", left: "60%", size: 4, opacity: 0.8, delay: "0s" },
            { top: "54%", left: "66%", size: 3, opacity: 0.6, delay: "2.4s" },
            { top: "40%", left: "72%", size: 3, opacity: 0.7, delay: "4.1s" },
          ].map((m, i) => (
            <div
              key={i}
              className="mp-mote"
              style={{
                position: "absolute",
                top: m.top,
                left: m.left,
                width: m.size,
                height: m.size,
                borderRadius: "50%",
                background: `rgba(134,189,235,${m.opacity})`,
                animationDelay: m.delay,
                pointerEvents: "none",
              }}
            />
          ))}

          <div
            className="mp-hero-grid"
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
                  Aesthetic · Facial Lifting
                </span>
              </div>
              <h1
                style={{
                  fontFamily: serif,
                  fontWeight: 800,
                  fontSize: "clamp(52px,9vw,104px)",
                  lineHeight: 0.94,
                  margin: 0,
                  color: "#ffffff",
                  letterSpacing: "0.01em",
                }}
              >
                MPOINT
              </h1>
              <p
                style={{
                  fontFamily: garamond,
                  fontStyle: "italic",
                  fontSize: "clamp(22px,3vw,36px)",
                  color: "rgba(234,242,251,0.72)",
                  margin: "16px 0 0",
                }}
              >
                Dual energy. One electrode.
              </p>
              <p
                style={{
                  fontSize: "clamp(15px,1.4vw,17px)",
                  lineHeight: 1.85,
                  color: "rgba(234,242,251,0.74)",
                  fontWeight: 300,
                  maxWidth: 468,
                  margin: "22px 0 0",
                }}
              >
                <b>
                  A dual-energy, hands-free facial treatment system — radiofrequency
                  for the skin, low-frequency stimulation for the facial muscles, and
                  micro-vibration for active-ingredient delivery, in a single ~20-minute
                  session.
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
                    color: "#07131f",
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
                    color: "rgba(234,242,251,0.55)",
                  }}
                >
                  Distributed by Solvia · Made in Korea
                </span>
              </div>
            </div>

            {/* product image where the aurora lands */}
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(134,189,235,0.24)",
                background: shotBg,
              }}
            >
              <img
                src={`${IMG_BASE}/MPOINT_Device_Hero_Transparent.webp`}
                alt="MPOINT facial treatment device"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "8%",
                }}
              />
              <div
                className="mp-pool"
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "-18%",
                  transform: "translateX(-50%)",
                  width: "86%",
                  height: "86%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(134,189,235,0.5), rgba(79,150,214,0.1) 54%, transparent 72%)",
                  mixBlendMode: "screen",
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
            className="mp-reveal mp-ov-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
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
                One system for
                <br />
                skin and muscle.
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px,1.4vw,17px)",
                  lineHeight: 1.9,
                  color: "#4b5663",
                  fontWeight: 300,
                  margin: "22px 0 0",
                }}
              >
                Facial appearance is shaped by both the skin and the muscle beneath it.
                MPOINT is designed to address these two layers through a coordinated
                dual-energy approach — radiofrequency for the skin and low-frequency
                stimulation for the facial muscles — with micro-vibration added to
                support the diffusion of topical active ingredients.
              </p>
              <p
                style={{
                  fontFamily: garamond,
                  fontStyle: "italic",
                  fontSize: "clamp(19px,2vw,24px)",
                  color: "#356795",
                  margin: "20px 0 0",
                }}
              >
                Dual energy. One electrode. One 20-minute session.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                aspectRatio: "5/4",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(134,189,235,0.24)",
                background: shotBg,
              }}
            >
              <img
                src={`${IMG_BASE}/MPOINT_Device_Angled_Transparent.webp`}
                alt="MPOINT device, three-quarter view"
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
          </section>

          {/* ===== 3 · TECHNOLOGY ===== */}
          <section className="mp-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <span style={eyebrow}>Technology</span>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 clamp(28px,4vh,40px)",
              }}
            >
              Four technologies, one probe.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                gap: "clamp(16px,2vw,24px)",
              }}
            >
              {technology.map((s) => (
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
                      fontSize: 19,
                      margin: "16px 0 10px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.8,
                      color: "#5f6b78",
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

          {/* ===== 4 · RF PROCESS (CSS sequence) ===== */}
          <section className="mp-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <span style={eyebrow}>RF Process</span>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 clamp(24px,3.5vh,36px)",
              }}
            >
              How radiofrequency works the skin.
            </h2>
            <div
              style={{
                position: "relative",
                background: "#0d1a29",
                borderRadius: 22,
                padding: "clamp(30px,4vw,52px) clamp(20px,3vw,44px)",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "8%",
                  right: "8%",
                  top: "clamp(70px,10vw,104px)",
                  height: 1,
                  background:
                    "linear-gradient(90deg, rgba(79,150,214,0) 0%, rgba(79,150,214,0.5) 12%, rgba(79,150,214,0.5) 88%, rgba(79,150,214,0) 100%)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
                  gap: "clamp(20px,3vw,32px)",
                }}
              >
                {rfProcess.map((r) => (
                  <div key={r.step} style={{ textAlign: "center" }}>
                    <div
                      className="mp-node"
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        margin: "0 auto",
                        background: "var(--accent)",
                        boxShadow:
                          "0 0 0 6px rgba(79,150,214,0.16), 0 0 22px rgba(79,150,214,0.6)",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: 11,
                        letterSpacing: "0.24em",
                        color: "#86bdeb",
                        margin: "18px 0 8px",
                      }}
                    >
                      {r.step}
                    </div>
                    <h3
                      style={{
                        fontFamily: serif,
                        fontWeight: 700,
                        fontSize: 17,
                        color: "#eef5fc",
                        margin: "0 0 8px",
                      }}
                    >
                      {r.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "rgba(234,242,251,0.64)",
                        fontWeight: 300,
                        margin: 0,
                      }}
                    >
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== 5 · 5-CHANNEL ELECTRODE SYSTEM ===== */}
          <section
            className="mp-reveal mp-ov-grid"
            style={{
              marginTop: "clamp(64px,10vh,120px)",
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "clamp(36px,5vw,72px)",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "5/4",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(134,189,235,0.24)",
                background: shotBg,
                order: 0,
              }}
            >
              <img
                src={`${IMG_BASE}/MPOINT_Main_Console_Transparent.webp`}
                alt="MPOINT console with five-channel probe adaptors"
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
            <div>
              <span style={eyebrow}>5-Channel System</span>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 700,
                  fontSize: "clamp(26px,3.4vw,40px)",
                  margin: "14px 0 0",
                  lineHeight: 1.12,
                }}
              >
                Five channels, full-face coverage.
              </h2>
              <p
                style={{
                  fontSize: "clamp(14px,1.3vw,16px)",
                  lineHeight: 1.85,
                  color: "#4b5663",
                  fontWeight: 300,
                  margin: "18px 0 20px",
                }}
              >
                MPOINT uses five channels to position multiple electrodes across the
                face — designed for broad coverage while allowing targeted placement
                around detailed areas.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Broad full-face coverage",
                  "Flexible electrode positioning",
                  "Targeted placement — eyes, mouth, forehead, cheeks, jawline",
                  "Hands-free once the electrodes are positioned",
                ].map((li) => (
                  <li
                    key={li}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(23,37,51,0.08)",
                      fontSize: 14.5,
                      color: "#3a4653",
                    }}
                  >
                    <span
                      style={{
                        flex: "none",
                        marginTop: 7,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "var(--accent)",
                      }}
                    />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ===== 6 · KEY BENEFITS ===== */}
          <section className="mp-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <span style={eyebrow}>Product Snapshot</span>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 clamp(28px,4vh,40px)",
              }}
            >
              Why studios choose MPOINT.
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
                      color: "#5f6b78",
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

          {/* ===== 7 · HYGIENE ===== */}
          <section
            className="mp-reveal"
            style={{
              marginTop: "clamp(64px,10vh,120px)",
              position: "relative",
              overflow: "hidden",
              background: "#0d1a29",
              borderRadius: 22,
              padding: "clamp(36px,4.6vw,60px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "clamp(28px,4vw,56px)",
              alignItems: "center",
            }}
          >
            <div>
              <span style={{ ...eyebrow, color: "var(--accent)" }}>Hygiene</span>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 700,
                  fontSize: "clamp(24px,3vw,38px)",
                  color: "#ffffff",
                  margin: "14px 0 0",
                  lineHeight: 1.14,
                }}
              >
                Reusable adaptor.
                <br />
                Single-use electrode.
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.85,
                  color: "rgba(234,242,251,0.72)",
                  fontWeight: 300,
                  margin: "18px 0 0",
                }}
              >
                MPOINT separates the reusable probe adaptor from the consumable
                electrode. Each electrode is intended for a single use and is discarded
                after treatment — supporting a hygienic workflow compared with reusable
                pad systems.
              </p>
            </div>
            <div style={{ display: "flex", gap: 18, justifyContent: "center" }}>
              {[
                { img: `${IMG_BASE}/MPOINT_Single_Use_Electrode_Front.webp`, cap: "Front" },
                { img: `${IMG_BASE}/MPOINT_Single_Use_Electrode_Back.webp`, cap: "Back" },
              ].map((e) => (
                <div key={e.cap} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "clamp(110px,15vw,150px)",
                      aspectRatio: "1/1",
                      borderRadius: 14,
                      overflow: "hidden",
                      border: "1px solid rgba(134,189,235,0.22)",
                      background:
                        "radial-gradient(circle at 50% 40%, #1a2d42, #0b1826 72%)",
                    }}
                  >
                    <img
                      src={e.img}
                      alt={`MPOINT single-use electrode, ${e.cap.toLowerCase()}`}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "14%",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      display: "block",
                      fontFamily: mono,
                      fontSize: 10.5,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(234,242,251,0.6)",
                      marginTop: 10,
                    }}
                  >
                    {e.cap}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 8 · SYSTEM COMPONENTS ===== */}
          <section className="mp-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <span style={eyebrow}>System Components</span>
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
                gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
                gap: "clamp(16px,2vw,22px)",
              }}
            >
              {components.map((c) => (
                <div
                  key={c.name}
                  style={{
                    background: "#0d1a29",
                    color: "#eaf2fb",
                    borderRadius: 18,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "4/3",
                      background: shotBg,
                    }}
                  >
                    {c.img ? (
                      <img
                        src={c.img}
                        alt={c.alt}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          padding: "9%",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            width: "46%",
                            height: "42%",
                            borderRadius: 8,
                            border: "1.5px solid rgba(134,189,235,0.4)",
                            position: "relative",
                            boxShadow: "0 10px 30px -12px rgba(0,0,0,0.6)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div style={{ padding: "20px 22px 24px" }}>
                    <h3
                      style={{
                        fontFamily: serif,
                        fontWeight: 700,
                        fontSize: 18,
                        margin: 0,
                        color: "#ffffff",
                      }}
                    >
                      {c.name}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.65,
                        color: "rgba(234,242,251,0.64)",
                        fontWeight: 300,
                        margin: "8px 0 0",
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 9 · TREATMENT WORKFLOW ===== */}
          <section className="mp-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <span style={eyebrow}>Treatment Workflow</span>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 clamp(24px,3.5vh,36px)",
              }}
            >
              Four steps, twenty minutes.
            </h2>
            <div style={{ ...cardBase }}>
              {workflow.map((w, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "clamp(16px,2.4vw,28px)",
                    alignItems: "center",
                    padding: "clamp(18px,2.4vw,26px) clamp(20px,3vw,34px)",
                    borderBottom:
                      i < workflow.length - 1 ? "1px solid rgba(23,37,51,0.08)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: garamond,
                      fontSize: "clamp(30px,3.4vw,42px)",
                      lineHeight: 1,
                      color: "var(--accent)",
                      minWidth: 44,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "clamp(14px,1.3vw,16px)", color: "#3a4653", lineHeight: 1.7 }}>
                    {w}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ===== 10 · SPECIFICATIONS ===== */}
          <section className="mp-reveal" style={{ marginTop: "clamp(64px,10vh,120px)" }}>
            <span style={eyebrow}>At a Glance</span>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(26px,3.4vw,40px)",
                margin: "14px 0 clamp(24px,3.5vh,36px)",
              }}
            >
              System at a glance.
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
                    gap: 18,
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(23,37,51,0.08)",
                  }}
                >
                  <span style={{ fontSize: 13.5, color: "#6a7683", flex: "none" }}>{s.label}</span>
                  <span
                    style={
                      s.monoVal
                        ? { fontFamily: mono, fontSize: 13, fontWeight: 500, textAlign: "right" }
                        : { fontSize: 13.5, fontWeight: 500, textAlign: "right" }
                    }
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: 12.5,
                lineHeight: 1.7,
                color: "#78838f",
                fontWeight: 300,
                margin: "16px 2px 0",
              }}
            >
              Figures describe the system concept as presented in the manufacturer’s
              brochure. Detailed electrical specifications, indications and claims may
              vary by market and should be confirmed against the approved labeling.
            </p>
          </section>

          {/* ===== 11 · DISTRIBUTOR / CTA ===== */}
          <section
            id="enquire"
            className="mp-reveal"
            style={{
              marginTop: "clamp(64px,10vh,120px)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 28,
              background: "#0a1421",
              borderRadius: 22,
              padding: "clamp(36px,4.6vw,60px)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-40%",
                left: "58%",
                width: 360,
                height: "180%",
                background:
                  "linear-gradient(180deg,rgba(79,150,214,0), rgba(79,150,214,0.16), rgba(79,150,214,0))",
                transform: "rotate(-14deg)",
                filter: "blur(18px)",
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
                  color: "#ffffff",
                  lineHeight: 1.14,
                }}
              >
                Bring MPOINT to your market.
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.85,
                  color: "rgba(234,242,251,0.72)",
                  fontWeight: 300,
                  margin: "18px 0 0",
                }}
              >
                Solvia is the overseas distribution partner for MPOINT, supplying
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
                color: "#07131f",
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
            background: "#0a1421",
            color: "rgba(234,242,251,0.72)",
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
                borderBottom: "1px solid rgba(134,189,235,0.18)",
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
                    color: "#ffffff",
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
                  Overseas distribution partner for MPOINT — supplying professional
                  aesthetic studios and importers worldwide.
                </p>
              </div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 11.5,
                  letterSpacing: "0.06em",
                  lineHeight: 2,
                  color: "rgba(234,242,251,0.6)",
                }}
              >
                <div>Manufacturer · K1MEDGLOBAL Co., Ltd. (Korea)</div>
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
                color: "rgba(234,242,251,0.5)",
                margin: "clamp(20px,3vh,28px) 0 0",
                maxWidth: 820,
              }}
            >
              MPOINT is an aesthetic care device intended for professional facial-care
              treatment in aesthetic studios. It is an export aesthetic device and is not
              a medical device; it is not intended to diagnose, treat, cure or prevent any
              medical condition. Product specifications, indications, claims, regulatory
              status and availability may vary by country and must be aligned with the
              approved labeling, instructions for use and local regulations before use.
            </p>
            <p
              style={{
                fontFamily: mono,
                fontSize: 10.5,
                letterSpacing: "0.14em",
                color: "rgba(234,242,251,0.32)",
                margin: "18px 0 0",
              }}
            >
              © SOLVIA · MPOINT BY K1MEDGLOBAL
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
