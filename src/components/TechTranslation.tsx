import styles from "./TechTranslation.module.css";
const translations = [
  {
    code: "01 / API",
    everyday: "전화교환원과 웨이터",
    technical: "API · 필요한 것을 요청하는 약속",
    body: "주문을 받아 주방에 전달하고 결과를 가져오는 웨이터처럼, 정해진 형식으로 서버에 요청하고 응답을 받습니다.",
    flow: ["주문 · 요청", "주방 · 서버", "요리 · 응답"],
    limit:
      "API는 사람처럼 의도를 알아채지 않아요. 주소·입력 형식·오류 처리를 정해야 합니다.",
  },
  {
    code: "02 / LOGIC",
    everyday: "레시피와 식재료",
    technical: "알고리즘과 변수 · 입력을 바꾸는 규칙",
    body: "재료가 달라져도 레시피의 순서는 남습니다. 변수는 값에 붙인 이름이고, 알고리즘은 그 값을 처리하는 절차입니다.",
    flow: ["재료 · 입력값", "레시피 · 처리", "완성 · 결과"],
    limit:
      "같은 입력에 같은 규칙을 적용하는 코드와, 매번 다른 초안을 낼 수 있는 AI를 구분합니다.",
  },
  {
    code: "03 / DATABASE",
    everyday: "창고와 서랍장",
    technical: "데이터베이스 · 다시 꺼낼 수 있는 기록",
    body: "서랍에 이름표를 붙여 보관하듯, 데이터의 모양과 찾는 기준을 정합니다. 서버 DB는 허용된 사용자에게 기록을 다시 내어줍니다.",
    flow: ["기록 · 저장", "서랍 · 데이터", "꺼내기 · 조회"],
    limit:
      "새로고침 뒤 유지되는 기록은 브라우저 저장일 수도 있어요. DB에는 접근 권한과 저장 성공 확인도 필요합니다.",
  },
  {
    code: "04 / PUBLISH",
    everyday: "가게 열기와 간판 달기",
    technical: "호스팅과 도메인 · 누구나 열 수 있는 주소",
    body: "호스팅은 앱이 운영되는 공간, 도메인은 그곳을 찾아가는 주소입니다. 내 컴퓨터 밖에서도 같은 링크로 앱을 열게 만듭니다.",
    flow: ["내 컴퓨터", "호스팅 · 운영 공간", "도메인 · 주소"],
    limit:
      "도메인만 연결하면 끝나는 것은 아니에요. 배포 상태·환경변수·실제 접속을 함께 확인합니다.",
  },
];
export function TechTranslation() {
  return (
    <div className={styles.grid}>
      {translations.map((item) => (
        <article className={styles.card} key={item.code}>
          <p className={styles.code}>{item.code}</p>
          <h3>{item.everyday}</h3>
          <p className={styles.technical}>{item.technical}</p>
          <p>{item.body}</p>
          <ol
            className={styles.flow}
            aria-label={`${item.everyday}로 보는 기술 구조`}
          >
            {item.flow.map((part) => (
              <li key={part}>{part}</li>
            ))}
          </ol>
          <details>
            <summary>비유에서 한 걸음 더</summary>
            <p>{item.limit}</p>
          </details>
        </article>
      ))}
    </div>
  );
}
export function HumanLoop() {
  return (
    <div className={styles.loop}>
      <p className="section__eyebrow">HUMAN IN THE LOOP</p>
      <h2 className="section__title">AI의 초안에, 사람의 판단을 더합니다.</h2>
      <ol className={styles.pipeline}>
        {[
          {
            label: "사람",
            title: "거친 생각과 필요",
            detail: "무엇이 불편한지, 누가 쓸지 정의",
          },
          {
            label: "AI",
            title: "분류·초안 제안",
            detail: "가능성을 넓히고 구현의 출발점 만들기",
          },
          {
            label: "사람",
            title: "검증과 판단",
            detail: "원문·동작·오류를 직접 확인하고 수정",
          },
          {
            label: "코드",
            title: "규칙과 자동화",
            detail: "확인한 규칙으로 저장·계산·반복 실행",
          },
        ].map((step, i) => (
          <li key={step.title}>
            <span>
              {String(i + 1).padStart(2, "0")} · {step.label}
            </span>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
      <p className={styles.loopNote}>
        예상과 실제 결과가 다르면 다시 정의하고 고칩니다. AI에게 맡긴 일과
        사람이 확인한 일을 결과물에 함께 남깁니다.
      </p>
    </div>
  );
}
