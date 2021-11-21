import React from "react";
import HeroSection from "../components/HomePage/heroSection/index"
import CategoriesSection from "../components/HomePage/CategoriesSection";
import CTA from "../components/HomePage/CTA";
import LastWorks from "../components/HomePage/LastWorks";
import NavBarv2 from "../components/v2/navbar";

export default function homePage() {
  return (
    <div>
      <NavBarv2 />
      <HeroSection />
      <LastWorks />
      <CategoriesSection />
      <CTA />
    </div>
  );
}
