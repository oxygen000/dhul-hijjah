import React from "react";
import Image from "next/image";

const Lorem = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/Icon8.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/Icosssn.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/Ic121on.png",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/Icon.png",
  },
];

function LoremIpsum() {
  return (
    <main className="flex flex-col items-center justify-center py-12">
      <h1 className="text-[#4354a4] text-xl font-bold mb-6">Lorem Ipsum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Lorem.map((item) => (
          <div key={item.id} className="relative flex flex-col items-center text-center">
            <Image src="/Section.png" alt="Section Background" width={500} height={145} className="rounded-lg" />
            <div className="absolute inset-0 flex items-center px-6">
              <Image src={item.image} alt="Icon" width={75} height={75} className="mr-4" />
              <div className="text-left">
                <h2 className="text-[#111633] text-[20px] font-medium">{item.title}</h2>
                <p className="text-[#595959] text-sm mt-2">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default LoremIpsum;
