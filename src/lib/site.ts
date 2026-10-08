export const site = {
  name: "Shaula",
  person: "이람다",
  personEn: "Lee Lamda",
  email: "lamda@shaula.kr",
  domain: "shaula.kr",
  url: "https://shaula.kr",
  tagline: "어려운 AI를, 일상과 업무에서 쓸 수 있는 언어로.",
  footer: "Shaula — 이람다의 AI 리터러시 포트폴리오",
  pausePonder: {
    name: "Pause&Ponder",
    nameKo: "포즈앤폰더",
    demo: "https://pauseponder.vercel.app",
    github: "https://github.com/LamdaLee/PP",
    summary:
      "생각함에서 시작하는 감정과 돈의 기록 — 충동구매를 잠시 멈추고(Pause), 감정과 소비의 연결을 되돌아보는(Ponder) 개인 보조 도구.",
  },
} as const;

export const nav = [
  { href: "/", label: "홈" },
  { href: "/case", label: "사례" },
  { href: "/try", label: "써보기" },
  { href: "/education", label: "교육" },
  { href: "/about", label: "소개" },
] as const;
