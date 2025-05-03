import CTASection from "@/sections/CTASection";
import FeatureSection from "@/sections/FeatureSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import OnboardSection5 from "@/sections/OnboardSection5";
import StorySection from "@/sections/StorySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OnboardSection5 />
      <StorySection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </>
  );
}
