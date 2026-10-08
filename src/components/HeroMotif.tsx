"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./HeroMotif.module.css";

/** Full-bleed chaos→clarity illustration with soft scroll parallax. */
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
        const shift = Math.min(y * 0.14, 64);
        const drift = Math.min(y * 0.06, 28);
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
      <div className={styles.art}>
        <Image
          src="/brand/hero-chaos-to-clarity.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.image}
          unoptimized
        />
      </div>
      <div className={styles.veil} />
    </div>
  );
}
