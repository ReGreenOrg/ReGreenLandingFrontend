"use client";
export default function CTASection() {
  const handleClick = () => {
    // 우이미 링크를 복사하고 모바일(사파리, 삼성브라우저) 이용을 유도하는 로직
    const url = "https://wooimi.com";
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("우이미 링크가 클립보드에 복사되었습니다! 모바일 브라우저에서 열어주세요.");
        // 모바일 브라우저에서 링크를 여는 로직
        window.location.href = url;
      })
      .catch((err) => {
        console.error("클립보드에 링크 복사 실패:", err);
        alert("링크 복사에 실패했습니다. URL을 직접 입력해주세요: " + url);
      });
  };

  return (
    <section className="py-32 px-8 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-1 md:mb-4">곧 정식 오픈!</h2>
      <p className="text-xl md:text-3xl font-semibold mb-4 mt-16">
        🎉 우이미는 6월에 17일 정식 출시됩니다!
      </p>

      <button
        onClick={handleClick}
        className="mt-6 px-8 py-4 bg-[#FF8EB3] text-white rounded-full text-lg font-semibold hover:bg-pink-400 shadow-md"
      >
        우이미 바로 시작하기
      </button>
    </section>
  );
}
