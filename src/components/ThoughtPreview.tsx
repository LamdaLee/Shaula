import styles from "./ThoughtPreview.module.css";

/** A diagram rather than a product screenshot while the service is renamed. */
export function ThoughtPreview() {
  return (
    <div className={styles.preview} aria-label="생각 카드에서 아이디어와 제작 요청문으로 이어지는 흐름 예시">
      <p className={styles.label}>생각을 모아, 구상의 틀로</p>
      <div className={styles.cards}>
        <span>배운 것을 기록하고 싶다</span>
        <span>긴 회고는 부담스럽다</span>
        <span>하루 한 줄은 쓸 수 있다</span>
      </div>
      <p className={styles.connection}>연결하고, 직접 고르기 ↓</p>
      <div className={styles.idea}>
        <strong>하루 한 줄 배움 기록</strong>
        <span>아이디어 → 제작 요청문 → 작은 실험</span>
      </div>
    </div>
  );
}
