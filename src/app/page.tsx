import CTASection from "@/sections/CTASection";
import FeatureSection from "@/sections/FeatureSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import OnboardSection from "@/sections/OnboardSection";
import StorySection from "@/sections/StorySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OnboardSection />
      <StorySection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </>
  );
}
