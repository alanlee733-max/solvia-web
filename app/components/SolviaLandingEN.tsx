"use client";

import { useEffect } from "react";
import { markup } from "./solviaLandingMarkup";

export default function SolviaLandingEN() {
  useEffect(() => {
    const accentSoft = "#e6b652";
    const heroZoom = 1.08;
    const parallax = true;
    const motion = true;
    const WA_NUMBER = "821029323001";

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

    // --- mobile nav overlay ---------------------------------------------
    const openMnav = () => {
      const o = document.getElementById("mnav-overlay");
      if (o) {
        o.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    };
    const closeMnav = () => {
      const o = document.getElementById("mnav-overlay");
      if (o) {
        o.classList.remove("open");
        document.body.style.overflow = "";
      }
    };

    const burger = document.getElementById("nav-burger");
    if (burger) on(burger, "click", openMnav);

    const mnavClose = document.getElementById("mnav-close");
    if (mnavClose) on(mnavClose, "click", closeMnav);

    document
      .querySelectorAll("#mnav-links a, #mnav-contact")
      .forEach((a) => on(a, "click", closeMnav));

    // --- brand coverflow carousel ---------------------------------------
    const root = document.querySelector(
      "[data-bcarousel]",
    ) as HTMLElement | null;
    const bcaps: Record<string, string> = {
      OVALLA: "ōvalla — Sustainable beauty · CICA care · tap to view lineup",
      NOVELUME: "NOVELUME — Anti-aging serum science",
      VANTAGE: "VANTAGE — Monopolar RF system",
      PULSE: "PULSE — EMS lifting device",
      HYALA: "HYALA — HA dermal filler",
      CONTOURA: "CONTOURA — Volumizing filler",
    };
    const chipColors: Record<string, string> = {
      all: "#e6b652",
      cosmetics: "#c08a2e",
      devices: "#6b7a4e",
      fillers: "#b06f44",
    };
    let bPos = 2;
    let bActive = 2;
    let sp = 190;
    let drag: { x: number; pos: number } | null = null;
    let currentFilter = "all";
    let activeCards: HTMLElement[] = [];

    const getAllCards = (): HTMLElement[] => {
      if (!root) return [];
      return Array.from(root.querySelectorAll("[data-bcard]")) as HTMLElement[];
    };

    const computeActive = (): HTMLElement[] => {
      const all = getAllCards();
      if (currentFilter === "all") return all;
      return all.filter(
        (c) => c.getAttribute("data-disc") === currentFilter,
      );
    };

    const measure = () => {
      if (!root) return;
      const stage = root.querySelector("[data-bstage]") as HTMLElement | null;
      if (!stage) return;
      const w = stage.clientWidth || 900;
      const cardW = Math.max(210, Math.min(310, w * 0.5));
      const cardH = Math.round(cardW * 1.46);
      sp = cardW * 0.6;
      stage.style.height = cardH + 36 + "px";
      getAllCards().forEach((el) => {
        el.style.width = cardW + "px";
        el.style.marginLeft = -cardW / 2 + "px";
        el.style.height = cardH + "px";
      });
    };

    const bLayout = (pos: number, animate = true) => {
      if (!root) return;
      const active = activeCards.length ? activeCards : getAllCards();
      const activeSet = new Set(active);
      const trans =
        "transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease";

      getAllCards().forEach((el) => {
        if (!activeSet.has(el)) {
          el.style.transition = animate ? trans : "none";
          el.style.transform = "translateX(2000px) scale(0.5)";
          el.style.opacity = "0";
          el.style.zIndex = "0";
        }
      });

      active.forEach((el, i) => {
        const off = i - pos;
        const abs = Math.abs(off);
        const cl = Math.min(abs, 3);
        const x = off * sp;
        const dip = cl * cl * 10;
        const rotZ = off * 6;
        const rotY = -off * 11;
        const scale = Math.max(0.72, 1 - cl * 0.12);
        el.style.transition = animate ? trans : "none";
        el.style.transform = `translateX(${x}px) translateY(${dip}px) rotateZ(${rotZ}deg) rotateY(${rotY}deg) scale(${scale})`;
        el.style.zIndex = String(120 - Math.round(cl * 10));
        el.style.opacity = String(abs > 3.2 ? 0 : 1 - cl * 0.16);
      });

      const act = Math.max(0, Math.min(active.length - 1, Math.round(pos)));
      root.querySelectorAll("[data-bdot]").forEach((d, i) => {
        const el = d as HTMLElement;
        el.style.display = i < active.length ? "inline-block" : "none";
        el.style.width = i === act ? "26px" : "8px";
        el.style.background =
          i === act ? accentSoft : "rgba(244,236,221,0.28)";
      });

      const cap = root.querySelector("[data-bcaption]");
      if (cap) {
        const name = active[act]?.getAttribute("data-name") || "";
        cap.textContent = bcaps[name] || "";
      }
    };

    const bGoTo = (i: number) => {
      const max = activeCards.length - 1;
      bActive = Math.max(0, Math.min(max, i));
      bPos = bActive;
      bLayout(bPos, true);
    };
    const bNext = () => bGoTo(bActive + 1);
    const bPrev = () => bGoTo(bActive - 1);

    const applyFilter = (key: string) => {
      if (key === currentFilter) return;
      currentFilter = key;
      activeCards = computeActive();
      bActive = Math.floor((activeCards.length - 1) / 2);
      bPos = bActive;

      if (root) {
        const scope = root.closest("section") || document;
        scope.querySelectorAll("[data-bchip]").forEach((b) => {
          const el = b as HTMLElement;
          const chipKey = el.getAttribute("data-bchip")!;
          const isActive = chipKey === key;
          const col = chipColors[chipKey] || "#e6b652";
          el.style.background = isActive ? col : "transparent";
          el.style.borderColor = isActive ? col : "rgba(244,236,221,0.3)";
          el.style.color = isActive ? "#1c1408" : "rgba(244,236,221,0.82)";
          el.style.fontWeight = isActive ? "600" : "400";
        });
      }

      bLayout(bPos, true);
    };

    if (root) {
      const stage = root.querySelector("[data-bstage]") as HTMLElement | null;
      activeCards = computeActive();
      measure();
      bLayout(bPos, false);

      // Discipline filter chips
      const scope = root.closest("section") || document;
      scope.querySelectorAll("[data-bchip]").forEach((b) => {
        on(b as HTMLElement, "click", () => {
          applyFilter((b as HTMLElement).getAttribute("data-bchip") || "all");
        });
      });

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
          p = Math.max(-0.45, Math.min(activeCards.length - 1 + 0.45, p));
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
      root.querySelectorAll("[data-bcard]").forEach((c) => {
        on(c as HTMLElement, "click", (e) => {
          if ((e.target as HTMLElement).closest("[data-bovalla-cta]")) return;
          const idx = activeCards.indexOf(c as HTMLElement);
          if (idx !== -1 && idx !== bActive) bGoTo(idx);
        });
      });
    }

    // --- WhatsApp FAB ---------------------------------------------------
    const waFab = document.getElementById("wa-fab");
    if (waFab) {
      on(waFab, "click", () => {
        window.open(
          "https://wa.me/" +
            WA_NUMBER +
            "?text=" +
            encodeURIComponent(
              "Hello, I am interested in partnering with Solvia Medical.",
            ),
          "_blank",
        );
      });
    }

    // --- resize ----------------------------------------------------------
    const onResize = () => {
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
