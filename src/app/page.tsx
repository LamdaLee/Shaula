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
          <p className="section__eyebrow">이람다 · 교육 운영 · AI와 웹앱 만들기</p>
          <h1 id="hero-title" className={styles.heroLead}>
            <span className={styles.heroPhrase}>어려운 기술을 쉽게 풀고,</span>{" "}
            <span className={styles.heroPhrase}>필요한 도구를 직접 만듭니다.</span>
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
    <section className={`section ${styles.band}`} aria-labelledby="work-title">
      <div className="shell"><Reveal>
        <p className="section__eyebrow">직접 만들고, 설명하고, 확인합니다</p>
        <h2 id="work-title" className="section__title">지금 하고 있는 일</h2>
        <dl className={styles.workList}>
          <div><dt>만들기</dt><dd>Pause &amp; Ponder와 별이음을 직접 만들고 개선합니다.</dd></div>
          <div><dt>설명하기</dt><dd>케이크 만들기처럼 익숙한 경험으로 프로그래밍을 풀어봅니다.</dd></div>
          <div><dt>확인하기</dt><dd>AI가 제안한 기능을 직접 사용하고, 필요한 방향으로 고칩니다.</dd></div>
        </dl>
        <p className={styles.purposeNote}>생각을 남기고 이어볼 수 있도록, 결정을 잠시 미뤄도 괜찮도록. 나의 속도로 생각하고 선택하는 데 도움이 되는 도구를 만들고 싶습니다.</p>
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
