import { site } from "@/lib/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <p className={styles.brand}>{site.footer}</p>
        <p className={styles.meta}>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span aria-hidden="true"> · </span>
          <span>{site.domain}</span>
        </p>
      </div>
    </footer>
  );
}
