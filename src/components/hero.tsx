"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  return (
    <main className="relative flex flex-col items-center justify-center px-4 md:px-20 overflow-hidden">
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 hidden md:block"
      >
        <Image src="/Cloud.png" alt="Cloud Right" width={287} height={157} />
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-[#4354a4] font-black text-4xl md:text-[90px]">
            Dhul Hijjah
          </h1>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <Image src="/toitle1.png" alt="Left Design" width={50} height={20} />
            <p className="text-[#111633] text-lg md:text-3xl">
              The Important Ten Days
            </p>
            <Image src="/toitle2.png" alt="Right Design" width={50} height={20} />
          </div>
          <div className="mt-6 flex justify-center md:justify-start">
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/Hero.png"
                alt="Main Image"
                width={300}
                height={250}
                className="w-60 md:w-[460px] h-auto"
              />
            </motion.div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6 mt-6 md:mt-0">
          <div className="relative w-full max-w-xs md:max-w-full mx-auto">
            <Image
              src="/Line.png"
              alt="Line Design"
              width={404}
              height={174}
              className="w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-40 text-center px-4">
              <h2 className="text-lg md:text-2xl font-semibold">
                What is Dhul Hijjah?
              </h2>
              <p className="mt-2 text-xs md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-xs md:max-w-full mx-auto">
            <Image
              src="/Line.png"
              alt="Line Design"
              width={404}
              height={174}
              className="w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-40 text-center px-4">
              <h2 className="text-lg md:text-2xl font-semibold">
                What is Dhul Hijjah?
              </h2>
              <p className="mt-2 text-xs md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          
 
</div>
<div className="mt-4 flex justify-center">
    <button className="border-2 border-[#4354a4] text-[#4354a4] px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold hover:bg-[#4354a4] hover:text-white transition-all duration-300 w-full max-w-[250px]">
      LEARN MORE
    </button>
  </div>

         
        </div>
      </div>

      <motion.div
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 hidden md:block"
      >
        <Image src="/Cloud-1.png" alt="Cloud Left" width={287} height={157} />
      </motion.div>
    </main>
  );
}

export default Hero;
