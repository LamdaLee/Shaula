"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroMotif.module.css";

/** Soft parallax + breath on constellation / paper plane — decorative only. */
export function HeroMotif() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const shift = Math.min(y * 0.18, 72);
        const drift = Math.min(y * 0.08, 36);
        root.style.setProperty("--parallax-y", `${shift}px`);
        root.style.setProperty("--parallax-x", `${drift}px`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.root} ref={rootRef} aria-hidden="true">
      <div className={styles.wash} />
      <svg className={styles.constellation} viewBox="0 0 480 360" fill="none">
        <path
          className={styles.line}
          d="M48 220 C110 80, 190 70, 250 150 S380 280, 440 160"
        />
        <path
          className={styles.lineSoft}
          d="M70 280 C150 200, 220 240, 300 180 S400 120, 450 200"
        />
        <circle className={`${styles.star} ${styles.s1}`} cx="88" cy="188" r="4.5" />
        <circle className={`${styles.star} ${styles.s2}`} cx="196" cy="112" r="3.5" />
        <circle className={`${styles.star} ${styles.s3}`} cx="286" cy="168" r="5" />
        <circle className={`${styles.star} ${styles.s4}`} cx="372" cy="230" r="3.2" />
        <circle className={`${styles.star} ${styles.s5}`} cx="430" cy="150" r="4" />
      </svg>
      <div className={styles.memo}>
        <span className={styles.tape} />
        <p className={styles.memoText}>쉽게 말하기</p>
        <p className={styles.memoSub}>어려운 것을 →</p>
      </div>
    </div>
  );
}
