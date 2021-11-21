import { React, useState, useEffect } from "react";
import "../../styles/tailwind.css";
import Container from "./Container";
import Loop from "./Loop"
import FilteredLoopv2 from "./FilteredLoop";
import { FaReact, FaAngular, FaNodeJs, FaJava } from "react-icons/fa";
import { BiInfinite } from "react-icons/bi";
import Loopv2 from "./Loop";

export default function AllCourses() {

    return (
        <Container>
            <section className="py-12 space-y-4 px-4 md:px-0">
                <span className="text-3xl font-bold"> Todos los cursos </span>
                <div>
                    <Loopv2/>
                </div>
            </section>
        </Container>
    );
}
