"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnboardSection1: React.FC = () => {
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

      // 배경색 전환 애니메이션 추가
      tl.to(
        sectionRef.current,
        {
          backgroundColor: "#ffffff", // 다음 섹션과 자연스럽게 이어지는 색상
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      ); // 마지막 애니메이션과 겹치도록 설정
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-gray-100 py-8 text-center h-screen  flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 ref={titleRef} className="font-bold mb-4 text-2xl sm:text-3xl">
          “우리도 뭔가 좋은 일 같이 해볼까?”
        </h2>
        <p ref={subtitleRef} className="mb-2 text-lg sm:text-xl">
          “좋지. 근데… 뭐부터 해야 할지 모르겠어.”
        </p>
        <p ref={descriptionRef} className="text-gray-600 mb-4 text-base sm:text-lg">
          “그러니까. 봉사는 시간 안 맞고, 기부는 좀 거리감 있고…”
        </p>
        <p ref={italicTextRef} className="italic text-gray-500">
          그 마음, 우리만 그런 거 아니래.
        </p>
      </div>
    </div>
  );
};

export default OnboardSection1;
