import React from "react";
import { InputButton, InputSearch, SearchDiv } from "./heroComponents";

export default function HeroSearch() {
  return (
    <SearchDiv>
      <InputSearch placeholder="Prueba a buscar algo" />
      <InputButton type="submit">Buscar</InputButton>
    </SearchDiv>
  );
}
