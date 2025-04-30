export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className=" flex justify-center gap-4 items-center ">
        <p className="text-sm md:text-lg flex items-center font-semibold">
          🎁 설문 참여하고 스타벅스 기프티콘 받기
        </p>
        <button className="px-4 py-2 bg-[#343434] text-white rounded-md text-sm md:text-lg font-medium hover:bg-black">
          설문 참여하기
        </button>
      </div>
    </footer>
  );
}
