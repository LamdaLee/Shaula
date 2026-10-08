import type { Metadata } from "next";
import { WorkToolForm } from "@/components/WorkToolForm";
import styles from "./try.module.css";

export const metadata: Metadata = {
  title: "업무 활용 지점 찾기",
  description:
    "막연한 AI 활용 욕구를 입력·출력·검증·다음 행동이 있는 실험 카드로 정리합니다. AI API 없음.",
};

export default function TryPage() {
  return (
    <div className="shell">
      <header className={styles.header}>
        <p className="section__eyebrow">AI 직접 써보기</p>
        <h1 className={styles.title}>내 업무의 AI 활용 지점 찾기</h1>
        <p className={styles.lead}>
          막연한 “AI 쓰고 싶다”를, 입력·출력·검증·다음 행동이 있는 작은
          실험으로 바꿉니다.
        </p>
        <aside className={`memo ${styles.memo}`} aria-label="학습 관점">
          <p style={{ margin: 0 }}>
            <strong>학습 관점:</strong> 필요 발견 → 입력 정리 → 결과 생성 →
            검증 → 수정 → 다음 업무에 활용.
            <br />
            <strong>AX:</strong> AI로 일의 흐름을 한 번 바꿔 보는 경험.
          </p>
        </aside>
        <p className={styles.disclaimer} role="note">
          이 페이지는 AI가 당신의 직무를 평가하지 않습니다. 당신이 적은 답을
          정리한 ‘실험 카드’만 만듭니다. (AI API·직무 적성 판정 없음)
        </p>
      </header>

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
          <pre className={styles.template}>{`내 업무의 AI 활용 실험

나는 ______할 때 어려움을 겪는다.
______을 입력해 ______의 초안을 받아보고 싶다.
AI에는 ______을 맡기고, 나는 ______을 확인한다.
먼저 ______으로 작게 시험한다.`}</pre>
        </div>
      </noscript>

      <WorkToolForm />

      <section className={styles.principles} aria-labelledby="principles">
        <h2 id="principles">함께 기억할 원칙</h2>
        <ul>
          <li>AI에 맡길 일과 사람이 판단할 일을 구분한다</li>
          <li>좋은 프롬프트여도 검증이 필요하다</li>
          <li>계산·규칙 검사는 일반 프로그램으로도 가능하다</li>
          <li>생성과 발송·공개·실행을 구분한다</li>
          <li>근거 없는 시간 절감·성과 수치는 쓰지 않는다</li>
        </ul>
      </section>
    </div>
  );
}
