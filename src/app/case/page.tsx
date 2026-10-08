import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import styles from "./case.module.css";

export const metadata: Metadata = {
  title: "Pause & Ponder 사례",
  description: site.pausePonder.summary,
};

const shots = [
  {
    src: "/images/pp/pp-mindbox.png",
    alt: "Pause&Ponder 마음함 화면 — 자유 메모 입력과 저장·정리 버튼",
    title: "마음함",
    caption:
      "분류를 미룬 채 먼저 적어 두는 수신함. 저장 후 감정·메모 등으로 나눕니다. (사이드바 계정 영역은 공개용으로 제외)",
  },
  {
    src: "/images/pp/pp-pause.png",
    alt: "Pause&Ponder 잠깐 두기 화면 — 사고 싶은 물건 보류 입력",
    title: "잠깐 두기",
    caption:
      "사고 싶은 것을 가계부에 넣지 않고 잠시 보류합니다. 금액·감정은 선택 입력.",
  },
  {
    src: "/images/pp/pp-breathe.png",
    alt: "Pause&Ponder 숨고르기 화면 — 호흡·메모 유도",
    title: "숨고르기",
    caption:
      "충동 순간에 바로 결정하지 않도록, 호흡과 마음함 기록을 안내합니다.",
  },
  {
    src: "/images/pp/pp-ledger.png",
    alt: "Pause&Ponder 가계부 화면 — 수입·소비·환불·상환 요약과 직접 기록",
    title: "가계부",
    caption:
      "월별 수입·소비·환불·대금·상환을 보여 줍니다. 합계는 AI가 아니라 코드/DB로 계산합니다.",
  },
] as const;

export default function CasePage() {
  return (
    <div className="shell">
      <header className="page-header">
        <Reveal tone="scale">
          <div className={styles.badges}>
            <span className="badge">직접 만든 웹앱</span>
            <span className="badge badge--sky">선택적 AI API</span>
            <span className="badge badge--mint">Next.js + Supabase</span>
          </div>
          <h1 className="page-title">
            {site.pausePonder.name}
            <span className={styles.titleKo}> {site.pausePonder.nameKo}</span>
          </h1>
          <p className={styles.punch}>{site.pausePonder.punch}</p>
          <p className="page-lead">
            이람다가 만든 개인 보조 웹앱입니다. 생각·할 일·사고 싶은 것을 한곳에
            두고, 충동 구매는 잠깐 멈추며 감정과 소비를 되돌아봅니다.
          </p>
          <div className="cta-row">
            <a
              className="btn"
              href={site.pausePonder.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              앱 열기
            </a>
            <a
              className="btn btn--ghost"
              href={site.pausePonder.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </header>

      <Reveal as="section" className={styles.block} delayMs={40}>
        <h2 className={styles.h2}>
          <span className={styles.step}>01</span>
          한눈에 보기
        </h2>
        <dl className={styles.defs}>
          <div>
            <dt>누구를 위해</dt>
            <dd>충동 소비·파편 메모로 정리 부담을 느끼는 개인</dd>
          </div>
          <div>
            <dt>어떤 상황</dt>
            <dd>
              사고 싶다 / 샀다 / 애매한 금전 문장, 감정·할 일을 한꺼번에 적을 때
            </dd>
          </div>
          <div>
            <dt>한 문장</dt>
            <dd>{site.pausePonder.summary}</dd>
          </div>
        </dl>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>
          <span className={styles.step}>02</span>
          만든 계기
        </h2>
        <p className={styles.body}>
          규격화된 기록 양식의 피로와 감정 동요가 충동 소비·번아웃으로 이어지는
          불편에서 출발했습니다.
        </p>
        <p className={styles.body}>
          예:{" "}
          <code className={styles.inlineCode}>21000원 우산 구매</code>와{" "}
          <code className={styles.inlineCode}>사고 싶다</code> /{" "}
          <code className={styles.inlineCode}>구매?</code>를 구분하고, 카드
          대금과 물품 구매가 이중으로 합산되지 않게 합니다.
        </p>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>
          <span className={styles.step}>03</span>
          기능 선택
        </h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">기능</th>
                <th scope="col">넣은 이유</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>마음함 (문서상 생각함)</td>
                <td>분류 고민 없이 먼저 내려놓기</td>
              </tr>
              <tr>
                <td>가계부</td>
                <td>금액 환각 차단; 지출 vs 상환 분리 (AI에 합계 맡기지 않음)</td>
              </tr>
              <tr>
                <td>잠깐 두기</td>
                <td>구매 욕구를 즉시 지출에 넣지 않음</td>
              </tr>
              <tr>
                <td>숨고르기</td>
                <td>충동 시 호흡·자기 점검</td>
              </tr>
              <tr>
                <td>선택적 OpenAI 파싱</td>
                <td>문맥 후보 추출; 실패 시 규칙 Fallback (서버 키만)</td>
              </tr>
              <tr>
                <td>루틴 + Android</td>
                <td>일상 알림·위젯 동반 — v0.3이며 운영 반영은 문서상 미완</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>
          <span className={styles.step}>화면</span>
          캡처
        </h2>
        <p className={styles.note}>
          제작자가 제공한 실제 화면입니다. 로그인한 개인 이메일 영역은 공개
          포트폴리오용으로 잘라 두었습니다.
        </p>
        <div className={styles.shots}>
          {shots.map((shot, i) => (
            <Reveal as="figure" key={shot.src} delayMs={i * 80} className={styles.shot}>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={1144}
                height={941}
                className={styles.shotImg}
                sizes="(max-width: 800px) 100vw, 720px"
              />
              <figcaption>
                <strong>{shot.title}</strong> — {shot.caption}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>
          <span className={styles.step}>04</span>
          작동 흐름
        </h2>
        <ol className={styles.flow}>
          <li>자유 메모 입력</li>
          <li>규칙(+선택 AI)으로 파편 분류·금전 후보</li>
          <li>원문 보존 + 가계부/보류/할 일 연결</li>
          <li>사용자가 후보 확인·저장·숨고르기·월 집계 조회</li>
        </ol>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>
          <span className={styles.step}>05</span>
          AI와 사람의 역할
        </h2>
        <div className={styles.split}>
          <div className={styles.splitCard}>
            <h3>AI가 제안</h3>
            <p>
              돈·생각·감정·일·숨고르기 분류와 원화 금액/거래 유형{" "}
              <em>후보</em>
            </p>
          </div>
          <div className={styles.splitCard}>
            <h3>사람이 확인</h3>
            <p>
              확정 지출·보류·수정. 합계·납부일·기간 계산은 코드/DB
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>
          <span className={styles.step}>06</span>
          직접 체험
        </h2>
        <p className={styles.body}>
          예시 입력:{" "}
          <code className={styles.inlineCode}>21000원 우산 구매</code> /{" "}
          <code className={styles.inlineCode}>
            우산 사고 싶다. 오늘은 조금 불안하다. 보고서도 써야 한다.
          </code>
        </p>
        <p className={styles.body}>
          로그인 후 마음함에 적고 저장 → 분류 확인 → 필요 시 가계부·잠깐
          두기·숨고르기.
        </p>
        <p className={styles.body}>
          <a
            href={site.pausePonder.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.pausePonder.demo}
          </a>
        </p>
        <p className={styles.note}>
          AI 모드가 켜져 있으면 메모 본문이 OpenAI로 전달될 수 있습니다. API
          키는 서버 전용이며 프론트에 두지 않습니다.
        </p>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>
          <span className={styles.step}>07</span>
          검증과 개선
        </h2>
        <ul className={styles.bullets}>
          <li>
            운영에 v0.3 루틴 SQL·Android는 문서상 미반영. 일부 Realtime·실기기
            알림 등은 미검증.
          </li>
          <li>
            외부 사용자 후기·사용 수치:{" "}
            <span className="badge">확인 필요</span>
          </li>
          <li>
            다음 방향(제품 문서): 감정 타임라인, 보류함 고도화, AI 추출 고도화
          </li>
        </ul>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <h2 className={styles.h2}>
          <span className={styles.step}>08</span>
          업무로 연결
        </h2>
        <ol className={styles.questions}>
          <li>비슷한 막힘(충동·파편 메모)이 있나요?</li>
          <li>그때 무엇을 적거나 넣나요?</li>
          <li>AI가 나눈 분류·금액에서 무엇을 꼭 확인하나요?</li>
          <li>확인 뒤 다음 행동(보류·기록·숨고르기)은?</li>
        </ol>
      </Reveal>

      <div className={`cta-row ${styles.footerCta}`}>
        <Link className="btn" href="/try">
          업무 활용 지점 찾기 해보기
        </Link>
        <Link className="btn btn--ghost" href="/education">
          교육 제안 보기
        </Link>
        <Link className="btn btn--memo" href="/about">
          연락하기
        </Link>
      </div>
    </div>
  );
}
