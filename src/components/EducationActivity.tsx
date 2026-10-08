"use client";

import { useState } from "react";
import styles from "./EducationActivity.module.css";

type Q = {
  id: string;
  prompt: string;
  statement: string;
  answer: "fact" | "guess";
  explain: string;
};

const QUESTIONS: Q[] = [
  {
    id: "q1",
    prompt: "다음 문장은 사실일까요, 추측일까요?",
    statement: "이 문장에는 ‘내일은 분명히 비가 올 것이다’라고 적혀 있다.",
    answer: "fact",
    explain: "문서/화면에 적힌 내용이 있다는 것은 확인할 수 있는 사실입니다.",
  },
  {
    id: "q2",
    prompt: "다음 문장은 사실일까요, 추측일까요?",
    statement: "AI가 요약했으니 이 회의록에는 빠진 결정 사항이 없다.",
    answer: "guess",
    explain:
      "누락 여부는 원문과 대조하기 전에는 추측입니다. 검증이 필요합니다.",
  },
];

export function EducationActivity() {
  const [picked, setPicked] = useState<Record<string, "fact" | "guess" | null>>(
    () => Object.fromEntries(QUESTIONS.map((q) => [q.id, null])),
  );
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={styles.wrap}>
      {QUESTIONS.map((q) => (
        <fieldset key={q.id} className={styles.card}>
          <legend className={styles.legend}>{q.prompt}</legend>
          <p className={styles.statement}>“{q.statement}”</p>
          <div className={styles.choices}>
            <label className={styles.choice}>
              <input
                type="radio"
                name={q.id}
                checked={picked[q.id] === "fact"}
                onChange={() =>
                  setPicked((p) => ({ ...p, [q.id]: "fact" }))
                }
                disabled={revealed}
              />
              사실
            </label>
            <label className={styles.choice}>
              <input
                type="radio"
                name={q.id}
                checked={picked[q.id] === "guess"}
                onChange={() =>
                  setPicked((p) => ({ ...p, [q.id]: "guess" }))
                }
                disabled={revealed}
              />
              추측
            </label>
          </div>
          {revealed ? (
            <p
              className={
                picked[q.id] === q.answer ? styles.ok : styles.miss
              }
              role="status"
            >
              정답: {q.answer === "fact" ? "사실" : "추측"}. {q.explain}
            </p>
          ) : null}
        </fieldset>
      ))}
      <div className={styles.actions}>
        <button
          type="button"
          className="btn"
          onClick={() => setRevealed(true)}
          disabled={revealed || Object.values(picked).some((v) => v == null)}
        >
          정답 보기
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setRevealed(false);
            setPicked(
              Object.fromEntries(QUESTIONS.map((q) => [q.id, null])),
            );
          }}
        >
          다시
        </button>
      </div>
      <p className={styles.note}>
        수업에서는 함께 더 깊게 갑니다. 교육 후기·성과 수치는 없습니다.
      </p>
    </div>
  );
}
