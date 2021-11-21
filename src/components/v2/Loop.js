import { React, useState, useEffect } from "react";
import "../../styles/tailwind.css";
import Cardv2 from "./Card";
import { LastWorksLink } from "../HomePage/LastWorks/LastWorksComponents";

export default function Loopv2({ dynamicFilter }) {
    const APIURL = "https://api-team4-courses.herokuapp.com/";
    const [items, setItems] = useState([]);
    useEffect(() => getItems(), []);

    async function getItems() {
        const itemsResponse = await fetch(APIURL + `courses/`);
        const data = await itemsResponse.json();
        setItems(data);
    }

    return (
        <section>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4 lg:gap-12">
                {items.map((item, index) =>
                    index < 10 && (
                        <LastWorksLink
                            key={item.publicId}
                            href={`/cursos/${item.publicId}`}
                        >
                            <Cardv2
                                title={item.title}
                                description={item.description}
                                stars={item.score}
                            />
                        </LastWorksLink>
                    ))}
            </div>
        </section>
    );
}

