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
npm ci
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

## 체험과 교육

- 업무 체험: 6개 질문 → 실험 카드 → AI에 전달할 요청문 템플릿. 외부 AI API를 호출하지 않습니다.
- 답변은 같은 탭의 `sessionStorage`에 임시 보관합니다. ‘기록 지우고 처음부터’로 삭제할 수 있습니다. 서버로 보내지 않습니다.
- 교육: 웹페이지 입문 10회와 웹앱 제작 16회, 각 50분의 기획안입니다. 운영 실적과 구분합니다.
- `/examples/goal-page.html`: 입력·빈 값·연속 입력을 시험하는 교육용 예시입니다. 입력은 저장하지 않습니다.
- 교육 샘플 활동: 원문과 학습용 요약을 비교해 근거·누락·오류를 확인합니다.
- 로컬 Pretendard 글꼴과 라이선스는 `src/fonts/`에 있습니다. 빌드에 외부 글꼴 서버가 필요하지 않습니다.

## 확인

```bash
npm run lint
npm run build
```

앱을 실행한 뒤 PC·모바일에서 페이지 이동, 빈 입력, 예시 카드, 새로고침 복원, 기록 삭제, 복사 실패·공유 취소, 키보드 메뉴, 교육 퀴즈를 확인하세요. 공개 배포에서는 외부 앱 링크와 메일 수신도 별도로 확인합니다.

## 추가 콘텐츠

Pause & Ponder의 외부 사용자 피드백, 실제 교육 운영 결과, 베이킹 비유 자료 공개본은 확보 후 추가합니다. 확인되지 않은 후기나 수치를 만들지 않습니다.

## Pause & Ponder 링크

- 데모: https://getpauseponder.com
- 소스: https://github.com/LamdaLee/PP

화면 캡처는 `public/images/pp/` (계정 이메일 영역 제외·가공). 사이트 본문 연락은 `lamda@shaula.kr`만 사용합니다.
