"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnboardSection2: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const italicTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // 섹션이 화면의 80%에 도달했을 때 시작
          end: () => {
            const vw = window.innerWidth;
            if (vw < 640) return "+=500"; // 모바일
            else if (vw < 1024) return "+=400"; // 태블릿
            else return "+=300"; // 데스크탑
          },
          scrub: 0.5, // 스크롤 동기화 속도를 느리게 설정
          immediateRender: false, // 초기 상태 유지
        },
      });

      // 애니메이션 정의
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
      );

      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power2.out" }
      );

      tl.fromTo(
        italicTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-white py-8 text-center h-screen flex items-center justify-center"
    >
      <div className="w-full  md:mx-[20%] space-y-8">
        <div className="flex items-start gap-8 w-full">
          <span className="text-3xl">🧑</span>
          <div className="bg-[#d7f6fd] p-6 rounded-lg text-left max-w-xl">
            <h2 ref={titleRef} className="font-bold mb-4 text-xl sm:text-2xl">
              “근데… 환경을 위해 뭘 해야 되는지는 잘 모르겠더라.”
            </h2>
            <p ref={subtitleRef} className="text-lg sm:text-xl">
              “그니까! 텀블러 쓰는 거 말고는 딱 떠오르는 게 없었어.”
            </p>
          </div>
        </div>
        <div className="flex items-start gap-8 flex-row-reverse">
          <span className="text-3xl">👩</span>
          <div className="bg-[#f7e0e7] p-6 rounded-lg text-left max-w-2xl">
            <h2 className="font-bold mb-4 text-xl sm:text-2xl">
              “정보는 많은데, 막상 하려고 하면 뭐부터 해야 할지도 모르겠고…”
            </h2>
            <p className="text-lg sm:text-xl">“괜히 잘못하면 더 민폐일까 봐 눈치 보이고.”</p>
          </div>
        </div>
        <div className="flex items-start gap-8">
          <span className="text-3xl">🧑</span>
          <div className="bg-[#d7f6fd] p-6 rounded-lg text-left max-w-3xl">
            <h2 className="font-bold mb-4 text-xl sm:text-2xl">
              “그래서 그냥, 누가 ‘이거 해봐’ 하고 정해줬으면 좋겠다는 생각 했었어.”
            </h2>
            <p className="text-lg sm:text-xl">
              “게임처럼 퀘스트처럼… 딱 알려주면, 나도 해볼 수 있을 거 같은데.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardSection2;
