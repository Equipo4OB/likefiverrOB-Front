import React, { useState, useEffect } from "react";
import CardComponent from "./cardComponent";
export default function SetWorks() {

    const APIURL = "https://api-team4-courses.herokuapp.com/"
    const [works, setWorks] = useState([]);
    useEffect(() => getWorks(), []);

    async function getWorks() {
        const worksResponse = await fetch(APIURL + `courses/`);
        const data = await worksResponse.json();
        setWorks(data);
    }

    return (
        <div>
            {works.map((work) => (
                <a href="/" key={work.publicId}>
                    <CardComponent
                        title={work.title}
                        score={work.score}
                        price={work.price}
                        seller={work.author}
                        image={work.urlImages}
                    />
                </a>
            ))}
        </div>
    );
}