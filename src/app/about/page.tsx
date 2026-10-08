import type { Metadata } from "next";
import Link from "next/link";
import { TechTranslation } from "@/components/TechTranslation";
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
          문예창작과 마케팅에서는 전달할 내용을 구성했고, 제과제빵과 IT
          교육에서는 익숙한 경험으로 새로운 개념을 설명하는 연결을 찾았습니다.
          지금은 교육운영에서 발견한 필요를 웹앱과 교육 기획으로 구체화합니다.
        </p>
        <aside className="memo">
          <p className={styles.memoHand}>“재료 = 변수 / 레시피 = 알고리즘”</p>
          <p className={styles.memoSub}>
            익숙한 재료와 레시피의 관계로 변수와 알고리즘을 설명한 사례입니다.
          </p>
        </aside>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>기술을 번역하는 방식</h2>
        <p className={styles.body}>
          문예창작에서는 상대에게 닿는 문장을, 마케팅에서는 사용자의 필요를,
          제과제빵에서는 재료와 절차의 관계를 배웠습니다. 교육운영 경험을
          바탕으로 낯선 기술을 익숙한 구조로 설명하고, 작은 과제로 연결합니다.
        </p>
        <TechTranslation />
      </Reveal>
      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>함께 일할 때 사용하는 역량</h2>
        <p className={styles.body}>
          교육 설계와 직접 만든 프로젝트에서 활용하는 영역입니다. 기술의 역할을
          이해하고 AI와 구현하며, 작동 결과를 직접 확인합니다.
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
        <p className={styles.body}>
          설명만으로 끝내지 않고, 무엇을 만들었고 어떻게 확인했는지 남기는
          교육을 지향합니다.
        </p>
      </Reveal>
      <Reveal as="section" className={styles.block}>
        <h2 id="contact" className={styles.h2}>
          연락
        </h2>
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
