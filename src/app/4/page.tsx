import CTASection from "@/sections/CTASection";
import FeatureSection from "@/sections/FeatureSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import OnboardSection4 from "@/sections/OnboardSection4";
import StorySection from "@/sections/StorySection";

export default function Home() {
  return (
    <>
      <OnboardSection4 />
      <HeroSection />
      <StorySection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </>
  );
}
