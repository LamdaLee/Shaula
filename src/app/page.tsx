import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TechTranslation, HumanLoop } from "@/components/TechTranslation";
import { ProjectCards } from "@/components/ProjectCards";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className="section__eyebrow">
              이람다 · 테크 트랜스레이터 & 바이브코딩 교육 기획자
            </p>
            <h1 id="hero-title" className={styles.heroLead}>
              {site.tagline}
            </h1>
            <p className={styles.heroSupport}>{site.taglineSupport}</p>
            <div className={styles.heroActions}>
              <Link className="btn" href="/try">
                내 업무에 AI 적용해 보기
              </Link>
              <Link className="btn btn--ghost" href="/case">
                앱 제작 과정 보기
              </Link>
            </div>
          </div>
          <figure className={styles.heroArt}>
            <div className={styles.heroFrame}>
              <Image
                src="/brand/hero-chaos-to-clarity.png"
                alt="얽힌 생각이 별을 향한 하나의 길로 이어지는 모습"
                fill
                preload
                sizes="(max-width: 820px) calc(100vw - 32px), 600px"
                className={styles.heroImage}
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="translation-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">
              TECH TRANSLATOR · 익숙한 경험에서 출발하기
            </p>
            <h2 id="translation-title" className="section__title">
              기술의 구조를, 일상의 언어로.
            </h2>
            <p className="section__lead">
              문법을 모두 외우지 않아도 구조를 이해하면 AI에 구체적으로 요청할
              수 있습니다. 비유로 시작하고, 실제 동작으로 확인합니다.
            </p>
            <TechTranslation />
            <HumanLoop />
          </Reveal>
        </div>
      </section>
      <section
        className={`section ${styles.band}`}
        aria-labelledby="projects-title"
      >
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">
              기획에서 배포까지 · 직접 만든 두 개의 도구
            </p>
            <h2 id="projects-title" className="section__title section__title--lines">
              내가 겪은 불편함이,<br />만드는 이유가 됩니다.
            </h2>
            <p className="section__lead">
              필요를 정의하고, AI와 구현하고, 사용하면서 다시 고칩니다. 완성
              화면과 함께 판단의 과정도 공개합니다.
            </p>
            <ProjectCards />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="try-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">내 업무로 시작하는 작은 체험</p>
            <h2 id="try-title" className="section__title">
              AI, 어디에 쓰면 좋을까요?
            </h2>
            <p className="section__lead">
              막히는 작업 하나를 골라 보세요. 6개 질문으로 입력 자료, 원하는
              결과, 확인할 항목을 정리하고 시험할 요청문을 만듭니다.
            </p>
            <div className={`memo ${styles.experimentPreview}`}>
              <strong>예시 · 회의 메모 정리</strong>
              <p>
                메모 → 할 일 초안 → 담당자·기한을 원문과 비교 → 확인 후 공유
              </p>
            </div>
            <Link className="btn" href="/try">
              내 업무에 AI 적용해 보기
            </Link>
          </Reveal>
        </div>
      </section>

      <section
        className={`section ${styles.eduBand}`}
        aria-labelledby="edu-title"
      >
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">작은 과제를 완성하며 배우는 교육</p>
            <span className="badge">교육 제안 · 프로그램 설계</span>
            <h2 id="edu-title" className="section__title">
              만들고, 확인하며 AI와 친해지기
            </h2>
            <p className="section__lead">
              내 이야기를 담은 웹페이지부터 필요한 기능이 있는 웹앱까지. 매회
              50분, 작동하는 결과물 하나를 만들고 직접 확인하는 수업을
              설계합니다.
            </p>
            <div className={styles.courseGrid}>
              <Link className={styles.courseCard} href="/education#life">
                <strong>나의 일상을 담은 인터랙티브 웹페이지</strong>
                <span>10회 × 50분 · 자기표현과 AI 활용 입문</span>
              </Link>
              <Link className={styles.courseCard} href="/education#webapp">
                <strong>생각모음부터 배포까지</strong>
                <span>16회 × 50분 · AI와 만드는 나만의 웹앱</span>
              </Link>
            </div>
            <Link className="btn btn--ghost" href="/education#worksheets">
              50분 샘플 교안 보기
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="about-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">어려운 것을 쉽게 전달하는 사람</p>
            <h2 id="about-title" className="section__title">
              경험이 설명 방식이 됩니다
            </h2>
            <p className="section__lead">
              문예창작, 마케팅, 제과제빵, IT 교육을 거쳐 지금은 교육을 운영하고
              웹앱을 만듭니다. 이 경험을 AI 리터러시 교육으로 연결합니다.
            </p>
            <p className={styles.bakeNote}>“재료 = 변수 / 레시피 = 알고리즘”</p>
            <p className="section__lead">
              익숙한 경험으로 낯선 개념을 설명합니다.
            </p>
            <Link className="btn btn--ghost" href="/about">
              이람다와 Shaula 이야기
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <div className="shell">
          <div className={`memo ${styles.contactBox}`}>
            <div>
              <p className="section__eyebrow">교육 · 콘텐츠 · 웹앱 협업</p>
              <h2 id="contact-title" className="section__title">
                함께 풀어볼 일이 있나요?
              </h2>
              <p>대상과 고민하는 문제를 알려주세요.</p>
            </div>
            <a className={styles.contactMail} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
