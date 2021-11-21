import React from "react";
import "../../styles/tailwind.css";
import Container from "./Container";
import HeroImage from "../../assets/images/heroimage2.jpg";
import { FaReact, FaAngular, FaNodeJs, FaJava } from "react-icons/fa";

export default function Buttonv2({ name }) {
  return (
    <button className="flex items-center space-x-2 px-6 py-2 rounded rounded-full border border-blue-200 shadow-md font-sans hover:bg-blue-50">
      <span>
        {name === "React" && <FaReact className="text-blue-600" />}
        {name === "Angular" && <FaAngular className="text-red-600" />}
        {name === "Node" && <FaNodeJs className="text-green-600" />}
        {name === "Java" && <FaJava className="text-red-600" />}
      </span>
      <span className="text-lg">{name}</span>
    </button>
  );
}
