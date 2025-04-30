import Image from "next/image";

export default function StorySection() {
  return (
    <section className="bg-white py-16 px-8 text-[#121212]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[24px] md:text-[48px] font-bold mb-6">
          우리는 이렇게 데이트하고 있었다..ㅠㅠ
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          연애/인연은 매일을 쌓아가는 일.
          <br />
          <br />
          그런데 요즘은,
          <br /> 지구가 망해가서 그 <strong>&apos;매일&apos;</strong>조차 불안하다...
        </p>
        <div className="bg-[#505A50] p-6 rounded-lg shadow-md mb-12 mt-16 text-white">
          <h3 className="text-xl font-semibold mb-4">데이트를 하면서 저지르는 환경오염</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <Image
                src="/storyImage1.png"
                alt="배달음식 쓰레기"
                width={278}
                height={200}
                className="rounded-lg"
              />
              <p className="mt-2 text-sm">배달음식 쓰레기</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/storyImage2.png"
                alt="플라스틱 커피잔"
                width={278}
                height={200}
                className="rounded-lg"
              />
              <p className="mt-2 text-sm">플라스틱 커피잔</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/storyImage3.png"
                alt="불필요한 종이"
                width={278}
                height={200}
                className="rounded-lg"
              />
              <p className="mt-2 text-sm">불필요한 종이</p>
            </div>{" "}
            <div className="flex flex-col items-center">
              <Image
                src="/storyImage4.png"
                alt="안좋은 습관"
                width={278}
                height={100}
                className="rounded-lg"
              />
              <p className="mt-2 text-sm">안좋은 습관</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            그래서 <br />
            우리는 <span className="text-[#FF4385]">지구를 지키는 데이트</span>를 하기로 했다.
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-8">
            우리는 다르게 해보기로 했다.
            <br />
            지구도 지키고, 우리의 연애도 더 단단해지는 방법.
          </p>

          <Image
            src="/rowArrow.svg"
            alt="arrow"
            width={20}
            height={50}
            className="animate-bounce mt-16 mb-[-32px]"
          />
        </div>
      </div>
    </section>
  );
}
