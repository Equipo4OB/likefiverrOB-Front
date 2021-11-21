import React from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import {
  WorkCard,
  SellerNick,
  WorkTitle,
  WorkStars,
  WorkPriceDiv,
  PriceDiv,
  PriceLabel,
  Price,
} from "../components/Explore/workCard";

export default function CardComponent({
  urlImages,
  author,
  title,
  category,
  score,
  price,
}) {
  const addDefaultSrc = (e) => {
    e.target.src =
      "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/11/alternativas-paint-mac.jpg";
  };

  return (
    <WorkCard>
      <img
        onError={(e) => {
          addDefaultSrc(e);
        }}
        src={urlImages}
        alt={title}
      />
      <SellerNick>{author}</SellerNick>
      <WorkTitle>{title}</WorkTitle>
      <PriceLabel>{category}</PriceLabel>
      <WorkStars>
        <AiFillStar size={13} /> {score}
      </WorkStars>
      <WorkPriceDiv>
        <AiFillHeart size={25} fill="darkgray" />{" "}
        <PriceDiv>
          <PriceLabel>A PARTIR DE:</PriceLabel>
          <Price>{price} € </Price>
        </PriceDiv>
      </WorkPriceDiv>
    </WorkCard>
  );
}
