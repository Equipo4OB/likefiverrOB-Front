import React from "react";
import HeroSection from "../components/HomePage/heroSection/index"
import CategoriesSection from "../components/HomePage/CategoriesSection";
import CTA from "../components/HomePage/CTA";
import LastWorks from "../components/HomePage/LastWorks";
import NavBarv2 from "../components/v2/Navbar";
import Herov2 from "../components/v2/Hero";
import CatButtonsv2 from "../components/v2/CatButtons";

export default function homePage() {
  return (
    <div>
      <NavBarv2 />
      <Herov2 />
      <CatButtonsv2 />
      <HeroSection />
      <LastWorks />
      <CategoriesSection />
      <CTA />
    </div>
  );
}
