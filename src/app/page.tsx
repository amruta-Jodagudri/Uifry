import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Questions from "@/components/Questions";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeroSection/>
      <Features/>
      <Testimonial/>
      <Questions/>
      <Footer/>
    </div>
  );
}
