import { React, useState, useEffect } from "react";
import "../../styles/tailwind.css";
import Container from "./Container";
import Loop from "./Loop"
import FilteredLoopv2 from "./FilteredLoop";
import { FaReact, FaAngular, FaNodeJs, FaJava } from "react-icons/fa";
import { BiInfinite } from "react-icons/bi";
import Loopv2 from "./Loop";

export default function AllCourses({
    cat,
}) {

    return (
        <Container>
            <section className="py-12 space-y-4 px-4 md:px-0">
                <span className="flex items-center text-3xl font-bold"> Todos los cursos
                    <span className="ml-2 uppercase">{cat}</span>
                    <svg
                        class="ml-2 w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </span>

                <div>
                    <FilteredLoopv2 dynamicFilter={cat} />
                </div>
            </section>
        </Container>
    );
}
