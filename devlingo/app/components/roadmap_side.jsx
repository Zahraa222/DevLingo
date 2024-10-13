"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ideas from "../images/ideas.png";
import correct from "../images/correct.png";
import LockImage from "../images/lock.png";
import QuizCard from "./quiz";
import { quizQuestions } from "./quizData";

const QuizCircle = ({ imageUrl, isSelected, isLocked, onClick }) => {
  return (
    <div
      className={`flex items-center justify-center w-40 h-40 rounded-full cursor-pointer z-10 ${
        isSelected ? "bg-green-500" : "bg-slate-100"
      }`}
      onClick={onClick}
    >
      <Image
        src={isLocked ? LockImage : isSelected ? correct : imageUrl}
        alt="Quiz Logo"
        className="object-cover opacity-100"
        width={75}
        height={75}
      />
    </div>
  );
};

function Roadmap_side({ chapterIndex, unlockNextChapter, unlockedChapters }) {
  const imageUrl = ideas;
  const [selectedCircles, setSelectedCircles] = useState([false, false, false]);
  const [isQuizOpen, setIsQuizOpen] = useState(false);  // Handles quiz modal state
  const [currentQuiz, setCurrentQuiz] = useState(null); // State to store the current quiz
  const [isChapterUnlocked, setIsChapterUnlocked] = useState(false);

  useEffect(() => {
    // Check if all quizzes are completed for this chapter
    if (selectedCircles.every((circle) => circle) && !isChapterUnlocked) {
      unlockNextChapter(chapterIndex); // Unlock the next chapter
      setIsChapterUnlocked(true);
    }
  }, [selectedCircles, unlockNextChapter, chapterIndex, isChapterUnlocked]);

  const handleCircleClick = (index) => {
    const newSelection = [...selectedCircles];
    newSelection[index] = !newSelection[index];
    setSelectedCircles(newSelection);

    // Set the appropriate quiz data based on the selected circle
    const selectedChapter = quizQuestions[`chapter${chapterIndex + 1}`];  // Access the correct chapter
    const selectedQuiz = selectedChapter[0][`quiz${index + 1}`];  // Access the correct quiz

    if (selectedQuiz) {
      setCurrentQuiz(selectedQuiz);  // Set the selected quiz data
      setIsQuizOpen(true);  // Open the quiz modal
    } else {
      console.error("Selected quiz not found.");
    }
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);  // Close the quiz modal
    setCurrentQuiz(null);  // Clear quiz data after closing
  };

  const isLocked = unlockedChapters && !unlockedChapters[chapterIndex];

  return (
    <div className="mt-6">
      <div className="flex flex-col items-center relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-24 bg-gray-300"></div>
        {selectedCircles.map((isSelected, index) => (
          <React.Fragment key={index}>
            <QuizCircle
              imageUrl={imageUrl}
              isLocked={isLocked}
              isSelected={isSelected}
              onClick={() => handleCircleClick(index)}
            />
            {index < selectedCircles.length - 1 && (
              <div className="w-1 h-24 bg-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Only render QuizCard when a quiz is selected and the modal is open */}
      {isQuizOpen && currentQuiz && (
        <QuizCard quizData={currentQuiz} onClose={closeQuiz} />
      )}
    </div>
  );
}

export default Roadmap_side;
