import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ContactEmail } from "@/components/ContactEmail";
import { site } from "@/lib/site";
import styles from "./about.module.css";
export const metadata: Metadata = {
  alternates: { canonical: "/about" }, title: "소개·연락",
  description: "이람다의 관심과 경험, 기술을 바라보는 관점",
};
export default function AboutPage() {
  return <div className={`shell ${styles.about}`}>
    <header className="page-header"><Reveal tone="scale">
      <p className="section__eyebrow">ABOUT · 내가 관심을 두는 것들</p>
      <h1 className="page-title">{site.person}<span className={styles.en}>Lee Lamda</span></h1>
      <p className={styles.role}>어려운 것을 쉽게 전달하는 사람</p>
      <p className="page-lead">글쓰기, 콘텐츠 제작, 케이크 제조, 교육 운영을 경험했습니다. 분야는 달랐지만, 이해한 것을 다른 사람에게 풀어내고 실제 과정으로 옮기는 일에 관심을 가져왔습니다.</p>
      <p className={styles.body}>지금은 교육 운영을 하며 AI와 함께 웹앱을 만들고 있습니다. 필요한 기능을 구현하고 직접 확인하면서 배운 것을, 짧은 설명과 작은 실습으로 조금씩 나누고 싶습니다.</p>
    </Reveal></header>
    <Reveal as="section" className={styles.block}>
      <p className="section__eyebrow">기술을 바라보는 관점</p>
      <h2 className={styles.h2}>기술이 일상의 전제가 될 때</h2>
      <p className={styles.body}>기술은 우리가 할 수 있는 일을 넓혀줍니다. 동시에 그 기술이 당연한 기준이 되면, 접근하거나 사용하기 어려운 사람에게는 새로운 장벽이 생길 수 있습니다.</p>
      <p className={styles.body}>네트워크 장애와 기술의 보철화를 주제로 개인 연구 글을 썼습니다. 기술이 단순한 도구를 넘어 생활의 조건이 된다는 점을 생각하며, 사용하는 사람이 이해하고 선택할 수 있는 도구에 관심을 갖게 됐습니다.</p>
      <p className={styles.body}>그래서 쉽게 설명하는 일은, 선택할 수 있게 하는 일이기도 하다고 생각합니다. 기술의 구조를 조금 알면 원하는 것을 설명하고, 나온 결과를 판단하기가 쉬워집니다.</p>
      <p className={styles.note}>이람다, 「네트워크와 기술의 보철화에 대한 탐구」 · 개인 연구 글의 문제의식을 현재 작업과 연결해 정리했습니다.</p>
    </Reveal>
    <Reveal as="section" className={styles.block}>
      <h2 className={styles.h2}>설명 방식으로 이어진 경험</h2>
      <dl className={styles.experiences}>
        <div><dt>2022.10–2023.03</dt><dd>교육행정 · 교육 현장의 운영을 경험했습니다.</dd></div>
        <div><dt>2023.03–2023.08</dt><dd>교육행정 및 JavaScript·HTML/CSS 교육 · 케이크와 자동차를 비유로 기초 개념을 설명하는 자료를 만들었습니다.</dd></div>
      </dl>
      <details className={styles.nameStory}>
        <summary>다른 분야에서 쌓은 경험</summary>
        <dl className={styles.experiences}>
          <div><dt>문예창작 전공</dt><dd>생각을 문장으로 옮기고, 이야기를 구성했습니다.</dd></div>
          <div><dt>2015.12–2017.02</dt><dd>프리랜서 마케팅·카드뉴스 제작 · 내용을 짧게 구조화해 전달했습니다.</dd></div>
          <div><dt>2018.08–2022.02</dt><dd>케이크 제조 · 재료와 과정을 나누는 경험은 프로그래밍을 설명하는 비유가 됐습니다.</dd></div>
        </dl>
      </details>
      <p className={styles.body}><Link href="/education#materials">경험에서 출발한 설명 자료 보기 →</Link></p>
    </Reveal>
    <Reveal as="section" className={styles.block}>
      <details className={styles.nameStory}>
        <summary>이름과 Shaula 이야기</summary>
        <p>Shaula는 전갈자리의 별로, 다른 이름은 Lambda Scorpii입니다. ‘람다’라는 이름과 사이트 브랜드는 이 별에서 만납니다.</p>
      </details>
    </Reveal>
    <Reveal as="section" className={styles.block}>
      <h2 id="contact" className={styles.h2}>이야기 건네기</h2>
      <p className={styles.body}>비슷한 관심을 갖고 계시거나, 함께 이야기해보고 싶은 생각이 있다면 편하게 연락해 주세요.</p>
      <ContactEmail />
    </Reveal>
  </div>;
}
