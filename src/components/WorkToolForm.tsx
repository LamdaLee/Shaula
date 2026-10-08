"use client";

import { useId, useState } from "react";
import {
  EXAMPLE_ANSWERS,
  CHECK_LABELS,
  INPUT_LABELS,
  OUTPUT_LABELS,
  type CheckItem,
  type InputKind,
  type OutputKind,
  type WorkToolAnswers,
  buildResultCard,
  emptyAnswers,
  validateStep,
} from "@/lib/work-tool";
import styles from "./WorkToolForm.module.css";

const TOTAL = 6;

export function WorkToolForm() {
  const formId = useId();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<WorkToolAnswers>(emptyAnswers);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [shareNote, setShareNote] = useState<string | null>(null);

  function update<K extends keyof WorkToolAnswers>(key: K, value: WorkToolAnswers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setError(null);
  }

  function toggleCheck(item: CheckItem) {
    setAnswers((prev) => {
      const has = prev.checks.includes(item);
      return {
        ...prev,
        checks: has
          ? prev.checks.filter((c) => c !== item)
          : [...prev.checks, item],
      };
    });
    setError(null);
  }

  function goNext() {
    const msg = validateStep(step, answers);
    if (msg) {
      setError(msg);
      return;
    }
    if (step < TOTAL) {
      setStep((s) => s + 1);
      setError(null);
      return;
    }
    try {
      const card = buildResultCard(answers);
      setResult(card);
      setCopied(false);
      setShareNote(null);
    } catch {
      setError(
        "카드를 만들지 못했어요. 입력은 이 브라우저에 남아 있으니 다시 시도해 주세요.",
      );
    }
  }

  function goPrev() {
    setError(null);
    if (result) {
      setResult(null);
      return;
    }
    setStep((s) => Math.max(1, s - 1));
  }

  function fillExample() {
    setAnswers(EXAMPLE_ANSWERS);
    setResult(null);
    setStep(1);
    setError(null);
    setCopied(false);
    setShareNote(null);
  }

  function resetAll() {
    setAnswers(emptyAnswers);
    setResult(null);
    setStep(1);
    setError(null);
    setCopied(false);
    setShareNote(null);
  }

  async function copyResult() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setShareNote(null);
    } catch {
      setShareNote("복사에 실패했어요. 아래 텍스트를 직접 선택해 복사해 주세요.");
    }
  }

  async function shareResult() {
    if (!result) return;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "내 업무의 AI 활용 실험",
          text: result,
        });
        setShareNote("공유 창을 열었습니다.");
        return;
      } catch {
        /* user cancel or fail → fall through */
      }
    }
    await copyResult();
    setShareNote("이 환경에서는 공유 대신 클립보드에 복사했습니다.");
  }

  if (result) {
    return (
      <div className={styles.wrap}>
        <article className={styles.card} aria-live="polite">
          <h2 className={styles.cardTitle}>내 업무의 AI 활용 실험</h2>
          <pre className={styles.cardBody}>{result}</pre>
          <p className={styles.disclaimer}>
            이 카드는 입력한 내용을 정리한 것입니다. AI가 생성한 업무 조언이
            아닙니다.
          </p>
          <div className={styles.actions}>
            <button type="button" className="btn" onClick={copyResult}>
              {copied ? "복사됨" : "텍스트 복사"}
            </button>
            <button type="button" className="btn btn--ghost" onClick={shareResult}>
              공유
            </button>
            <button type="button" className="btn btn--memo" onClick={goPrev}>
              다시 작성
            </button>
            <button type="button" className="btn btn--ghost" onClick={resetAll}>
              처음부터
            </button>
          </div>
          {shareNote ? <p className={styles.note}>{shareNote}</p> : null}
        </article>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.progress} role="status" aria-live="polite">
        <span>
          {step}/{TOTAL} 단계
        </span>
        <div
          className={styles.bar}
          aria-hidden="true"
          style={{ ["--p" as string]: `${(step / TOTAL) * 100}%` }}
        />
      </div>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          goNext();
        }}
        noValidate
      >
        <div key={step} className={styles.stepPane}>
        {step === 1 && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>1. 어디에서 막히나요?</legend>
            <label className={styles.label} htmlFor={`${formId}-scene`}>
              작업 장면
            </label>
            <input
              id={`${formId}-scene`}
              className={styles.input}
              value={answers.scene}
              onChange={(e) => update("scene", e.target.value)}
              placeholder="예: 회의 직후 할 일을 정리할 때"
              autoComplete="off"
            />
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>2. 무엇을 넣나요?</legend>
            <div className={styles.choices} role="radiogroup" aria-label="입력 재료">
              {(Object.keys(INPUT_LABELS) as InputKind[]).map((key) => (
                <label key={key} className={styles.choice}>
                  <input
                    type="radio"
                    name="inputKind"
                    checked={answers.inputKind === key}
                    onChange={() => update("inputKind", key)}
                  />
                  {INPUT_LABELS[key]}
                </label>
              ))}
            </div>
            {answers.inputKind === "other" ? (
              <>
                <label className={styles.label} htmlFor={`${formId}-inputOther`}>
                  기타 입력 재료
                </label>
                <input
                  id={`${formId}-inputOther`}
                  className={styles.input}
                  value={answers.inputOther}
                  onChange={(e) => update("inputOther", e.target.value)}
                />
              </>
            ) : null}
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>3. 무엇이 나오면 도움이 되나요?</legend>
            <div className={styles.choices} role="radiogroup" aria-label="출력 형태">
              {(Object.keys(OUTPUT_LABELS) as OutputKind[]).map((key) => (
                <label key={key} className={styles.choice}>
                  <input
                    type="radio"
                    name="outputKind"
                    checked={answers.outputKind === key}
                    onChange={() => update("outputKind", key)}
                  />
                  {OUTPUT_LABELS[key]}
                </label>
              ))}
            </div>
            {answers.outputKind === "other" ? (
              <>
                <label className={styles.label} htmlFor={`${formId}-outputOther`}>
                  기타 출력 형태
                </label>
                <input
                  id={`${formId}-outputOther`}
                  className={styles.input}
                  value={answers.outputOther}
                  onChange={(e) => update("outputOther", e.target.value)}
                />
              </>
            ) : null}
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>4. AI에는 어디까지 맡기나요?</legend>
            <label className={styles.label} htmlFor={`${formId}-delegate`}>
              위임 범위
            </label>
            <textarea
              id={`${formId}-delegate`}
              className={styles.textarea}
              rows={3}
              value={answers.delegate}
              onChange={(e) => update("delegate", e.target.value)}
              placeholder="예: 할 일 초안 정리까지. 발송·확정은 내가."
            />
          </fieldset>
        )}

        {step === 5 && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>5. 무엇을 직접 확인하나요?</legend>
            <div className={styles.choices}>
              {(Object.keys(CHECK_LABELS) as CheckItem[]).map((key) => (
                <label key={key} className={styles.choice}>
                  <input
                    type="checkbox"
                    checked={answers.checks.includes(key)}
                    onChange={() => toggleCheck(key)}
                  />
                  {CHECK_LABELS[key]}
                </label>
              ))}
            </div>
            {answers.checks.includes("other") ? (
              <>
                <label className={styles.label} htmlFor={`${formId}-checkOther`}>
                  기타 확인 항목
                </label>
                <input
                  id={`${formId}-checkOther`}
                  className={styles.input}
                  value={answers.checkOther}
                  onChange={(e) => update("checkOther", e.target.value)}
                />
              </>
            ) : null}
          </fieldset>
        )}

        {step === 6 && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>6. 결과로 무엇을 하나요?</legend>
            <label className={styles.label} htmlFor={`${formId}-next`}>
              다음 행동
            </label>
            <input
              id={`${formId}-next`}
              className={styles.input}
              value={answers.nextAction}
              onChange={(e) => update("nextAction", e.target.value)}
              placeholder="예: 수정한 뒤 팀에 공유"
            />
          </fieldset>
        )}

        </div>

        {error ? (
          <p className={styles.error} role="alert">
            {error}
          </p>
        ) : null}

        <div className={styles.actions}>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={goPrev}
            disabled={step === 1}
          >
            이전
          </button>
          <button type="submit" className="btn">
            {step === TOTAL ? "실험 카드 만들기" : "다음"}
          </button>
        </div>
      </form>

      <div className={styles.helpers}>
        <button type="button" className="btn btn--memo" onClick={fillExample}>
          예시로 채워 보기
        </button>
        <p className={styles.helperText}>
          예시: 회의 메모에서 담당자와 기한이 있는 할 일 초안을 만들고 싶다. AI가
          정리한 결과를 원문과 대조한 뒤 공유한다.
        </p>
      </div>
    </div>
  );
}
