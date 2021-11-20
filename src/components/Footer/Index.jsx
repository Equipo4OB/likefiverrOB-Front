import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FooterDiv, FooterList, FootLink } from "./footerComponents";

export default function Footer() {
  return (
    <FooterDiv>
      <FooterList>
        Categorias
        <BrowserRouter>
          <FootLink to="/">
            <li>Artes gráficas y diseño</li>
          </FootLink>
          <FootLink to="/">
            <li>Marketing digital</li>
          </FootLink>
          <FootLink to="/">
            <li>Redacción y traducción</li>
          </FootLink>
          <FootLink to="/">
            <li>Video y animación</li>
          </FootLink>
          <FootLink to="/">
            <li>Música y audio</li>
          </FootLink>
        </BrowserRouter>
      </FooterList>

      <FooterList>
        Acerca de
        <BrowserRouter>
          <FootLink to="/">
            <li>Carreras</li>
          </FootLink>
          <FootLink to="/">
            <li>Prensa y noticias</li>
          </FootLink>
          <FootLink to="/">
            <li>Asociaciones</li>
          </FootLink>
          <FootLink to="/">
            <li>Política de privacidad</li>
          </FootLink>
          <FootLink to="/">
            <li>Términos de Servicio</li>
          </FootLink>
        </BrowserRouter>
      </FooterList>

      <FooterList>
        Soporte
        <BrowserRouter>
          <FootLink to="/">
            <li>Ayuda y soporte</li>
          </FootLink>
          <FootLink to="/">
            <li>Confianza y seguridad</li>
          </FootLink>
          <FootLink to="/">
            <li>Vender en Fiverr</li>
          </FootLink>
          <FootLink to="/">
            <li>Comprar en Fiverr</li>
          </FootLink>
          <FootLink to="/">
            <li>Fiverr Business</li>
          </FootLink>
        </BrowserRouter>
      </FooterList>
    </FooterDiv>
  );
}
