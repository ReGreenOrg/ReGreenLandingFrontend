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
      <div className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto space-y-12 mt-40 ">
        {/* 각 대화 말풍선 */}
        <div className="flex items-start gap-3 bubble-group">
          <span className="text-2xl">🧑</span>
          <div className="bg-white px-4 py-2 rounded-lg text-left max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              요즘 미세먼지 너무 심하지 않아?
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 flex-row-reverse bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] text-right px-4 py-2 rounded-lg max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              맞아. 숨 쉬는 것도 신경 쓰여.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 bubble-group">
          <span className="text-2xl">🧑</span>
          <div className="bg-white px-4 py-2 rounded-lg text-left max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              뭔가 해야 할 것 같긴 한데…
            </p>
          </div>
        </div>

        <div className="flex items-start ㅓ gap-3 flex-row-reverse bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] text-right px-4 py-2 rounded-lg max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              텀블러 쓰는 거 말고는 모르겠어.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 bubble-group">
          <span className="text-2xl">🧑</span>
          <div className="bg-white px-4 py-2 rounded-lg text-left max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              실천하려고 하면 뭐부터 <br className="  block  md:hidden" /> 해야 할지 모르겠어.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 flex-row-reverse bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] text-right px-4 py-2 rounded-lg max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              괜히 잘못하면 더 문제 <br className="  block  md:hidden" />
              만들까 봐 걱정돼.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 bubble-group">
          <span className="text-2xl">🧑</span>
          <div className="bg-white px-4 py-2 rounded-lg text-left max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              그냥 이거 해봐 하면 좋을 텐데.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 flex-row-reverse bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] text-right px-4 py-2 rounded-lg max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              미션처럼 하나씩 알려주면 좋겠어.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 bubble-group">
          <span className="text-2xl">🧑</span>
          <div className="bg-white px-4 py-2 rounded-lg text-left max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              우리 그런 거 하나 정해서 해볼까?
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 flex-row-reverse bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] text-right px-4 py-2 rounded-lg max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              텀블러 챙기기, 플로깅 하기… 이런 거?
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 bubble-group">
          <span className="text-2xl">🧑</span>
          <div className="bg-white px-4 py-2 rounded-lg text-left max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              인증샷도 남기고,
              <br className="  block  md:hidden" /> 기록도 하면 재밌겠다!
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 flex-row-reverse bubble-group">
          <span className="text-2xl">👩</span>
          <div className="bg-[#FFE53A] text-right px-4 py-2 rounded-lg max-w-full bubble">
            <p style={{ margin: "auto" }} className=" sm:text-lg ">
              의미 있는 커플 되는 거지!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardSection3;
