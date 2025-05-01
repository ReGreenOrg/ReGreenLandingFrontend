import Image from "next/image";

export default function StorySection() {
  return (
    <section className="bg-white py-16 px-8 text-[#121212] ">
      <div className=" mx-auto text-center">
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
        <div className="bg-[#505A50] lg:mx-48 py-10 text-white  rounded-lg">
          <div className="px-0 sm:px-6">
            <h3 className="text-xl font-semibold text-center mb-6">
              데이트를 하면서 저지르는 환경오염
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-4  md:gap-4  lg:gap-8">
              {[
                { src: "/storyImage1.jpg", alt: "배달음식 쓰레기", label: "배달음식 쓰레기" },
                { src: "/storyImage2.jpg", alt: "플라스틱 커피잔", label: "플라스틱 커피잔" },
                { src: "/storyImage3.jpg", alt: "불필요한 종이", label: "불필요한 종이" },
              ].map(({ src, alt, label }) => (
                <div key={alt} className="flex flex-col items-center !gap-2">
                  <div className="w-[140px] h-[80px] md:w-[180px] md:h-[120px] lg:w-[220px] lg:h-[160px] overflow-hidden rounded-lg relative">
                    <Image src={src} alt={alt} fill className="object-cover" />
                  </div>
                  <p className="text-md font-medium text-center">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-6 leading-relaxed">
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
