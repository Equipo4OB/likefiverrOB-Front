import React from "react";
import { ButtonTags, PTags, TagsDiv } from "./heroComponents";

export default function HeroTags() {
  return (
    <TagsDiv>
      <PTags>Popular:</PTags>
      <ButtonTags>Diseño Gráfico</ButtonTags>
      <ButtonTags>Branding</ButtonTags>
      <ButtonTags>Wordpress</ButtonTags>
    </TagsDiv>
  );
}
