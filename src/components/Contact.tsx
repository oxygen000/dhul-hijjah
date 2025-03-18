"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // تحريك النص والعنوان
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen mb-5">
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center">
        <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/Contact.png"
            alt="Mosque Image"
            width={470}
            height={700}
            className="max-w-full h-auto"
          />
        </div>

        <div ref={textRef} className="w-full lg:w-1/2 px-6 mt-8 lg:mt-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#4354a4] mb-6 text-center lg:text-left">
            Register to our <span className="underline">Newsletter!</span>
          </h1>

          <form ref={formRef} className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border-2 border-[#4354a4] focus:outline-none focus:ring-2 focus:ring-[#4354a4]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border-2 border-[#4354a4] focus:outline-none focus:ring-2 focus:ring-[#4354a4]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border-2 border-[#4354a4] focus:outline-none focus:ring-2 focus:ring-[#4354a4]"
            />
            <textarea
              placeholder="Write your message here..."
              rows={4}
              className="w-full p-3 border-2 border-[#4354a4] focus:outline-none focus:ring-2 focus:ring-[#4354a4] resize-none"
            />
          </form>

          <button className="mt-6 w-full bg-[#4354a4] text-white py-3 text-lg font-semibold">
            Submit Email
          </button>
        </div>
      </div>
    </main>
  );
}

export default Contact;
