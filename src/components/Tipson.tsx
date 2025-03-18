import React from "react";

function Tipson() {
  return (
    <div className="min-h-screen py-10 px-4 md:px-12 mt-20 overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-2xl md:text-5xl font-bold text-[#4354a4] mb-3 md:mb-4">
              Tips on How to 
            </h1>
            <h1 className="text-2xl md:text-5xl font-bold text-[#4354a4] mb-3 md:mb-4">
              Spend Dhul Hijjah
            </h1>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <div className="border-2 border-[#4354a4] p-4 md:p-6 flex items-center">
              <div className="flex-1 text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-[#4354a4]">1</h2>
                <span className="block border-b-2 border-[#4354a4] my-2"></span>
                <h1 className="text-[#111633] text-2xl md:text-3xl font-bold">Lorem Ipsum</h1>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full mt-6">
          <div className="relative w-full md:w-1/3 p-4 md:p-6 flex items-center border-2 border-[#4354a4]">
            <div className="absolute top-0 left-0 w-full flex justify-between">
              <div className="w-[20%] border-t-4 border-[#4354a4]"></div>
              <div className="w-[20%] border-t-4 border-[#4354a4]"></div>
            </div>
            <div className="absolute top-0 right-0 h-full flex flex-col justify-between">
              <div className="h-[20%] border-r-4 border-[#4354a4]"></div>
              <div className="h-[20%] border-r-4 border-[#4354a4]"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-full flex justify-between">
              <div className="w-[20%] border-b-4 border-[#4354a4]"></div>
              <div className="w-[20%] border-b-4 border-[#4354a4]"></div>
            </div>
            <div className="absolute bottom-0 left-0 h-full flex flex-col justify-between">
              <div className="h-[20%] border-l-4 border-[#4354a4]"></div>
              <div className="h-[20%] border-l-4 border-[#4354a4]"></div>
            </div>

            <div className="flex-1 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-[#4354a4]">2</h2>
              <span className="block border-b-2 border-[#4354a4] my-2"></span>
              <h1 className="text-[#111633] text-2xl md:text-3xl font-bold">Lorem Ipsum</h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="border-2 border-[#4354a4] p-4 md:p-6 flex items-center w-full ">
            <div className="flex-1 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-[#4354a4]">3</h2>
              <span className="block border-b-2 border-[#4354a4] my-2"></span>
              <h1 className="text-[#111633] text-2xl md:text-3xl font-bold">Lorem Ipsum dolor </h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. , consectetur adipisicing elit., consectetur adipisicing elit., consectetur adipisicing elit., consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tipson;
