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
  role: "어려운 것을 쉽게 전달해 주는 사람",
  tagline: "어려운 AI를, 일상과 업무에서 쓸 수 있게.",
  taglineSupport:
    "교육을 운영하고 웹앱을 만들며, 막연한 필요를 작은 실험으로 바꿉니다.",
  footer: "shaula — 이람다의 AI 리터러시 포트폴리오",
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
