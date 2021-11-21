import { React, useState, useEffect } from "react";
import "../../styles/tailwind.css";
import Container from "./Container";
import Button from "./Button";
import Loop from "./Loop"
import FilteredLoopv2 from "./FilteredLoop";
import { FaReact, FaAngular, FaNodeJs, FaJava } from "react-icons/fa";
import { BiInfinite } from "react-icons/bi";

export default function DynamicListv2() {
    const [selection, setSelection] = useState();
    console.log(selection);

    return (
        <Container>
            <section className="py-12 space-y-4 px-4 md:px-0">
                <span className="text-3xl font-bold"> Selecciona una categoría: </span>
                <div className="space-y-12">
                    <div className="grid grid-flow-row grid-cols-2 md:grid-cols-5 gap-2 lg:gap-12">
                        <button
                            className="flex items-center space-x-2 px-6 py-2 rounded rounded-full border border-gray-200 shadow-md font-sans hover:bg-gray-50 hover:border-gray-500"
                            onClick={(e) => setSelection(e.target.value)}
                            value="todo"
                        >
                            <BiInfinite className="text-gray-400 mr-3" />
                            Todo

                        </button>
                        <button
                            className="flex items-center space-x-2 px-6 py-2 rounded rounded-full border border-blue-200 shadow-md font-sans hover:bg-blue-50 hover:border-blue-500"
                            onClick={(e) => setSelection(e.target.value)}
                            value="react"
                        >
                            <FaReact className="text-blue-600 mr-3" />
                            React
                        </button>

                        <button
                            className="flex items-center space-x-2 px-6 py-2 rounded rounded-full border border-blue-200 shadow-md font-sans hover:bg-red-50 hover:border-red-500"
                            onClick={(e) => setSelection(e.target.value)}
                            value="angular"
                        >
                            <FaAngular className="text-red-600 mr-3" />
                            Angular
                        </button>
                        <button
                            className="flex items-center space-x-2 px-6 py-2 rounded rounded-full border border-blue-200 shadow-md font-sans hover:bg-green-50 hover:border-green-500"
                            onClick={(e) => setSelection(e.target.value)}
                            value="nodejs"
                        >
                            <FaNodeJs className="text-green-600 mr-3" />
                            NodeJs
                        </button>
                        <button
                            className="flex items-center space-x-2 px-6 py-2 rounded rounded-full border border-blue-200 shadow-md font-sans hover:bg-red-50 hover:border-red-500"
                            onClick={(e) => setSelection(e.target.value)}
                            value="java"
                        >
                            <FaJava className="text-red-600" />
                            Java
                        </button>
                    </div>
                    <div className="space-y-4">
                        <span className="flex items-center uppercase text-2xl font-light">
                            {selection ?
                                <div className="flex">
                                    {selection}
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
                                </div>
                                :
                                <div className="flex">
                                    TODO
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
                                </div>
                            }
                        </span>
                        {selection === undefined && <Loop />}
                        {selection === "todo" && <Loop />}
                        {selection && <FilteredLoopv2 dynamicFilter={selection} />}
                    </div>
                </div>
            </section>
        </Container>
    );
}
