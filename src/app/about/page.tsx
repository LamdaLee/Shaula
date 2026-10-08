import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ContactEmail } from "@/components/ContactEmail";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "소개·연락",
  description: `${site.person}과 Shaula 이야기, 연락처 ${site.email}`,
};

export default function AboutPage() {
  return (
    <div className="shell">
      <header className="page-header">
        <Reveal tone="scale">
          <p className="section__eyebrow">소개·연락</p>
          <h1 className="page-title">
            {site.person}
            <span className={styles.en}> / {site.personEn}</span>
          </h1>
          <p className={styles.role}>{site.role}</p>
          <p className="page-lead">{site.tagline}</p>
        </Reveal>
      </header>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>이름과 Shaula</h2>
        <p className={styles.body}>
          전갈자리의 별 <strong>샤울라(Shaula)</strong> — 다른 이름으로는 Lambda
          Scorpii. 여기서 ‘람다’가 왔습니다.
        </p>
        <p className={styles.body}>
          사이트 브랜드 Shaula와 이름 {site.person}({site.personEn})가 그
          지점에서 만납니다.
        </p>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>지금</h2>
        <ul className={styles.now}>
          <li>
            <span className={styles.nowLabel}>하는 일</span>
            교육운영
          </li>
          <li>
            <span className={styles.nowLabel}>만드는 것</span>
            바이브코딩으로 웹애플리케이션
          </li>
          <li>
            <span className={styles.nowLabel}>향하는 곳</span>
            AI 리터러시 교육
          </li>
        </ul>
        <p className={styles.support}>{site.taglineSupport}</p>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>다양한 경험</h2>
        <p className={styles.body}>
          문예창작과 마케팅에서는 전달할 내용을 구성했고, 제과제빵과 IT 교육에서는 익숙한 경험으로 새로운 개념을 설명하는 연결을 찾았습니다. 지금은 교육운영에서 발견한 필요를 웹앱과 교육 기획으로 구체화합니다.
        </p>
        <aside className="memo">
          <p className={styles.memoHand}>
            “재료 = 변수 / 레시피 = 알고리즘”
          </p>
          <p className={styles.memoSub}>
            익숙한 재료와 레시피의 관계로 변수와 알고리즘을 설명한 사례입니다.
          </p>
        </aside>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>연락</h2>
        <p className={styles.body}>
          교육 제안·협업·질문 — 공개 이메일로 보내 주세요.
        </p>
        <ContactEmail />
        <div className="cta-row">
          <Link className="btn" href="/case">
            대표 앱 보기
          </Link>
          <Link className="btn btn--ghost" href="/try">
            써보기
          </Link>
          <Link className="btn btn--memo" href="/education">
            교육 제안
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
