"use client";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/home/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import { NavBar } from "@/components/navbar/NavBar";

import { Footer } from "react-day-picker";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <NavBar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorks />
          <Testimonials />
          {/* <PricingSection /> */}
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
