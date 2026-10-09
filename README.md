# Shaula — 이람다의 생각과 만드는 일

**어려운 기술을 쉽게 풀고, 필요한 도구를 직접 만듭니다.**

교육 운영을 하며 AI와 함께 웹앱을 만드는 이람다(Lee Lamda)의 한국어 포트폴리오입니다. 직접 만든 도구, 기술을 쉽게 설명하는 자료, 준비 중인 AI 리터러시 교육 방향을 소개합니다.

**[사이트 보기](https://shaula.kr)** · **[만드는 것들](https://shaula.kr/case)** · **[AI 교육](https://shaula.kr/education)** · **[연락: lamda@shaula.kr](mailto:lamda@shaula.kr)**

[![얽힌 생각이 하나의 길로 이어지는 Shaula 브랜드 이미지](public/brand/hero-chaos-to-clarity.png)](https://shaula.kr)

## 무엇을 보여주나요?

- **만들기:** Pause & Ponder와 모아틀을 만들며 생활 속 불편을 기능으로 옮긴 과정.
- **설명하기:** 케이크 만들기 등 익숙한 경험으로 변수·함수와 입력·처리·출력을 풀어낸 자료.
- **확인하기:** AI가 제안한 결과를 사람이 선택하고, 실제 동작과 확인 기준에 비춰 고치는 작업 방식.
- **교육 방향:** AI에게 질문하는 데서 그치지 않고 작은 기능을 만들고 결과를 판단하는 프로젝트 학습.

교육 운영과 기초 웹 교육 경험을 바탕으로 콘텐츠를 다듬고 있습니다. AI 교육의 10회·16회 과정은 **준비 중인 구성안**입니다. 이 저장소의 샘플 교안과 실습을 해당 과정의 운영 실적이나 수강생 성과로 소개하지 않습니다. 50분은 회차의 길이이며 전체 웹앱 완성·배포를 보장하는 시간이 아닙니다.

## 페이지와 읽는 순서

| 경로 | 내용 |
| --- | --- |
| [`/`](https://shaula.kr/) | 자기소개 → 만들기·설명하기·확인하기 → AI와 함께하는 태도 → 교육 방향 |
| [`/case`](https://shaula.kr/case) | 두 프로젝트 소개, 같은 페이지에서 읽는 모아틀 예시, Pause & Ponder 상세 기록 |
| [`/case#moateul`](https://shaula.kr/case#moateul) | 모아틀의 제작 이유와 생각 카드 → 아이디어 → 제작 요청문 예시 |
| [`/case/moateul`](https://shaula.kr/case/moateul) | 모아틀의 이름·기획·기술 구조·현재와 다음에 대한 자세한 기록 |
| [`/education`](https://shaula.kr/education) | AI 교육 방향, 준비 중인 10회·16회 구성안, 설명 자료·실습·활동지 |
| [`/try`](https://shaula.kr/try) | 6개 질문으로 업무 실험 카드와 AI 요청문 만들기 |
| [`/about`](https://shaula.kr/about) | 기술을 바라보는 관점, 관련 경험, 연락처 |

홈은 소개와 실제 활동을 짧게 보여줍니다. 앱 상세와 화면은 ‘만드는 것들’에 모았고, 모아틀 자료는 외부 앱으로 이동하지 않고도 읽을 수 있습니다.

## 소개하는 별도 프로젝트

| 프로젝트 | 만드는 이유와 기능 | 앱 | 소스 |
| --- | --- | --- | --- |
| Pause & Ponder | 먼저 적는 마음함과 결정을 미루는 자리를 나눠, 감정·소비를 되돌아보는 개인 보조 도구 | [getpauseponder.com](https://getpauseponder.com) | [LamdaLee/PP](https://github.com/LamdaLee/PP) |
| 모아틀 | 흩어진 생각을 카드로 남기고 연결해, 아이디어·제작 프롬프트·작은 실험으로 이어가는 도구 | 주소 변경 준비 중 · 링크 비공개 | 링크 비공개 |

두 앱은 **별도 저장소의 제품**입니다. Shaula는 그 배경과 제작 과정을 소개하는 포트폴리오이며, 두 앱의 데이터베이스·로그인·AI API를 이 저장소에서 실행하지 않습니다. 모아틀은 배포된 프로토타입을 개선 중이며 서비스명·도메인 변경을 준비하고 있습니다. 포트폴리오에는 새 이름을 먼저 적용하고 기존 앱·저장소 링크와 실제 화면 이미지를 노출하지 않습니다. 예시는 설명용 카드 흐름으로 제공합니다.

## 이 저장소에서 직접 해볼 수 있는 것

- **업무 체험:** 6개 질문 → 업무 실험 카드 → 다른 AI 서비스에 전달할 요청문. 외부 AI 모델을 호출하는 기능은 아닙니다.
- **입력·처리·출력 체험:** 이름 입력·빈 입력·공백 입력을 비교하고, 예상과 실제 결과를 확인한 뒤 요청문을 복사합니다. 이름은 저장하거나 외부로 보내지 않습니다.
- **요약 검증 활동:** 원문과 학습용 요약을 비교해 근거·누락·오류를 찾아봅니다.
- **첫 API 실습:** [`/examples/api-lab.html`](https://shaula.kr/examples/api-lab.html)에서 같은 사이트의 정적 JSON 요청, HTTP 404, 재시도를 확인합니다. 외부 AI API 호출은 없습니다.
- **API·DB 샘플 활동지:** [`/education#worksheets`](https://shaula.kr/education#worksheets)에서 HTML·PNG·PDF로 볼 수 있습니다. DB 활동지는 실습 구성안이며, 포트폴리오에 연결된 실제 DB 체험이 아닙니다.
- **목표 입력 예시:** [`/examples/goal-page.html`](https://shaula.kr/examples/goal-page.html)에서 입력과 빈 값 처리를 확인합니다. 입력은 저장하지 않습니다.

업무 체험 답변은 같은 탭의 `sessionStorage`에 임시 보관하며, ‘기록 지우고 처음부터’로 삭제할 수 있습니다. 체험 답변을 서버에 저장하는 기능은 없습니다. 활동지의 직접 입력도 저장·전송하지 않습니다.

## 기술과 실행

- Next.js **16.4.0** App Router · React **19.3.0** · TypeScript
- CSS Modules와 공통 CSS, 정적 페이지 및 필요한 부분의 클라이언트 상호작용
- 로컬 Pretendard 글꼴: `src/fonts/` — 빌드에 외부 글꼴 요청이 필요하지 않습니다.
- 운영 배포: **Vercel**, https://shaula.kr
- 최근 개발·빌드 확인 환경: **Node.js 24**

```bash
npm ci
npm run dev
```

개발 서버는 기본적으로 http://localhost:3000 에서 열립니다.

운영 빌드 실행:

```bash
npm run build
npm start
```

이 포트폴리오의 현재 기능을 실행하는 데 OpenAI·Supabase 키나 별도 DB 설정은 필요하지 않습니다.

## 검증

```bash
npm run lint
npm run build
```

기존 브라우저 검사는 Python의 Playwright 패키지와 Chromium이 필요합니다. 기본 Chromium 경로는 `/usr/bin/chromium`이며, 다른 위치에서는 `SHAULA_CHROMIUM`으로 지정합니다.

먼저 터미널 하나에서 운영 서버를 실행합니다.

```bash
npm start -- --hostname 127.0.0.1 --port 3317
```

다른 터미널에서 검사합니다.

```bash
SHAULA_TEST_URL=http://127.0.0.1:3317 python tests/portfolio-browser.py
```

검사 범위: 320·390·1440px의 페이지 이동과 가로 넘침, 모아틀 소개의 페이지 내 이동, 업무 체험 복원, 입력 조건·초기화·요청문 복사, 활동지 파일, API 성공·404·재시도.

활동지 출력물을 다시 만들려면 Python Playwright와 Chromium이 준비된 환경에서 `python scripts/export-worksheets.py`를 사용합니다.

## 배포

현재 GitHub 저장소의 `main` 변경은 연결된 Vercel 프로젝트에서 배포합니다. 새 Vercel 프로젝트에 연결한다면 Framework Preset은 Next.js이며, 도메인은 Vercel의 Domains 설정에서 연결합니다. 루트의 `CNAME`은 GitHub Pages용 파일이며 Vercel 도메인 설정을 대신하지 않습니다.

## 연락

**이람다 · [lamda@shaula.kr](mailto:lamda@shaula.kr)**

AI 리터러시 콘텐츠, 기술을 쉽게 설명하는 자료, 생활 속 문제를 풀어보는 작은 웹 프로젝트에 관해 이야기할 수 있습니다.

글꼴 라이선스는 [src/fonts/LICENSE](src/fonts/LICENSE)에 있습니다. 저장소 전체에 적용되는 별도 사용·재배포 라이선스는 현재 지정하지 않았습니다.
