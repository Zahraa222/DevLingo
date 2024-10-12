'use client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function GetHelp() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question.trim()) {
      setError('Please provide a valid question.');
      return;
    }

    setLoading(true);
    setError('');
    setAnswer('');

    try {
      // Use Flask's API endpoint (running on port 5000)
      const response = await fetch('http://localhost:5000/gethelp', {  // Correct Flask endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong with the server.');
      }

      const data = await response.json();
      setAnswer(data.answer);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">
          Ask a Question
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows={4}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Get Help'}
          </button>
        </form>

        {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
        {answer && (
          <div className="mt-6 p-4 bg-blue-100 text-blue-900 rounded-md">
            <h2 className="font-bold mb-2">AI's Response:</h2>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
