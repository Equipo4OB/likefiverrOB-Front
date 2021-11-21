import {
  LastWorksDiv,
  LastWorksHeader,
  LastWorksLink,
  GroupDiv,
} from "./LastWorksComponents";
import React, { useState, useEffect } from "react";
import CardComponent from "../../cardComponent";

export default function LastWorks() {
  const APIURL = "https://api-team4-courses.herokuapp.com/";
  const [works, setWorks] = useState([]);
  useEffect(() => getWorks(), []);

  async function getWorks() {
    const worksResponse = await fetch(APIURL + `courses/`);
    const data = await worksResponse.json();
    setWorks(data);
  }

  return (
    <LastWorksDiv>
      <LastWorksHeader>Explora la plataforma</LastWorksHeader>
      <GroupDiv>
        {works.map(
          (work, index) =>
            index < 10 && (
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
