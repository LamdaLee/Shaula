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
  nextAction: "원문과 대조한 뒤 공유한다",
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
    "내 업무의 AI 활용 실험",
    "",
    `나는 ${a.scene.trim()}할 때 어려움을 겪는다.`,
    `${inputLabel(a)}을(를) 입력해 ${outputLabel(a)}의 초안을 받아보고 싶다.`,
    `AI에는 ${a.delegate.trim()}을(를) 맡기고, 나는 ${checksLabel(a)}을(를) 확인한다.`,
    `먼저 ${a.nextAction.trim()}으로 작게 시험한다.`,
    "",
    "— 이 카드는 입력한 내용을 정리한 것입니다. AI가 생성한 업무 조언이 아닙니다.",
  ].join("\n");
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
