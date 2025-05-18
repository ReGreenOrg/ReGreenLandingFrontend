"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollMouse = () => {
  const dotRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!dotRef.current) return;

    gsap.fromTo(
      dotRef.current,
      { y: 0, opacity: 0.3 },
      {
        y: 15,
        opacity: 1,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 1,
          duration: 1.5,
          ease: "power1.out",
        }
      );
    }
  }, []);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none">
      <div className="w-6 h-10 border-2 border-black rounded-full relative">
        <div
          ref={dotRef}
          className="w-2 h-2 rounded-full bg-black absolute left-1/2 -translate-x-1/2 top-2"
        />
      </div>
      <span ref={textRef} className="text-sm text-black opacity-0 transition-opacity duration-1000">
        스크롤
      </span>
    </div>
  );
};

export default ScrollMouse;
