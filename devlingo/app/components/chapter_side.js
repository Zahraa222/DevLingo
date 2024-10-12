"use client"
import React, { useState } from 'react'
import { chapters } from "./chapters"
import Roadmap_side from './roadmap_side';

function Chapter_side() {
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

    const handleNextChapter = () => {
        if (currentChapterIndex < chapters.length - 1) {
            setCurrentChapterIndex(currentChapterIndex + 1);
        }
    };

    const handlePrevChapter = () => {
        if (currentChapterIndex > 0) {
            setCurrentChapterIndex(currentChapterIndex - 1);
        }
    };

    const currentChapter = chapters[currentChapterIndex];

    return (
        <div className="flex flex-col ml-8">
      {chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex} className="flex flex-row mb-10">
          <div className="w-1/2 mr-8">
            <h1 className="font-bold text-3xl mb-4">{chapter.title}</h1>
            <div className="bg-white text-black p-4 overflow-y-auto max-h-lvh mb-10 rounded-md shadow-md">
              {chapter.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-4">
                  <h4 className="font-bold mb-2">{section.title}</h4>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
          <Roadmap_side />
        </div>
      ))}
    </div>
    );
}

export default Chapter_side;
