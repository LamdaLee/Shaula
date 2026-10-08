"use client";

import { useState } from "react";
import styles from "./EducationActivity.module.css";

type Verdict = "supported" | "missing" | "contradicted";
const LABELS: Record<Verdict, string> = { supported: "근거 있음", missing: "확인 필요", contradicted: "원문과 다름" };
const QUESTIONS: { id: string; statement: string; answer: Verdict; explain: string }[] = [
  { id: "q1", statement: "스터디는 10월 15일 오후 2시에 온라인으로 진행됩니다.", answer: "supported", explain: "날짜·시간·진행 방식이 원문에 모두 있습니다." },
  { id: "q2", statement: "자료 제출 기한은 10월 14일입니다.", answer: "contradicted", explain: "원문은 제출 기한을 아직 정하지 않았다고 했습니다. 임의의 기한을 확정하면 안 됩니다." },
  { id: "q3", statement: "참여자는 총 12명입니다.", answer: "missing", explain: "원문에 인원 정보가 없습니다. 추가 자료나 담당자 확인이 필요합니다." },
];

export function EducationActivity() {
  const [picked, setPicked] = useState<Record<string, Verdict>>({});
  const [revealed, setRevealed] = useState(false);
  return (
    <div className={styles.wrap}>
      <aside className="memo" aria-label="검증에 사용할 원문">
        <strong>원문 · 가상의 회의 메모</strong>
        <p>스터디 모임은 10월 15일 오후 2시에 온라인으로 진행한다. 자료 제출 기한은 아직 정하지 않았다.</p>
      </aside>
      <p>아래는 오류를 포함한 학습용 요약입니다. 실제 AI 호출 결과는 아닙니다. 문장마다 원문에서 근거를 찾아보세요.</p>
      {QUESTIONS.map((q) => (
        <fieldset key={q.id} className={styles.card}>
          <legend className={styles.legend}>요약 문장 {q.id.slice(1)}</legend>
          <p className={styles.statement}>{q.statement}</p>
          <div className={styles.choices}>
            {(Object.keys(LABELS) as Verdict[]).map((value) => (
              <label key={value} className={styles.choice}>
                <input type="radio" name={q.id} checked={picked[q.id] === value} onChange={() => setPicked((prev) => ({ ...prev, [q.id]: value }))} disabled={revealed} />
                {LABELS[value]}
              </label>
            ))}
          </div>
          {revealed ? <p className={picked[q.id] === q.answer ? styles.ok : styles.miss} role="status">
            {picked[q.id] === q.answer ? "맞았어요." : "다시 살펴보세요."} 정답: {LABELS[q.answer]}. {q.explain}
          </p> : null}
        </fieldset>
      ))}
      <div className={styles.actions}>
        <button type="button" className="btn" onClick={() => setRevealed(true)} disabled={revealed || QUESTIONS.some((q) => !picked[q.id])}>근거와 풀이 확인</button>
        <button type="button" className="btn btn--ghost" onClick={() => { setRevealed(false); setPicked({}); }}>다시 풀기</button>
      </div>
      <p className={styles.note}>다음 행동: 근거가 있는 문장만 남기고, 미정인 기한과 인원은 확인 질문으로 바꿔보세요.</p>
    </div>
  );
}
