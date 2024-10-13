"use client";
import React, { useState } from 'react';
import { quizQuestions } from './quizData';
import Confetti from 'react-confetti';


function QuizCard({ onClose }) {
 const [isModalOpen, setIsModalOpen] = useState(true);
 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
 const [selectedAnswer, setSelectedAnswer] = useState(null);
 const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
 const [isQuizFinished, setIsQuizFinished] = useState(false); // State to track if the quiz is finished


 // Total questions in the quiz
 const totalQuestions = quizQuestions.length;


 const closeModal = () => {
   setIsModalOpen(false);
 };


 const handleNextQuestion = () => {
   if (isAnswerCorrect) {
     setSelectedAnswer(null);
     setIsAnswerCorrect(null); // Reset the correctness state for the next question
     if (currentQuestionIndex < totalQuestions - 1) {
       setCurrentQuestionIndex(currentQuestionIndex + 1);
     } else {
       // Mark the quiz as finished when the last question is answered
       setIsQuizFinished(true);
     }
   }
 };


 const checkQuestion = () => {
   const currentQuestion = quizQuestions[currentQuestionIndex];
   const correctAnswer = currentQuestion.options.find(option => option.isCorrect);


   if (selectedAnswer === correctAnswer.answer) {
     setIsAnswerCorrect(true);  // Answer is correct
   } else {
     setIsAnswerCorrect(false); // Answer is incorrect
   }
 };


 const currentQuestion = quizQuestions[currentQuestionIndex];


 return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <div className="z-10 bg-white p-6 rounded-lg shadow-lg text-center">
       {isModalOpen && (
         <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
           <div className="modal-content bg-white p-8 rounded-lg shadow-lg max-w-sm text-center text-black w-96">
             <h2 className="text-xl font-semibold mb-4">Quiz Questions</h2>


             {/* Progress Bar */}
             <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
               <div
                 className="bg-green-500 h-4 rounded-full"
                 style={{ width: isQuizFinished ? '100%' : `${(currentQuestionIndex / totalQuestions) * 100}%` }} // Progress bar fills 100% when quiz is finished
               ></div>
             </div>


             {/* Checkpoints */}
             <div className="flex justify-between mb-4">
               {quizQuestions.map((_, index) => (
                 <div
                   key={index}
                   className={`w-4 h-4 rounded-full ${
                     index <= currentQuestionIndex || isQuizFinished ? "bg-green-500" : "bg-gray-300"
                   }`}
                 ></div>
               ))}
             </div>


             <p className="mb-2">{currentQuestion.question}</p>
             <div className="mb-4 flex flex-col items-start">
               {currentQuestion.options.map((option, index) => (
                 <div key={index} className="m-2">
                   <button
                     onClick={() => setSelectedAnswer(option.answer)}
                     className={`text-black px-4 py-2 rounded w-72 text-left ${
                       selectedAnswer === option.answer ? "bg-blue-300" : "bg-gray-200 hover:bg-gray-300"
                     }`}
                   >
                     {option.answer}
                   </button>
                 </div>
               ))}
             </div>


             {/* Check Answer Button / Next Question Button */}
             {isQuizFinished ? (
               <button
                 onClick={onClose}
                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
               >
                 Close Quiz
               </button>
             ) : (
               <div>
                 <button
                   onClick={checkQuestion}
                   className={`text-white px-4 py-2 rounded mt-4 ${
                     selectedAnswer ? "bg-red-500 hover:bg-red-600" : "bg-gray-300 cursor-not-allowed"
                   } ${isAnswerCorrect ? "hidden" : ""}`}
                   disabled={!selectedAnswer} // Disable button until an answer is selected
                 >
                   Check Answer
                 </button>
                 {isAnswerCorrect && (
                   <button
                     onClick={handleNextQuestion}
                     className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                   >
                     Next Question
                   </button>
                 )}
               </div>
             )}


             {/* Correct/Incorrect Feedback */}
             {isAnswerCorrect !== null && (
               <div className={`mt-4 text-lg font-semibold ${isAnswerCorrect ? 'text-green-500' : 'text-red-500'}`}>
                 <h4>{isAnswerCorrect ? 'Correct Answer!' : 'Incorrect Answer! Try Again.'}</h4>
               </div>
             )}


             {/* Confetti Effect at the End of the Quiz */}
             {isQuizFinished && <Confetti width={window.innerWidth} height={window.innerHeight} />}
           </div>
         </div>
       )}
     </div>
   </div>
 );
}


export default QuizCard;



