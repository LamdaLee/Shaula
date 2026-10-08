"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const menuButton = buttonRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        const controls = [buttonRef.current, ...Array.from(panelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [])].filter(Boolean) as HTMLElement[];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus());
    const onResize = () => { if (window.innerWidth >= 820) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      menuButton?.focus({ preventScroll: true });
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
            preload
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className={styles.navDesktop} aria-label="주요 메뉴">
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/try" className={styles.cta}>
            내 업무에 AI 적용해 보기
          </Link>
        </nav>

        <button
          ref={buttonRef}
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
        ref={panelRef}
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
                  aria-current={pathname === item.href ? "page" : undefined}
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
            내 업무에 AI 적용해 보기
          </Link>
        </nav>
      </div>
    </header>
  );
}
