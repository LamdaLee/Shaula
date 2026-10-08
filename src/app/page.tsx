import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-brand">
        <div className="shell" style={{ position: "relative", zIndex: 1 }}>
          <p className="section__eyebrow anim-rise">AI 리터러시 포트폴리오</p>
          <h1 id="hero-brand" className={`${styles.heroBrand} anim-rise`}>
            {site.name}
          </h1>
          <p className={`${styles.heroPerson} anim-rise-delay`}>
            {site.person} · {site.personEn}
          </p>
          <p className={`${styles.heroLead} anim-rise-delay`}>{site.tagline}</p>
          <p className={`${styles.heroSupport} anim-rise-delay`}>
            교육을 운영하고 웹애플리케이션을 만들며, 사람들이 AI를 이해하고
            활용하도록 돕는 {site.person}입니다. 어려운 것을 쉽게 전달합니다.
          </p>
          <div className={`cta-row anim-rise-delay`}>
            <Link className="btn" href="/case">
              대표 앱 보기
            </Link>
            <Link className="btn btn--ghost" href="/try">
              내 업무에 AI 적용해 보기
            </Link>
            <Link className="btn btn--memo" href="/education">
              교육 제안 보기
            </Link>
          </div>
        </div>
        <div className={styles.heroArt} aria-hidden="true">
          <span className="star anim-twinkle" style={{ top: "18%", left: "62%" }} />
          <span
            className="star anim-twinkle"
            style={{ top: "42%", left: "78%", animationDelay: "0.8s" }}
          />
          <span
            className="star anim-twinkle"
            style={{ top: "68%", left: "70%", animationDelay: "1.4s" }}
          />
          <svg className={styles.heroSvg} viewBox="0 0 240 200" aria-hidden="true">
            <path
              className="line-doodle"
              d="M20 120 C60 40, 120 40, 150 90 S210 160, 230 110"
              strokeDasharray="4 7"
              strokeDashoffset="40"
              style={{ animation: "draw-dash 2.4s var(--ease) forwards" }}
            />
            <rect
              x="48"
              y="48"
              width="110"
              height="78"
              rx="4"
              fill="var(--memo)"
              stroke="var(--memo-edge)"
              strokeDasharray="5 4"
              transform="rotate(-4 100 90)"
            />
            <text
              x="70"
              y="88"
              fill="var(--ink-soft)"
              fontSize="14"
              fontFamily="var(--font-display)"
            >
              쉽게 설명하기
            </text>
          </svg>
        </div>
      </section>

      <section className="section" aria-labelledby="pp-title">
        <div className="shell">
          <p className="section__eyebrow">대표 앱</p>
          <div className={styles.panel}>
            <div className={styles.panelBody}>
              <span className="badge">직접 만든 웹앱</span>
              <h2 id="pp-title" className="section__title">
                Pause&Ponder
              </h2>
              <p className="section__lead">{site.pausePonder.summary}</p>
              <div className="cta-row">
                <Link className="btn" href="/case">
                  사례 자세히
                </Link>
                <a
                  className="btn btn--ghost"
                  href={site.pausePonder.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  앱 열기
                </a>
              </div>
            </div>
            <aside className="memo" aria-label="앱 한 줄 메모">
              <p style={{ margin: 0 }}>
                마음함에 적어 두고, 충동 구매는 잠깐 멈추며, 감정과 소비를
                되돌아보는 개인 보조 도구입니다.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="try-title">
        <div className="shell">
          <p className="section__eyebrow">업무 활용 체험</p>
          <h2 id="try-title" className="section__title">
            막힌 지점을 실험 카드로
          </h2>
          <p className="section__lead">
            막연한 “AI 쓰고 싶다”를, 입력·출력·검증·다음 행동이 있는 작은
            실험으로 바꿔 보세요. (AI API 없이, 입력한 내용을 정리합니다.)
          </p>
          <Link className="btn" href="/try">
            AI 직접 써보기
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="edu-title">
        <div className="shell">
          <p className="section__eyebrow">교육 프로그램</p>
          <span className="badge badge--mint">교육 제안 · 프로그램 설계</span>
          <h2 id="edu-title" className="section__title">
            AI와 친해지기: 나의 인생을 담은 웹페이지 만들기
          </h2>
          <p className="section__lead">
            코딩 경험이 적은 성인을 위한 10회 프로젝트 수업 설계안입니다. (운영
            실적·후기는 아직 없습니다.)
          </p>
          <Link className="btn btn--ghost" href="/education">
            교육 제안 보기
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="bg-title">
        <div className="shell">
          <p className="section__eyebrow">교육운영과 배경</p>
          <h2 id="bg-title" className="section__title">
            다양한 경험이 설명 방식이 됩니다
          </h2>
          <p className="section__lead">
            현재 교육운영 업무를 하며 바이브코딩으로 웹앱을 개발합니다. AI
            리터러시 교육으로 나아가고 있습니다.
          </p>
          <ul className={styles.bgGrid}>
            {[
              "문예창작",
              "공간 디자인",
              "마케팅 콘텐츠",
              "제과제빵",
              "IT 교육",
            ].map((item) => (
              <li key={item} className={styles.bgItem}>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1.25rem", color: "var(--ink-soft)" }}>
            설명 사례: “재료 = 변수 / 레시피 = 알고리즘” — 베이킹 비유로
            프로그래밍을 풀어 본 자료가 있습니다.
          </p>
          <Link href="/about" style={{ fontWeight: 600 }}>
            소개·연락 더 보기
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <div className="shell">
          <div className={`memo ${styles.contactBox}`}>
            <div>
              <p className="section__eyebrow" style={{ marginBottom: 0 }}>
                연락
              </p>
              <h2 id="contact-title" className="section__title">
                이야기 나눠요
              </h2>
              <p style={{ margin: 0, color: "var(--ink-soft)" }}>
                교육 제안·협업·질문 — 공개 이메일로 연락해 주세요.
              </p>
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
