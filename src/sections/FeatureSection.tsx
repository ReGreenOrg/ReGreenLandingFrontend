"use client";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);
CustomEase.create(
  "ultraSnailFill",
  "M0,0 C0.05,0 0.1,0.01 0.2,0.03 S0.4,0.12 0.5,0.22 S0.75,0.7 1,1"
);

export default function FeatureSection() {
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
    <section className="relative flex flex-col items-center py-10 pb-32 px-8 bg-gradient-to-b from-white to-[#E9F7FA]">
      <div ref={sectionRef} className="absolute top-[-250px]" />
      <div className="text-center font-medium text-[#5B8992] mb-16 bg-[#E9F7FA] px-10 py-5 border-2 border-[#89B3BB] border-dashed rounded-[30px]">
        <p className="text-md sm:text-base ">
          이건 단순한 커플 앱이 아니에요. <span className="font-semibold">(속닥)</span>
        </p>
        <p className="text-md sm:text-base ">
          환경을 지키는 커플들의 비밀 아지트예요.
          <span role="img" aria-label="earth">
            🤫
          </span>
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        <div className="flex justify-center items-center gap-2">
          <div>우이미에서는 이렇게 </div>
          <div className="relative inline-block overflow-hidden leading-none  text-2xl sm:text-3xl font-bold">
            {/* 회색 기본 텍스트 */}
            <span className="block text-transparent bg-clip-text bg-gray-300 whitespace-nowrap leading-none">
              지구를 지켜요
            </span>

            {/* 핑크 덮기 텍스트 */}
            <span
              ref={gradientRef}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 block text-transparent bg-clip-text bg-gradient-to-r from-[#11AC4F] to-[#1EBAE1] whitespace-nowrap leading-none w-0 overflow-hidden"
            >
              지구를 지켜요
            </span>
          </div>
        </div>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {[
          { icon: "💖", text: "환경 보호 활동 인증하고 하트 모으기" },
          { icon: "🏡", text: "하트 모아서 우리만의 아지트 꾸미기" },
          { icon: "🎁", text: "둘이 함께 인증해서 추가 보상 받기" },
          { icon: "🌍", text: "지구를 지키고 이별을 미루기" },
        ].map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#FFB1CC]"
          >
            <div className="text-3xl">{feature.icon}</div>
            <p className="mt-4 text-md font-semibold">{feature.text}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm sm:text-base  mt-8">
        텀블러 쓰기, 대중교통 이용하기, 플로깅 인증하기.
        <br />
        <strong>작은 행동들이 쌓이면, 아름다운 우리만의 세계가 만들어져요.</strong>
      </p>
    </section>
  );
}
