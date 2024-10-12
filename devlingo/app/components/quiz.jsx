"use client"
import React, { useState } from 'react';
import { quizQuestions } from './quizData';

function QuizCard({ onClose}) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setShowNextButton(false);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    if (currentQuestionIndex === quizQuestions.length - 1) {
      closeModal();
      onClose();
    }
  }
  
  const checkQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const correctAnswer = currentQuestion.options.find(option => option.isCorrect);
    console.log('Correct Answer:', correctAnswer.answer);
    console.log('Selected Answer:', selectedAnswer);
    if (selectedAnswer === correctAnswer.answer) {
      setIsAnswerCorrect(true);
      console.log('Correct Answer');
    } else {
      setIsAnswerCorrect(false);
        console.log("Incorrect Answer");
    }
    setShowNextButton(true);
  }

  

  const currentQuestion = quizQuestions[currentQuestionIndex];


return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="z-10 bg-white p-6 rounded-lg shadow-lg text-center">
            {isModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="modal-content bg-white p-8 rounded-lg shadow-lg max-w-sm text-center text-black w-96">
                        <h2 className="text-xl font-semibold mb-4">Quiz Questions</h2>
                        <p className="mb-2">{ currentQuestion.question}</p>
                        <div className="mb-4 flex flex-col items-start">
                            {currentQuestion.options.map((option, index) => (
                            <div key={index} className='m-2'>
                                <button onClick={() => setSelectedAnswer(option.answer)}
                                    className={`bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 w-72 text-left ${
                                        selectedAnswer === option.answer
                                        ? "bg-blue-300"
                                        : "bg-gray-200"
                                    }`}
                                >
                                    {option.answer}
                                </button>
                            </div>
                            ))}
                        </div>
                        <button onClick={checkQuestion} className={`close-modal-button bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4 ${isAnswerCorrect ? 'hidden' : 'inline'}`}>
                            Check Answer
                        </button>
                        {isAnswerCorrect !== null && (
                            <div className={`mt-4 text-lg font-semibold ${isAnswerCorrect ? 'text-green-500' : 'text-red-500'}`}>
                                <h4>{isAnswerCorrect ? 'Correct Answer!' : 'Incorrect Answer!'} </h4>
                                {isAnswerCorrect == true && (
                                    <button onClick={handleNextQuestion} className={`next-question-button bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4`}>
                                        Next Question
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    </div>
);
}

export default QuizCard;