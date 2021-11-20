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

export default function CardComponent({
    title,
    stars,
    price,
    seller,
    image
}) {

    return (
            <WorkCard>
                <img src={image} alt={title} />
                <Seller>
                    <img src={seller.avatar} alt={seller.nick} />
                    <SellerData>
                        <SellerNick>{seller.nick}</SellerNick>

                        <SellerLevel>{seller.level}</SellerLevel>
                    </SellerData>
                </Seller>
                <WorkTitle>{title}</WorkTitle>
                <WorkStars>
                    <AiFillStar size={13} /> {stars}
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