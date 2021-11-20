import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardComponent from "./cardComponent";

export default function Loop() {

    const APIURL = "https://api-team4-courses.herokuapp.com/"
    const [loop, setLoop] = useState([]);
    useEffect(() => getLoop(), []);

    async function getLoop() {
        const loopResponse = await fetch(APIURL + `courses/page/0`);
        const data = await loopResponse.json();
        setLoop(data);
    }

    return (
        <div>
            {loop.map((item) => (
                <a href="/" key={item.title}>
                    <CardComponent
                        title={item.title}
                        stars={item.score}
                        price={item.price}
                        seller={item.author}
                        image={item.urlImages}
                    />
                </a>
            ))}
        </div>
    );
}