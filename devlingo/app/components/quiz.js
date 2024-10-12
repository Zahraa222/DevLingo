"use client"
import React, { useState } from 'react';

function QuizCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="z-10 bg-white p-6 rounded-lg shadow-lg text-center">
        <button onClick={openModal} className="open-modal-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Start Quiz
        </button>
        {isModalOpen && (
          <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="modal-content bg-white p-8 rounded-lg shadow-lg max-w-sm text-center text-black">
              <h2 className="text-xl font-semibold mb-4">Quiz Questions</h2>
              <p className="mb-2">Question 1: What is the capital of France?</p>
               
              <p className="mb-4">Question 2: What is 2 + 2?</p>
              <button onClick={closeModal} className="close-modal-button bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizCard;
