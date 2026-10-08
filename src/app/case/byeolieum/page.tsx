import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { HumanLoop } from "@/components/TechTranslation";
import styles from "../case.module.css";
export const metadata: Metadata = {
  title: "별이음 · 만들어 가는 생각모음",
  description: site.byeolieum.summary,
  alternates: { canonical: "/case/byeolieum" },
};
export default function ByeolieumCase() {
  return (
    <div className="shell">
      <header className="page-header">
        <p className="section__eyebrow">BUILDING IN PUBLIC · 프로젝트 02</p>
        <span className="badge badge--sky">배포된 프로토타입 · 개선 중</span>
        <h1 className="page-title">
          별이음
          <br />
          <span className={styles.titleKo}>
            흩어진 생각을 이어, 나만의 그림으로.
          </span>
        </h1>
        <p className="page-lead">
          생각을 많이 적는 것과 실행할 아이디어를 만드는 것은 다릅니다. 조각을
          연결하고, 나에게 필요한 기능을 정하고, AI에 전달할 제작 프롬프트와
          작은 실험으로 이어가는 도구를 만들고 있습니다.
        </p>
        <div className="cta-row">
          <a
            className="btn"
            href={site.byeolieum.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            프로토타입 열기 ↗
          </a>
          <a
            className="btn btn--ghost"
            href={site.byeolieum.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            제작 코드 보기 ↗
          </a>
          <Link className="btn btn--ghost" href="/case">
            두 프로젝트 비교하기
          </Link>
        </div>
      </header>
      <section className={styles.block}>
        <h2 className={styles.h2}>왜 ‘별이음’일까?</h2>
        <p className={styles.body}>
          별 하나만 보면 점이지만, 서로 이어 보면 별자리가 됩니다. 떠오르는
          생각을 당장 평가하지 않고 모은 뒤, 연결 속에서 나만의 아이디어를
          찾는다는 뜻을 담았습니다.
        </p>
        <figure className={styles.shot}>
          <Image
            className={styles.shotImg}
            src="/images/byeolieum/studio.png"
            width={1440}
            height={1000}
            sizes="(max-width:760px) 100vw, 1100px"
            alt="별이음의 생각 카드 캔버스와 아이디어 만들기 화면"
          />
          <figcaption>
            예시 데이터를 사용한 작업 화면. 생각을 고르고 연결한 뒤, 질문으로
            아이디어를 구체화합니다.
          </figcaption>
        </figure>
      </section>
      <section className={styles.block}>
        <h2 className={styles.h2}>
          파편화된 메모에서, 확인할 수 있는 아이디어로
        </h2>
        <ol className={styles.flow}>
          {[
            "생각을 한 줄씩 카드에 적기",
            "관련 있는 카드 2~5개 연결하기",
            "직접 구체화하거나 AI 후보의 근거를 보고 선택하기",
            "목적·대상·핵심 기능·확인 기준을 답하기",
            "제작 프롬프트를 복사해 원하는 AI에서 구현하기",
            "보관함에 저장하고, 작은 실험의 실제 결과 남기기",
          ].map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className={styles.note}>
          카드 연결과 프롬프트 생성은 API 없이 작동합니다. OpenAI 제안은
          사용자가 선택한 카드에 한해 버튼을 눌렀을 때 요청합니다.
        </p>
      </section>
      <section className={styles.block}>
        <h2 className={styles.h2}>직접 넘고 있는 기술적 허들</h2>
        <dl className={styles.defs}>
          <dt>반응형 UI · 즉각 반응하는 선택</dt>
          <dd>
            모바일에서 드래그 없이 카드를 연결·해제하고 삭제할 수 있도록
            수정했습니다. AI 응답을 기다리는 동안에도 카드 조작은 계속됩니다.
          </dd>
          <dt>DB 구조 · 브라우저와 계정 기록 분리</dt>
          <dd>
            가입 전 기록을 보존하고, 로그인 후 선택한 작업을 Supabase 계정
            공간에 저장하도록 구현했습니다. 서로 다른 기기의 저장이 충돌하면
            자동 덮어쓰기를 멈춥니다.
          </dd>
          <dt>API · 제안과 검증의 책임 분리</dt>
          <dd>
            AI가 제안한 아이디어는 연결 근거를 확인한 뒤 사람이 선택합니다.
            실험의 완료 여부는 확인 기준과 실제 관찰 기록으로 판단합니다.
          </dd>
          <dt>로그인 · 최소한의 정보로 연결</dt>
          <dd>
            네이버와 카카오는 회원 ID 기반 서버 인증을 구현했습니다. 실제 제공자
            설정과 운영 로그인 검증은 별도 확인 중입니다.
          </dd>
        </dl>
      </section>
      <HumanLoop />
      <section className={styles.block}>
        <h2 className={styles.h2}>현재와 다음</h2>
        <p className={styles.body}>
          카드 작성·연결, 아이디어 질문, 제작 프롬프트, 보관함과 실험 기록,
          선택적 AI 제안이 구현된 프로토타입입니다. 계정 저장과 소셜 로그인
          코드는 추가했고 운영 설정을 점검하고 있습니다.
        </p>
        <p className={styles.body}>
          다음은 실제 사용자와 ‘카드에서 아이디어로 넘어가기’가 충분히 쉬운지
          확인하는 일입니다. 사용 성과나 교육 효과는 아직 검증하지 않았습니다.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/education#webapp">
            이 구조로 배우는 웹앱 과정
          </Link>
          <Link className="btn btn--ghost" href="/about#contact">
            함께 실험할 일 제안하기
          </Link>
        </div>
      </section>
    </div>
  );
}
