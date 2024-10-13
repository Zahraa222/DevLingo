'use client';

import { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-6">
      <div
        className={`bg-blue-600 h-6 rounded-full transition-all duration-500`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

const Home = () => {
  const [progress, setProgress] = useState(0);

  
  useEffect(() => {
    const fetchProgress = async () => {
      const response = await fetch('http://localhost:5000/python');
      const data = await response.json();
      setProgress(data.progress);
    };

    fetchProgress();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">Level Progress</h1>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default Home;
