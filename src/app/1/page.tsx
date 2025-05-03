import CTASection from "@/sections/CTASection";
import FeatureSection from "@/sections/FeatureSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import OnboardSection1 from "@/sections/OnboardSection1";
import StorySection from "@/sections/StorySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OnboardSection1 />
      <StorySection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </>
  );
}
