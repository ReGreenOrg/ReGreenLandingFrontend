import CTASection from "@/sections/CTASection";
import FeatureSection from "@/sections/FeatureSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import OnboardSection3 from "@/sections/OnboardSection3";
import StorySection from "@/sections/StorySection";

export default function Home() {
  return (
    <>
      <OnboardSection3 />
      <HeroSection />
      <StorySection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </>
  );
}
