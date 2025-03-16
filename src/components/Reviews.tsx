"use client";
import React, { useState } from "react";
import { IoArrowForward, IoArrowBackOutline } from "react-icons/io5";
import { motion} from "framer-motion";

const reviews = [
  { id: 1, title: "Amazing Experience!", text: "Excellent service! I really enjoyed the experience.", rating: 5 },
  { id: 2, title: "Fast & Reliable", text: "High-quality product and fast delivery. Very satisfied!", rating: 4 },
  { id: 3, title: "Great Support", text: "The support team is very helpful and responsive.", rating: 5 },
  { id: 4, title: "Highly Recommended", text: "I highly recommend this service, it's fantastic!", rating: 5 },
  { id: 5, title: "Professional & Affordable", text: "Very professional service and reasonable prices.", rating: 4 },
];

function Reviews() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % (reviews.length - itemsPerPage + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + (reviews.length - itemsPerPage + 1)) % (reviews.length - itemsPerPage + 1));
  };

  return (
    <div className="relative w-full h-[400px] bg-[#4354a4] mt-9 flex items-center justify-center px-6">
      <div className="relative flex justify-center items-center overflow-hidden w-full">
        <button
          className="absolute left-10 sm:left-40 z-50 cursor-pointer top-1/2 transform -translate-y-1/2 p-3 bg-[#111633] text-white rounded-[10px] shadow-lg hover:bg-[#222b4d] transition"
          onClick={handlePrev}
        >
          <IoArrowBackOutline className="w-6 h-6 sm:w-9 sm:h-4" />
        </button>

        <motion.div
          key={index}
          className="flex space-x-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {reviews.slice(index, index + itemsPerPage).map((review) => (
            <motion.div
              key={review.id}
              className="bg-white w-[260px] sm:w-[300px] h-[260px] rounded-xl shadow-md flex flex-col items-center justify-center text-center p-5 transition-all"
            >
              <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-2">{review.title}</h3>
              <div className="text-yellow-500 text-lg sm:text-xl mb-2">{"★".repeat(review.rating)}</div>
              <p className="text-gray-600 text-sm sm:text-base">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>


        <button
          className="absolute right-10 sm:right-40 z-50 cursor-pointer top-1/2 transform -translate-y-1/2 p-3 bg-[#111633] text-white rounded-[10px] shadow-lg hover:bg-[#222b4d] transition"
          onClick={handleNext}
        >
          <IoArrowForward className="w-6 h-6 sm:w-9 sm:h-4" />
        </button>
      </div>
    </div>
  );
}

export default Reviews;
