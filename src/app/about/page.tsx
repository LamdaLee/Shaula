import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "소개·연락",
  description: `${site.person}과 Shaula 이야기, 연락처 ${site.email}`,
};

export default function AboutPage() {
  return (
    <div className="shell">
      <header className={styles.header}>
        <p className="section__eyebrow">소개·연락</p>
        <h1 className={styles.title}>
          {site.person}
          <span className={styles.en}> / {site.personEn}</span>
        </h1>
        <p className={styles.lead}>어려운 것을 쉽게 전달해 주는 사람</p>
      </header>

      <section className={styles.block} aria-labelledby="name-story">
        <h2 id="name-story">이름과 Shaula</h2>
        <p>
          전갈자리의 별 <strong>샤울라(Shaula)</strong>, 다른 이름으로는 Lambda
          Scorpii가 ‘람다’의 유래입니다. 사이트 브랜드 Shaula와 이름 이람다(Lee
          Lamda)가 여기서 만납니다.
        </p>
      </section>

      <section className={styles.block} aria-labelledby="now">
        <h2 id="now">지금</h2>
        <ul>
          <li>교육운영 업무</li>
          <li>바이브코딩으로 웹애플리케이션 개발</li>
          <li>방향: AI 리터러시 교육</li>
        </ul>
        <p>{site.tagline}</p>
      </section>

      <section className={styles.block} aria-labelledby="bg">
        <h2 id="bg">다양한 경험</h2>
        <p>
          문예창작, 공간 디자인, 마케팅 콘텐츠, 제과제빵, IT 교육 등 — 설명과
          문제 해결 방식의 근거가 됩니다.
        </p>
        <aside className="memo">
          <p style={{ margin: 0 }}>
            설명 사례: “재료 = 변수 / 레시피 = 알고리즘” — 베이킹 비유로
            프로그래밍을 풀어 본 자료가 있습니다. 공개용 이미지:{" "}
            <span className="badge">확인 필요</span>
          </p>
        </aside>
      </section>

      <section className={styles.block} aria-labelledby="contact">
        <h2 id="contact">연락</h2>
        <p>공개 이메일로 교육 제안·협업·질문을 보내 주세요.</p>
        <p className={styles.mail}>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className={styles.note}>
          추가 채널(폼·SNS 등): <span className="badge">확인 필요</span>
        </p>
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
      </section>
    </div>
  );
}
