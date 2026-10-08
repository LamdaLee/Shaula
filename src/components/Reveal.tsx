"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "li" | "p" | "span" | "figure";
  delayMs?: number;
  /** Scale + fade (Apple-like headline) vs rise */
  tone?: "rise" | "scale" | "blur";
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delayMs = 0,
  tone = "rise",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add(styles.in);
      return;
    }

    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.in);
          io.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    // Content is visible by default, including without JS. Animate only after
    // an observer is available, and avoid hiding sections taller than a screen.
    if (el.getBoundingClientRect().top > window.innerHeight && el.offsetHeight < window.innerHeight) {
      el.classList.add(styles.pending);
    }
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = {
    ["--reveal-delay" as string]: `${delayMs}ms`,
  } as CSSProperties;

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={[styles.reveal, styles[tone], className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </Tag>
  );
}
