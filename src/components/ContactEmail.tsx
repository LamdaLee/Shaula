"use client";
import { useState } from "react";
import { site } from "@/lib/site";
export function ContactEmail() {
  const [note, setNote] = useState("");
  return <div>
    <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
    <button type="button" className="btn btn--ghost" onClick={async () => {
      try { await navigator.clipboard.writeText(site.email); setNote("이메일 주소를 복사했습니다."); }
      catch { setNote("복사하지 못했습니다. 이메일 주소를 직접 선택해 복사해 주세요."); }
    }}>이메일 주소 복사</button>
    <p role="status">{note}</p>
  </div>;
}
