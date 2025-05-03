"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnboardSection3: React.FC = () => {
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
      <div className="w-[80%] md:w-[60%] mx-auto space-y-12 mt-40">
        {/* 각 대화 말풍선 */}
        <div className="flex items-start gap-4 bubble-group">
          <span className="text-2xl">🧑</span>
          <div className="bg-white p-4 rounded-lg text-left max-w-full bubble">
            <h2 className="font-bold mb-2 text-lg sm:text-xl">
              “요즘 왜 이렇게 미세먼지 심한 거야… 하늘이 맨날 뿌옇네.”
            </h2>
            <p className="text-base sm:text-lg">
              “그러니까. 나도 요즘 괜히 숨 쉬는 것도 신경 쓰이더라. 마스크 안 쓰면 목 아픈 느낌
              들어.”
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 flex-row-reverse bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] p-4 rounded-lg text-left max-w-full bubble">
            <h2 className="font-bold mb-2 text-lg sm:text-xl">
              “근데 이런 거 보면 우리 진짜 뭔가 해야 하는 거 아닌가 싶지 않아?”
            </h2>
            <p className="text-base sm:text-lg">
              “나도 그 생각은 자주 하는데… 뭘 해야 할지 모르겠어. 그냥 텀블러 챙기는 거 말고는…”
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bubble-group">
          <span className="text-2xl">🧑</span>
          <div className="bg-white p-4 rounded-lg text-left max-w-full bubble">
            <h2 className="font-bold mb-2 text-lg sm:text-xl">
              “맞아. 막상 실천하려고 하면, 뭐부터 해야 할지도 모르겠고.”
            </h2>
            <p className="text-base sm:text-lg">
              “예전에 분리수거도 나름 신경 썼는데, 요즘은 헷갈리는 게 너무 많아.”
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 flex-row-reverse bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] p-4 rounded-lg text-left max-w-full bubble">
            <h2 className="font-bold mb-2 text-lg sm:text-xl">
              “그냥 누가 ‘이거 하나만 해도 돼’ 하면 할 수 있을 것 같은데?”
            </h2>
            <p className="text-base sm:text-lg">
              “응. 하루에 하나씩 미션처럼 주면 나도 해볼 마음 생길 것 같아.”
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bubble-group">
          <span className="text-2xl">🧑</span>
          <div className="bg-white p-4 rounded-lg text-left max-w-full bubble">
            <h2 className="font-bold mb-2 text-lg sm:text-xl">
              “우리 그냥 그런 거 하나 정해서 같이 해볼까?”
            </h2>
            <p className="text-base sm:text-lg">
              “좋다! 데이트 미션처럼. 텀블러 챙기기, 플로깅 하기… 이런 거?”
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 flex-row-reverse bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] p-4 rounded-lg text-left max-w-full bubble">
            <h2 className="font-bold mb-2 text-lg sm:text-xl">
              “그럼 인증샷도 남기고, 우리 미션 성공률도 기록하고!”
            </h2>
            <p className="text-base sm:text-lg">“오~ 의미 있는 커플 되는 기분?”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardSection3;
