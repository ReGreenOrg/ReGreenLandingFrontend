"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnboardSection1: React.FC = () => {
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
        <div className="flex gap-3 bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-left bubble">
            나 요즘 좀 찝찝해. 플라스틱 쓰레기도 많고… <br className="block md:hidden" /> 뭔가 내가
            더럽히는 느낌?
          </div>
        </div>
        <div className="flex gap-3 bubble-group flex-row-reverse">
          <span className="text-2xl">🧑</span>
          <div className="bg-white px-4 py-2 rounded-lg text-right bubble">
            나도 그래. 뭔가 해야 할 것 같긴 한데 <br className="block md:hidden" /> 막상 뭐부터 해야
            할지 모르겠어.
          </div>
        </div>
        <div className="flex gap-3 bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-left bubble">
            나도. 검색하면 정보는 많은데, <br className="block md:hidden" /> 다 너무 어렵고 거창해
            보이더라.
          </div>
        </div>
        <div className="flex gap-3 bubble-group flex-row-reverse">
          <span className="text-2xl">🧑</span>
          <div className="bg-white px-4 py-2 rounded-lg text-right bubble">
            근데 우연히 봤는데 ‘우이미’라는 앱이 있더라. <br className="block md:hidden" /> 커플이
            환경 실천 같이 하는 거래.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardSection1;
