"use client";

import { useEffect } from "react";
import { headerMarkup, sectionsBefore, sectionsAfter } from "./solviaLandingMarkup";
import CardFanSection from "./CardFanSection";

export default function SolviaLandingEN() {
  useEffect(() => {
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

    // --- mobile nav (hamburger) -----------------------------------------
    const burger = document.getElementById("dc-burger");
    const headerEl = document.getElementById("dc-header");
    if (burger && headerEl) {
      on(burger, "click", () => headerEl.classList.toggle("menu-open"));
      headerEl
        .querySelectorAll("#dc-nav a")
        .forEach((a) =>
          on(a, "click", () => headerEl.classList.remove("menu-open")),
        );
    }

    // --- resize ----------------------------------------------------------
    const onResize = () => {
      (["01", "02", "03"] as const).forEach((k) => {
        const p = document.getElementById("dc-panel-" + k);
        if (p && open[k]) p.style.maxHeight = p.scrollHeight + "px";
      });
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

  return (
    <div
      id="top"
      style={{
        "--accent": "#e0a877",
        "--accent-soft": "#ecc3a0",
        "--hero-dark": "0.06",
        background: "#f6ece4",
        color: "#221d16",
        fontFamily: "'Jost','Noto Sans KR',sans-serif",
        WebkitFontSmoothing: "antialiased",
        overflowX: "hidden",
      } as React.CSSProperties}
    >
      <div dangerouslySetInnerHTML={{ __html: headerMarkup }} />
      <main>
        <div dangerouslySetInnerHTML={{ __html: sectionsBefore }} />
        <CardFanSection />
        <div dangerouslySetInnerHTML={{ __html: sectionsAfter }} />
      </main>
    </div>
  );
}
