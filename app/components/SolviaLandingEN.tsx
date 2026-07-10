"use client";

import { useEffect } from "react";
import { markup } from "./solviaLandingMarkup";

export default function SolviaLandingEN() {
  useEffect(() => {
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

    // --- hero bloom fx (cursor light, petal lens, core glow, scroll bloom)
    const heroSec = document.querySelector(".hero-sec") as HTMLElement | null;
    const heroLens = document.querySelector("[data-lens]") as HTMLElement | null;
    const heroCore = document.querySelector("[data-core]") as HTMLElement | null;
    const heroLight = document.querySelector("[data-light]") as HTMLElement | null;
    const heroContent = document.querySelector(
      ".hero-content",
    ) as HTMLElement | null;
    const heroCue = document.querySelector(".hero-cue") as HTMLElement | null;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // filled ivory arrowhead cursor (no outline); hotspot at the tip.
    const arrowFor = (hex: string) =>
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M2 2 L2 20 L7 15.2 L10.6 22.6 L13.6 21.1 L10 13.8 L17 13.8 Z' fill='%23" +
      hex.replace("#", "") +
      "'/%3E%3C/svg%3E\") 2 2, auto";
    if (heroSec) {
      const cur = arrowFor("#f4ecdd");
      heroSec.style.cursor = cur;
      heroSec.querySelectorAll<HTMLElement>("a, button").forEach((el) => {
        el.style.cursor = cur;
      });
    }

    // cursor-tracking light + localized petal-lift lens (skip on reduced motion)
    if (heroSec && heroLight && heroLens && !reduceMotion) {
      let lx = 50,
        ly = 50,
        tlx = 50,
        tly = 50;
      let lightRaf = 0;
      const onHeroMove = (e: Event) => {
        const ev = e as MouseEvent;
        const r = heroSec.getBoundingClientRect();
        tlx = ((ev.clientX - r.left) / r.width) * 100;
        tly = ((ev.clientY - r.top) / r.height) * 100;
        heroLight.style.opacity = "1";
        heroLens.style.opacity = "1";
      };
      const onHeroLeave = () => {
        heroLight.style.opacity = "0";
        heroLens.style.opacity = "0";
      };
      on(heroSec, "mousemove", onHeroMove);
      on(heroSec, "mouseleave", onHeroLeave);
      const lightTick = () => {
        lx += (tlx - lx) * 0.14;
        ly += (tly - ly) * 0.14;
        const x = lx.toFixed(1),
          yv = ly.toFixed(1);
        heroLight.style.background =
          "radial-gradient(circle 11vw at " +
          x +
          "% " +
          yv +
          "%, rgba(255,240,205,0.40), transparent 46%)";
        const m =
          "radial-gradient(circle 20vmin at " +
          x +
          "% " +
          yv +
          "%, #000 0%, #000 26%, transparent 66%)";
        heroLens.style.webkitMask = m;
        heroLens.style.mask = m;
        heroLens.style.transformOrigin = x + "% " + yv + "%";
        lightRaf = requestAnimationFrame(lightTick);
      };
      lightRaf = requestAnimationFrame(lightTick);
      cleanups.push(() => {
        if (lightRaf) cancelAnimationFrame(lightRaf);
      });
    }

    // scroll-direction signal for the reveal offset: rise up when scrolling
    // down, descend when scrolling up
    let lastRevY = window.scrollY || 0;
    let revDir = "1";
    document.documentElement.style.setProperty("--rev-dir", "1");

    // --- sticky header + hero parallax ----------------------------------
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      if (y !== lastRevY) {
        const nd = y > lastRevY ? "1" : "-1";
        if (nd !== revDir) {
          revDir = nd;
          document.documentElement.style.setProperty("--rev-dir", nd);
        }
        lastRevY = y;
      }
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
      // scroll progress through the hero: 0 at top, 1 after one hero-height
      let p = 0;
      if (heroSec) {
        const r = heroSec.getBoundingClientRect();
        const hh = r.height || 1;
        p = Math.min(Math.max(-r.top / hh, 0), 1);
      }

      const hero = document.getElementById("dc-hero");
      if (hero) {
        const par = parallax ? y * 0.12 : 0;
        // keep the existing zoom/parallax, add a p-based bloom zoom on top
        hero.style.transform =
          "scale(" + (heroZoom + p * 0.12) + ") translateY(" + par + "px)";
      }

      // scroll bloom: core brightens, hero copy lifts & fades, cue fades
      if (heroCore) {
        heroCore.style.opacity = (0.9 + p * 0.1).toFixed(2);
        heroCore.style.filter =
          "brightness(" +
          (1 + p * 0.5).toFixed(2) +
          ") blur(" +
          (p * 6).toFixed(1) +
          "px)";
      }
      if (heroContent) {
        heroContent.style.transform =
          "translateY(" + (-p * 60).toFixed(0) + "px)";
        heroContent.style.opacity = (1 - p * 1.15).toFixed(2);
      }
      if (heroCue) heroCue.style.opacity = (1 - p * 3).toFixed(2);
    };

    // --- mobile nav dropdown --------------------------------------------
    const closeMnav = () => {
      document.getElementById("mnav-overlay")?.classList.remove("open");
    };

    const burger = document.getElementById("nav-burger");
    if (burger)
      on(burger, "click", (e) => {
        e.stopPropagation();
        document.getElementById("mnav-overlay")?.classList.toggle("open");
      });

    document
      .querySelectorAll("#mnav-links a, #mnav-contact")
      .forEach((a) => on(a, "click", closeMnav));

    // close when tapping outside the open dropdown
    on(document, "click", (e) => {
      const o = document.getElementById("mnav-overlay");
      if (!o || !o.classList.contains("open")) return;
      const target = e.target as Node;
      if (o.contains(target) || burger?.contains(target)) return;
      closeMnav();
    });

    // --- desktop glass dock: cursor magnify + brands dropdown -----------
    const dock = document.getElementById("dc-dock");
    if (dock) {
      const dockItems = Array.from(
        dock.querySelectorAll(".dc-dock-item"),
      ) as HTMLElement[];
      const canHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      ).matches;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const DOCK_DIST = 130;
      const DOCK_MAX = 0.26;
      if (canHover && !reduce) {
        on(dock, "mousemove", (e) => {
          const ev = e as MouseEvent;
          dockItems.forEach((it) => {
            const r = it.getBoundingClientRect();
            const c = r.left + r.width / 2;
            const d = Math.abs(ev.clientX - c);
            const p = d >= DOCK_DIST ? 0 : 1 - d / DOCK_DIST;
            it.style.transform =
              "scale(" +
              (1 + DOCK_MAX * p).toFixed(3) +
              ") translateY(" +
              (-6 * p).toFixed(2) +
              "px)";
          });
        });
        on(dock, "mouseleave", () => {
          dockItems.forEach((it) => {
            it.style.transform = "";
          });
        });
      }

      const brandsBtn = document.getElementById("dc-dock-brands");
      const dockPanel = document.getElementById("dc-dock-panel");
      if (brandsBtn && dockPanel) {
        const closeDock = () => {
          dockPanel.classList.remove("open");
          brandsBtn.setAttribute("aria-expanded", "false");
        };
        on(brandsBtn, "click", (e) => {
          e.stopPropagation();
          const willOpen = !dockPanel.classList.contains("open");
          dockPanel.classList.toggle("open", willOpen);
          brandsBtn.setAttribute("aria-expanded", String(willOpen));
        });
        dockPanel
          .querySelectorAll("a")
          .forEach((a) => on(a, "click", closeDock));
        on(document, "click", (e) => {
          if (!dockPanel.classList.contains("open")) return;
          if (dock.contains(e.target as Node)) return;
          closeDock();
        });
      }
    }

    // --- contact form: POST to /api/contact -----------------------------
    const cform = document.getElementById("contact-form") as HTMLFormElement | null;
    if (cform) {
      const status = document.getElementById("cf-status");
      const btn = cform.querySelector(".cf-submit") as HTMLButtonElement | null;
      const btnLabel = 'Send inquiry <span aria-hidden="true">→</span>';
      const setStatus = (msg: string, ok: boolean) => {
        if (status) {
          status.textContent = msg;
          status.className = "cf-status " + (ok ? "ok" : "err");
        }
      };
      on(cform, "submit", async (e) => {
        e.preventDefault();
        const hp = cform.querySelector(".cf-hp") as HTMLInputElement | null;
        if (hp && hp.value) return; // honeypot: silently drop bots
        if (!cform.checkValidity()) {
          cform.reportValidity();
          return;
        }
        if (btn) {
          btn.disabled = true;
          btn.textContent = "Sending…";
        }
        const payload: Record<string, string> = {};
        new FormData(cform).forEach((v, k) => {
          payload[k] = typeof v === "string" ? v : "";
        });
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const data = (await res.json().catch(() => ({ ok: false }))) as {
            ok?: boolean;
          };
          if (res.ok && data.ok) {
            setStatus("Thank you — we'll be in touch shortly.", true);
            cform.reset();
          } else {
            setStatus(
              "Something went wrong. Please email partners@solviamedical.com.",
              false,
            );
          }
        } catch {
          setStatus(
            "Network error. Please email partners@solviamedical.com.",
            false,
          );
        } finally {
          if (btn) {
            btn.disabled = false;
            btn.innerHTML = btnLabel;
          }
        }
      });
    }

    // --- brand carousel (drifting two-row marquee) -----------------------
    const bcRoot = document.querySelector(
      "[data-bcarousel]",
    ) as HTMLElement | null;

    interface BcRow {
      mask: HTMLElement;
      track: HTMLElement;
      cards: HTMLElement[];
      origCount: number;
      x: number;
      cardW: number;
      setW: number;
      maskW: number;
      driftDir: number;
      hover: boolean;
      hoverCard: HTMLElement | null;
      dragging: boolean;
      vx: number;
      startX: number;
      startPX: number;
      lastPX: number;
      moved: number;
      suppress: boolean;
      captured: boolean;
    }

    const bcGap = 20;
    const bcDriftSpeed = 60; // px/s
    let bcRows: BcRow[] = [];
    let bcRaf = 0;
    let bcLast = 0;

    const bcMeasure = () => {
      bcRows.forEach((row) => {
        const maskW = row.mask.clientWidth || 1000;
        let visible: number;
        if (maskW > 1240) visible = 4;
        else if (maskW > 900) visible = 3.2;
        else if (maskW > 620) visible = 2.3;
        else visible = 1.5;
        const cardW = Math.round(maskW / visible - bcGap);
        row.cardW = cardW;
        row.cards.forEach((c) => {
          c.style.width = cardW + "px";
          c.style.marginRight = bcGap + "px";
        });
        row.setW = row.origCount * (cardW + bcGap);
        if (row.x === undefined) row.x = -row.setW * 0.5;
        row.maskW = maskW;
      });
    };

    const bcNorm = (row: BcRow) => {
      while (row.x <= -row.setW) row.x += row.setW;
      while (row.x > 0) row.x -= row.setW;
    };

    const bcLayoutRow = (row: BcRow) => {
      row.track.style.transform = "translateX(" + row.x + "px)";
      const half = row.maskW / 2;
      row.cards.forEach((c) => {
        const center = c.offsetLeft + row.cardW / 2 + row.x;
        let d = (center - half) / half;
        if (d < -1.7) d = -1.7;
        if (d > 1.7) d = 1.7;
        const ad = Math.abs(d);
        let scale = Math.max(0.95, 1 - ad * 0.03);
        let tz = -ad * 14;
        let op = Math.max(0.66, 1 - ad * 0.19);
        let z = 100 - Math.round(ad * 12);
        if (c === row.hoverCard && !row.dragging) {
          scale = Math.min(1.05, scale + 0.08);
          tz += 48;
          op = 1;
          z = 220;
        }
        c.style.transform = "translateZ(" + tz + "px) scale(" + scale + ")";
        c.style.opacity = String(op);
        c.style.zIndex = String(z);
      });
    };

    if (bcRoot) {
      const masks = Array.from(
        bcRoot.querySelectorAll("[data-row]"),
      ) as HTMLElement[];
      bcRows = masks.map((mask, idx) => {
        const track = mask.querySelector("[data-track]") as HTMLElement;
        const cards = Array.from(track.children) as HTMLElement[];
        const origCount = cards.length;
        // duplicate for a seamless loop
        cards.forEach((c) => track.appendChild(c.cloneNode(true)));
        const allCards = Array.from(track.children) as HTMLElement[];
        return {
          mask,
          track,
          cards: allCards,
          origCount,
          x: undefined as unknown as number,
          cardW: 300,
          setW: 1500,
          maskW: 1000,
          driftDir: idx === 0 ? -1 : 1,
          hover: false,
          hoverCard: null,
          dragging: false,
          vx: 0,
          startX: 0,
          startPX: 0,
          lastPX: 0,
          moved: 0,
          suppress: false,
          captured: false,
        };
      });

      bcMeasure();
      bcRows.forEach((r) => {
        bcNorm(r);
        bcLayoutRow(r);
      });

      bcRows.forEach((row) => {
        const t = row.track;
        on(t, "pointerenter", () => {
          row.hover = true;
        });
        on(t, "pointerleave", () => {
          row.hover = false;
          const hc = row.hoverCard;
          row.hoverCard = null;
          if (hc) {
            bcLayoutRow(row);
            window.setTimeout(() => {
              hc.style.transition = "";
            }, 420);
          }
        });
        on(t, "pointerdown", (e) => {
          const ev = e as PointerEvent;
          row.dragging = true;
          row.vx = 0;
          row.moved = 0;
          row.startX = row.x;
          row.startPX = ev.clientX;
          row.lastPX = ev.clientX;
          row.captured = false;
          t.classList.add("dragging");
          // Pointer capture is deferred until a real drag begins (see
          // pointermove). Capturing on pointerdown makes the browser retarget
          // the subsequent click to the track, which swallowed card navigation.
        });
        on(t, "pointermove", (e) => {
          const ev = e as PointerEvent;
          if (row.dragging) {
            const dx = ev.clientX - row.startPX;
            row.moved = Math.max(row.moved, Math.abs(dx));
            // once it's a genuine drag, capture the pointer so it keeps
            // tracking even if the cursor leaves the track
            if (!row.captured && row.moved > 6) {
              try {
                t.setPointerCapture(ev.pointerId);
                row.captured = true;
              } catch {}
            }
            row.x = row.startX + dx;
            row.vx = ev.clientX - row.lastPX;
            row.lastPX = ev.clientX;
            bcNorm(row);
            bcLayoutRow(row);
            return;
          }
          const card = (ev.target as HTMLElement).closest(
            ".bc-card",
          ) as HTMLElement | null;
          if (card) {
            if (row.hoverCard !== card) {
              row.hoverCard = card;
              card.style.transition =
                "transform .4s cubic-bezier(.2,.7,.2,1), opacity .4s ease";
              bcLayoutRow(row);
            }
          } else if (row.hoverCard) {
            row.hoverCard = null;
            bcLayoutRow(row);
          }
        });
        const end = (e: Event) => {
          if (!row.dragging) return;
          row.dragging = false;
          t.classList.remove("dragging");
          row.suppress = row.moved > 6;
          if (row.suppress)
            window.setTimeout(() => {
              row.suppress = false;
            }, 60);
          if (row.captured) {
            try {
              t.releasePointerCapture((e as PointerEvent).pointerId);
            } catch {}
            row.captured = false;
          }
        };
        on(t, "pointerup", end);
        on(t, "pointercancel", end);
        row.cards.forEach((c) => {
          on(c, "click", (e) => {
            if (row.suppress) {
              e.preventDefault();
              e.stopPropagation();
            }
          });
        });
      });

      bcLast = performance.now();
      const bcStep = (now: number) => {
        const dt = Math.min(0.05, (now - bcLast) / 1000);
        bcLast = now;
        bcRows.forEach((row) => {
          if (row.dragging) {
            // handled in pointermove
          } else if (Math.abs(row.vx) > 0.15) {
            row.x += row.vx;
            row.vx *= 0.93;
            bcNorm(row);
            bcLayoutRow(row);
          } else if (!row.hover && !row.hoverCard) {
            row.x += row.driftDir * bcDriftSpeed * dt;
            bcNorm(row);
            bcLayoutRow(row);
          }
        });
        bcRaf = requestAnimationFrame(bcStep);
      };
      bcRaf = requestAnimationFrame(bcStep);
      cleanups.push(() => {
        if (bcRaf) cancelAnimationFrame(bcRaf);
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
      if (bcRoot) {
        bcMeasure();
        bcRows.forEach((r) => {
          bcNorm(r);
          bcLayoutRow(r);
        });
      }
    };

    on(window, "scroll", onScroll, { passive: true });
    on(window, "resize", onResize);
    onScroll();

    // --- scroll reveal (replays each pass; direction-aware) --------------
    const reveal = (el: Element) => {
      (el as HTMLElement).classList.add("is-revealed");
    };
    const els = document.querySelectorAll("[data-reveal]");
    let io: IntersectionObserver | undefined;

    if (!motion || !("IntersectionObserver" in window)) {
      els.forEach(reveal);
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.intersectionRatio >= 0.2) {
              e.target.classList.add("is-revealed");
            } else if (!e.isIntersecting) {
              // fully out of view — reset so the entrance replays next pass
              e.target.classList.remove("is-revealed");
            }
          });
        },
        { threshold: [0, 0.2] },
      );
      els.forEach((el) => io!.observe(el));
    }

    return () => {
      cleanups.forEach((fn) => fn());
      if (io) io.disconnect();
      document.documentElement.style.removeProperty("--rev-dir");
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
