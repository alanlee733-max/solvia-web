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
    let hoveredCard: HTMLElement | null = null;
    let rafId = 0;
    let autoDir = 1;
    let lastT = 0;

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
        "transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease, box-shadow .45s ease";

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
        const x = off * sp * 1.8;
        const z = -cl * 80;
        const rotY = -off * 38;
        const scale = Math.max(0.78, 1 - cl * 0.05);
        const isHov = el === hoveredCard;
        el.style.transition = animate ? trans : "none";
        el.style.transform = isHov
          ? `translateX(${x}px) translateY(-20px) translateZ(${z + 70}px) rotateY(${rotY * 0.45}deg) scale(${scale + 0.06})`
          : `translateX(${x}px) translateY(0px) translateZ(${z}px) rotateY(${rotY}deg) scale(${scale})`;
        el.style.zIndex = String(isHov ? 220 : 120 - Math.round(cl * 10));
        el.style.opacity = String(isHov ? 1 : abs > 3.4 ? 0 : 1 - cl * 0.12);
        el.style.boxShadow = isHov
          ? "0 38px 80px -24px rgba(0,0,0,0.55)"
          : "0 18px 50px -28px rgba(0,0,0,0.45)";
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

    const startAuto = () => {
      if (rafId) return;
      lastT = performance.now();
      const tick = (t: number) => {
        const dt = Math.min(0.05, (t - lastT) / 1000);
        lastT = t;
        if (!drag) {
          const n = activeCards.length;
          if (n > 1) {
            let p = bPos + autoDir * 0.3 * dt;
            if (p >= n - 1) { p = n - 1; autoDir = -1; }
            else if (p <= 0) { p = 0; autoDir = 1; }
            bPos = p; bActive = Math.round(p);
            bLayout(p, false);
          }
        }
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };
    const stopAuto = () => { if (rafId) { cancelAnimationFrame(rafId); rafId = 0; } };
    cleanups.push(stopAuto);

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
      stopAuto();
      currentFilter = key;
      activeCards = computeActive();
      autoDir = 1;
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
      startAuto();
    };

    if (root) {
      const stage = root.querySelector("[data-bstage]") as HTMLElement | null;
      activeCards = computeActive();
      measure();
      bLayout(bPos, false);
      // Start cards stacked at center for entrance animation (fan out on section reveal)
      getAllCards().forEach((el) => {
        el.style.transition = "none";
        el.style.transform = "translateX(0) translateY(20px) scale(0.84)";
        el.style.opacity = "0";
      });

      // Discipline filter chips
      const scope = root.closest("section") || document;
      scope.querySelectorAll("[data-bchip]").forEach((b) => {
        on(b as HTMLElement, "click", () => {
          applyFilter((b as HTMLElement).getAttribute("data-bchip") || "all");
        });
      });

      if (stage) {
        on(stage, "pointerdown", (e) => {
          stopAuto();
          const ev = e as PointerEvent;
          drag = { x: ev.clientX, pos: bPos };
          stage.style.cursor = "grabbing";
          try {
            stage.setPointerCapture(ev.pointerId);
          } catch {}
        });
        on(stage, "pointermove", (e) => {
          const ev = e as PointerEvent;
          if (drag) {
            const dx = ev.clientX - drag.x;
            let p = drag.pos - dx / sp;
            p = Math.max(-0.45, Math.min(activeCards.length - 1 + 0.45, p));
            bPos = p;
            bLayout(p, false);
            return;
          }
          // Hover card detection
          const active = activeCards.length ? activeCards : getAllCards();
          let newHov: HTMLElement | null = null;
          for (const c of active) {
            if ((parseFloat(c.style.opacity) || 0) < 0.06) continue;
            const r = c.getBoundingClientRect();
            if (ev.clientX >= r.left && ev.clientX <= r.right && ev.clientY >= r.top && ev.clientY <= r.bottom) {
              const z = parseInt(c.style.zIndex, 10) || 0;
              if (!newHov || z > (parseInt(newHov.style.zIndex, 10) || 0)) newHov = c;
            }
          }
          if (newHov !== hoveredCard) { hoveredCard = newHov; bLayout(bPos, true); }
        });
        const onUp = () => {
          if (!drag) return;
          drag = null;
          stage.style.cursor = "grab";
          bGoTo(Math.round(bPos));
          startAuto();
        };
        on(stage, "pointerup", onUp);
        on(stage, "pointercancel", onUp);
        on(stage, "pointerleave", () => {
          onUp();
          if (hoveredCard) { hoveredCard = null; bLayout(bPos, true); }
          startAuto();
        });
        on(stage, "pointerenter", stopAuto);
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
    let fanTimer: ReturnType<typeof setTimeout> | undefined;
    const fanEntrance = () => {
      if (!root) return;
      window.setTimeout(() => {
        bLayout(bActive, true);
        window.setTimeout(startAuto, 700);
      }, 550);
    };
    cleanups.push(() => { if (fanTimer) clearTimeout(fanTimer); });

    if (!motion || !("IntersectionObserver" in window)) {
      els.forEach(reveal);
      fanEntrance();
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target);
              io!.unobserve(e.target);
              if (root && (e.target as HTMLElement).closest?.("#products")) {
                fanEntrance();
              }
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
        fanEntrance();
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
