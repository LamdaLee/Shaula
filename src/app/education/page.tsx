import type { Metadata } from "next";
import Link from "next/link";
import { EducationActivity } from "@/components/EducationActivity";
import { site } from "@/lib/site";
import styles from "./education.module.css";

export const metadata: Metadata = {
  title: "교육 프로그램",
  description:
    "AI와 친해지기: 나의 인생을 담은 웹페이지 만들기 — 교육 제안·프로그램 설계 (운영 실적 아님)",
};

const sessions = [
  "AI와 첫 만남: 사실과 AI의 추측 구분",
  "경험 수집: 사건·행동·배운 점",
  "강점 발견: 행동 근거와 강점 연결",
  "미래 그리기: 꿈을 작은 실천으로",
  "첫 웹페이지: HTML·CSS 틀에 내용",
  "나답게 표현하기: 문장·디자인·모바일",
  "필요한 기능: 꿈 실천 체크리스트",
  "AI 기능 요청: 회고 질문 기능(준비된 연결 틀)",
  "사용자와 검증: 사용성·오류·공개 범위",
  "완성과 회고: 결과물과 AI 협업 과정",
] as const;

const storyboard = [
  {
    time: "0–5분",
    activity: "시작 질문",
    copy: "방금 AI가 한 말 중, ‘사실’과 ‘추측’을 나눠 볼까요?",
  },
  {
    time: "5–12분",
    activity: "함께 풀이",
    copy: "짧은 대화문 → 사실/추측 표시",
  },
  {
    time: "12–32분",
    activity: "직접 제작",
    copy: "학습자 문장에 라벨 달기",
  },
  {
    time: "32–43분",
    activity: "검증",
    copy: "체크: 근거 있나? 확인 전이면 추측으로",
  },
  {
    time: "43–50분",
    activity: "회고",
    copy: "오늘 구분한 한 문장을 저장합니다.",
  },
] as const;

const checklist = [
  "사실과 AI 추측을 구분했는가",
  "내 경험·강점이 행동 근거와 연결됐는가",
  "모바일에서도 읽히는가",
  "개인 기능이 동작하는가",
  "공개 범위를 정했는가",
  "AI 협업에서 내가 검증한 항목을 설명할 수 있는가",
] as const;

export default function EducationPage() {
  return (
    <div className="shell">
      <header className={styles.header}>
        <span className="badge badge--mint">교육 제안 · 프로그램 설계</span>
        <h1 className={styles.title}>
          AI와 친해지기: 나의 인생을 담은 웹페이지 만들기
        </h1>
        <p className={styles.lead}>
          코딩 경험이 적은 성인을 위한 <strong>10회 × 50분</strong> 프로젝트
          수업 설계안입니다. 함께 문제를 풀고 구현합니다. (녹화 따라하기 아님)
        </p>
        <p className={styles.warn} role="note">
          이 페이지는 교육 제안/프로그램 설계입니다. 운영 실적·후기·수료 수치는
          없습니다.
        </p>
      </header>

      <section className={styles.block} aria-labelledby="goal">
        <h2 id="goal">목표와 산출</h2>
        <p>
          자기소개·경험·강점·꿈·미래 계획과 개인 기능 하나를 담은 웹페이지를
          만듭니다. 웹페이지 틀·기능 시작 코드·AI 연결 틀을 사전 제공해 API
          설정이 수업 시간을 먹지 않게 하고, API 없는 대체 활동도 준비합니다.
        </p>
        <p className={styles.rhythm}>
          <strong>매회 50분 리듬:</strong> 5분 시작 질문 → 7분 함께 풀이 → 20분
          제작 → 11분 검증·수정 → 7분 저장·회고
        </p>
      </section>

      <section className={styles.block} aria-labelledby="flow">
        <h2 id="flow">10회 흐름</h2>
        <ol className={styles.sessions}>
          {sessions.map((s, i) => (
            <li key={s}>
              <span className={styles.sessionNum}>{i + 1}회</span>
              {s}
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.block} aria-labelledby="story">
        <h2 id="story">샘플 스토리보드 — 1회차</h2>
        <p className={styles.note}>
          설계용 예시입니다. 실제 수업 슬라이드·워크시트 공개본은{" "}
          <span className="badge">확인 필요</span>
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">시간</th>
                <th scope="col">활동</th>
                <th scope="col">카피</th>
              </tr>
            </thead>
            <tbody>
              {storyboard.map((row) => (
                <tr key={row.time}>
                  <td>{row.time}</td>
                  <td>{row.activity}</td>
                  <td>{row.copy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.block} aria-labelledby="sample">
        <h2 id="sample">예시 결과물</h2>
        <div className={styles.placeholder}>
          <span className="badge">예시(설계용)</span>
          <p>
            완성 웹페이지 스크린샷 / 데모 링크 — 준비 중. 실제 수료생 결과로
            오인하지 마세요.
          </p>
        </div>
      </section>

      <section className={styles.block} aria-labelledby="activity">
        <h2 id="activity">직접 해보는 짧은 활동</h2>
        <p>사실 vs 추측 — 2문항. 수업에서는 함께 더 깊게 갑니다.</p>
        <EducationActivity />
      </section>

      <section className={styles.block} aria-labelledby="check">
        <h2 id="check">학습자 검증 체크리스트</h2>
        <ul className={styles.check}>
          {checklist.map((item) => (
            <li key={item}>
              <label className={styles.checkItem}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.block}>
        <h2>문의</h2>
        <p>
          교육 제안·맞춤 설계가 필요하면{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>로 연락해 주세요.
        </p>
        <Link className="btn" href="/about">
          소개·연락
        </Link>
      </section>
    </div>
  );
}
