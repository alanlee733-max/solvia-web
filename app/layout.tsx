import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://solvia-web.vercel.app";
const TITLE = "Solvia Medical — The Path Light Takes";
const DESCRIPTION =
  "From advanced cosmetics to aesthetic devices and dermal fillers — Solvia carries Korea's most trusted aesthetic brands to clinics and partners across the world.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Solvia Medical",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solvia Medical — The Path Light Takes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Jost:wght@300;400;500&family=Nanum+Myeongjo:wght@400;700;800&family=Noto+Sans+KR:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
