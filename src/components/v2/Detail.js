import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { LastWorksLink } from "../HomePage/LastWorks/LastWorksComponents";
import Container from "./Container";
import { FaStar } from "react-icons/fa"

export default function Detail() {
    const { publicId } = useParams();

    const [itemDetail, setItemDetail] = useState([]);
    const [itemCategory, setItemCategory] = useState([]);

    useEffect(() => getItems(), []);

    const getItems = async () => {
        const itemsResponse = await fetch(
            "https://api-team4-courses.herokuapp.com/courses/" + publicId
        );
        const data = await itemsResponse.json();

        setItemDetail(data);
        setItemCategory(data.category);
    };

    return (
        <Container>
            <main className="my-12">
                <article className="p-4 md:p-0 space-y-4">
                    <h1 className="text-4xl">
                        {itemDetail.title}
                    </h1>
                    <div className="flex space-x-4">
                        <div className="flex items-center text-yellow-400">
                            <FaStar className="w-4 mr-2" />
                            <span>{itemDetail.score}</span>
                        </div>
                        <span className="text-gray-300 font-light">|</span>
                        <span className="text-lg font-bold">{itemDetail.price} €</span>
                    </div>
                    <img className="bg-cover" src={itemDetail.urlImages?.url} />
                    <p > {itemDetail.description} </p>
                </article>
            </main>
        </Container>
    );
}
