import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CatDiv,
  CatHeader,
  GroupDiv,
  CardContainer,
  CategoryTitle,
  CategoryCard,
} from "./categoriesComponents";

export default function CategoriesSection() {
  const APIURL = "https://api-team4-courses.herokuapp.com/";
  const [cats, setCats] = useState([]);
  useEffect(() => getCats(), []);

  async function getCats() {
    const worksResponse = await fetch(APIURL + `category/`);
    const data = await worksResponse.json();
    setCats(data);
  }

  return (
    <CatDiv>
      <CatHeader>Explora la plataforma</CatHeader>
      <GroupDiv>
        <CardContainer>
          {cats.map(
            (cat, index) =>
              index < 10 && (
                <CategoryCard key={cat.publicId}>
                  <img src="" alt="" />
                  <CategoryTitle>{cat.categoryName}</CategoryTitle>
                </CategoryCard>
              )
          )}
        </CardContainer>
      </GroupDiv>
    </CatDiv>
  );
}
