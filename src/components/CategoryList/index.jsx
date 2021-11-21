import {
  LastWorksDiv,
  LastWorksHeader,
  LastWorksLink,
  GroupDiv,
} from "../HomePage/LastWorks/LastWorksComponents";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CardComponent from "../cardComponent";

export default function CategoryList() {
  const { publicId } = useParams();

  const APIURL = "https://api-team4-courses.herokuapp.com/";
  const [works, setWorks] = useState([]);

  useEffect(() => getWorks(), []);

  async function getWorks() {
    const workResponse = await fetch(APIURL + "courses/");
    const data = await workResponse.json();

    setWorks(data);
  }

  return (
    <LastWorksDiv>
      <LastWorksHeader>Nuestros cursos en {publicId}</LastWorksHeader>
      <GroupDiv>
        {works
          .filter((work) => work.category.categoryName.includes(publicId))
          .map(
            (work, index) =>
              index < 50 && (
                <LastWorksLink
                  key={work.publicId}
                  href={`/cursos/${work.publicId}`}
                >
                  <CardComponent
                    title={work.title}
                    score={work.score}
                    price={work.price}
                    seller={work.author}
                    image={work.imageUrl}
                  />
                </LastWorksLink>
              )
          )}
      </GroupDiv>
    </LastWorksDiv>
  );
}
