"use client";

import { useEffect, useRef } from "react";

const BCAPS = [
  "AETHER — Barrier-repair skincare",
  "NOVELUME — Anti-aging serum science",
  "VANTAGE — Monopolar RF system",
  "PULSE — EMS lifting device",
  "HYALA — HA dermal filler",
  "CONTOURA — Volumizing filler",
];
const ACCENT_SOFT = "#ecc3a0";

const cardBase: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: "50%",
  width: 300,
  marginLeft: -150,
  height: 440,
  borderRadius: 22,
  overflow: "hidden",
  boxSizing: "border-box",
  padding: 26,
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 34px 70px -24px rgba(0,0,0,.55)",
  transformOrigin: "50% 60%",
  willChange: "transform",
  cursor: "grab",
  opacity: 0,
};

export default function CardFanSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let bPos = 2;
    let bActive = 2;
    let sp = 190;
    let drag: { x: number; pos: number } | null = null;
    const cleanups: Array<() => void> = [];

    const on = (
      target: EventTarget,
      type: string,
      fn: EventListenerOrEventListenerObject,
      opts?: AddEventListenerOptions,
    ) => {
      target.addEventListener(type, fn, opts);
      cleanups.push(() => target.removeEventListener(type, fn, opts));
    };

    const measure = () => {
      const stage = root.querySelector<HTMLElement>("[data-bstage]");
      if (!stage) return;
      const w = stage.clientWidth || 900;
      const cardW = Math.max(160, Math.min(300, w * 0.52));
      const cardH = Math.round(cardW * 1.48);
      sp = Math.max(90, cardW * 0.58);
      stage.style.height = cardH + 44 + "px";
      root.querySelectorAll<HTMLElement>("[data-bcard]").forEach((el) => {
        el.style.width = cardW + "px";
        el.style.marginLeft = -cardW / 2 + "px";
        el.style.height = cardH + "px";
      });
    };

    const bLayout = (pos: number, animate = true) => {
      const trans = "transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease";
      root.querySelectorAll<HTMLElement>("[data-bcard]").forEach((el, i) => {
        const off = i - pos;
        const abs = Math.abs(off);
        const cl = Math.min(abs, 3);
        el.style.transition = animate ? trans : "none";
        el.style.transform = `translateX(${off * sp}px) translateY(${cl * cl * 10}px) rotateZ(${off * 6}deg) rotateY(${-off * 11}deg) scale(${Math.max(0.72, 1 - cl * 0.12)})`;
        el.style.zIndex = String(120 - Math.round(cl * 10));
        el.style.opacity = String(abs > 3.2 ? 0 : 1 - cl * 0.16);
      });
      const act = Math.max(0, Math.min(BCAPS.length - 1, Math.round(pos)));
      root.querySelectorAll<HTMLElement>("[data-bdot]").forEach((el, i) => {
        el.style.width = i === act ? "26px" : "8px";
        el.style.background = i === act ? ACCENT_SOFT : "rgba(244,236,221,0.28)";
      });
      const cap = root.querySelector("[data-bcaption]");
      if (cap) cap.textContent = BCAPS[act] ?? "";
    };

    const bGoTo = (i: number) => {
      bActive = Math.max(0, Math.min(BCAPS.length - 1, i));
      bPos = bActive;
      bLayout(bPos, true);
    };

    const stage = root.querySelector<HTMLElement>("[data-bstage]");
    measure();
    bLayout(bPos, false);

    if (stage) {
      on(stage, "pointerdown", (e) => {
        const ev = e as PointerEvent;
        drag = { x: ev.clientX, pos: bPos };
        stage.style.cursor = "grabbing";
        try { stage.setPointerCapture(ev.pointerId); } catch {}
      });
      on(stage, "pointermove", (e) => {
        if (!drag) return;
        const ev = e as PointerEvent;
        const p = Math.max(-0.45, Math.min(BCAPS.length - 0.55, drag.pos - (ev.clientX - drag.x) / sp));
        bPos = p;
        bLayout(p, false);
      });
      const onUp = () => {
        if (!drag) return;
        drag = null;
        stage.style.cursor = "grab";
        bGoTo(Math.round(bPos));
      };
      on(stage, "pointerup", onUp);
      on(stage, "pointercancel", onUp);
      on(stage, "pointerleave", onUp);
      on(stage, "keydown", (e) => {
        const ev = e as KeyboardEvent;
        if (ev.key === "ArrowLeft") { ev.preventDefault(); bGoTo(bActive - 1); }
        else if (ev.key === "ArrowRight") { ev.preventDefault(); bGoTo(bActive + 1); }
      });
    }

    root.querySelectorAll<HTMLElement>("[data-barrow]").forEach((el) => {
      on(el, "click", () => el.dataset.barrow === "next" ? bGoTo(bActive + 1) : bGoTo(bActive - 1));
      on(el, "mouseenter", () => { el.style.background = "rgba(244,236,221,0.12)"; el.style.borderColor = "rgba(244,236,221,0.55)"; });
      on(el, "mouseleave", () => { el.style.background = "transparent"; el.style.borderColor = "rgba(244,236,221,0.3)"; });
    });
    root.querySelectorAll<HTMLElement>("[data-bdot]").forEach((el, i) => {
      on(el, "click", () => bGoTo(i));
    });
    root.querySelectorAll<HTMLElement>("[data-bcard]").forEach((el, i) => {
      on(el, "click", () => { if (i !== bActive) bGoTo(i); });
    });

    on(window, "resize", () => { measure(); bLayout(bActive, false); });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section
      id="portfolio"
      style={{ background: "#f6ece4", padding: "clamp(20px,3vh,40px) clamp(24px,5vw,72px) clamp(90px,14vh,180px)" }}
    >
      <div
        data-reveal
        style={{
          opacity: 0,
          transform: "translateY(28px)",
          transition: "opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1)",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <section
          style={{
            position: "relative",
            background: "#3a2b28",
            borderRadius: "clamp(28px,3vw,44px)",
            padding: "clamp(40px,5.5vw,80px) clamp(24px,4vw,60px) clamp(44px,5.5vw,72px)",
            overflow: "hidden",
          }}
        >
          {/* glow orb */}
          <div style={{ position: "absolute", top: "38%", left: "50%", width: 680, height: 680, transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(230,182,82,0.12), transparent 66%)", pointerEvents: "none" }} />

          {/* header */}
          <div style={{ position: "relative", textAlign: "center", marginBottom: "clamp(36px,5vw,60px)" }}>
            <div style={{ fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", color: ACCENT_SOFT }}>Selected · Distribution Partners</div>
            <h2 style={{ fontFamily: "'Nanum Myeongjo',serif", fontWeight: 800, fontSize: "clamp(36px,6vw,72px)", color: "#fffdf9", lineHeight: 1.02, margin: "18px 0 0" }}>The Brands We Carry</h2>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(18px,2.2vw,26px)", color: "rgba(244,236,221,0.62)", margin: "14px 0 0" }}>Six trusted names, three disciplines.</p>
          </div>

          {/* carousel root */}
          <div ref={rootRef} style={{ position: "relative" }}>
            {/* stage */}
            <div
              data-bstage
              tabIndex={0}
              style={{
                position: "relative",
                height: 480,
                perspective: 1600,
                outline: "none",
                touchAction: "pan-y",
                WebkitUserSelect: "none",
                userSelect: "none",
                cursor: "grab",
                overflow: "hidden",
              }}
            >
              <div data-btrack style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d" }}>

                {/* AETHER */}
                <article data-bcard data-name="AETHER" style={{ ...cardBase, background: "linear-gradient(165deg,#e0ac4d,#c08a2e)", color: "#2a1c06" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: "clamp(18px,5vw,26px)", letterSpacing: "0.08em", margin: 0, lineHeight: 1 }}>AETHER</h3>
                      <div style={{ fontSize: 9, letterSpacing: "0.22em", opacity: 0.72, marginTop: 7 }}>ADVANCED COSMETICS</div>
                    </div>
                    <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: "50%", border: "1px solid rgba(42,28,6,0.45)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: 12 }}>2026</div>
                  </div>
                  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                      <span style={{ width: 13, height: 13, background: "#2a1c06", transform: "rotate(45deg)", display: "block", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(24px,7vw,38px)", letterSpacing: "0.12em" }}>AETHER</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    <span style={{ background: "#2a1c06", color: "#f6ece4", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>SKINCARE</span>
                    <span style={{ background: "#2a1c06", color: "#f6ece4", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>BARRIER REPAIR</span>
                  </div>
                </article>

                {/* NOVELUME */}
                <article data-bcard data-name="NOVELUME" style={{ ...cardBase, background: "#f3e8d4", color: "#3a2b28" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: "clamp(18px,5vw,26px)", letterSpacing: "0.08em", margin: 0, lineHeight: 1 }}>NOVELUME</h3>
                      <div style={{ fontSize: 9, letterSpacing: "0.22em", color: "#8a7c60", marginTop: 7 }}>ADVANCED COSMETICS</div>
                    </div>
                    <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: "50%", border: "1px solid rgba(33,27,19,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: 12 }}>2026</div>
                  </div>
                  <div style={{ flex: 1, margin: "18px 0", borderRadius: 12, background: "repeating-linear-gradient(135deg,#e6d8bd,#e6d8bd 10px,#ddcdae 10px,#ddcdae 20px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(22px,6vw,34px)", letterSpacing: "0.1em", color: "#9a8a6e" }}>Novelume</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    <span style={{ background: "#3a2b28", color: "#f6ece4", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>ANTI-AGING</span>
                    <span style={{ background: "#3a2b28", color: "#f6ece4", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>SERUM</span>
                  </div>
                </article>

                {/* VANTAGE */}
                <article data-bcard data-name="VANTAGE" style={{ ...cardBase, background: "#1a160f", color: "#fffdf9" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/golden-meadow.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(20,16,10,0.42),rgba(20,16,10,0.15) 42%,rgba(20,16,10,0.84))", pointerEvents: "none" }} />
                  <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <h3 style={{ fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: "clamp(18px,5vw,26px)", letterSpacing: "0.08em", margin: 0, lineHeight: 1 }}>VANTAGE</h3>
                        <div style={{ fontSize: 9, letterSpacing: "0.22em", opacity: 0.75, marginTop: 7 }}>AESTHETIC DEVICES</div>
                      </div>
                      <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: "50%", border: "1px solid rgba(255,253,249,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: 12 }}>2026</div>
                    </div>
                    <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 7 }}>
                      <span style={{ background: "rgba(255,253,249,0.16)", border: "1px solid rgba(255,253,249,0.3)", color: "#fffdf9", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>RF DEVICE</span>
                      <span style={{ background: "rgba(255,253,249,0.16)", border: "1px solid rgba(255,253,249,0.3)", color: "#fffdf9", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>CLINIC</span>
                      <span style={{ background: "rgba(255,253,249,0.16)", border: "1px solid rgba(255,253,249,0.3)", color: "#fffdf9", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>SAFETY</span>
                    </div>
                  </div>
                </article>

                {/* PULSE */}
                <article data-bcard data-name="PULSE" style={{ ...cardBase, background: "#2c3722", color: "#eef0e4" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: "clamp(18px,5vw,26px)", letterSpacing: "0.08em", margin: 0, lineHeight: 1 }}>PULSE</h3>
                      <div style={{ fontSize: 9, letterSpacing: "0.22em", opacity: 0.6, marginTop: 7 }}>AESTHETIC DEVICES</div>
                    </div>
                    <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: "50%", border: "1px solid rgba(238,240,228,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: 12 }}>2026</div>
                  </div>
                  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 11, height: 11, border: "2px solid #ecc3a0", borderRadius: "50%", display: "block", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(24px,7vw,36px)", letterSpacing: "0.1em" }}>PULSE</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    <span style={{ background: "rgba(238,240,228,0.12)", color: "#eef0e4", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>EMS</span>
                    <span style={{ background: "rgba(238,240,228,0.12)", color: "#eef0e4", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>LIFTING</span>
                  </div>
                </article>

                {/* HYALA */}
                <article data-bcard data-name="HYALA" style={{ ...cardBase, background: "linear-gradient(165deg,#cf9670,#b06f44)", color: "#2a1406" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: "clamp(18px,5vw,26px)", letterSpacing: "0.08em", margin: 0, lineHeight: 1 }}>HYALA</h3>
                      <div style={{ fontSize: 9, letterSpacing: "0.22em", opacity: 0.72, marginTop: 7 }}>DERMAL FILLERS</div>
                    </div>
                    <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: "50%", border: "1px solid rgba(42,20,6,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: 12 }}>2026</div>
                  </div>
                  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
                      <span style={{ width: 14, height: 14, background: "#2a1406", borderRadius: "50%", display: "block" }} />
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(24px,7vw,37px)", letterSpacing: "0.14em" }}>HYALA</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    <span style={{ background: "#2a1406", color: "#f6ece4", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>DERMAL FILLER</span>
                    <span style={{ background: "#2a1406", color: "#f6ece4", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>HA</span>
                  </div>
                </article>

                {/* CONTOURA */}
                <article data-bcard data-name="CONTOURA" style={{ ...cardBase, background: "#1a160f", color: "#fffdf9" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/golden-sky.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(20,16,10,0.34),rgba(20,16,10,0.1) 40%,rgba(20,16,10,0.82))", pointerEvents: "none" }} />
                  <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <h3 style={{ fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: "clamp(18px,5vw,26px)", letterSpacing: "0.08em", margin: 0, lineHeight: 1 }}>CONTOURA</h3>
                        <div style={{ fontSize: 9, letterSpacing: "0.22em", opacity: 0.75, marginTop: 7 }}>DERMAL FILLERS</div>
                      </div>
                      <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: "50%", border: "1px solid rgba(255,253,249,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Jost',sans-serif", fontWeight: 500, fontSize: 12 }}>2026</div>
                    </div>
                    <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 7 }}>
                      <span style={{ background: "rgba(255,253,249,0.16)", border: "1px solid rgba(255,253,249,0.3)", color: "#fffdf9", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>VOLUMIZER</span>
                      <span style={{ background: "rgba(255,253,249,0.16)", border: "1px solid rgba(255,253,249,0.3)", color: "#fffdf9", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>EXPORT</span>
                      <span style={{ background: "rgba(255,253,249,0.16)", border: "1px solid rgba(255,253,249,0.3)", color: "#fffdf9", fontSize: 10, letterSpacing: "0.1em", padding: "7px 12px", borderRadius: 999 }}>CE</span>
                    </div>
                  </div>
                </article>

              </div>
            </div>

            {/* controls */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(12px,3vw,22px)", marginTop: 34 }}>
              <button
                type="button"
                data-barrow="prev"
                aria-label="Previous brand"
                style={{ width: 52, height: 52, flexShrink: 0, borderRadius: "50%", border: "1px solid rgba(244,236,221,0.3)", background: "transparent", color: "#f6ece4", fontFamily: "serif", fontSize: 24, lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .25s ease, border-color .25s ease" }}
              >
                ‹
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                {BCAPS.map((_, i) => (
                  <span
                    key={i}
                    data-bdot
                    style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(244,236,221,0.28)", cursor: "pointer", transition: "width .35s cubic-bezier(.2,.7,.2,1), background .35s ease", display: "inline-block" }}
                  />
                ))}
              </div>
              <button
                type="button"
                data-barrow="next"
                aria-label="Next brand"
                style={{ width: 52, height: 52, flexShrink: 0, borderRadius: "50%", border: "1px solid rgba(244,236,221,0.3)", background: "transparent", color: "#f6ece4", fontFamily: "serif", fontSize: 24, lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .25s ease, border-color .25s ease" }}
              >
                ›
              </button>
            </div>
            <div
              data-bcaption
              style={{ textAlign: "center", marginTop: 18, minHeight: 26, fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(16px,3vw,21px)", color: "rgba(244,236,221,0.72)" }}
            />
          </div>
        </section>
      </div>
    </section>
  );
}
