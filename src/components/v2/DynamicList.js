import { React, useState, useEffect } from "react";
import "../../styles/tailwind.css";
import Container from "./container";
import Button from "./Button";
import FilteredLoopv2 from "./FilteredLoop";
import { FaReact, FaAngular, FaNodeJs, FaJava } from "react-icons/fa";

export default function DynamicListv2() {
  const [selection, setSelection] = useState();
  console.log(selection);

  return (
    <Container>
      <section className="py-12 space-y-4">
        <span className="text-2xl font-bold"> Selecciona una categoría: </span>
        <div className="space-y-12">
          <div className="grid grid-flow-col auto-cols gap-2 lg:gap-12">
            <button
              className="flex items-center space-x-2 px-6 py-2 rounded rounded-full border border-blue-200 shadow-md font-sans hover:bg-blue-50"
              onClick={(e) => setSelection(e.target.value)}
              name="React"
              value="react"
            >
              <FaReact className="text-blue-600 mr-3" />
              React{" "}
            </button>

            <button
              className="flex items-center space-x-2 px-6 py-2 rounded rounded-full border border-blue-200 shadow-md font-sans hover:bg-blue-50"
              onClick={(e) => setSelection(e.target.value)}
              name="Angular"
              value="angular"
            >
              <FaAngular className="text-red-600 mr-3" />
              Angular
            </button>
            <button
              className="flex items-center space-x-2 px-6 py-2 rounded rounded-full border border-blue-200 shadow-md font-sans hover:bg-blue-50"
              onClick={(e) => setSelection(e.target.value)}
              name="NodeJs"
              value="nodejs"
            >
              <FaNodeJs className="text-green-600 mr-3" />
              NodeJs
            </button>
            <button
              className="flex items-center space-x-2 px-6 py-2 rounded rounded-full border border-blue-200 shadow-md font-sans hover:bg-blue-50"
              onClick={(e) => setSelection(e.target.value)}
              name="Java"
              value="java"
            >
              <FaJava className="text-red-600" />
              Java
            </button>
          </div>
          <div className="space-y-4">
            <span className="flex items-center uppercase text-2xl font-light">
              {" "}
              {selection}
              {selection && (
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
              )}
            </span>
            <FilteredLoopv2 dynamicFilter={selection} />
          </div>
        </div>
      </section>
    </Container>
  );
}
