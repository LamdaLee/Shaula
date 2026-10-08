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
  role: "기술을 쉽게 풀어내는 콘텐츠 제작자",
  tagline: "생각을 적고, AI와 함께 필요한 도구를 만듭니다.",
  taglineSupport:
    "흩어진 생각, 잠깐 멈추고 싶은 마음, 어렵게 느껴지는 기술에 관심이 있습니다. AI와 함께 작은 도구를 만들고, 그 과정에서 알게 된 것을 쉬운 말로 나눕니다.",
  footer: "shaula — 이람다의 생각과 만드는 일",
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
  { href: "/case", label: "만드는 것들" },
  { href: "/try", label: "업무 체험" },
  { href: "/education", label: "쉽게 풀어보기" },
  { href: "/about", label: "소개" },
] as const;
