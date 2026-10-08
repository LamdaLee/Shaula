"use client";

import { useState } from "react";
import styles from "./LearningMaterials.module.css";

export function InputProcessOutputDemo() {
  const [name, setName] = useState("");
  const [result, setResult] = useState<{ input: string; output: string } | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [notice, setNotice] = useState("");
  function run(input: string) {
    setResult({ input, output: input.trim() ? `${input.trim()}님, 반가워요!` : "이름을 입력해 주세요." });
    setConfirmed(false);
    setNotice("");
  }
  const prompt = result ? `이름 입력 기능을 확인하고 싶어. 입력값 ${JSON.stringify(result.input)}에서 기대하는 결과는 ${JSON.stringify(result.output)}야. 앞뒤 공백을 제거하고 빈 입력에는 안내를 보여줘. 기존 디자인을 유지하고, 정상 입력·빈 입력·공백 입력의 확인 예시와 예상 결과도 적어줘.` : "";
  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setNotice("요청문을 복사했습니다.");
    } catch {
      setNotice("아래 요청문을 선택해 직접 복사해 주세요.");
    }
  }
  return <div className={styles.demo}>
    <form onSubmit={(event) => { event.preventDefault(); run(name); }}>
      <label htmlFor="greeting-name">이름</label>
      <div className={styles.inputRow}>
        <input id="greeting-name" value={name} maxLength={80} onChange={(event) => { setName(event.target.value); setResult(null); setConfirmed(false); setNotice(""); }} placeholder="이름을 적어보세요" />
        <button className="btn" type="submit">인사하기</button>
      </div>
    </form>
    <p className={styles.caption}>실행하기 전에 어떤 문장이 나올지 예상해 보세요. 입력한 이름은 저장하거나 외부에 보내지 않습니다.</p>
    <div className="cta-row" aria-label="입력 예시">
      {[{ label: "정상 입력", value: "람다" }, { label: "빈 입력", value: "" }, { label: "공백 입력", value: "   " }].map((example) => <button className="btn btn--ghost" type="button" key={example.label} onClick={() => { setName(example.value); run(example.value); }}>{example.label}</button>)}
      <button className="btn btn--ghost" type="button" onClick={() => { setName(""); setResult(null); setConfirmed(false); setNotice(""); }}>초기화</button>
    </div>
    <div role="status" aria-live="polite" className={styles.result}>
      {result ? <><strong>{result.output}</strong><p>입력을 읽고 → 앞뒤 공백을 없애고 → 이름이 있는지 확인해 문장을 보여줬습니다.</p></> : <p>이름을 입력하거나 예시를 눌러, 화면이 바뀌는 과정을 확인해 보세요.</p>}
    </div>
    {result && <div>
      <label className={styles.confirm}><input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />예상한 결과와 실제 결과를 비교했어요.</label>
      <p className={styles.caption}>숫자나 이모지도 이름으로 받아야 할까요? 이 도구의 목적에 맞게 규칙을 정하는 것은 사람의 몫입니다.</p>
      {confirmed && <details><summary>AI에게 전달할 확인 요청문</summary><p className={styles.prompt}>{prompt}</p><button type="button" className="btn btn--ghost" onClick={copy}>요청문 복사</button><p role="status">{notice}</p></details>}
    </div>}
  </div>;
}
