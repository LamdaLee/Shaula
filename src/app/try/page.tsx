import type { Metadata } from "next";
import { EXAMPLE_ANSWERS, buildResultCard } from "@/lib/work-tool";
import { Reveal } from "@/components/Reveal";
import { WorkToolForm } from "@/components/WorkToolForm";
import styles from "./try.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/try" },
  title: "업무 활용 지점 찾기",
  description:
    "막연한 AI 활용 욕구를 입력·출력·검증·다음 행동이 있는 실험 카드로 정리합니다. AI API 없음.",
};

export default function TryPage() {
  return (
    <div className="shell">
      <header className="page-header">
        <Reveal tone="scale">
          <p className="section__eyebrow">내 업무에 AI 적용해 보기</p>
          <h1 className="page-title">
            내 업무의
            <br />
            AI 활용 지점
          </h1>
          <p className={styles.punch}>
            “AI 쓰고 싶다”를
            <br />
            작은 실험으로.
          </p>
          <p className="page-lead">
            6개 질문으로 입력 자료·원하는 결과·검증 기준을 정리합니다. 완성한 계획을 요청문으로 바꿔 직접 시험해 보세요.
          </p>
          <aside className={`memo ${styles.memo}`} aria-label="학습 관점">
            <p className={styles.memoLine}>
              <strong>학습 관점</strong>
              <span>
                필요 → 입력 → 생성 → 검증 → 수정 → 활용
              </span>
            </p>
            <p className={styles.memoLine}>
              <strong>AX</strong>
              <span>AI로 일의 흐름을 한 번 바꿔 보는 경험</span>
            </p>
          </aside>
          <p className={styles.disclaimer} role="note">
            이 체험은 답변을 계획과 요청문으로 정리하는 도구입니다. 실제 AI와의 대화는 사용하는 AI 서비스에서 진행합니다.
          </p>
        </Reveal>
      </header>

      <details className="memo">
        <summary>먼저 완성 카드 예시 보기</summary>
        <pre className={styles.template}>{buildResultCard(EXAMPLE_ANSWERS)}</pre>
      </details>

      <noscript>
        <div className={styles.noscript}>
          <h2>JavaScript가 꺼져 있어요</h2>
          <p>질문 목록과 빈 카드 템플릿입니다. 직접 메모해 보세요.</p>
          <ol>
            <li>어디에서 막히나요?</li>
            <li>무엇을 넣나요? (메모·문서·데이터·기타)</li>
            <li>무엇이 나오면 도움이 되나요?</li>
            <li>AI에는 어디까지 맡기나요?</li>
            <li>무엇을 직접 확인하나요?</li>
            <li>결과로 무엇을 하나요?</li>
          </ol>
          <pre className={styles.template}>{`작업 장면: ______
입력 자료: ______
원하는 결과: ______
AI에 맡길 일: ______
내가 확인할 것: ______
첫 실험: ______`}</pre>
        </div>
      </noscript>

      <Reveal>
        <WorkToolForm />
      </Reveal>

      <Reveal as="section" className={styles.principles}>
        <h2 className={styles.principlesTitle}>함께 기억할 원칙</h2>
        <ul className={styles.principleList}>
          <li>AI에 맡길 일과 사람이 판단할 일을 구분한다</li>
          <li>좋은 프롬프트여도 검증이 필요하다</li>
          <li>계산·규칙 검사는 일반 프로그램으로도 가능하다</li>
          <li>생성과 발송·공개·실행을 구분한다</li>
          <li>근거 없는 시간 절감·성과 수치는 쓰지 않는다</li>
        </ul>
      </Reveal>
    </div>
  );
}
