import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { LastWorksLink } from "../HomePage/LastWorks/LastWorksComponents";
import {
  CategoryButton,
  DetailContainer,
  DetailContainerDiv,
  DetailDiv,
  DetailScore,
  DetailScoreDiv,
  DetailTitle,
  PriceButton,
} from "./WorkDetailComponents";

export default function WorkDetail() {
  const { publicId } = useParams();

  const [work, setWork] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => getWork(), []);

  const getWork = async () => {
    const workResponse = await fetch(
      "https://api-team4-courses.herokuapp.com/courses/" + publicId
    );
    const data = await workResponse.json();

    setWork(data);
    setCategory(data.category);
  };

  return (
    <DetailDiv>
      <DetailTitle>{work.title}</DetailTitle>
      <LastWorksLink href={`/categorias/${category.categoryName}`}>
        <CategoryButton>{category.categoryName}</CategoryButton>
      </LastWorksLink>
      <DetailScoreDiv>
        <DetailScore>{work.author}</DetailScore>{" "}
        <DetailScore>
          <AiFillStar fill="#e6c130" size={13} />
          {work.score}
        </DetailScore>
      </DetailScoreDiv>

      <DetailContainer>
        <DetailContainerDiv>
          {work.description}
          <PriceButton>Continuar ({work.price}€)</PriceButton>
        </DetailContainerDiv>
        <DetailContainerDiv>
          <img src={work.urlImages} alt={work.title} />
        </DetailContainerDiv>
      </DetailContainer>
    </DetailDiv>
  );
}
