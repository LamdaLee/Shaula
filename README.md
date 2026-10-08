# Shaula

이람다(Lee Lamda)의 AI 리터러시 포트폴리오 사이트 (한국어).

- 도메인: `shaula.kr` (루트 `CNAME` 유지)
- 공개 연락: **lamda@shaula.kr**
- 스택: Next.js App Router + TypeScript (Vercel 배포 가정)

## 페이지

| 경로 | 내용 |
|------|------|
| `/` | 홈 (소개 → 대표 앱 → 써보기 → 교육 → 배경 → 연락) |
| `/case` | Pause & Ponder 사례 |
| `/try` | 업무 활용 지점 찾기 (폼 → 결과 카드, AI API 없음) |
| `/education` | 「AI와 친해지기」 교육 제안/프로그램 설계 |
| `/about` | 소개·연락 |

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Vercel 배포

1. 이 저장소(`LamdaLee/Shaula`)를 Vercel 프로젝트에 연결
2. Framework Preset: Next.js
3. 루트 `CNAME`(`shaula.kr`)은 GitHub Pages용 잔여물 — Vercel에서는 Domains 설정으로 `shaula.kr` / `www`를 붙이면 됩니다
4. 프론트엔드에 API 키를 넣지 마세요 (`NEXT_PUBLIC_` OpenAI 키 금지)

`shaula.kr`이 다른 프로젝트에 이미 붙어 있다면, DNS/프로젝트 연결을 이 저장소 배포로 옮길지 Lamda가 확인해야 합니다.

## Lamda 확인이 필요한 콘텐츠 공백

- Pause & Ponder: 외부 사용자 후기·수치 (의도적으로 없음)
- 교육: 공개용 예시 결과물, 샘플 슬라이드/워크시트
- 소개: 베이킹 비유 자료 공개본, 추가 연락 채널
- 디자인: 손그림 에셋·OG/파비콘 심볼 (현재는 CSS 포인트)

## Pause & Ponder 링크

- 데모: https://pauseponder.vercel.app
- 소스: https://github.com/LamdaLee/PP

화면 캡처는 `public/images/pp/` (계정 이메일 영역 제외·가공). 사이트 본문 연락은 `lamda@shaula.kr`만 사용합니다.
