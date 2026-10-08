import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HumanLoop } from "@/components/TechTranslation";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return <>
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`shell ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <p className="section__eyebrow">이람다 · 생각을 적고, 필요한 도구를 만듭니다</p>
          <h1 id="hero-title" className={styles.heroLead}>
            <span className={styles.heroPhrase}>내가 겪은 불편함이,</span>{" "}
            <span className={styles.heroPhrase}>만드는 이유가 됩니다.</span>
          </h1>
          <p className={styles.heroSupport}>{site.taglineSupport}</p>
          <div className={styles.heroActions}>
            <Link className="btn" href="/case">만들고 있는 것들</Link>
            <Link href="/about">조금 더 알아보기 →</Link>
          </div>
        </div>
        <figure className={styles.heroArt}>
          <div className={styles.heroFrame}>
            <Image src="/brand/hero-chaos-to-clarity.png" alt="얽힌 생각이 별을 향한 하나의 길로 이어지는 모습" fill preload sizes="(max-width: 820px) calc(100vw - 32px), 600px" className={styles.heroImage} />
          </div>
        </figure>
      </div>
    </section>
    <section className={`section ${styles.band}`} aria-labelledby="purpose-title">
      <div className="shell"><Reveal>
        <p className="section__eyebrow">만드는 일에 담고 싶은 마음</p>
        <h2 id="purpose-title" className="section__title section__title--lines">생각을 잇고,<br />잠깐 멈추는 자리.</h2>
        <p className="section__lead">정리되지 않은 생각도 남겨둘 수 있고, 결정을 잠시 미뤄도 괜찮은 자리. 기술이 삶을 재촉하기보다, 나의 속도로 생각하고 선택하는 데 도움이 되면 좋겠습니다.</p>
      </Reveal></div>
    </section>
    <section className="section" aria-label="AI와 함께 만드는 태도">
      <div className="shell"><Reveal><HumanLoop /></Reveal></div>
    </section>
    <section className={`section ${styles.eduBand}`} aria-labelledby="materials-title">
      <div className="shell"><Reveal>
        <p className="section__eyebrow">내가 이해한 것을, 쉬운 말로</p>
        <h2 id="materials-title" className="section__title section__title--lines">이해한 것을,<br />쉬운 말로 나눕니다.</h2>
        <p className="section__lead">기술의 구조를 조금 알면, 원하는 것을 설명하고 나온 결과를 판단하기가 쉬워집니다. 만들면서 알게 된 것을 익숙한 비유와 작은 실습으로 나누고 싶습니다.</p>
        <p className={styles.smallLinks}><Link href="/education">쉽게 풀어보기 →</Link></p>
      </Reveal></div>
    </section>
  </>;
}
