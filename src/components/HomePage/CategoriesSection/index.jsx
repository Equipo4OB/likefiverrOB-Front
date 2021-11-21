import React, { useEffect, useState } from "react";
import {
  CatDiv,
  CatHeader,
  GroupDiv,
  CardContainer,
  CategoryTitle,
  CategoryCard,
  CatLink,
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
                <CatLink
                  href={`/categorias/${cat.categoryName}`}
                  key={cat.publicId}
                >
                  <CategoryCard>
                    <img src="" alt="" />
                    <CategoryTitle>{cat.categoryName}</CategoryTitle>
                  </CategoryCard>
                </CatLink>
              )
          )}
        </CardContainer>
      </GroupDiv>
    </CatDiv>
  );
}
