import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const sans = localFont({
  src: "../fonts/PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-sans-face",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.person} AI 리터러시 포트폴리오`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  icons: { icon: "/brand/motifs/star.png", apple: "/brand/motifs/star.png" },
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/brand/hero-chaos-to-clarity.png", width: 2161, height: 728, alt: "Shaula — 복잡한 생각을 연결하는 길" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={sans.variable}>
      <body>
        <a className="skip-link" href="#main">
          본문으로 건너뛰기
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
