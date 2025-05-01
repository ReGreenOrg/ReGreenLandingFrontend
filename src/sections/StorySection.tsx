"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

CustomEase.create(
  "ultraSnailFill",
  "M0,0 C0.05,0 0.1,0.01 0.2,0.03 S0.4,0.12 0.5,0.22 S0.75,0.7 1,1"
);
export default function StorySection() {
  const sectionRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300",
          scrub: true,
        },
      });

      tl.to(gradientRef.current, {
        width: "20%",
        duration: 3,
        ease: "ultraSnailFill",
      })
        .to(gradientRef.current, {
          width: "40%",
          duration: 3,
          ease: "ultraSnailFill",
        })
        .to(gradientRef.current, {
          width: "60%",
          duration: 3,
          ease: "ultraSnailFill",
        })
        .to(gradientRef.current, {
          width: "80%",
          duration: 3,
          ease: "ultraSnailFill",
        })
        .to(gradientRef.current, {
          width: "100%",
          duration: 3,
          ease: "ultraSnailFill",
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className=" flex flex-col justify-center items-center bg-white text-center relative overflow-hidden">
      <div className=" mx-auto text-center">
        <h2 ref={sectionRef} className="text-[24px] md:text-[48px] font-bold mb-6">
          우리는 이렇게 데이트하고 있었다..😢
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-16">
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
            <div className="flex justify-center items-center gap-2">
              <div>우리는 </div>
              <div className="relative inline-block overflow-hidden leading-none  text-2xl sm:text-3xl font-bold">
                {/* 회색 기본 텍스트 */}
                <span className="block text-transparent bg-clip-text bg-gray-300 whitespace-nowrap leading-none">
                  지구를 지키는 데이트
                </span>

                {/* 핑크 덮기 텍스트 */}
                <span
                  ref={gradientRef}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 block text-transparent bg-clip-text bg-[#FF4385] whitespace-nowrap leading-none w-0 overflow-hidden"
                >
                  지구를 지키는 데이트
                </span>
              </div>
              <div>를 하기로 했다.</div>
            </div>
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
