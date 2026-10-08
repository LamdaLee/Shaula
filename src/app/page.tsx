import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HumanLoop } from "@/components/TechTranslation";
import { ProjectCards } from "@/components/ProjectCards";
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
    <section className={`section ${styles.band}`} aria-labelledby="projects-title">
      <div className="shell"><Reveal>
        <p className="section__eyebrow">생활 속에서 시작한 두 개의 도구</p>
        <h2 id="projects-title" className="section__title section__title--lines">생각을 잇고,<br />잠깐 멈추는 자리.</h2>
        <p className="section__lead">바로 정리하지 않아도 남겨둘 수 있도록. 바로 결정하지 않아도 돌아볼 수 있도록. 제가 필요했던 자리를 작은 웹앱으로 만들어봅니다.</p>
        <ProjectCards compact />
      </Reveal></div>
    </section>
    <section className="section" aria-label="AI와 함께 만드는 태도">
      <div className="shell"><Reveal><HumanLoop /></Reveal></div>
    </section>
    <section className={`section ${styles.eduBand}`} aria-labelledby="materials-title">
      <div className="shell"><Reveal>
        <p className="section__eyebrow">내가 이해한 것을, 쉬운 말로</p>
        <h2 id="materials-title" className="section__title section__title--lines">익숙한 경험으로,<br />낯선 기술을 풀어봅니다.</h2>
        <p className="section__lead">재료에 이름을 붙이고, 과정을 나누고, 결과를 확인하기. 케이크를 만들던 경험은 프로그래밍을 설명하는 비유가 되었습니다.</p>
        <Link className={styles.courseCard} href="/education#materials">
          <strong>케이크 굽기로 이해하는 프로그래밍</strong>
          <span>강의에 사용한 설명 자료를 바탕으로, 변수와 함수를 다시 풀어봅니다.</span>
          <span>설명 자료 살펴보기 →</span>
        </Link>
        <p className={styles.smallLinks}><Link href="/try">내 업무로 AI 요청문 만들어보기 →</Link></p>
      </Reveal></div>
    </section>
  </>;
}
