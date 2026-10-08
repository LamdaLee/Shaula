import Link from "next/link";
import { HeroMotif } from "@/components/HeroMotif";
import { Reveal } from "@/components/Reveal";
import { StickyMoment } from "@/components/StickyMoment";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-brand">
        <HeroMotif />
        <div className={`shell ${styles.heroInner}`}>
          <Reveal tone="scale">
            <p className={styles.heroEyebrow}>{site.role}</p>
          </Reveal>
          <Reveal tone="scale" delayMs={60}>
            <h1 id="hero-brand" className={styles.heroBrand}>
              {site.name}
            </h1>
          </Reveal>
          <Reveal delayMs={120}>
            <p className={styles.heroPerson}>
              {site.person}
              <span className={styles.heroDot} aria-hidden="true">
                ·
              </span>
              {site.personEn}
            </p>
          </Reveal>
          <Reveal tone="blur" delayMs={160}>
            <p className={styles.heroLead}>{site.tagline}</p>
          </Reveal>
          <Reveal delayMs={220}>
            <p className={styles.heroSupport}>{site.taglineSupport}</p>
          </Reveal>
          <Reveal delayMs={280}>
            <div className="cta-row">
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
          </Reveal>
        </div>
      </section>

      <StickyMoment
        line={site.role}
        support="말로 풀고, 앱으로 보여 주고, 실험으로 시작해 보게 합니다."
      />

      <section className={`section ${styles.band}`} aria-labelledby="pp-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">대표 앱</p>
            <div className={styles.feature}>
              <div className={styles.featureCopy}>
                <span className="badge">직접 만든 웹앱</span>
                <h2 id="pp-title" className="section__title">
                  {site.pausePonder.name}
                </h2>
                <p className="section__punch">{site.pausePonder.punch}</p>
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
              <aside className={`memo ${styles.featureMemo}`} aria-label="앱 한 줄">
                <p className={styles.memoHand}>
                  마음함에 먼저 적어요.
                  <br />
                  사고 싶은 건 잠깐 두고,
                  <br />
                  합계는 코드가 계산해요.
                </p>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="try-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">업무 활용 체험</p>
            <h2 id="try-title" className="section__title">
              막힌 지점을
              <br />
              실험 카드로
            </h2>
            <p className="section__punch">“AI 쓰고 싶다”만으로는 시작이 안 됩니다.</p>
            <p className="section__lead">
              입력·출력·검증·다음 행동까지 적어 작은 실험으로 바꿔 보세요. AI
              API 없이, 당신이 적은 내용만 정리합니다.
            </p>
            <Link className="btn" href="/try">
              AI 직접 써보기
            </Link>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.eduBand}`} aria-labelledby="edu-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">교육 프로그램</p>
            <span className="badge badge--mint">교육 제안 · 프로그램 설계</span>
            <h2 id="edu-title" className="section__title">
              AI와 친해지기
            </h2>
            <p className="section__punch">10회로, 내 이야기를 웹페이지에.</p>
            <p className="section__lead">
              「나의 인생을 담은 웹페이지 만들기」— 코딩 경험이 적은 성인을 위한
              프로젝트 수업 설계안입니다. 운영 실적·후기는 아직 없습니다.
            </p>
            <Link className="btn btn--ghost" href="/education">
              교육 제안 보기
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="bg-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">교육운영과 배경</p>
            <h2 id="bg-title" className="section__title">
              경험이
              <br />
              설명 방식이 됩니다
            </h2>
            <p className="section__lead">
              지금은 교육운영을 하며 바이브코딩으로 웹앱을 만듭니다. 다음 발은
              AI 리터러시 교육입니다.
            </p>
            <ul className={styles.bgRail}>
              {[
                "문예창작",
                "공간 디자인",
                "마케팅 콘텐츠",
                "제과제빵",
                "IT 교육",
              ].map((item, i) => (
                <Reveal as="li" key={item} delayMs={i * 70} className={styles.bgItem}>
                  <span className={styles.bgNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </Reveal>
              ))}
            </ul>
            <p className={styles.bakeNote}>
              설명 사례 — “재료 = 변수 / 레시피 = 알고리즘”
              <span className={styles.bakeSub}>
                베이킹 비유로 프로그래밍을 풀어 본 자료가 있습니다.
              </span>
            </p>
            <Link href="/about" className={styles.textLink}>
              소개·연락 더 보기
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <div className="shell">
          <Reveal tone="scale">
            <div className={`memo ${styles.contactBox}`}>
              <div>
                <p className="section__eyebrow" style={{ marginBottom: 0 }}>
                  연락
                </p>
                <h2 id="contact-title" className="section__title">
                  이야기 나눠요
                </h2>
                <p className={styles.contactLead}>
                  교육 제안 · 협업 · 질문 — 공개 이메일로요.
                </p>
              </div>
              <a className={styles.contactMail} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
