import type { Metadata } from "next";
import pretendard from "./fonts/pretendard";
import "./globals.css";
import SmoothScrollProvider from "./provider";

export const metadata: Metadata = {
  title: "우리는 이별을 미루기로 했다.",
  description: "우리는 이별을 미루기로 했다.",
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
