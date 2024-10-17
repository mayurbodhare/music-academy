import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import WhyChooseUS from "@/components/WhyChooseUS";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bd-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUS />
    </main>
  );
}
