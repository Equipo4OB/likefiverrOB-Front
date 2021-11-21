import React from "react";
import HeroSection from "../components/HomePage/heroSection/index";
import CategoriesSection from "../components/HomePage/CategoriesSection";
import CTA from "../components/HomePage/CTA";
import LastWorks from "../components/HomePage/LastWorks";
import Herov2 from "../components/v2/Hero";
import DynamicListv2 from "../components/v2/DynamicList";

export default function homePage() {
  return (
    <div>
      <Herov2 />
      <DynamicListv2 />
      <CTA />
    </div>
  );
}
