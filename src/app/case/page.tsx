import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCards } from "@/components/ProjectCards";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import styles from "./case.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/case" },
  title: "직접 만든 두 개의 웹앱",
  description:
    "Pause & Ponder와 별이음: 일상의 문제를 정의하고 AI와 구현한 웹앱의 기획과 구조",
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
        <p className="section__eyebrow">CASE STUDIES · 필요에서 출발한 설계</p>
        <h1 className="page-title">
          내게 필요했던,
          <br />
          작은 도구들.
        </h1>
        <p className="page-lead">
          생활에서 느낀 불편을 작은 도구로 옮겨봤습니다. 왜 이런 기능을 만들었는지, AI와 함께 어떤 구조를 생각했는지 남깁니다.
        </p>
        <ProjectCards />
      </header>
      <section id="byeolieum" className={styles.block} aria-labelledby="byeolieum-title">
        <p className="section__eyebrow">별이음 · 생각에서 아이디어로</p>
        <h2 id="byeolieum-title" className={styles.h2}>흩어진 생각이, 하나의 아이디어가 되기까지</h2>
        <p className={styles.body}>떠오른 생각을 바로 정리하거나 평가하기는 어렵습니다. 일단 카드로 남겨두고, 서로 관련 있는 생각을 연결하며 다음에 해볼 일을 찾고 싶었습니다. 별 하나를 이어 별자리를 만들듯, 생각 사이의 맥락을 찾는 도구입니다.</p>
        <p className={styles.note}>아래는 카드에서 아이디어와 제작 요청문으로 이어지는 설명용 예시입니다.</p>
        <ol className={styles.ideaJourney} aria-label="별이음 사용 흐름 예시">
          <li>
            <span className={styles.journeyLabel}>01 · 생각을 남기기</span>
            <h3>아직 정리되지 않은 세 조각</h3>
            <ul className={styles.thoughts}>
              <li>배운 내용을 금방 잊는다</li>
              <li>긴 회고를 쓰기는 부담스럽다</li>
              <li>하루 한 줄은 남길 수 있을 것 같다</li>
            </ul>
          </li>
          <li>
            <span className={styles.journeyLabel}>02 · 연결하고 구체화하기</span>
            <h3>하루 한 줄 배움 기록</h3>
            <p>‘학습 기록’이라는 맥락으로 카드를 잇고, 짧게 남기고 다시 돌아보는 도구를 떠올립니다. 직접 구체화하거나 AI의 제안을 참고해 고를 수 있습니다.</p>
          </li>
          <li>
            <span className={styles.journeyLabel}>03 · 만들어볼 요청으로</span>
            <h3>작은 기능과 확인 기준</h3>
            <p>“오늘 배운 것을 한 줄로 적고 다시 볼 수 있는 웹페이지를 만들어줘. 빈 기록은 저장되지 않게 하고, 새로고침 후에도 남는지 확인할 예시를 적어줘.”</p>
          </li>
        </ol>
        <p className={styles.body}>AI의 제안이 곧 정답은 아닙니다. 연결 근거가 내 생각과 맞는지 고르고, 만들어볼 기능과 직접 확인할 기준을 정합니다.</p>
        <div className="cta-row">
          <Link className="btn btn--ghost" href="/case/byeolieum">배경과 제작 기록 더 읽기</Link>
          <a href={site.byeolieum.demo} target="_blank" rel="noopener noreferrer">원할 때 앱에서 해보기 ↗</a>
        </div>
      </section>
      <header id="pause-ponder" className="page-header">
        <Reveal tone="scale">
          <div className={styles.badges}>
            <span className="badge">직접 만든 웹앱</span>
            <span className="badge badge--sky">선택적 AI API</span>
            <span className="badge badge--mint">Next.js + Supabase</span>
          </div>
          <h2 className="page-title">
            {site.pausePonder.name}
            <span className={styles.titleKo}> {site.pausePonder.nameKo}</span>
          </h2>
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
          예: <code className={styles.inlineCode}>21000원 우산 구매</code>와{" "}
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
                <td>마음함</td>
                <td>분류 고민 없이 먼저 내려놓기</td>
              </tr>
              <tr>
                <td>가계부</td>
                <td>금액의 합계는 코드로 계산하고, 소비와 상환을 구분</td>
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
                <td>선택적 AI 분류</td>
                <td>메모의 분류 후보 제안. AI 실패 시 규칙 기반 처리</td>
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
          실제 앱 화면입니다. 개인 계정 정보는 제외했습니다. 각 항목을 펼쳐
          기능을 살펴보세요.
        </p>
        <div className={styles.shots}>
          {shots.map((shot, i) => (
            <details key={shot.src} open={i === 0} className={styles.shot}>
              <summary>{shot.title} · 화면 보기</summary>
              <figure>
                <a
                  href={shot.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${shot.title} 화면 크게 보기`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1144}
                    height={941}
                    className={styles.shotImg}
                    sizes="(max-width: 800px) 100vw, 720px"
                  />
                </a>
                <figcaption>
                  <strong>{shot.title}</strong> — {shot.caption} 화면을 누르면
                  크게 볼 수 있습니다.
                </figcaption>
              </figure>
            </details>
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
              돈·생각·감정·일·숨고르기 분류와 원화 금액/거래 유형 <em>후보</em>
            </p>
          </div>
          <div className={styles.splitCard}>
            <h3>사람이 확인</h3>
            <p>분류와 금액 후보를 원문과 비교하고, 기록·보류·수정을 결정</p>
          </div>
          <div className={styles.splitCard}>
            <h3>코드가 계산</h3>
            <p>확정한 기록을 바탕으로 합계·납부일·기간을 계산합니다.</p>
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
        <p className={styles.body}>
          구매 의사를 적은 메모와 실제 지출을 구분하고, 물품 구매와 카드 대금이
          중복 합산되지 않도록 설계했습니다. AI 분류 후보는 사용자가 확인하도록
          합니다.
        </p>
        <details>
          <summary>개발 현황과 앞으로 확인할 항목</summary>
          <ul className={styles.bullets}>
            <li>
              루틴·Android 기능의 운영 반영과 실기기 알림은 추가 확인이
              필요합니다.
            </li>
            <li>외부 사용자 피드백과 사용 성과는 아직 검증하지 않았습니다.</li>
            <li>다음 개선 방향은 감정 타임라인, 보류함, AI 분류입니다.</li>
          </ul>
        </details>
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
          쉽게 풀어보기
        </Link>
        <Link className="btn btn--memo" href="/about">
          연락하기
        </Link>
      </div>
    </div>
  );
}
