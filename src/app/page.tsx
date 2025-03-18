"use client"
import { useState, useEffect } from "react";
import About from "@/components/about";
import Hero from "@/components/hero";
import LoremIpsum from "@/components/LoremIpsum";
import Nav from "@/components/nav";
import Advice from "@/components/Advice";
import Event from "@/components/Event";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Review from "@/components/review";
import TenTips from "@/components/TenTips";
import Tipson from "@/components/Tipson";

export default function Home() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <>
          <Nav />
          <Hero />
          <Advice />
          <About />
          <LoremIpsum />
          <Event />
          <Tipson />
          <TenTips />
          <Review />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
