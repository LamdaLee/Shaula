import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

/** Professional Korean sans — weight hierarchy instead of playful display faces. */
const sans = IBM_Plex_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.person} AI 리터러시 포트폴리오`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={sans.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
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
