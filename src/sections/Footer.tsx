"use client";

import Link from "next/link";

export default function Footer() {
  const surveyUrl = "https://forms.gle/W1VxEPdgjwz18m5F8";

  return (
    <footer className="bg-gray-100 py-6">
      <div className="flex flex-col justify-center items-center gap-4">
        {/* 설문 참여 섹션 */}
        <div className="flex justify-center gap-4 items-center ">
          <p className="text-sm md:text-lg font-semibold">
            🎁 설문 참여는 우이미에게 큰 도움이 됩니다
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
      <div className="flex md:flex-row flex-col justify-center gap-4 mt-8 border-t border-gray-300 pt-4 text-center text-md text-gray-500">
        <div className="flex justify-center items-center flex-row  gap-4">
          <p>아리그린 - 제휴·문의 </p>
          <a href="mailto:wooimiregreen@gmail.com" className="text-[#343434] hover:underline">
            wooimiregreen@gmail.com
          </a>
        </div>
        <div className="flex justify-center items-center flex-row  gap-4">
          <p>Instagram </p>
          <a href="https://www.instagram.com/wooimi_/" className="text-[#343434] hover:underline">
            @wooimi_
          </a>
        </div>
      </div>
    </footer>
  );
}
