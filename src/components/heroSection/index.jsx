import React from "react";
import { HeroDiv, HeroHeader } from "./heroComponents";
import HeroSearch from "./HeroSearch";
import HeroTags from "./HeroTags";

export default function HeroSection() {
  return (
    <HeroDiv>
      <HeroHeader>
        Encuentra los servicios <em>freelance</em>
        <br /> ideales para tu negocio
      </HeroHeader>
      <HeroSearch />
      <HeroTags />
    </HeroDiv>
  );
}
