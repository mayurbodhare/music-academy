import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import WhyChooseUS from "@/components/WhyChooseUS";
import UpcomingWebinars from '@/components/UpcomingWebinars'
import Image from "next/image";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bd-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUS />
      <MusicSchoolTestimonials/>
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
