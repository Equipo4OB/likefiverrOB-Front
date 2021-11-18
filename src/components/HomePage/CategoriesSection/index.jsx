import React from "react";
import { Link } from "react-router-dom";
import {
  CatDiv,
  CatHeader,
  CatLink,
  GroupDiv,
  IconDiv,
} from "./categoriesComponents";

import { MdOutlineDesignServices, MdOutlineLibraryBooks } from "react-icons/md";
import { HiOutlineDesktopComputer, HiCode } from "react-icons/hi";
export default function CategoriesSection() {
  return (
    <CatDiv>
      <CatHeader>Explora la plataforma</CatHeader>
      <GroupDiv>
        <CatLink to="/">
          <IconDiv>
            <MdOutlineDesignServices size="5rem" color="#1f7a8c" />
            Diseño Gráfico
          </IconDiv>
        </CatLink>
        <CatLink to="/">
          <IconDiv>
            <HiOutlineDesktopComputer size="5rem" color="#1f7a8c" />
            Marketing Digital
          </IconDiv>
        </CatLink>
        <CatLink to="/">
          <IconDiv>
            <MdOutlineLibraryBooks size="5rem" color="#1f7a8c" />
            Datos
          </IconDiv>
        </CatLink>
        <CatLink to="/">
          <IconDiv>
            <HiCode size="5rem" color="#1f7a8c" />
            Programación
          </IconDiv>
        </CatLink>
      </GroupDiv>
    </CatDiv>
  );
}
