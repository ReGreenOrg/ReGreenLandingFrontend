"use client";
import { useState } from "react";
import PhoneNumberModal from "../modal/PhoneNumber";

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <section className="py-32 px-8 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-1 md:mb-4">곧 정식 오픈!</h2>
      <p className="text-xl md:text-3xl font-semibold mb-2 mt-16">
        🎉 우이미는 5월 16일에 출시됩니다!
      </p>
      <p className="sm:text-xl mb-6">
        지금 사전 예약하고
        <br className="block md:hidden " />
        <strong>&nbsp;비밀 혜택을 받아보세요!</strong>
      </p>
      <button
        onClick={handleClick}
        className="mt-6 px-8 py-4 bg-[#FF8EB3] text-white rounded-full text-lg font-semibold hover:bg-pink-400 shadow-md"
      >
        우리 이야기 시작하기
      </button>

      {/* 모달 */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <PhoneNumberModal close={handleClose} />
        </div>
      )}
    </section>
  );
}
