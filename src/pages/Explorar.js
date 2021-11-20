import React from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import {
  WorkCard,
  Seller,
  SellerData,
  SellerNick,
  SellerLevel,
  WorkTitle,
  WorkStars,
  WorkPriceDiv,
  PriceDiv,
  PriceLabel,
  Price,
} from "../components/Explore/workCard";

import {
  ExploreContainer,
  CardContainer,
  ExploreTitle,
} from "../components/Explore/exploreComponents";
import {
  CategoryCard,
  CategoryTitle,
} from "../components/Explore/categoryCard";

const fakeCategory = {
  titulo: "Diseño Gráfico",
  imagen:
    "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/11/alternativas-paint-mac.jpg",
};

const fakeWork = {
  vendedor: {
    nick: "Vendedor de prueba",
    avatar:
      "https://www.latercera.com/resizer/UvfBPh1sqyoGpgeuWPdVqcZbmfU=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/3T6LCQ24TJGTVOZTDHXWLQXGJM.jpg",
    nivel: "Vendedor nivel 2",
  },
  titulo: "Soy un trabajo",
  imagen:
    "https://images.unsplash.com/photo-1637408974908-9cc7e9aa17d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1260&q=80",
  estrellas: 4.8,
  precio: 9.99,
};

export default function Explore() {
  return (
    <ExploreContainer>
      <ExploreTitle>Últimos trabajos:</ExploreTitle>

      <CardContainer>
        <WorkCard>
          <img src={fakeWork.imagen} alt={fakeWork.titulo} />
          <Seller>
            <img src={fakeWork.vendedor.avatar} alt={fakeWork.vendedor.nick} />
            <SellerData>
              <SellerNick>{fakeWork.vendedor.nick}</SellerNick>

              <SellerLevel>{fakeWork.vendedor.nivel}</SellerLevel>
            </SellerData>
          </Seller>
          <WorkTitle>{fakeWork.titulo}</WorkTitle>
          <WorkStars>
            <AiFillStar size={13} /> {fakeWork.estrellas}
          </WorkStars>
          <WorkPriceDiv>
            <AiFillHeart size={25} fill="darkgray" />{" "}
            <PriceDiv>
              <PriceLabel>A PARTIR DE:</PriceLabel>
              <Price>{fakeWork.precio} € </Price>
            </PriceDiv>
          </WorkPriceDiv>
        </WorkCard>
      </CardContainer>

      <ExploreTitle>Categorías destacadas:</ExploreTitle>
      <CardContainer>
        <CategoryCard>
          <img src={fakeCategory.imagen} alt={fakeCategory.titulo} />
          <CategoryTitle>{fakeCategory.titulo}</CategoryTitle>
        </CategoryCard>
      </CardContainer>
    </ExploreContainer>
  );
}
