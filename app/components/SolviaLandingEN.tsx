"use client";

import { useEffect } from "react";
import { markup } from "./solviaLandingMarkup";

// Faithful port of the "Solvia Landing EN" design (claude.ai/design project
// Solvia-web2). The markup is injected verbatim; this effect reproduces the
// behaviour from the original DCLogic component: a colour-shifting sticky
// header, hero parallax, scroll-reveal, the three discipline accordions, and
// the fan/coverflow brand carousel (drag, arrows, dots, keyboard).
export default function SolviaLandingEN() {
  useEffect(() => {
    const accentSoft = "#ecc3a0"; // Blush accent (design default)
    const heroZoom = 1.08;
    const parallax = true;
    const motion = true;

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

    // --- sticky header + hero parallax ----------------------------------
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      const h = document.getElementById("dc-header");
      if (h) {
        const en = y > 48;
        h.style.background = en ? "rgba(245,238,225,0.9)" : "transparent";
        h.style.backdropFilter = en ? "saturate(1.2) blur(12px)" : "none";
        h.style.setProperty(
          "-webkit-backdrop-filter",
          en ? "saturate(1.2) blur(12px)" : "none",
        );
        h.style.borderBottomColor = en ? "rgba(34,29,22,0.08)" : "transparent";
        h.style.color = en ? "#221d16" : "#fffdf9";
        h.style.paddingTop = en ? "16px" : "22px";
        h.style.paddingBottom = en ? "16px" : "22px";
      }
      const hero = document.getElementById("dc-hero");
      if (hero) {
        const par = parallax ? y * 0.12 : 0;
        hero.style.transform =
          "scale(" + heroZoom + ") translateY(" + par + "px)";
      }
    };

    // --- brand coverflow carousel ---------------------------------------
    const root = document.querySelector("[data-bcarousel]") as HTMLElement | null;
    const bcaps = [
      "AETHER — Barrier-repair skincare",
      "NOVELUME — Anti-aging serum science",
      "VANTAGE — Monopolar RF system",
      "PULSE — EMS lifting device",
      "HYALA — HA dermal filler",
      "CONTOURA — Volumizing filler",
    ];
    let bPos = 2;
    let bActive = 2;
    let sp = 190;
    let drag: { x: number; pos: number } | null = null;

    const measure = () => {
      if (!root) return;
      const stage = root.querySelector("[data-bstage]") as HTMLElement | null;
      if (!stage) return;
      const w = stage.clientWidth || 900;
      const cardW = Math.max(210, Math.min(310, w * 0.5));
      const cardH = Math.round(cardW * 1.46);
      sp = cardW * 0.6;
      stage.style.height = cardH + 36 + "px";
      root.querySelectorAll("[data-bcard]").forEach((c) => {
        const el = c as HTMLElement;
        el.style.width = cardW + "px";
        el.style.marginLeft = -cardW / 2 + "px";
        el.style.height = cardH + "px";
      });
    };

    const bLayout = (pos: number, animate = true) => {
      if (!root) return;
      const cards = root.querySelectorAll("[data-bcard]");
      const trans =
        "transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease";
      cards.forEach((c, i) => {
        const el = c as HTMLElement;
        const off = i - pos;
        const abs = Math.abs(off);
        const cl = Math.min(abs, 3);
        const x = off * sp;
        const dip = cl * cl * 10;
        const rotZ = off * 6;
        const rotY = -off * 11;
        const scale = Math.max(0.72, 1 - cl * 0.12);
        el.style.transition = animate ? trans : "none";
        el.style.transform =
          "translateX(" +
          x +
          "px) translateY(" +
          dip +
          "px) rotateZ(" +
          rotZ +
          "deg) rotateY(" +
          rotY +
          "deg) scale(" +
          scale +
          ")";
        el.style.zIndex = String(120 - Math.round(cl * 10));
        el.style.opacity = String(abs > 3.2 ? 0 : 1 - cl * 0.16);
      });
      const act = Math.max(0, Math.min(cards.length - 1, Math.round(pos)));
      root.querySelectorAll("[data-bdot]").forEach((d, i) => {
        const el = d as HTMLElement;
        const onDot = i === act;
        el.style.width = onDot ? "26px" : "8px";
        el.style.background = onDot ? accentSoft : "rgba(244,236,221,0.28)";
      });
      const cap = root.querySelector("[data-bcaption]");
      if (cap) cap.textContent = bcaps[act] || "";
    };

    const bGoTo = (i: number) => {
      const max = bcaps.length - 1;
      bActive = Math.max(0, Math.min(max, i));
      bPos = bActive;
      bLayout(bPos, true);
    };
    const bNext = () => bGoTo(bActive + 1);
    const bPrev = () => bGoTo(bActive - 1);

    if (root) {
      const stage = root.querySelector("[data-bstage]") as HTMLElement | null;
      measure();
      bLayout(bPos, false);

      if (stage) {
        on(stage, "pointerdown", (e) => {
          const ev = e as PointerEvent;
          drag = { x: ev.clientX, pos: bPos };
          stage.style.cursor = "grabbing";
          try {
            stage.setPointerCapture(ev.pointerId);
          } catch {}
        });
        on(stage, "pointermove", (e) => {
          if (!drag) return;
          const ev = e as PointerEvent;
          const dx = ev.clientX - drag.x;
          let p = drag.pos - dx / sp;
          p = Math.max(-0.45, Math.min(bcaps.length - 1 + 0.45, p));
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
          if (ev.key === "ArrowLeft") {
            ev.preventDefault();
            bPrev();
          } else if (ev.key === "ArrowRight") {
            ev.preventDefault();
            bNext();
          }
        });
      }

      root.querySelectorAll("[data-barrow]").forEach((b) => {
        const el = b as HTMLElement;
        on(el, "click", () =>
          el.getAttribute("data-barrow") === "next" ? bNext() : bPrev(),
        );
        on(el, "mouseenter", () => {
          el.style.background = "rgba(244,236,221,0.12)";
          el.style.borderColor = "rgba(244,236,221,0.55)";
        });
        on(el, "mouseleave", () => {
          el.style.background = "transparent";
          el.style.borderColor = "rgba(244,236,221,0.3)";
        });
      });
      root.querySelectorAll("[data-bdot]").forEach((d, i) => {
        on(d as HTMLElement, "click", () => bGoTo(i));
      });
      root.querySelectorAll("[data-bcard]").forEach((c, i) => {
        on(c as HTMLElement, "click", () => {
          if (i !== bActive) bGoTo(i);
        });
      });
    }

    // --- discipline accordions ------------------------------------------
    const open: Record<string, boolean> = { "01": false, "02": false, "03": false };
    const toggle = (key: string) => {
      const panel = document.getElementById("dc-panel-" + key);
      const arrow = document.getElementById("dc-arrow-" + key);
      const label = document.getElementById("dc-label-" + key);
      if (!panel) return;
      const isOpen = !open[key];
      open[key] = isOpen;
      if (isOpen) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.opacity = "1";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        requestAnimationFrame(() => {
          panel.style.maxHeight = "0px";
          panel.style.opacity = "0";
        });
      }
      if (arrow)
        arrow.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
      if (label) label.textContent = isOpen ? "Close" : "Explore Products";
    };
    document.querySelectorAll("[data-toggle]").forEach((b) => {
      const el = b as HTMLElement;
      const key = el.getAttribute("data-toggle") || "";
      on(el, "click", () => toggle(key));
    });

    // --- resize ----------------------------------------------------------
    const onResize = () => {
      (["01", "02", "03"] as const).forEach((k) => {
        const p = document.getElementById("dc-panel-" + k);
        if (p && open[k]) p.style.maxHeight = p.scrollHeight + "px";
      });
      if (root) {
        measure();
        bLayout(bActive, false);
      }
    };

    on(window, "scroll", onScroll, { passive: true });
    on(window, "resize", onResize);
    onScroll();

    // --- scroll reveal ---------------------------------------------------
    const reveal = (el: Element) => {
      const h = el as HTMLElement;
      h.style.opacity = "1";
      h.style.transform = "none";
    };
    const els = document.querySelectorAll("[data-reveal]");
    let io: IntersectionObserver | undefined;
    let revealFallback: number | undefined;
    if (!motion || !("IntersectionObserver" in window)) {
      els.forEach(reveal);
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target);
              io!.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
      );
      els.forEach((el) => io!.observe(el));
      // Safety net: never leave content permanently hidden if IO fails to fire.
      revealFallback = window.setTimeout(() => {
        document.querySelectorAll("[data-reveal]").forEach((el) => {
          if (getComputedStyle(el).opacity !== "1") reveal(el);
        });
      }, 1600);
    }

    return () => {
      cleanups.forEach((fn) => fn());
      if (io) io.disconnect();
      if (revealFallback) clearTimeout(revealFallback);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
