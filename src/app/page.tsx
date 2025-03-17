import About from "@/components/about";
import Hero from "@/components/hero";
import LoremIpsum from "@/components/LoremIpsum";
import Nav from "@/components/nav";
import Reviews from "@/components/Reviews";
import Event from "@/components/Event";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
  <Nav/>
  <Hero/>
  <Reviews/>
  <About/>
  <LoremIpsum/>
  <Event/>

  <Footer/>
  </>

  );
}
