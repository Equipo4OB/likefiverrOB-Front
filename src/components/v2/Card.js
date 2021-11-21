import React from "react";
import "../../styles/tailwind.css";
import Container from "./container";
import HeroImage from "../../assets/images/heroimage2.jpg";
import { FaStar } from "react-icons/fa";

export default function Cardv2({ title, description, stars, price, image }) {
  const reducedDescription = description.substr(0, 45);

  return (
    <div className="p-6 border border-gray-200 rounded-xl shadow-md hover:bg-blue-50 hover:bg-opacity-25">
      <div className="space-y-2 font-sans">
        <span className="text-lg font-medium">{title}</span>
        <p className="text-xs">{reducedDescription}</p>
        <div className="flex items-center text-xs text-yellow-400">
          {" "}
          <FaStar className="w-3 mr-2" />
          {stars}
        </div>
      </div>
    </div>
  );
}
