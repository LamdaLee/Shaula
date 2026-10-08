import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ContactEmail } from "@/components/ContactEmail";
import { site } from "@/lib/site";
import styles from "./about.module.css";
export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "소개·연락",
  description: "이람다의 배경, 일하는 방식과 협업 연락처",
};
export default function AboutPage() {
  return (
    <div className={`shell ${styles.about}`}>
      <header className="page-header">
        <Reveal tone="scale">
          <p className="section__eyebrow">
            ABOUT · 이람다의 배경과 일하는 방식
          </p>
          <h1 className="page-title">
            {site.person}
            <span className={styles.en}>Lee Lamda</span>
          </h1>
          <p className={styles.role}>어려운 것을 쉽게 전달하는 사람</p>
          <p className="page-lead">
            교육을 운영하고, 필요한 도구를 직접 만듭니다.
            <br />
            사람이 이해하고 실행할 수 있는 설명을 고민합니다.
          </p>
        </Reveal>
      </header>
      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>지금 하는 일</h2>
        <ul className={styles.now}>
          <li>
            <span className={styles.nowLabel}>현업</span>교육운영
          </li>
          <li>
            <span className={styles.nowLabel}>제작</span>AI와 함께 웹앱 만들기
          </li>
          <li>
            <span className={styles.nowLabel}>방향</span>AI 리터러시 교육 설계
          </li>
        </ul>
      </Reveal>
      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>설명 방식이 된 경험</h2>
        <dl className={styles.experiences}>
          <div>
            <dt>문예창작 · 마케팅</dt>
            <dd>
              전달할 내용을 구성하고, 상대가 무엇을 필요로 하는지 살폈습니다.
            </dd>
          </div>
          <div>
            <dt>제과제빵</dt>
            <dd>
              재료와 절차의 관계를 익혔습니다. 지금은 낯선 기술의 구조를
              설명하는 출발점이 됩니다.
            </dd>
          </div>
          <div>
            <dt>IT 교육 · 교육운영</dt>
            <dd>
              배우는 사람이 어디서 멈추는지 살피고, 다음 행동으로 이어지는
              안내를 고민합니다.
            </dd>
          </div>
        </dl>
      </Reveal>
      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>함께 일하는 방식</h2>
        <p className={styles.body}>
          먼저 대상과 문제를 정합니다. 작은 결과물을 만들어 시험하고, 확인한
          것과 아직 모르는 것을 구분해 남깁니다.
        </p>
        <ul className={styles.chips}>
          {[
            "바이브코딩",
            "AI 리터러시 교육 설계",
            "프롬프트 구조 설계",
            "기술 구조 번역",
            "Next.js",
            "Python",
            "Supabase · DB 구조",
            "REST API",
            "Git & Terminal",
            "Vercel 배포",
          ].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <Link className="btn btn--ghost" href="/case">
          프로젝트로 확인하기
        </Link>
      </Reveal>
      <Reveal as="section" className={styles.block}>
        <details className={styles.nameStory}>
          <summary>이름과 Shaula 이야기</summary>
          <p>
            Shaula는 전갈자리의 별로, 다른 이름은 Lambda Scorpii입니다.
            ‘람다’라는 이름과 사이트 브랜드는 이 별에서 만납니다.
          </p>
        </details>
      </Reveal>
      <Reveal as="section" className={styles.block}>
        <h2 id="contact" className={styles.h2}>
          함께 풀어볼 일
        </h2>
        <p className={styles.body}>
          교육 대상과 필요한 변화, 또는 만들고 싶은 도구를 알려주세요.
        </p>
        <ContactEmail />
        <div className="cta-row">
          <Link className="btn btn--ghost" href="/education">
            교육 제안 보기
          </Link>
          <Link className="btn btn--ghost" href="/try">
            업무 체험하기
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
