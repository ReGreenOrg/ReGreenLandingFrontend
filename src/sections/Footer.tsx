"use client";

import Link from "next/link";

export default function Footer() {
  const surveyUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSepvXDy1ZttAlt-kYwb4dUPjgw50hp6GIc4eXgj2LjtW9_0Dg/viewform";

  return (
    <footer className="bg-gray-100 py-6">
      <div className="flex flex-col items-center gap-4">
        {/* 설문 참여 섹션 */}
        <div className="flex justify-center gap-4 items-center">
          <p className="text-sm md:text-lg flex items-center font-semibold">
            🎁 설문 참여하고 스타벅스 기프티콘 받기
          </p>
          <Link
            href={surveyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#343434] text-white rounded-md text-sm md:text-lg font-medium hover:bg-black"
          >
            설문 참여하기
          </Link>
        </div>
      </div>

      {/* 하단 회사 정보 섹션 */}
      <div className="flex gap-4  justify-center mt-8 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
        <p>아리그린 - 제휴·문의 </p>
        <a href="mailto:wooimiregreen@gmail.com" className="text-[#343434] hover:underline">
          wooimiregreen@gmail.com
        </a>
      </div>
    </footer>
  );
}
