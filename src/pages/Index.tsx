import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import TransformationsSection from "@/components/TransformationsSection";
import CompetitionSection from "@/components/CompetitionSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WolfFactorySection from "@/components/WolfFactorySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleFinish = useCallback(() => setLoaded(true), []);

  return (
    <>
      <LoadingScreen onFinish={handleFinish} />
      {loaded && (
        <>
          <ScrollProgress />
          <Navbar />
          <HeroSection />
          <MarqueeSection />
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-6 md:mx-[60px]" />
          <AboutSection />
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-6 md:mx-[60px]" />
          <TransformationsSection />
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-6 md:mx-[60px]" />
          <CompetitionSection />
          <GallerySection />
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-6 md:mx-[60px]" />
          <WolfFactorySection />
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-6 md:mx-[60px]" />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
