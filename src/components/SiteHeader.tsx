import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name} 홈`}>
          <Image
            src="/brand/logo-shaula.png"
            alt=""
            width={168}
            height={56}
            className={styles.logo}
            priority
            unoptimized
          />
          <span className="sr-only">{site.name}</span>
        </Link>
        <nav className={styles.nav} aria-label="주요 메뉴">
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
