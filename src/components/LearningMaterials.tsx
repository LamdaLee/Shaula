import styles from "./LearningMaterials.module.css";

export function LearningMaterials() {
  return <div className={styles.grid}>
    <article className={styles.card}>
      <span className="badge">기존 강의 자료 기반 · 재구성</span>
      <h3>케이크 굽기로 이해하는 프로그래밍</h3>
      <p>‘달걀을 꺼낸다’는 말에는 무엇을, 어디에서, 얼마나 가져올지가 숨어 있습니다. 익숙한 작업을 구체적인 단계로 나누며 변수와 함수의 역할을 살펴봅니다.</p>
      <ol className={styles.flow} aria-label="케이크 비유로 보는 프로그래밍"><li>재료의 양 · 변수</li><li>작업 묶음 · 함수</li><li>확인할 결과</li></ol>
      <p className={styles.caption}>프로그래밍이 낯선 입문자를 위한 설명 · 케이크 제조 경험에서 출발했습니다.</p>
      <details>
        <summary>설명과 실행 예시 살펴보기</summary>
        <h4>‘케이크를 만들어줘’에서 한 걸음 더</h4>
        <p>재료와 양, 작업 순서, 완성 기준을 정하면 요청이 구체적이 됩니다. ‘예쁜 웹페이지를 만들어줘’라는 말에는 어떤 정보가 빠져 있을까요?</p>
        <h4>값에 이름을 붙이고, 작업을 함수로 묶기</h4>
        <pre className={styles.code}><code>{`def mix(flour_grams, sugar_grams):
    total = flour_grams + sugar_grams
    return f"총 {total}g입니다."

flour = 100
sugar = 30
print(mix(flour, sugar))
# 결과: 총 130g입니다.`}</code></pre>
        <p>설탕의 양을 50으로 바꾸면 결과는 어떻게 될까요? 먼저 예상하고, 실행해서 150g이 나오는지 확인해 보세요.</p>
        <p className={styles.caption}>실행 가능한 Python 예시입니다. 실제 조리법이나 재료를 섞는 프로그램이 아니라, 두 수를 더해 문장을 만드는 코드입니다.</p>
      </details>
    </article>
    <article className={styles.card}>
      <span className="badge badge--sky">기존 설명 자료 기반 · 새 실습안</span>
      <h3>버튼을 누르면, 화면은 어떻게 바뀔까요?</h3>
      <p>컴퓨터의 내부를 모두 알아야 시작할 수 있는 것은 아닙니다. 입력이 어디에서 처리되고 어떤 결과로 돌아오는지 알면, 원하는 기능을 설명하기가 쉬워집니다.</p>
      <ol className={styles.flow} aria-label="웹 화면이 바뀌는 흐름"><li>이름 입력</li><li>처리 규칙</li><li>인사말 표시</li></ol>
      <p className={styles.caption}>컴퓨터 입문 자료의 입력·처리·출력을 작은 웹 실습으로 이어갑니다.</p>
      <details>
        <summary>설명 방식과 확인 질문 살펴보기</summary>
        <p>기존 강의에서는 자동차를 비유로 컴퓨터의 구조를 설명했습니다. 공개용 콘텐츠에서는 웹 화면의 변화를 따라가며 입력·처리·출력을 살펴봅니다.</p>
        <p>이름이 있으면 인사말을, 없으면 안내를 보여줍니다. 공백만 넣어도 같은 안내가 나올까요? AI가 고쳤다고 말했을 때 무엇을 직접 확인해야 할까요?</p>
        <p className={styles.caption}>아래 체험은 이번에 구성한 새 실습입니다. 과거 수업 운영 결과와 구분합니다.</p>
      </details>
      <p><a href="#input-process-output">작은 실습으로 확인해 보기 ↓</a></p>
    </article>
  </div>;
}
