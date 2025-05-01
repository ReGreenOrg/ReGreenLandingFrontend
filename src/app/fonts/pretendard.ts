// app/fonts/pretendard.ts
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900", // variable font 범위
  style: "normal",
});

export default pretendard;
