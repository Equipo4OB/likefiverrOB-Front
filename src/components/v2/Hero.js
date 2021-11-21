import React from "react";
import "../../styles/tailwind.css";
import Container from "./container";
import HeroImage from "../../assets/images/heroimage2.jpg";

export default function Herov2() {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPositionY: "70%",
      }}
    >
      <Container>
        <div className="py-28 md:py-60">
          <h1 className="text-4xl md:text-5xl p-5 md:p-0 font-sans text-white">
            Encuentra los servicios <span className="italic">freelance</span>{" "}
            ideales para tu negocio
          </h1>
        </div>
      </Container>
    </div>
  );
}
