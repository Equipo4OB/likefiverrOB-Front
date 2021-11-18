import React from "react";
import { CTAButton, CTADiv, CTAHeader } from "./CTAcomponents";

export default function CTA() {
  return (
    <CTADiv>
      <CTAHeader>
        Encuentra el <em>talento</em> que <br /> necesitas para que tus negocios
        <br />
        <em>crezcan.</em>
      </CTAHeader>
      <CTAButton>Buscar</CTAButton>
    </CTADiv>
  );
}
