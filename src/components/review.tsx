'use client'
import React, { useEffect, useRef } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
  const reviewRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    reviewRefs.current.forEach((review) => {
      if (review) {
        gsap.fromTo(
          review,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: review,
              start: "top 85%", 
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 ">
      <div className="max-w-2xl w-full space-y-6 p-5">
        {[
          {
            name: "Rose Smith",
            review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            name: "Anna Doe",
            review:
              "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
          },
          {
            name: "John Green",
            review:
              "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
          },
        ].map((user, index) => (
          <div
            key={index}
            ref={(el) => {
              reviewRefs.current[index] = el;
            }}
            className="relative flex flex-col sm:flex-row items-center justify-between rounded-lg p-6 w-full  shadow-lg"
          >
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-2 rounded-full border-2 border-[#4354a4] shadow-md ">
              <FaUser className="text-4xl text-[#4354a4]" />
            </div>
            <div className="flex flex-col items-center text-[#4354a4] w-full sm:w-1/3 pl-10 pr-4">
              <h1 className="font-bold text-lg pb-1 w-full text-center">{user.name}</h1>
              <div className="flex space-x-1 mt-2 w-full justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#4354a4]" />
                ))}
              </div>
            </div>
            <div className="hidden sm:block h-20 w-1 border-l-4 border-[#4354a4]"></div>
            <div className="text-gray-600 w-full sm:w-2/4 text-sm text-left pl-4">{user.review}</div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="border-t-4 border-[#4354a4] absolute top-0 left-0 w-full"></div>
              <div className="border-r-4 border-[#4354a4] absolute top-0 right-0 h-full"></div>
              <div className="border-b-4 border-[#4354a4] absolute bottom-0 left-0 w-full"></div>
              <div className="absolute top-0 left-0 h-full flex flex-col justify-between">
                <div className="border-l-4 border-[#4354a4] h-1/4 "></div>
                <div className="border-l-4 border-[#4354a4] h-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Review;
