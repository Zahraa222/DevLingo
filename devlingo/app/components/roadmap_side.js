"use client";

import React, { useState } from "react";
import Image from "next/image";
import ideas from "../images/ideas.png";
import correct from "../images/correct.png";
import QuizCard from "./quiz";

const QuizCircle = ({ imageUrl, isSelected, onClick }) => {
  return (
    <div
      className={`flex items-center justify-center w-40 h-40 rounded-full cursor-pointer ${
        isSelected ? "bg-green-500" : "bg-slate-100"
      }`}
      onClick={onClick}
    >
      <Image
        src={isSelected ? correct : imageUrl}
        alt="Quiz Logo"
        className="object-cover opacity-100"
        width={75}
        height={75}
      />
    </div>
  );
};

function Roadmap_side() {
  const imageUrl = ideas;
  const [selectedCircles, setSelectedCircles] = useState([false, false, false]);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleCircleClick = (index) => {
    const newSelection = [...selectedCircles];
    newSelection[index] = !newSelection[index];
    setSelectedCircles(newSelection);
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="w-[500px] h-[500px] mt-6">
      <div className="flex flex-col items-center relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-24 bg-gray-300"></div>
        {selectedCircles.map((isSelected, index) => (
          <React.Fragment key={index}>
            <QuizCircle
              imageUrl={imageUrl}
              isSelected={isSelected}
              onClick={() => handleCircleClick(index)}
            />
            {index < selectedCircles.length - 1 && (
              <div className="w-1 h-24 bg-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      {isQuizOpen && <QuizCard onClose={closeQuiz} />}
    </div>
  );
}

export default Roadmap_side;
