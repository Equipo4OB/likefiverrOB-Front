import React from "react";
import HeroSection from "../components/heroSection";
import CategoriesSection from "../components/HomePage/CategoriesSection";
import CTA from "../components/HomePage/CTA";

export default function homePage() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <CTA />
    </div>
  );
}
