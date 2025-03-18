import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen mb-5 ">
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center  ">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/Contact.png"
            alt="Mosque Image"
            width={470}
            height={700}
            className=" max-w-full h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 px-6 mt-8 lg:mt-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#4354a4] mb-6 text-center lg:text-left">
            Register to our <span className="underline">Newsletter!</span>
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border-2 border-[#4354a4]  focus:outline-none focus:ring-2 focus:ring-[#4354a4]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border-2 border-[#4354a4]  focus:outline-none focus:ring-2 focus:ring-[#4354a4]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border-2 border-[#4354a4]  focus:outline-none focus:ring-2 focus:ring-[#4354a4]"
            />
            <textarea
              placeholder="Write your message here..."
              rows={4}
              className="w-full p-3 border-2 border-[#4354a4]  focus:outline-none focus:ring-2 focus:ring-[#4354a4] resize-none"
            />
          </form>

          <button className="mt-6 w-full bg-[#4354a4] text-white py-3 text-lg font-semibold ">
            Submit Email
          </button>
        </div>
      </div>
    </main>
  );
}

export default Contact;
