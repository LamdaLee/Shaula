export type InputKind = "memo" | "document" | "data" | "other";
export type OutputKind =
  | "draft"
  | "summary"
  | "classify"
  | "checklist"
  | "other";
export type CheckItem =
  | "fact"
  | "missing"
  | "tone"
  | "privacy"
  | "other";

export type WorkToolAnswers = {
  scene: string;
  inputKind: InputKind | "";
  inputOther: string;
  outputKind: OutputKind | "";
  outputOther: string;
  delegate: string;
  checks: CheckItem[];
  checkOther: string;
  nextAction: string;
};

export const emptyAnswers: WorkToolAnswers = {
  scene: "",
  inputKind: "",
  inputOther: "",
  outputKind: "",
  outputOther: "",
  delegate: "",
  checks: [],
  checkOther: "",
  nextAction: "",
};

export const EXAMPLE_ANSWERS: WorkToolAnswers = {
  scene: "회의 직후 할 일을 정리할 때",
  inputKind: "memo",
  inputOther: "",
  outputKind: "draft",
  outputOther: "",
  delegate: "담당자와 기한이 있는 할 일 초안 정리",
  checks: ["fact", "missing"],
  checkOther: "",
  nextAction: "짧은 회의 메모 한 건으로 시험하고 원문과 대조하기",
};

export const INPUT_LABELS: Record<InputKind, string> = {
  memo: "메모",
  document: "문서",
  data: "데이터",
  other: "기타",
};

export const OUTPUT_LABELS: Record<OutputKind, string> = {
  draft: "초안",
  summary: "요약",
  classify: "분류",
  checklist: "체크리스트",
  other: "기타",
};

export const CHECK_LABELS: Record<CheckItem, string> = {
  fact: "사실",
  missing: "누락",
  tone: "표현",
  privacy: "개인정보",
  other: "기타",
};

export function inputLabel(a: WorkToolAnswers): string {
  if (a.inputKind === "other") return a.inputOther.trim() || "입력";
  return a.inputKind ? INPUT_LABELS[a.inputKind] : "입력";
}

export function outputLabel(a: WorkToolAnswers): string {
  if (a.outputKind === "other") return a.outputOther.trim() || "결과";
  return a.outputKind ? OUTPUT_LABELS[a.outputKind] : "결과";
}

export function checksLabel(a: WorkToolAnswers): string {
  const parts = a.checks
    .filter((c) => c !== "other")
    .map((c) => CHECK_LABELS[c]);
  if (a.checks.includes("other") && a.checkOther.trim()) {
    parts.push(a.checkOther.trim());
  }
  return parts.length ? parts.join("·") : "확인 항목";
}

export function buildResultCard(a: WorkToolAnswers): string {
  return [
    `작업 장면: ${a.scene.trim()}`,
    `입력 자료: ${inputLabel(a)}`,
    `원하는 결과: ${outputLabel(a)}`,
    `AI에 맡길 일: ${a.delegate.trim()}`,
    `내가 확인할 것: ${checksLabel(a)}`,
    `첫 실험: ${a.nextAction.trim()}`,
  ].join("\n");
}

export function buildPrompt(a: WorkToolAnswers): string {
  return [
    `작업 상황: ${a.scene.trim()}`,
    `입력 자료: ${inputLabel(a)}`,
    `원하는 결과: ${outputLabel(a)}`,
    "제공한 자료를 바탕으로 위 조건에 맞는 초안을 만들어 주세요.",
    `요청 범위: ${a.delegate.trim()}`,
    "자료에 없는 사실을 추가하지 말고, 불명확한 내용은 ‘확인 필요’로 표시해 주세요.",
    `검토 항목: ${checksLabel(a)}. 원문에서 확인할 부분도 함께 알려 주세요.`,
    "",
    "[민감한 정보를 제거한 자료를 여기에 넣으세요]",
  ].join("\n");
}

/** Only restore the known form fields; storage can be stale or edited. */
export function isWorkToolAnswers(value: unknown): value is WorkToolAnswers {
  if (!value || typeof value !== "object") return false;
  const a = value as Record<string, unknown>;
  const texts = ["scene", "inputOther", "outputOther", "delegate", "checkOther", "nextAction"];
  return texts.every((key) => typeof a[key] === "string") &&
    ["", ...Object.keys(INPUT_LABELS)].includes(String(a.inputKind)) &&
    ["", ...Object.keys(OUTPUT_LABELS)].includes(String(a.outputKind)) &&
    Array.isArray(a.checks) &&
    a.checks.every((item) => typeof item === "string" && Object.hasOwn(CHECK_LABELS, item));
}

export function validateStep(
  step: number,
  a: WorkToolAnswers,
): string | null {
  switch (step) {
    case 1:
      if (!a.scene.trim()) return "이 칸을 채워야 다음으로 갈 수 있어요.";
      if (a.scene.trim().length < 6) {
        return "구체적인 장면으로 조금만 더 적어 주세요. 예: ‘주간 보고를 쓰기 전’";
      }
      return null;
    case 2:
      if (!a.inputKind) return "이 칸을 채워야 다음으로 갈 수 있어요.";
      if (a.inputKind === "other" && !a.inputOther.trim()) {
        return "기타 입력 재료를 적어 주세요.";
      }
      return null;
    case 3:
      if (!a.outputKind) return "이 칸을 채워야 다음으로 갈 수 있어요.";
      if (a.outputKind === "other" && !a.outputOther.trim()) {
        return "기타 출력 형태를 적어 주세요.";
      }
      return null;
    case 4:
      if (!a.delegate.trim()) return "이 칸을 채워야 다음으로 갈 수 있어요.";
      return null;
    case 5:
      if (a.checks.length === 0) return "이 칸을 채워야 다음으로 갈 수 있어요.";
      if (a.checks.includes("other") && !a.checkOther.trim()) {
        return "기타 확인 항목을 적어 주세요.";
      }
      return null;
    case 6:
      if (!a.nextAction.trim()) return "이 칸을 채워야 다음으로 갈 수 있어요.";
      return null;
    default:
      return null;
  }
}
