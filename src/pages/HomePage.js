import React from "react";
import HeroSection from "../components/HomePage/heroSection/index"
import CategoriesSection from "../components/HomePage/CategoriesSection";
import CTA from "../components/HomePage/CTA";
import Loop from "../components/loop";

export default function homePage() {
  return (
    <div>
      <HeroSection />
      <Loop />
      <CategoriesSection />
      <CTA />
    </div>
  );
}
