import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./ProjectCards.module.css";
export function ProjectCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className={styles.grid}>
      <article className={styles.card}>
        <div className={styles.image}>
          <Image
            src="/images/pp/pp-mindbox.png"
            alt="Pause & Ponder의 마음함 기록 화면"
            width={1144}
            height={941}
            sizes="(max-width:700px) 100vw, 540px"
          />
        </div>
        <div className={styles.copy}>
          <span className="badge">서비스 배포 완료</span>
          <h3>Pause &amp; Ponder</h3>
          <p className={styles.punch}>적고, 멈추고, 되돌아보기.</p>
          {compact ? <p>기록할 때마다 분류부터 해야 하는 부담을 줄이고 싶었습니다. 먼저 적는 마음함과, 결정을 잠시 미루는 자리를 나눠 만들었습니다.</p> : <dl>
            <dt>문제</dt>
            <dd>
              메모와 가계부가 즉시 분류를 요구하면, 기록부터 피곤해집니다.
            </dd>
            <dt>설계</dt>
            <dd>
              먼저 적는 ‘마음함’과 충동 구매를 보류하는 ‘잠깐 두기’를
              분리했습니다.
            </dd>
            <dt>구조</dt>
            <dd>
              AI 분류 후보 → 사람의 확인 → 규칙 기반 합계. 화면의 상태와 계산의
              책임을 나눕니다.
            </dd>
          </dl>}
          <div className="cta-row">
            <Link className="btn btn--ghost" href="/case#pause-ponder">
              기획과 구현 보기
            </Link>
            <a
              href={site.pausePonder.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              앱 열기 ↗
            </a>
          </div>
        </div>
      </article>
      <article className={styles.card}>
        <div className={styles.image}>
          <Image
            src="/images/byeolieum/studio.png"
            alt="별이음에서 생각 카드를 연결하고 아이디어를 구체화하는 작업 화면"
            width={1440}
            height={1000}
            sizes="(max-width:700px) 100vw, 540px"
          />
        </div>
        <div className={styles.copy}>
          <span className="badge badge--sky">배포된 프로토타입 · 개선 중</span>
          <h3>
            별이음 <span className={styles.en}>ByeolIeum</span>
          </h3>
          <p className={styles.punch}>흩어진 생각을 이어, 나만의 그림으로.</p>
          {compact ? <p>생각이 떠올라도 바로 쓸모를 찾기는 어렵습니다. 정리되지 않은 생각도 남겨두고, 다른 생각과 이어볼 수 있는 자리를 만들고 있습니다.</p> : <dl>
            <dt>문제</dt>
            <dd>
              떠오른 생각은 쌓이지만, 서로 연결되지 않으면 실행할 아이디어가
              되기 어렵습니다.
            </dd>
            <dt>설계</dt>
            <dd>
              생각 카드 → 연결 → 선택적 AI 제안 → 제작 프롬프트 → 직접 확인하는
              작은 실험.
            </dd>
            <dt>구조</dt>
            <dd>
              즉각 반응하는 카드 조작, 선택적 AI API, 계정별 DB 저장과 충돌
              처리를 설계합니다.
            </dd>
          </dl>}
          <div className="cta-row">
            <Link className="btn btn--ghost" href="/case/byeolieum">
              만들어 가는 과정 보기
            </Link>
            <a
              href={site.byeolieum.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              프로토타입 열기 ↗
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
