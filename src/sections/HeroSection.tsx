"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const gradientRef = useRef(null);
  const whiteOverlayRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const logoRef = useRef(null);
  const wooimiRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      // 배경 전환: 흰색 오버레이 페이드인
      tl.to(whiteOverlayRef.current, { opacity: 1 }, 0);

      // 메인 타이틀 사라짐
      tl.to(titleRef.current, { opacity: 0, y: -50 }, 0);

      tl.to(
        subtitleRef.current,
        {
          scale: 1.8,
          y: () => {
            const vw = window.innerWidth;
            if (vw < 640) return -120; // 모바일
            else if (vw < 1024) return -150; // 태블릿
            else return -170; // 데스크탑
          },
        },
        0
      );
      // 이미지(로고) 이동
      tl.to(
        logoRef.current,
        {
          x: 0,
          left: "50%",
          y: 30,
          transform: "translateX(-50%)",
        },
        0
      );
      tl.to(
        [logoRef.current, wooimiRef.current],
        {
          opacity: 0,
        },
        0.9
      );

      // 텍스트(wooimi) 이동
      tl.to(
        wooimiRef.current,
        {
          x: 48,
          right: "50%",
          y: 102,
          transform: "translateX(50%)",
        },
        0
      ); // 이후에 다시 숨기거나 위치 조정
      tl.to(
        subtitleRef.current,
        {
          opacity: 0,
        },
        0.8
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-[100vh] relative bg-white">
      <div ref={bgRef} className="sticky top-0 h-screen w-full text-center  z-0 bg-white">
        {/* Gradient 배경 */}
        <div
          ref={gradientRef}
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(129.26deg, #FF7AD9 -5.08%, #F1C9D5 29.55%, #ECE4D4 50.63%, #CBF0BF 81.24%, #A7FEA7 99.31%)",
          }}
        />

        {/* 흰색 오버레이 */}
        <div
          ref={whiteOverlayRef}
          className="absolute inset-0 z-10 bg-white opacity-0 transition-opacity duration-1000"
        />

        {/* 콘텐츠 */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          {/* 메인 타이틀 + 서브1 */}
          <div
            className=" text-3xl md:text-[54px] sm:text-5xl font-bold leading-snug"
            ref={titleRef}
          >
            지구가 망하면
            <br />
            우리의 연애도 끝난다!
            <div className="text-lg md:text-[24px] font-semibold sm:text-xl leading-relaxed ">
              연애도, 지구도 오래 가야 하니까.
            </div>
          </div>{" "}
          {/* 서브텍스트2 (분리됨) */}
          <div
            ref={subtitleRef}
            className="text-lg  md:text-[24px] font-semibold  sm:text-xl leading-relaxed  "
          >
            <strong className="font-extrabold">우</strong>리는{" "}
            <strong className="font-extrabold">이</strong>별을{" "}
            <strong className="font-extrabold">미</strong>루기로 했다.
          </div>
          {/* 로고 이미지 */}
          <div
            ref={logoRef}
            className="absolute  left-[-100px] md:left-[-100px] lg:left-16 w-[100px] h-[100px]"
          >
            <Image src="/textlogo_02.svg" alt="logo" width={100} height={100} />
          </div>
          {/* wooimi 텍스트 */}
          <div
            ref={wooimiRef}
            className="absolute  right-[-100px] md:right-[-100px]  lg:right-16 text-[31px] "
          >
            wooimi
          </div>
        </div>
      </div>
    </section>
  );
}
