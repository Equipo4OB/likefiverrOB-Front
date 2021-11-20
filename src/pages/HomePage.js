import React from "react";
import HeroSection from "../components/HomePage/heroSection/index"
import CategoriesSection from "../components/HomePage/CategoriesSection";
import CTA from "../components/HomePage/CTA";
import LastWorks from "../components/HomePage/LastWorks";

export default function homePage() {
  return (
    <div>
      <HeroSection />
      <LastWorks />
      <CategoriesSection />
      <CTA />
    </div>
  );
}
