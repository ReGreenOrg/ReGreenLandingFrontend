import type { Metadata } from "next";
import pretendard from "./fonts/pretendard";
import "./globals.css";
import SmoothScrollProvider from "./provider";

export const metadata: Metadata = {
  title: "우리는 이별을 미루기로 했다.",
  description: "우리는 이별을 미루기로 했다.",
  openGraph: {
    title: "우리는 이별을 미루기로 했다.",
    description: "우리는 이별을 미루기로 했다.",
    url: "http://우이미.kro.kr",
    siteName: "우리는 이별을 미루기로 했다.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "우리는 이별을 미루기로 했다.",
      },
    ],
    locale: "ko-KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased bg-white`}>
        <SmoothScrollProvider />
        {children}
      </body>
    </html>
  );
}
