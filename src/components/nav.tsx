"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-6 relative">
      <div className="container mx-auto flex justify-between items-center">
        <button
          className="md:hidden text-gray-800 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex gap-6 items-center">
          {["Home", "About", "Event", "Locations"].map((item, index) => (
            <li key={index}>
              <Link
                href={"#"}
                className="relative font-medium text-gray-700 transition-all duration-300 hover:text-[#4354a4] 
                after:absolute after:w-full after:h-0.5 after:bg-[#4354a4] after:bottom-0 after:left-0 
                after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)} 
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-6 items-center md:hidden 
              origin-top transform z-50"
            >
              {["Home", "About", "Event", "Locations"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={"#"}
                    className="relative font-medium text-gray-700 transition-all duration-300 hover:text-[#4354a4] 
                    after:absolute after:w-full after:h-0.5 after:bg-[#4354a4] after:bottom-0 after:left-0 
                    after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={"#"}
            className="hidden md:block bg-[#111633] font-medium text-white px-5 py-2 rounded-md transition-transform"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
