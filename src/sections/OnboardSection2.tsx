"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnboardSection2: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        all: () => {
          const groups = sectionRef.current?.querySelectorAll(":scope .bubble-group") || [];

          gsap.fromTo(
            groups,
            { opacity: 0, y: 60, scale: 1.05 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "+=800",
                scrub: false,
                once: true, // 한 번만 실행 (선택사항)
                markers: false, // true로 하면 디버깅 가능
              },
            }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#A9C1D0] py-20 text-center min-h-[100vh]  flex items-start justify-center"
    >
      <div className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto space-y-12 mt-40 font-regular">
        {/* 각 대화 말풍선 */}
        <div className="flex flex-col gap-10">
          <div className="flex gap-3 bubble-group">
            <span className="text-2xl">🧑</span>
            <div className="bg-white px-4 py-2 rounded-lg text-left bubble">
              분리수거 하려다가 포기했어. <br className="block md:hidden" /> 이건 뚜껑 따야 하나,
              라벨 떼야 하나…
            </div>
          </div>
          <div className="flex gap-3 bubble-group flex-row-reverse">
            <span className="text-2xl">👩</span>
            <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-right bubble">
              나도 진짜 헷갈려서 그냥 버릴 때 많아. <br className="block md:hidden" /> 잘하고 싶어도
              어려운 게 많아.
            </div>
          </div>
          <div className="flex gap-3 bubble-group">
            <span className="text-2xl">🧑</span>
            <div className="bg-white px-4 py-2 rounded-lg text-left bubble">
              근데 어떤 커플이 ‘우이미’ 쓰는 후기 올렸더라. <br className="block md:hidden" /> 매일
              미션처럼 알려준대.
            </div>
          </div>
          <div className="flex gap-3 bubble-group flex-row-reverse">
            <span className="text-2xl">👩</span>
            <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-right bubble">
              헐 그럼 나 같은 사람한테 완전 딱이네… <br className="block md:hidden" /> 같이 해보면
              재밌을 것 같아.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardSection2;
