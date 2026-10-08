import type { Metadata } from "next";
import { Gaegu, IBM_Plex_Sans_KR, Jua } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

/** Soft rounded Korean display — warmer than Black Han Sans. */
const display = Jua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
});

const body = IBM_Plex_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body-face",
  display: "swap",
});

const hand = Gaegu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-hand-face",
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
    <html
      lang="ko"
      className={`${display.variable} ${body.variable} ${hand.variable}`}
    >
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
