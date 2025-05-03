import CTASection from "@/sections/CTASection";
import FeatureSection from "@/sections/FeatureSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import OnboardSection2 from "@/sections/OnboardSection2";
import StorySection from "@/sections/StorySection";

export default function Home() {
  return (
    <>
      <OnboardSection2 />
      <HeroSection />
      <StorySection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </>
  );
}
