"use client";

/**
 * BrandCoverflow — standalone Coverflow 3D carousel (no DC runtime needed).
 * Drop into a Next.js / React app. Plain React + refs, no external deps.
 *
 * Usage:
 *   import BrandCoverflow from "@/components/BrandCoverflow";
 *   <BrandCoverflow brands={BRANDS} />
 *
 * Each brand: { name, disc, caption, accentSoft?, render: () => JSX for card body }
 * Images: put files in /public and reference as "/golden-meadow.jpg" etc.
 */

import { useEffect, useRef } from "react";

const ACCENT_SOFT = "#e6b652";

// ---- demo data — replace image paths with your /public assets ----
export const BRANDS = [
  {
    name: "OVALLA", disc: "cosmetics",
    caption: "Ovalla — Sustainable beauty · CICA care",
    bg: "#1a160f", color: "#fffdf9",
    img: "/ovalla/fucocentella.png",
    tags: ["CICA CARE", "VEGAN"], sub: "SUSTAINABLE BEAUTY",
  },
  {
    name: "NOVELUME", disc: "cosmetics",
    caption: "NOVELUME — Anti-aging serum science",
    bg: "#f3e8d4", color: "#3a2b28",
    tags: ["ANTI-AGING", "SERUM"], sub: "ADVANCED COSMETICS",
  },
  {
    name: "VANTAGE", disc: "devices",
    caption: "VANTAGE — Monopolar RF system",
    bg: "#1a160f", color: "#fffdf9", img: "/golden-meadow.jpg",
    tags: ["RF DEVICE", "CLINIC", "SAFETY"], sub: "AESTHETIC DEVICES",
  },
  {
    name: "PULSE", disc: "devices",
    caption: "PULSE — EMS lifting device",
    bg: "#2c3722", color: "#eef0e4",
    tags: ["EMS", "LIFTING"], sub: "AESTHETIC DEVICES",
  },
  {
    name: "HYALA", disc: "fillers",
    caption: "HYALA — HA dermal filler",
    bg: "linear-gradient(165deg,#cf9670,#b06f44)", color: "#2a1406",
    tags: ["DERMAL FILLER", "HA"], sub: "DERMAL FILLERS",
  },
  {
    name: "CONTOURA", disc: "fillers",
    caption: "CONTOURA — Volumizing filler",
    bg: "#1a160f", color: "#fffdf9", img: "/golden-sky.jpg",
    tags: ["VOLUMIZER", "EXPORT", "CE"], sub: "DERMAL FILLERS",
  },
];

export default function BrandCoverflow({ brands = BRANDS, loop = true, speed = 0.3 }) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const cardEls = useRef([]);
  const state = useRef({ pos: 2, active: 2, sp: 190, drag: null, hover: null, dir: 1, raf: 0, last: 0 });

  // ---- layout math (Coverflow 3D) ----
  const layout = (pos, animate = true) => {
    const s = state.current;
    const cards = cardEls.current.filter(Boolean);
    const sp = s.sp;
    const trans = "transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease";
    cards.forEach((c, i) => {
      const off = i - pos;
      const abs = Math.abs(off);
      const cl = Math.min(abs, 3);
      const x = off * sp * 1.8;
      let rotY = -off * 38;
      let z = -cl * 80;
      let scale = Math.max(0.78, 1 - cl * 0.05);
      let y = 0, rotZ = 0;
      let opacity = abs > 3.4 ? 0 : 1 - cl * 0.12;
      let zIndex = 120 - Math.round(cl * 10);

      const hovered = s.hover === c;
      if (hovered) { y -= 20; z += 70; scale += 0.06; rotY *= 0.45; rotZ *= 0.45; zIndex = 220; }

      c.style.transition = animate ? trans + ", box-shadow .45s ease, filter .45s ease" : "none";
      c.style.transform =
        `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateZ(${rotZ}deg) rotateY(${rotY}deg) scale(${scale})`;
      c.style.zIndex = String(zIndex);
      c.style.opacity = hovered ? 1 : opacity;
      c.style.boxShadow = hovered
        ? "0 38px 80px -24px rgba(0,0,0,0.55)"
        : "0 18px 50px -28px rgba(0,0,0,0.45)";
      c.style.filter = hovered ? "brightness(1.05)" : "none";
    });

    // dots + caption
    const len = cards.length;
    const act = Math.max(0, Math.min(len - 1, Math.round(pos)));
    rootRef.current?.querySelectorAll("[data-dot]").forEach((d, i) => {
      const on = i === act;
      d.style.width = on ? "26px" : "8px";
      d.style.background = on ? ACCENT_SOFT : "rgba(244,236,221,0.28)";
    });
    const cap = rootRef.current?.querySelector("[data-caption]");
    if (cap) cap.textContent = brands[act]?.caption || "";
  };

  const measure = () => {
    const s = state.current;
    const stage = stageRef.current;
    if (!stage) return;
    const w = stage.clientWidth || 900;
    const cardW = Math.max(210, Math.min(310, w * 0.5));
    const cardH = Math.round(cardW * 1.46);
    s.sp = cardW * 0.6;
    stage.style.height = cardH + 36 + "px";
    cardEls.current.forEach((c) => {
      if (!c) return;
      c.style.width = cardW + "px";
      c.style.marginLeft = -cardW / 2 + "px";
      c.style.height = cardH + "px";
    });
  };

  const goTo = (i) => {
    const s = state.current;
    const max = brands.length - 1;
    s.active = Math.max(0, Math.min(max, i));
    s.pos = s.active;
    layout(s.pos, true);
  };

  // ---- mount: interactions + autoloop ----
  useEffect(() => {
    const s = state.current;
    const stage = stageRef.current;
    measure();
    layout(s.pos, false);

    const cardAt = (px, py) => {
      let best = null, bestZ = -Infinity;
      cardEls.current.forEach((c) => {
        if (!c || (parseFloat(c.style.opacity) || 0) < 0.06) return;
        const r = c.getBoundingClientRect();
        if (px >= r.left && px <= r.right && py >= r.top && py <= r.bottom) {
          const z = parseInt(c.style.zIndex, 10) || 0;
          if (z >= bestZ) { bestZ = z; best = c; }
        }
      });
      return best;
    };

    const onDown = (e) => {
      stopAuto();
      const card = cardAt(e.clientX, e.clientY);
      s.drag = { x: e.clientX, y: e.clientY, pos: s.pos, moved: false, card };
      stage.style.cursor = "grabbing";
      try { stage.setPointerCapture(e.pointerId); } catch {}
    };
    const onMove = (e) => {
      if (s.drag) {
        const dx = e.clientX - s.drag.x;
        if (Math.abs(dx) > 5) s.drag.moved = true;
        let p = s.drag.pos - dx / s.sp;
        p = Math.max(-0.45, Math.min(brands.length - 1 + 0.45, p));
        s.pos = p;
        layout(p, false);
        return;
      }
      const c = cardAt(e.clientX, e.clientY);
      if (c !== s.hover) { s.hover = c; layout(s.pos, true); }
    };
    const onUp = () => {
      if (!s.drag) return;
      const d = s.drag; s.drag = null;
      stage.style.cursor = "grab";
      if (!d.moved && d.card) {
        const idx = cardEls.current.indexOf(d.card);
        if (idx > -1 && idx !== s.active) { goTo(idx); return; }
      }
      s.active = Math.round(s.pos);
      if (!loop) goTo(s.active);
    };
    const onLeave = () => { if (s.hover) { s.hover = null; layout(s.pos, true); } startAuto(); };
    const onKey = (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(s.active - 1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); goTo(s.active + 1); }
    };

    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", onUp);
    stage.addEventListener("pointerleave", onLeave);
    stage.addEventListener("pointerenter", stopAuto);
    stage.addEventListener("keydown", onKey);

    function startAuto() {
      if (!loop || s.raf) return;
      s.last = performance.now();
      const tick = (t) => {
        const dt = Math.min(0.05, (t - s.last) / 1000); s.last = t;
        const n = brands.length;
        if (!s.drag && n > 1) {
          let p = s.pos + s.dir * speed * dt;
          if (p >= n - 1) { p = n - 1; s.dir = -1; }
          else if (p <= 0) { p = 0; s.dir = 1; }
          s.pos = p; s.active = Math.round(p); layout(p, false);
        }
        s.raf = requestAnimationFrame(tick);
      };
      s.raf = requestAnimationFrame(tick);
    }
    function stopAuto() { if (s.raf) { cancelAnimationFrame(s.raf); s.raf = 0; } }

    const onResize = () => { measure(); layout(s.active, false); };
    window.addEventListener("resize", onResize);
    startAuto();

    return () => {
      stopAuto();
      window.removeEventListener("resize", onResize);
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onUp);
      stage.removeEventListener("pointerleave", onLeave);
      stage.removeEventListener("pointerenter", stopAuto);
      stage.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brands, loop, speed]);

  return (
    <div ref={rootRef} style={{ position: "relative" }}>
      <div
        ref={stageRef}
        tabIndex={0}
        style={{
          position: "relative", height: 480, perspective: "1100px",
          outline: "none", touchAction: "pan-y", userSelect: "none",
        }}
      >
        <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d" }}>
          {brands.map((b, i) => (
            <article
              key={b.name}
              ref={(el) => (cardEls.current[i] = el)}
              style={{
                position: "absolute", top: 0, left: "50%", width: 300, marginLeft: -150,
                height: 440, borderRadius: 22, overflow: "hidden", boxSizing: "border-box",
                padding: 26, display: "flex", flexDirection: "column",
                transformOrigin: "50% 60%", willChange: "transform", cursor: "pointer",
                background: b.bg, color: b.color,
              }}
            >
              {b.img && (
                <>
                  <img src={b.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(20,16,10,0.4),rgba(20,16,10,0.1) 40%,rgba(20,16,10,0.84))", pointerEvents: "none" }} />
                </>
              )}
              <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: 26, letterSpacing: "0.08em", margin: 0, lineHeight: 1 }}>{b.name}</h3>
                    <div style={{ fontSize: 9, letterSpacing: "0.22em", opacity: 0.78, marginTop: 7 }}>{b.sub}</div>
                  </div>
                  <div style={{ width: 46, height: 46, flex: "none", borderRadius: "50%", border: "1px solid currentColor", opacity: 0.6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>2026</div>
                </div>
                <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {b.tags.map((t) => (
                    <span key={t} style={{ background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 22, marginTop: 34 }}>
        <button type="button" onClick={() => goTo(state.current.active - 1)} aria-label="Previous"
          style={{ width: 52, height: 52, borderRadius: "50%", border: "1px solid rgba(244,236,221,0.3)", background: "transparent", color: "#f6ece4", fontSize: 24, cursor: "pointer" }}>‹</button>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          {brands.map((b, i) => (
            <span key={b.name} data-dot onClick={() => goTo(i)}
              style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(244,236,221,0.28)", cursor: "pointer", transition: "width .35s, background .35s", display: "inline-block" }} />
          ))}
        </div>
        <button type="button" onClick={() => goTo(state.current.active + 1)} aria-label="Next"
          style={{ width: 52, height: 52, borderRadius: "50%", border: "1px solid rgba(244,236,221,0.3)", background: "transparent", color: "#f6ece4", fontSize: 24, cursor: "pointer" }}>›</button>
      </div>
      <div data-caption style={{ textAlign: "center", marginTop: 18, minHeight: 26, fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 21, color: "rgba(244,236,221,0.72)" }} />
    </div>
  );
}
