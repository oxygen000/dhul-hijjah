"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const linksRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLUListElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      iconsRef.current?.children || [],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: linksRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      iconsRef.current?.children || [],
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer className="bg-[#111633] w-full text-white">
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-8">
        <div ref={linksRef} className="w-full lg:w-2/3">
          <h2 className="font-bold text-lg mb-4 text-center lg:text-left">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center lg:text-left">
            <ul className="space-y-2">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">What is it?</Link></li>
              <li><Link href="#">Articles</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Its Importance</Link></li>
              <li><Link href="#">The Realm</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link href="#">Events</Link></li>
              <li><Link href="#">The Ten Days</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link href="#">Locations</Link></li>
              <li><Link href="#">Tips</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div ref={imageRef} className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <Image 
            src="/MosqueFooter.png" 
            alt="Mosque Image" 
            width={250} 
            height={170} 
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-6 gap-4">
        <ul ref={iconsRef} className="flex space-x-4 justify-center md:justify-start">
          <li className="bg-white text-[#111633] rounded-full p-3 text-[24px] hover:scale-110 transition">
            <Link href="#"><FaXTwitter /></Link>
          </li>
          <li className="bg-white text-[#111633] rounded-full p-3 text-[24px] hover:scale-110 transition">
            <Link href="#"><RiYoutubeLine /></Link>
          </li>
          <li className="bg-white text-[#111633] rounded-full p-3 text-[24px] hover:scale-110 transition">
            <Link href="#"><LuFacebook /></Link>
          </li>
          <li className="bg-white text-[#111633] rounded-full p-3 text-[24px] hover:scale-110 transition">
            <Link href="#"><FaInstagram /></Link>
          </li>
        </ul>

        <h1 className="text-[16px] text-center md:text-left">
          {new Date().getFullYear() - 1}-{new Date().getFullYear()} Dhul Hijjah. All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
