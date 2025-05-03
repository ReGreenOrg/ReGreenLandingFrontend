"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnboardSection5: React.FC = () => {
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
              우리 요즘 데이트 루틴 너무 똑같지 않아? <br className="block md:hidden" /> 영화, 밥,
              카페…
            </div>
          </div>
          <div className="flex gap-3 bubble-group flex-row-reverse">
            <span className="text-2xl">👩</span>
            <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-right bubble">
              ㅋㅋ 인정. 뭔가 특별한 거 해보고 싶은데 <br className="block md:hidden" /> 막상
              떠오르는 게 없지.
            </div>
          </div>
          <div className="flex gap-3 bubble-group">
            <span className="text-2xl">🧑</span>
            <div className="bg-white px-4 py-2 rounded-lg text-left bubble">
              근데 요즘 환경 문제도 많잖아. <br className="block md:hidden" /> 그냥 그걸 테마로
              잡아볼까?
            </div>
          </div>
          <div className="flex gap-3 bubble-group flex-row-reverse">
            <span className="text-2xl">👩</span>
            <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-right bubble">
              오 재밌겠다. 일상에서 조금씩 바꾸면서 <br className="block md:hidden" /> 우리만의
              미션처럼 해보는 거지?
            </div>
          </div>
          <div className="flex gap-3 bubble-group">
            <span className="text-2xl">🧑</span>
            <div className="bg-white px-4 py-2 rounded-lg text-left bubble">
              응! 나 ‘우이미’라는 앱 봤는데 <br className="block md:hidden" /> 진짜 그런
              컨셉이더라고.
            </div>
          </div>
          <div className="flex gap-3 bubble-group flex-row-reverse">
            <span className="text-2xl">👩</span>
            <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-right bubble">
              미션 성공하면 하트 모이고, <br className="block md:hidden" /> 둘이 꾸미는 아지트도
              생긴대.
            </div>
          </div>
          <div className="flex gap-3 bubble-group">
            <span className="text-2xl">🧑</span>
            <div className="bg-white px-4 py-2 rounded-lg text-left bubble">
              오… 우리만의 공간이라니. <br className="block md:hidden" /> 나 그런 거 완전 좋아하지.
            </div>
          </div>
          <div className="flex gap-3 bubble-group flex-row-reverse">
            <span className="text-2xl">👩</span>
            <div className="bg-[#FFE53A] px-4 py-2 rounded-lg text-right bubble">
              그럼 오늘부터 우이미 시작하자. <br className="block md:hidden" /> 그냥 우리식 데이트로
              만들어보자!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardSection5;
