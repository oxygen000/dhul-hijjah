"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Event() {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current;
    const buttons = buttonsRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    gsap.fromTo(
      buttons,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttons,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

     
  }, []);

  return (
    <main ref={sectionRef} className="flex flex-col items-center text-center py-12 relative w-full px-4">
      
      <div className="w-full flex justify-center">
        <Image 
          src="/Mosque.png" 
          alt="Mosque" 
          width={488} 
          height={250} 
          className="w-full max-w-[488px] h-auto"
        />
      </div>

      <div className="relative w-full max-w-[1180px] px-4">
        <div className="relative w-full rounded-lg p-6 flex flex-col items-center">
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 w-full border-t-4 border-[#4354a4]"></div>
            <div className="absolute right-0 h-full border-r-4 border-[#4354a4]"></div>
            <div className="absolute left-0 h-full border-l-4 border-[#4354a4]"></div>
            <div className="absolute bottom-0 left-0 w-1/3 border-b-4 border-[#4354a4]"></div>
            <div className="absolute bottom-0 right-0 w-1/3 border-b-4 border-[#4354a4]"></div>
          </div>

          <div className="w-full flex flex-wrap gap-6 text-left justify-center">
            {["Embrace Cultural Festivities", "Celebrate with Loved Ones", "Create Lasting Memories"].map((title, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="p-3 rounded-lg w-full sm:w-[45%] md:w-[30%] min-w-[250px]"
              >
                <hr className="h-[4px] bg-[#4354a4] border-none w-[50px] mb-2" />
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111633]">{title}</h1>
                <p className="text-sm sm:text-base md:text-lg text-[#595959] mt-2">
                  Experience breathtaking performances, traditional delicacies, and a sense of unity
                  as we come together for this special occasion.
                </p>
              </div>
            ))}
          </div>

          <div ref={buttonsRef} className="mt-8 flex mb-8 flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full justify-center">
            <button className="px-6 py-3 bg-[#111633] text-white font-semibold w-full sm:w-auto ">
              Learn More
            </button>
            <button className="px-6 py-3 bg-[#111633] text-white font-semibold w-full sm:w-auto ">
              Check Schedule
            </button>
          </div>
        </div>
      </div>

      <div  className="mt-[-30px] flex justify-center w-full">
        <Image 
          src="/Moon Star Vector.png" 
          alt="Moon and Star" 
          width={60} 
          height={60} 
          className="w-[50px] h-auto sm:w-[60px]"
        />
      </div>


    </main>
  );
}

export default Event;
