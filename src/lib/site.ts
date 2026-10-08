export const site = {
  name: "Shaula",
  /** Lowercase wordmark as shown in official logo */
  wordmark: "shaula",
  person: "이람다",
  personEn: "Lee Lamda",
  email: "lamda@shaula.kr",
  domain: "shaula.kr",
  url: "https://shaula.kr",
  /** Role line — keep honest, sharpen delivery */
  role: "테크 트랜스레이터 · 바이브코딩 교육 기획자",
  tagline: "어려운 AI와 웹 기술을, 일상과 업무에서 작동하는 도구로.",
  taglineSupport:
    "개념은 익숙한 비유로 번역하고, 구현은 AI와 함께. 아이디어를 실제 배포되는 웹앱으로 만듭니다.",
  footer: "shaula — 이람다의 AI 리터러시 포트폴리오",
  byeolieum: {
    name: "별이음",
    demo: "https://byeolieum.com",
    github: "https://github.com/LamdaLee/Byeolieum",
    summary:
      "흩어진 생각을 연결하고, 아이디어를 제작 프롬프트와 작은 실험으로 이어가는 웹앱",
  },
  pausePonder: {
    name: "Pause&Ponder",
    nameKo: "포즈앤폰더",
    demo: "https://getpauseponder.com",
    github: "https://github.com/LamdaLee/PP",
    punch: "적고. 멈추고. 되돌아보기.",
    summary:
      "생각함에서 시작하는 감정과 돈의 기록 — 충동구매를 잠시 멈추고(Pause), 감정과 소비의 연결을 되돌아보는(Ponder) 개인 보조 도구.",
  },
} as const;

export const nav = [
  { href: "/", label: "홈" },
  { href: "/case", label: "앱 제작 사례" },
  { href: "/try", label: "업무 체험" },
  { href: "/education", label: "교육" },
  { href: "/about", label: "소개" },
] as const;
