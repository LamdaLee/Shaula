"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { nav, site } from "@/lib/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <Link
          href="/"
          className={styles.brand}
          aria-label={`${site.name} 홈`}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo-shaula.png"
            alt=""
            width={148}
            height={48}
            className={styles.logo}
            priority
            unoptimized
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className={styles.navDesktop} aria-label="주요 메뉴">
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/try" className={styles.cta}>
            AI 직접 써보기
          </Link>
        </nav>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuIcon} data-open={open || undefined} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id={panelId}
        className={styles.mobilePanel}
        data-open={open || undefined}
        hidden={!open}
      >
        <nav className={styles.navMobile} aria-label="모바일 메뉴">
          <ul className={styles.mobileList}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/try"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            AI 직접 써보기
          </Link>
        </nav>
      </div>
    </header>
  );
}
