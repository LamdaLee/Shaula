import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { EducationActivity } from "@/components/EducationActivity";
import { site } from "@/lib/site";
import styles from "./education.module.css";

export const metadata: Metadata = {
  title: "작은 과제로 배우는 AI",
  description:
    "매회 50분, 웹페이지와 웹앱을 만들고 확인하는 프로젝트 교육 설계",
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
        <span className="badge">교육 제안 · 프로그램 설계</span>
        <h1 className="page-title">
          작게 만들고,
          <br />
          직접 확인하며 배우기
        </h1>
        <p className="page-lead">
          매회 50분, 작동하는 결과물 하나를 만듭니다. 개념은 과제를 해결하는
          순간에 필요한 만큼 설명하고, AI의 결과는 직접 시험합니다.
        </p>
        <p className={styles.body}>
          AI 코딩 도구를 열어도 어디서부터 말을 걸어야 할지 막막한 입문자의
          눈높이에서 시작합니다. 터미널 오류 한 줄에 멈추지 않도록
          입력·처리·저장의 구조와 서버 실행·배포 흐름을 과제에 연결합니다.
        </p>
        <p className={styles.note}>
          아래는 기획 중인 교육 프로그램입니다. 실제 운영 실적이나 수료생
          결과물과 구분합니다.
        </p>
        <div className="cta-row">
          <Link className="btn" href="#worksheets">
            교안 2장 미리보기
          </Link>
          <a className="btn btn--ghost" href={`mailto:${site.email}`}>
            교육 협업 문의
          </a>
        </div>
      </header>
      <section id="life" className={styles.block}>
        <p className="section__eyebrow">프로그램 01 · 10회 × 50분</p>
        <h2 className={styles.h2}>
          [입문] 나의 일상을 담은 인터랙티브 웹페이지
        </h2>
        <p className={styles.body}>
          코딩 경험이 적은 성인을 위한 자기표현과 AI 활용 입문입니다.
          소개·경험·강점·꿈과 개인 기능 하나를 담은 웹페이지를 만듭니다.
        </p>
        <details>
          <summary>10회 과제 살펴보기</summary>
          <ol className={styles.sessions}>
            {life.map((item, i) => (
              <li className={styles.session} key={item}>
                <span className={styles.sessionNum}>{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </details>
      </section>
      <section id="webapp" className={styles.block}>
        <p className="section__eyebrow">프로그램 02 · 16회 × 50분</p>
        <h2 className={styles.h2}>
          [심화] 생각모음부터 배포까지: AI와 만드는 나만의 웹앱
        </h2>
        <p className={styles.body}>
          AI로 코딩을 시작하고 싶은 입문자를 위한 과정입니다. Pause & Ponder의
          입력·규칙 분리와 별이음의 카드·연결·저장 구조를 차용합니다. 생각과
          회고를 기록하는 앱에 입력·저장·선택적 AI 기능을 하나씩 붙이고
          배포합니다.
        </p>
        <p className={styles.body}>
          시작 파일과 복구 파일, 검증된 API·인증·데이터베이스 연결 틀을
          제공합니다. 도구 설치와 계정 준비는 수업 전에 확인합니다.
        </p>
        <details>
          <summary>16회 작은 과제 살펴보기</summary>
          <ol className={styles.sessions}>
            {webapp.map((item, i) => (
              <li className={styles.session} key={item}>
                <span className={styles.sessionNum}>{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </details>
        <p className={`memo ${styles.rhythm}`}>
          <span className={styles.rhythmLabel}>한 회차의 흐름</span>5분 결과
          체험 → 5분 과제 확인 → 25분 제작 → 10분 시험·개념 확인 → 5분 저장·회고
        </p>
      </section>
      <section id="worksheets" className={styles.block}>
        <p className="section__eyebrow">LESSON PREVIEW · 50분 실습 활동지</p>
        <h2 className={styles.h2}>설명보다, 작은 성공을 먼저.</h2>
        <p className={styles.body}>
          아래는 실제 운영 후기 대신 공개하는 샘플 교안입니다. 시작 파일이
          준비된 상태에서 만들고, 시험하고, 한 문장으로 설명하는 50분을
          설계했습니다. 입문 API 활동과 심화 DB 활동의 예시이며 전체 과정의 회차
          번호와는 구분합니다.
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
          <a
            className="btn btn--ghost"
            href={`mailto:${site.email}?subject=${encodeURIComponent("조직 맞춤형 실습 설계 문의")}`}
          >
            조직 맞춤형 실습 문의
          </a>
        </div>
      </section>
      <section className={styles.block}>
        <h2 className={styles.h2}>샘플 과제 · 입력한 목표 보여주기</h2>
        <div className="memo">
          <p>
            <strong>미션:</strong> 입력창과 버튼으로 나의 목표를 화면에
            표시하세요.
          </p>
          <p>
            <strong>완료 기준:</strong> 목표가 나타나고, 빈 입력은 추가되지
            않아야 합니다.
          </p>
          <p>
            <strong>확인:</strong> 빈 입력, 정상 입력, 연속 입력을 직접
            시험하세요.
          </p>
          <p>
            <strong>선택 도전:</strong> 목표를 추가한 뒤 입력창을 비워보세요.
          </p>
          <a
            className="btn btn--ghost"
            href="/examples/goal-page.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            작동 예시 열기 ↗
          </a>
        </div>
        <p className={styles.note}>
          제작한 교육용 예시이며 실제 수강생 결과물이 아닙니다. 외부 AI API 없이
          작동합니다.
        </p>
      </section>
      <section id="activity" className={styles.block}>
        <h2 className={styles.h2}>지금 해보기 · AI 요약 검증</h2>
        <p className={styles.body}>
          좋은 문장처럼 보여도 근거가 있을까요? 짧은 원문과 요약을 대조하고,
          확인할 부분을 찾아보세요.
        </p>
        <EducationActivity />
      </section>
      <section className={styles.block}>
        <h2 className={styles.h2}>수업에서 남기는 세 가지</h2>
        <ol>
          <li>만든 것: 오늘 완성한 기능</li>
          <li>확인한 것: 시험한 상황과 결과</li>
          <li>이해한 것: 작동 원리를 설명하는 한 문장</li>
        </ol>
        <p className={styles.body}>
          과제와 결과물을 설명하고, AI에 맡긴 일과 내가 판단한 일을 구분할 수
          있도록 돕습니다.
        </p>
        <a className="btn" href={`mailto:${site.email}`}>
          대상과 고민을 알려주세요
        </a>
      </section>
    </div>
  );
}
