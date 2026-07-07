"use client";

import { useEffect, useRef } from "react";

const mono = "'IBM Plex Mono',monospace";
const serif = "'Nanum Myeongjo',serif";
const garamond = "'Cormorant Garamond',serif";

/** Bloom image — the design's `bloom-hero.png` is a large asset; this project
 * ships the same luminous-bloom artwork optimized as hero-bloom.webp, whose
 * glowing orb aligns with the core-glow position below. */
const BLOOM_SRC = "/assets/hero-bloom.webp";

const swatches = [
  { c: "#c8964f", title: "Gold" },
  { c: "#e4c592", title: "Champagne" },
  { c: "#b06f44", title: "Amber" },
  { c: "#d98c6a", title: "Rose" },
  { c: "#f4ecdd", title: "Ivory" },
  { c: "#8a6a34", title: "Bronze" },
];

const INITIAL_CURSOR = "#b06f44";

export default function CoreSlimBloomHero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const q = <T extends Element>(s: string) => root.querySelector<T>(s);

    const section = q<HTMLElement>("[data-bloom-section]");
    const bloom = q<HTMLElement>("[data-bloom]");
    const lens = q<HTMLElement>("[data-lens]");
    const core = q<HTMLElement>("[data-core]");
    const light = q<HTMLElement>("[data-light]");
    const content = q<HTMLElement>("[data-hero-content]");
    const cue = q<HTMLElement>("[data-cue]");
    if (!section || !bloom || !lens || !core || !light || !content) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // filled golden arrowhead cursor (no outline); hotspot at the tip. color is swappable.
    const arrowFor = (hex: string) =>
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M2 2 L2 20 L7 15.2 L10.6 22.6 L13.6 21.1 L10 13.8 L17 13.8 Z' fill='%23" +
      hex.replace("#", "") +
      "'/%3E%3C/svg%3E\") 2 2, auto";

    const setCursor = (hex: string) => {
      const c = arrowFor(hex);
      section.style.cursor = c;
      section.querySelectorAll<HTMLElement>("a, button").forEach((el) => {
        el.style.cursor = c;
      });
      section.querySelectorAll<HTMLElement>("[data-swatches] button").forEach((b) => {
        b.style.borderColor = b.getAttribute("data-c") === hex ? "#fffdf9" : "transparent";
      });
    };
    setCursor(INITIAL_CURSOR);

    const sw = q<HTMLElement>("[data-swatches]");
    const onSwatch = (e: Event) => {
      const b = (e.target as HTMLElement).closest<HTMLElement>("button[data-c]");
      if (b) setCursor(b.getAttribute("data-c") as string);
    };
    sw?.addEventListener("click", onSwatch);

    // ---- cursor light + localized petal lift (lens) ----
    let lx = 50,
      ly = 50; // current light/lens %
    let tlx = 50,
      tly = 50; // target %
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      tlx = ((e.clientX - r.left) / r.width) * 100;
      tly = ((e.clientY - r.top) / r.height) * 100;
      light.style.opacity = "1";
      lens.style.opacity = "1";
    };
    const onLeave = () => {
      light.style.opacity = "0";
      lens.style.opacity = "0";
    };

    if (!reduce) {
      section.addEventListener("mousemove", onMove);
      section.addEventListener("mouseleave", onLeave);
      const tick = () => {
        lx += (tlx - lx) * 0.14;
        ly += (tly - ly) * 0.14;
        const x = lx.toFixed(1),
          y = ly.toFixed(1);
        light.style.background = `radial-gradient(circle 11vw at ${x}% ${y}%, rgba(255,240,205,0.40), transparent 46%)`;
        const m = `radial-gradient(circle 20vmin at ${x}% ${y}%, #000 0%, #000 26%, transparent 66%)`;
        lens.style.webkitMask = m;
        lens.style.mask = m;
        lens.style.transformOrigin = `${x}% ${y}%`;
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    // ---- scroll bloom ----
    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        const r = section.getBoundingClientRect();
        const h = r.height || 1;
        // 0 at top of viewport, 1 when scrolled one hero-height
        const p = Math.min(Math.max(-r.top / h, 0), 1);
        // bloom zooms open + brightens; content lifts & fades
        bloom.style.transform = `scale(${(1 + p * 0.16).toFixed(3)})`;
        core.style.opacity = (0.9 + p * 0.1).toFixed(2);
        core.style.filter = `brightness(${(1 + p * 0.5).toFixed(2)}) blur(${(p * 6).toFixed(1)}px)`;
        content.style.transform = `translateY(${(-p * 60).toFixed(0)}px)`;
        content.style.opacity = (1 - p * 1.15).toFixed(2);
        if (cue) cue.style.opacity = (1 - p * 3).toFixed(2);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      sw?.removeEventListener("click", onSwatch);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      style={{
        fontFamily: "'Jost',sans-serif",
        background: "#1c1712",
        color: "#241f19",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <style>{`
        .csb ::selection { background: rgba(200,150,79,0.24); }
        @keyframes csbCorePulse {
          0%,100% { transform:translate(-50%,-50%) scale(1);   opacity:.9; }
          50%     { transform:translate(-50%,-50%) scale(1.06); opacity:1; }
        }
        .csb-core { animation:csbCorePulse 6.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .csb-core { animation:none; }
        }
      `}</style>

      <div className="csb">
        {/* ===== INTERACTIVE HERO ===== */}
        <section
          data-bloom-section
          style={{
            position: "relative",
            height: "100vh",
            minHeight: 560,
            overflow: "hidden",
            perspective: "1400px",
            background: "#c9c4bf",
          }}
        >
          {/* tilting 3D stage */}
          <div data-stage style={{ position: "absolute", inset: "-6%" }}>
            <img
              data-bloom
              src={BLOOM_SRC}
              alt="Luminous bloom"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                willChange: "transform",
              }}
            />
            {/* localized petal lift: a brightened, raised copy revealed only around the cursor */}
            <div
              data-lens
              style={{
                position: "absolute",
                inset: 0,
                background: `url('${BLOOM_SRC}') center/cover no-repeat`,
                transformOrigin: "50% 50%",
                transform: "scale(1.07)",
                filter:
                  "brightness(1.1) contrast(1.03) drop-shadow(0 10px 22px rgba(40,20,0,0.28))",
                WebkitMask:
                  "radial-gradient(circle 20vmin at 50% 50%, #000 0%, #000 26%, transparent 66%)",
                mask: "radial-gradient(circle 20vmin at 50% 50%, #000 0%, #000 26%, transparent 66%)",
                opacity: 0,
                transition: "opacity .45s ease",
                pointerEvents: "none",
                willChange: "mask,transform",
              }}
            />
            {/* pulsing radiant core, sits over the orb in the image */}
            <div
              data-core
              className="csb-core"
              style={{
                position: "absolute",
                left: "41%",
                top: "57%",
                width: "38vw",
                height: "38vw",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,214,140,0.55), rgba(255,196,110,0.12) 46%, transparent 68%)",
                mixBlendMode: "screen",
                pointerEvents: "none",
                willChange: "transform,opacity",
              }}
            />
            {/* cursor-tracking light */}
            <div
              data-light
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle 11vw at 50% 50%, rgba(255,240,205,0.34), transparent 46%)",
                mixBlendMode: "soft-light",
                pointerEvents: "none",
                transition: "opacity .5s ease",
                opacity: 0,
                willChange: "background",
              }}
            />
          </div>

          {/* legibility scrim */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(100deg, rgba(28,23,18,0.5) 0%, rgba(28,23,18,0.12) 34%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          {/* content (parallaxes + fades on scroll) */}
          <div
            data-hero-content
            style={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              maxWidth: 1240,
              margin: "0 auto",
              padding: "0 clamp(24px,5vw,72px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              willChange: "transform,opacity",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
              <span style={{ width: 34, height: 1, background: "#e4c592" }} />
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  letterSpacing: "0.34em",
                  textTransform: "uppercase",
                  color: "#f0dcb4",
                }}
              >
                Aesthetic · Body Contouring
              </span>
            </div>
            <h1
              style={{
                fontFamily: serif,
                fontWeight: 800,
                fontSize: "clamp(46px,8vw,104px)",
                lineHeight: 0.96,
                margin: 0,
                color: "#fffdf9",
                maxWidth: "12ch",
                textShadow: "0 2px 40px rgba(28,23,18,0.35)",
              }}
            >
              Energy, in bloom.
            </h1>
            <p
              style={{
                fontFamily: garamond,
                fontStyle: "italic",
                fontSize: "clamp(20px,2.6vw,34px)",
                color: "rgba(255,253,249,0.86)",
                margin: "18px 0 0",
                textShadow: "0 2px 24px rgba(28,23,18,0.4)",
              }}
            >
              CoreSlim — tuned to every area.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 36,
                flexWrap: "wrap",
              }}
            >
              <a
                href="/coreslim"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#c8964f",
                  color: "#241109",
                  textDecoration: "none",
                  padding: "15px 32px",
                  borderRadius: 999,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Explore CoreSlim <span style={{ fontSize: 15 }}>→</span>
              </a>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  color: "rgba(255,253,249,0.72)",
                }}
              >
                Distributed by Solvia
              </span>
            </div>
          </div>

          {/* cursor color swatches */}
          <div
            data-swatches
            style={{
              position: "absolute",
              zIndex: 3,
              right: "clamp(18px,3vw,34px)",
              bottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "9px 13px",
              borderRadius: 999,
              background: "rgba(28,23,18,0.34)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,253,249,0.18)",
            }}
          >
            <span
              style={{
                fontFamily: mono,
                fontSize: 9,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,253,249,0.7)",
                marginRight: 2,
              }}
            >
              Cursor
            </span>
            {swatches.map((s) => (
              <button
                key={s.c}
                data-c={s.c}
                title={s.title}
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: "2px solid transparent",
                  background: s.c,
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          {/* scroll cue */}
          <div
            data-cue
            style={{
              position: "absolute",
              zIndex: 2,
              left: "50%",
              bottom: 26,
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              color: "rgba(255,253,249,0.7)",
              fontFamily: mono,
              fontSize: 10,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Scroll<span style={{ fontSize: 14 }}>↓</span>
          </div>
        </section>

        {/* panel below so the scroll-bloom has room to play */}
        <section
          style={{
            background: "#efe9e2",
            color: "#241f19",
            padding: "clamp(72px,12vh,140px) clamp(24px,5vw,72px)",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8a6a34",
              }}
            >
              Movement, without the workout
            </span>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "clamp(28px,4vw,52px)",
                lineHeight: 1.12,
                margin: "18px 0 0",
              }}
            >
              A body-contouring device that works the muscle the way exercise does — without
              the effort.
            </h2>
            <a
              href="/coreslim"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginTop: 32,
                color: "#8a6a34",
                textDecoration: "none",
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(138,106,52,0.4)",
                paddingBottom: 4,
              }}
            >
              See the full page <span style={{ fontSize: 15 }}>→</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
