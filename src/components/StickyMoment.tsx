"use client";

import { useEffect, useRef } from "react";
import styles from "./StickyMoment.module.css";

type StickyMomentProps = {
  line: string;
  support?: string;
};

/** Pinned viewport moment — headline eases as the section scrolls through. */
export function StickyMoment({ line, support }: StickyMomentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    if (!section || !panel) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      panel.style.setProperty("--m", "1");
      return;
    }

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const total = Math.max(section.offsetHeight - vh, 1);
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const t = scrolled / total;
        // Peak mid-scroll (0 → 1 → 0-ish fade out)
        const peak = t < 0.55 ? t / 0.55 : 1 - (t - 0.55) / 0.45;
        const m = Math.max(0.15, Math.min(1, peak));
        panel.style.setProperty("--m", String(m));
        panel.style.setProperty("--s", String(0.94 + m * 0.06));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} aria-label="핵심 한 줄">
      <div className={styles.sticky} ref={panelRef}>
        <p className={styles.line}>{line}</p>
        {support ? <p className={styles.support}>{support}</p> : null}
      </div>
    </section>
  );
}
