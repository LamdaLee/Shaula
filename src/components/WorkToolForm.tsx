"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
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
  buildPrompt,
  isWorkToolAnswers,
  emptyAnswers,
  validateStep,
} from "@/lib/work-tool";
import styles from "./WorkToolForm.module.css";

const TOTAL = 6;
const STORAGE_KEY = "shaula-work-experiment-v1";

export function WorkToolForm() {
  const formId = useId();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<WorkToolAnswers>(emptyAnswers);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [shareNote, setShareNote] = useState<string | null>(null);

  const [storageReady, setStorageReady] = useState(false);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const paneRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);
  const moveFocus = useRef(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (raw) {
          let saved;
          try {
            saved = JSON.parse(raw);
          } catch {
            sessionStorage.removeItem(STORAGE_KEY);
          }
          if (!saved || typeof saved !== "object") {
            setStorageReady(true);
            return;
          }
          if (isWorkToolAnswers(saved.answers)) {
            setAnswers(saved.answers);
            const restoredStep = Number.isInteger(saved.step)
              ? Math.min(TOTAL, Math.max(1, saved.step))
              : 1;
            setStep(restoredStep);
            if (
              saved.completed &&
              Array.from({ length: TOTAL }, (_, i) =>
                validateStep(i + 1, saved.answers),
              ).every((message) => message === null)
            ) {
              setResult(buildResultCard(saved.answers));
            }
          }
        }
      } catch {
        setStorageAvailable(false);
      }
      setStorageReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers, step, completed: result !== null }),
      );
    } catch {
      queueMicrotask(() => setStorageAvailable(false));
    }
  }, [answers, step, result, storageReady]);

  useEffect(() => {
    if (!moveFocus.current) return;
    moveFocus.current = false;
    (result ? resultRef.current : paneRef.current)?.focus();
  }, [step, result]);

  const storageNotice = (
    <p className={styles.helperText}>
      {storageAvailable
        ? "답변은 이 탭에 임시 보관됩니다. 새로고침 후 이어 쓸 수 있고 서버로 전송하지 않습니다."
        : "이 환경에서는 임시 저장이 불가능합니다. 새로고침 전에 결과를 복사해 주세요."}{" "}
      민감한 업무자료는 적지 마세요.
    </p>
  );

  function update<K extends keyof WorkToolAnswers>(
    key: K,
    value: WorkToolAnswers[K],
  ) {
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
    moveFocus.current = true;
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
        "카드를 만들지 못했어요. 현재 화면의 입력은 유지되니 다시 시도해 주세요.",
      );
    }
  }

  function goPrev() {
    moveFocus.current = true;
    setShowPrompt(false);
    setError(null);
    if (result) {
      setResult(null);
      return;
    }
    setStep((s) => Math.max(1, s - 1));
  }

  function fillExample() {
    moveFocus.current = true;
    paneRef.current?.focus();
    setShowPrompt(false);
    setAnswers(EXAMPLE_ANSWERS);
    setResult(null);
    setStep(1);
    setError(null);
    setCopied(false);
    setShareNote(null);
  }

  function resetAll() {
    moveFocus.current = true;
    paneRef.current?.focus();
    setShowPrompt(false);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* saving may be blocked */
    }
    setAnswers(emptyAnswers);
    setResult(null);
    setStep(1);
    setError(null);
    setCopied(false);
    setShareNote(null);
  }

  async function copyText(text: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text === result);
      setShareNote("클립보드에 복사했습니다.");
      return true;
    } catch {
      setCopied(false);
      setShareNote(
        "복사에 실패했어요. 아래 텍스트를 직접 선택해 복사해 주세요.",
      );
      return false;
    }
  }

  async function copyResult() {
    if (result) await copyText(result);
  }

  async function shareResult() {
    if (!result) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "내 업무의 AI 활용 실험",
          text: result,
        });
        setShareNote("공유했습니다.");
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          setShareNote("공유를 취소했습니다.");
        } else {
          setShareNote("공유하지 못했습니다. 텍스트 복사를 이용해 주세요.");
        }
      }
      return;
    }
    if (await copyText(result)) {
      setShareNote("이 환경에서는 공유 대신 클립보드에 복사했습니다.");
    }
  }

  if (result) {
    return (
      <div className={styles.wrap}>
        <article className={styles.card} aria-live="polite">
          <h2 ref={resultRef} tabIndex={-1} className={styles.cardTitle}>
            내 업무의 AI 활용 실험
          </h2>
          <pre className={styles.cardBody}>{result}</pre>
          <p className={styles.disclaimer}>
            이 카드는 입력한 내용을 정리한 것입니다. AI가 생성한 업무 조언이
            아닙니다.
          </p>
          <div className={styles.actions}>
            <button type="button" className="btn" onClick={copyResult}>
              {copied ? "복사됨" : "텍스트 복사"}
            </button>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={shareResult}
            >
              공유
            </button>
            <button type="button" className="btn btn--memo" onClick={goPrev}>
              다시 작성
            </button>
            <button type="button" className="btn btn--ghost" onClick={resetAll}>
              기록 지우고 처음부터
            </button>
          </div>
          {shareNote ? (
            <p className={styles.note} role="status">
              {shareNote}
            </p>
          ) : null}
          <hr />
          <h3>이제 작은 실험을 해보세요</h3>
          <p>
            민감한 정보를 제거한 자료 한 건으로 요청하고, 결과를 원문과 비교해
            보세요.
          </p>
          <button
            type="button"
            className="btn btn--ghost"
            aria-expanded={showPrompt}
            onClick={() => setShowPrompt((value) => !value)}
          >
            {showPrompt ? "요청문 접기" : "이 계획으로 요청문 만들기"}
          </button>
          {showPrompt ? (
            <div className={styles.prompt}>
              <h3>AI에 전달할 요청문 초안</h3>
              <pre className={styles.cardBody}>{buildPrompt(answers)}</pre>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => copyText(buildPrompt(answers))}
              >
                요청문 복사
              </button>
              <p className={styles.helperText}>
                입력 내용을 템플릿에 넣은 초안입니다. 사용할 AI에서 직접
                실행하고 결과를 확인하세요.
              </p>
            </div>
          ) : null}
          <section
            className={styles.educationCta}
            aria-labelledby="next-learning-title"
          >
            <p className="section__eyebrow">요청한 다음에는, 직접 확인하기</p>
            <h3 id="next-learning-title">어떤 결과가 나오면 잘 작동한 걸까요?</h3>
            <p>빠진 조건은 없는지, 실제 자료와 맞는지, 사람이 결정해야 할 부분이 남아 있는지 살펴보세요. 작은 화면 하나로 확인하는 과정을 해볼 수 있습니다.</p>
            <div className="cta-row">
              <Link className="btn" href="/education#input-process-output">작은 실습으로 확인해 보기</Link>
            </div>
          </section>
          {storageNotice}
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
        aria-describedby={error ? `${formId}-error` : undefined}
        noValidate
      >
        <div
          key={step}
          ref={paneRef}
          tabIndex={-1}
          className={styles.stepPane}
          role="group"
          aria-labelledby={`${formId}-question`}
        >
          {step === 1 && (
            <fieldset className={styles.fieldset}>
              <legend id={`${formId}-question`} className={styles.legend}>
                1. 어디에서 막히나요?
              </legend>
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
              <legend id={`${formId}-question`} className={styles.legend}>
                2. 무엇을 넣나요?
              </legend>
              <div
                className={styles.choices}
                role="radiogroup"
                aria-label="입력 재료"
              >
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
                  <label
                    className={styles.label}
                    htmlFor={`${formId}-inputOther`}
                  >
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
              <legend id={`${formId}-question`} className={styles.legend}>
                3. 무엇이 나오면 도움이 되나요?
              </legend>
              <div
                className={styles.choices}
                role="radiogroup"
                aria-label="출력 형태"
              >
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
                  <label
                    className={styles.label}
                    htmlFor={`${formId}-outputOther`}
                  >
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
              <legend id={`${formId}-question`} className={styles.legend}>
                4. AI에는 어디까지 맡기나요?
              </legend>
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
              <legend id={`${formId}-question`} className={styles.legend}>
                5. 무엇을 직접 확인하나요?
              </legend>
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
                  <label
                    className={styles.label}
                    htmlFor={`${formId}-checkOther`}
                  >
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
              <legend id={`${formId}-question`} className={styles.legend}>
                6. 먼저 어떤 작은 실험을 하나요?
              </legend>
              <label className={styles.label} htmlFor={`${formId}-next`}>
                첫 실험
              </label>
              <input
                id={`${formId}-next`}
                className={styles.input}
                value={answers.nextAction}
                onChange={(e) => update("nextAction", e.target.value)}
                placeholder="예: 짧은 회의 메모 한 건으로 시험하고 원문과 비교"
              />
            </fieldset>
          )}
        </div>

        {error ? (
          <p id={`${formId}-error`} className={styles.error} role="alert">
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

      {storageNotice}
      <div className={styles.helpers}>
        <div className={styles.actions}>
          <button type="button" className="btn btn--memo" onClick={fillExample}>
            예시로 채워 보기
          </button>
          <button type="button" className="btn btn--ghost" onClick={resetAll}>
            기록 지우고 처음부터
          </button>
        </div>
        <p className={styles.helperText}>
          예시: 회의 메모에서 담당자와 기한이 있는 할 일 초안을 만들고 싶다.
          AI가 정리한 결과를 원문과 대조한 뒤 공유한다.
        </p>
      </div>
    </div>
  );
}
