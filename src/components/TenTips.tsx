"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TenTips() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const cloudTopRef = useRef(null);
  const cloudBottomRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%", 
        end: "bottom 20%", 
        toggleActions: "play reverse play reverse", 
      },
    });

    tl.from(cloudTopRef.current, { y: -50, opacity: 0, duration: 1 })
      .from(cloudBottomRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.5")
      .from(leftImageRef.current, { x: -100, opacity: 0, duration: 1 }, "-=0.5")
      .from(rightImageRef.current, { x: 100, opacity: 0, duration: 1 }, "-=0.5")
      .from(textRef.current, { y: 30, opacity: 0, duration: 1 }, "-=0.5");
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#4354a4] text-white overflow-hidden">
      <div className="flex justify-center">
        <Image
          ref={cloudTopRef}
          src="/Cloud-top.png"
          alt="Cloud Top Image"
          width={515}
          height={138}
          className="w-48 md:w-96 mt-10 md:mt-24 h-auto"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#4354a4] px-4">
        <div className="absolute left-0 top-0 h-full hidden md:flex items-center">
          <Image
            ref={leftImageRef}
            src="/Mosque-left.png"
            alt="Mosque Left Image"
            width={200}
            height={450}
            className="max-w-full h-auto md:w-[290px] md:h-[620px]"
          />
        </div>

        <div ref={textRef} className="w-full max-w-xl text-center px-4 md:px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Ten Tips for Each Day of Dhul Hijjah
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            Discover practical and meaningful ways to make the most of these blessed days.
          </p>
          <button className="border border-white px-6 py-2 text-lg font-semibold hover:bg-white hover:text-[#4354a4] transition-all">
            Learn More
          </button>
        </div>

        <div className="absolute right-0 bottom-20">
          <Image
            ref={cloudBottomRef}
            src="/Cloud-down.png"
            alt="Cloud Down Image"
            width={250}
            height={80}
            className="opacity-80 md:w-[367px] md:h-[119px]"
          />
        </div>

        <div className="absolute right-0 bottom-0 hidden md:flex items-end">
          <Image
            ref={rightImageRef}
            src="/Mosque-right.png"
            alt="Mosque Right Image"
            width={200}
            height={450}
            className="max-w-full h-auto md:w-[290px] md:h-[620px]"
          />
        </div>
      </div>
    </div>
  );
}

export default TenTips;
