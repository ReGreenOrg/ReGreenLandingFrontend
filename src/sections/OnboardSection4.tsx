"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnboardSection4: React.FC = () => {
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
            <span className="text-2xl">👩</span>
            <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-left bubble">
              나 진짜 환경 생각하면서 살고 싶은데... <br className="block md:hidden" /> 잘 안
              되더라.
            </div>
          </div>
          <div className="flex gap-3 bubble-group flex-row-reverse">
            <span className="text-2xl">🧑</span>
            <div className="bg-white px-4 py-2 rounded-lg text-right bubble">
              맞아. 뭔가 죄책감은 드는데, <br className="block md:hidden" /> 뭘 어떻게 해야 할지
              애매해.
            </div>
          </div>
          <div className="flex gap-3 bubble-group">
            <span className="text-2xl">👩</span>
            <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-left bubble">
              그러니까. 예전에 장바구니도 써봤는데 <br className="block md:hidden" /> 몇 번 하다가
              그냥 다시 편하게 살게 되더라…
            </div>
          </div>
          <div className="flex gap-3 bubble-group flex-row-reverse">
            <span className="text-2xl">🧑</span>
            <div className="bg-white px-4 py-2 rounded-lg text-right bubble">
              습관이 안 되면 그게 오래 못 가. <br className="block md:hidden" /> 나도 다이어트도
              그렇고ㅋㅋ
            </div>
          </div>
          <div className="flex gap-3 bubble-group">
            <span className="text-2xl">👩</span>
            <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-left bubble">
              근데 SNS에서 ‘우이미’라는 앱 봤어. <br className="block md:hidden" /> 커플이 같이 환경
              활동하는 거래.
            </div>
          </div>
          <div className="flex gap-3 bubble-group flex-row-reverse">
            <span className="text-2xl">🧑</span>
            <div className="bg-white px-4 py-2 rounded-lg text-right bubble">
              오 커플용이야? 그럼 미션도 같이 하는 거야?
            </div>
          </div>
          <div className="flex gap-3 bubble-group">
            <span className="text-2xl">👩</span>
            <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-left bubble">
              응! 하루에 하나씩 미션 주고, <br className="block md:hidden" /> 하트 모으면 우리만의
              공간도 꾸밀 수 있대.
            </div>
          </div>
          <div className="flex gap-3 bubble-group flex-row-reverse">
            <span className="text-2xl">🧑</span>
            <div className="bg-white px-4 py-2 rounded-lg text-right bubble">
              그럼 데이트하면서 실천도 하고, <br className="block md:hidden" /> 우리 추억도 쌓고
              좋겠다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardSection4;
