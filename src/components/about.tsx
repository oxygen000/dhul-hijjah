"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", 
        toggleActions: "play none none none",
      },
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%", 
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <main className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-20 py-12">
      <div ref={textRef} className="md:w-1/2 text-center md:text-left">
        <h1 className="text-[#4354a4] text-4xl md:text-6xl font-bold leading-tight">
          The Importance of the <span className="italic underline">10 Days</span> of Dhul Hijjah
        </h1>
        <p className="text-gray-700 text-sm md:text-base mt-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <button className="mt-6 bg-[#111633] text-white font-medium px-6 py-3 transition-transform ">
          Learn More
        </button>
      </div>

      <div ref={imageRef} className="md:w-1/2 flex justify-center">
        <Image src="/Group10.png" alt="Cloud Right" width={400} height={250} />
      </div>
    </main>
  );
}

export default About;
