import type { Metadata } from "next";
import Image from "next/image";
import { EducationActivity } from "@/components/EducationActivity";
import { TechTranslation } from "@/components/TechTranslation";
import { LearningMaterials } from "@/components/LearningMaterials";
import { InputProcessOutputDemo } from "@/components/InputProcessOutputDemo";
import styles from "./education.module.css";

export const metadata: Metadata = {
  title: "AI 교육 · 이해하고 만들며 확인하기",
  description:
    "교육 운영과 기초 웹 교육 경험에서 출발한 AI 리터러시 교육 방향, 준비 중인 프로젝트 학습 구성과 실습 자료",
  alternates: { canonical: "/education" },
};
const life = [
  "경험 카드와 공개할 이야기 정하기",
  "AI의 추측과 나의 사실 구분하기",
  "HTML로 소개·강점·꿈의 구조 만들기",
  "CSS로 나다운 색과 배치 정하기",
  "버튼과 입력으로 작은 상호작용 만들기",
  "개인 기능 하나 구체화하기",
  "전화교환원 비유로 첫 API 요청하기",
  "모바일과 빈 입력 직접 시험하기",
  "준비된 배포 환경에서 공개 링크 만들기",
  "제작 과정과 나의 다음 목표 정리하기",
];
const webapp = [
  "내 소개 페이지 열기",
  "색과 카드 모양 바꾸기",
  "버튼에 반응 주기",
  "입력한 목표 보여주기",
  "목표 목록 만들기",
  "완료와 삭제 구현하기",
  "새로고침 후 기록 유지하기",
  "개발 서버 실행하고 종료하기",
  "변경 기록하고 되돌리기",
  "오류 하나 재현하고 고치기",
  "API에서 데이터 가져오기",
  "데이터베이스에 회고 저장하기",
  "사용자별 기록 구분하기",
  "AI 회고 질문 연결하기",
  "다른 기기에서 앱 열기",
  "사용자와 시험하고 개선하기",
];
export default function EducationPage() {
  return (
    <div className="shell">
      <header className="page-header">
        <p className="section__eyebrow">AI LITERACY · 교육과 콘텐츠</p>
        <h1 className="page-title">AI를 이해하고,<br />만들면서 확인하기.</h1>
        <p className="page-lead">교육 운영과 JavaScript·HTML/CSS 기초 교육을 경험했습니다. 이제는 AI와 함께 작은 결과물을 만들고, 나온 답을 스스로 판단할 수 있는 AI 리터러시 교육으로 이어가고 싶습니다. 기존 설명 자료를 다듬으며 프로젝트 학습 구성과 짧은 실습을 준비하고 있습니다.</p>
      </header>
      <section id="approach" className={styles.block}>
        <h2 className={styles.h2}>처음 시작하는 사람의 눈높이에서</h2>
        <p className={styles.body}>무엇을 요청해야 할지 막막하거나, 오류 한 줄에 멈추는 사람도 시작할 수 있도록. 개념을 길게 듣기보다 작은 과제를 풀며 구조를 이해하는 방향을 생각하고 있습니다.</p>
        <dl className={styles.learningGoals}>
          <div><dt>이해하기</dt><dd>익숙한 비유로 입력·처리·저장·배포의 구조 살펴보기</dd></div>
          <div><dt>만들기</dt><dd>AI와 기능 하나를 구현하고, 직접 바꿔보기</dd></div>
          <div><dt>판단하기</dt><dd>예상과 실제 결과를 비교하고, 사람이 결정할 조건 정하기</dd></div>
        </dl>
      </section>
      <section id="programs" className={styles.block}>
        <p className="section__eyebrow">프로젝트 학습 · 준비 중인 구성안</p>
        <h2 className={styles.h2}>작은 과제를 하나씩, 50분씩.</h2>
        <p className={styles.body}>긴 영상보다 함께 풀이하고 구현하는 과정을 구상하고 있습니다. 아래는 준비 중인 구성안이며, 아직 운영한 AI 교육 프로그램은 아닙니다.</p>
        <div className={styles.programGrid}>
          <section id="life" className={styles.programCard}>
            <span className="badge">입문 구성안 · 10회 × 50분</span>
            <h3>나의 일상을 담은 인터랙티브 웹페이지</h3>
            <p>나의 경험·강점·꿈을 정리하고, HTML/CSS와 작은 상호작용으로 표현합니다. AI의 추측과 나의 사실을 구분하며 개인 기능 하나를 더해봅니다.</p>
            <details><summary>10회 작은 과제 살펴보기</summary><ol className={styles.sessions}>
              {life.map((item, i) => <li className={styles.session} key={item}><span className={styles.sessionNum}>{i + 1}</span>{item}</li>)}
            </ol></details>
          </section>
          <section id="webapp" className={styles.programCard}>
            <span className="badge badge--sky">웹앱 구성안 · 16회 × 50분</span>
            <h3>생각모음부터 배포까지</h3>
            <p>Pause &amp; Ponder와 모아틀 제작에서 배운 입력·연결·저장 구조를 바탕으로, 나만의 작은 웹앱에 기능을 붙이고 시험해봅니다. 터미널·API·DB·배포 개념도 필요한 순간에 연결합니다.</p>
            <details><summary>16회 작은 과제 살펴보기</summary><ol className={styles.sessions}>
              {webapp.map((item, i) => <li className={styles.session} key={item}><span className={styles.sessionNum}>{i + 1}</span>{item}</li>)}
            </ol></details>
          </section>
        </div>
        <p className={`memo ${styles.rhythm}`}><span className={styles.rhythmLabel}>한 회차에 남기고 싶은 것</span>만든 기능 하나 · 직접 확인한 결과 · 작동 원리를 설명하는 한 문장</p>
        <p className={styles.note}>50분은 회차의 길이입니다. 설치와 계정 준비, 실습 범위는 따로 점검하며, 한 회차에 전체 웹앱 완성이나 배포를 보장하지 않습니다.</p>
        <div className="cta-row"><a className="btn btn--ghost" href="#materials">기존 설명 자료 보기</a><a className="btn btn--ghost" href="#worksheets">샘플 활동지 보기</a></div>
      </section>
      <section id="materials" className={styles.block}>
        <h2 className={styles.h2}>경험에서 출발한 설명 자료</h2>
        <p className={styles.body}>케이크 만들기와 자동차처럼 익숙한 대상에서 출발했습니다. 쉽게 전달하면서도 실제 구조와 어긋나지 않도록, 설명을 계속 다듬고 있습니다.</p>
        <LearningMaterials />
      </section>
      <section id="input-process-output" className={styles.block}>
        <p className="section__eyebrow">새 실습안 · 입력, 처리, 출력</p>
        <h2 className={styles.h2}>버튼 하나를, 직접 확인해볼까요?</h2>
        <p className={styles.body}>정상 입력만으로는 충분할까요? 이름을 적거나 비워두고, 내가 예상한 문장과 실제 결과를 비교해보세요.</p>
        <InputProcessOutputDemo />
      </section>
      <section id="worksheets" className={styles.block}>
        <p className="section__eyebrow">LESSON PREVIEW · 50분 실습 활동지</p>
        <h2 className={styles.h2}>설명보다, 작은 성공을 먼저.</h2>
        <p className={styles.body}>
          입력과 요청, 저장을 직접 확인해볼 수 있는 샘플 활동지입니다. 준비된 예제의 한 기능을 다루는 50분 구성안이며, 실제 수업 운영 결과와는 구분합니다.
        </p>
        <div className={styles.worksheetGrid}>
          {[
            {
              id: "api",
              title: "첫 API 요청 · 웨이터에게 주문하기",
              description:
                "요청·응답의 구조를 따라가고, 성공과 실패를 직접 확인합니다.",
              file: "api-worksheet",
            },
            {
              id: "db",
              title: "첫 DB 저장 · 나의 서랍에 기록하기",
              description:
                "입력과 저장을 구분하고, 새로고침과 사용자 권한을 시험합니다.",
              file: "db-worksheet",
            },
          ].map((sheet) => (
            <article className={styles.worksheet} key={sheet.id}>
              <a
                href={`/worksheets/${sheet.file}.html`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${sheet.title} 활동지 열기`}
              >
                <Image
                  src={`/worksheets/${sheet.file}.png`}
                  alt={`${sheet.title}의 목표, 50분 진행표, 직접 확인 기준이 담긴 활동지`}
                  width={794}
                  height={1123}
                  sizes="(max-width:700px) 100vw, 500px"
                />
              </a>
              <div>
                <h3>{sheet.title}</h3>
                <p>{sheet.description}</p>
                <div className="cta-row">
                  <a
                    className="btn btn--ghost"
                    href={`/worksheets/${sheet.file}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    활동지 열기 ↗
                  </a>
                  <a
                    className="btn btn--ghost"
                    href={`/worksheets/${sheet.file}.pdf`}
                    download
                  >
                    PDF 내려받기
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          설치·계정·배포 권한은 수업 전에 준비합니다. 50분은 준비된 예제의 한
          기능을 완성하는 단위이며, 처음부터 전체 웹앱을 완성하는 시간 보장은
          아닙니다.
        </p>
        <div className="cta-row">
          <a
            className="btn"
            href="/examples/api-lab.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            첫 API 실습 실행해 보기 ↗
          </a>

        </div>
      </section>
      <section id="activity" className={styles.block}>
        <h2 className={styles.h2}>지금 해보기 · AI 요약 검증</h2>
        <p className={styles.body}>
          좋은 문장처럼 보여도 근거가 있을까요? 짧은 원문과 요약을 대조하고,
          확인할 부분을 찾아보세요.
        </p>
        <EducationActivity />
      </section>
      <section id="concepts" className={styles.block}>
        <details><summary>다른 기술도 익숙한 비유로 살펴보기</summary><TechTranslation /></details>
      </section>
      <section className={styles.block}>
        <h2 className={styles.h2}>익숙한 경험으로 설명한다면?</h2>
        <p className={styles.body}>여러분에게 익숙한 경험으로 기술을 설명한다면, 어떤 비유를 쓰고 싶나요? 저도 만들고 설명하는 과정에서 그 연결을 조금씩 찾아가고 있습니다.</p>
      </section>
    </div>
  );
}
