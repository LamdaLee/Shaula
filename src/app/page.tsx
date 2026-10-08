import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
            <p className="section__eyebrow">이람다 · 교육운영과 AI 활용 프로젝트</p>
            <h1 id="hero-title" className={styles.heroLead}>{site.tagline}</h1>
            <p className={styles.heroSupport}>{site.taglineSupport}</p>
            <div className={styles.heroActions}>
              <Link className="btn" href="/try">내 업무에 AI 적용해 보기</Link>
              <Link className="btn btn--ghost" href="/case">앱 제작 과정 보기</Link>
            </div>
          </div>
          <figure className={styles.heroArt}>
            <div className={styles.heroFrame}>
              <Image src="/brand/hero-chaos-to-clarity.png" alt="얽힌 생각이 별을 향한 하나의 길로 이어지는 모습" fill preload sizes="(max-width: 820px) calc(100vw - 32px), 600px" className={styles.heroImage} />
            </div>
          </figure>
        </div>
      </section>

      <section className={`section ${styles.band}`} aria-labelledby="pp-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">필요를 발견하고, 직접 만든 도구</p>
            <div className={styles.feature}>
              <div>
                <span className="badge">직접 만든 웹앱</span>
                <h2 id="pp-title" className="section__title">{site.pausePonder.name}</h2>
                <p className="section__punch">{site.pausePonder.punch}</p>
                <p className="section__lead">생각과 감정, 사고 싶은 것을 먼저 적고 돌아보는 개인 보조 도구입니다.</p>
                <ol className={styles.proofList}>
                  <li><strong>필요</strong><span>기록을 분류하는 부담과 즉흥적인 소비</span></li>
                  <li><strong>기능</strong><span>먼저 적는 마음함과 구매를 보류하는 잠깐 두기</span></li>
                  <li><strong>확인</strong><span>AI는 분류 후보를 제안하고, 사람이 확인하며, 합계는 코드가 계산</span></li>
                </ol>
                <div className="cta-row">
                  <Link className="btn" href="/case">왜, 어떻게 만들었는지</Link>
                  <a className="btn btn--ghost" href={site.pausePonder.demo} target="_blank" rel="noopener noreferrer">앱 열기 ↗</a>
                </div>
              </div>
              <Link href="/case" className={styles.appPreview} aria-label="Pause & Ponder 마음함 화면과 제작 사례 보기">
                <Image src="/images/pp/pp-mindbox.png" alt="Pause & Ponder 마음함의 메모 입력 화면" width={1144} height={941} sizes="(max-width: 800px) calc(100vw - 32px), 480px" />
                <span>실제 앱 화면 · 제작 과정 살펴보기 →</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="try-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">내 업무로 시작하는 작은 체험</p>
            <h2 id="try-title" className="section__title">AI, 어디에 쓰면 좋을까요?</h2>
            <p className="section__lead">막히는 작업 하나를 골라 보세요. 6개 질문으로 입력 자료, 원하는 결과, 확인할 항목을 정리하고 시험할 요청문을 만듭니다.</p>
            <div className={`memo ${styles.experimentPreview}`}>
              <strong>예시 · 회의 메모 정리</strong>
              <p>메모 → 할 일 초안 → 담당자·기한을 원문과 비교 → 확인 후 공유</p>
            </div>
            <Link className="btn" href="/try">내 업무에 AI 적용해 보기</Link>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.eduBand}`} aria-labelledby="edu-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">작은 과제를 완성하며 배우는 교육</p>
            <span className="badge">교육 제안 · 프로그램 설계</span>
            <h2 id="edu-title" className="section__title">만들고, 확인하며 AI와 친해지기</h2>
            <p className="section__lead">내 이야기를 담은 웹페이지부터 필요한 기능이 있는 웹앱까지. 매회 50분, 작동하는 결과물 하나를 만들고 직접 확인하는 수업을 설계합니다.</p>
            <div className={styles.courseGrid}>
              <Link className={styles.courseCard} href="/education#life"><strong>나의 인생을 담은 웹페이지</strong><span>10회 × 50분 · 자기표현과 AI 활용 입문</span></Link>
              <Link className={styles.courseCard} href="/education#webapp"><strong>AI와 만드는 작은 웹앱</strong><span>16회 × 50분 · 입력부터 저장과 배포까지</span></Link>
            </div>
            <Link className="btn btn--ghost" href="/education#activity">샘플 활동 직접 해보기</Link>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="about-title">
        <div className="shell">
          <Reveal>
            <p className="section__eyebrow">어려운 것을 쉽게 전달하는 사람</p>
            <h2 id="about-title" className="section__title">경험이 설명 방식이 됩니다</h2>
            <p className="section__lead">문예창작, 마케팅, 제과제빵, IT 교육을 거쳐 지금은 교육을 운영하고 웹앱을 만듭니다. 다음 방향은 AI 리터러시 교육입니다.</p>
            <p className={styles.bakeNote}>“재료 = 변수 / 레시피 = 알고리즘”</p>
            <p className="section__lead">익숙한 경험으로 낯선 개념을 설명합니다.</p>
            <Link className="btn btn--ghost" href="/about">이람다와 Shaula 이야기</Link>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <div className="shell">
          <div className={`memo ${styles.contactBox}`}>
            <div><p className="section__eyebrow">교육 · 콘텐츠 · 웹앱 협업</p><h2 id="contact-title" className="section__title">함께 풀어볼 일이 있나요?</h2><p>대상과 고민하는 문제를 알려주세요.</p></div>
            <a className={styles.contactMail} href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
