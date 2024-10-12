"use client"
import React, { useState } from 'react'
import { chapters } from "./chapters"

function Chapter_side() {
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

    const handleNextChapter = () => {
        if (currentChapterIndex < chapters.length - 1) {
            setCurrentChapterIndex(currentChapterIndex + 1);
        }
    };

    const handlePrevChapter = () => {
        if (currentChapterIndex > chapters.length - 1) {
            setCurrentChapterIndex(currentChapterIndex - 1);
        }
    };
    
    const currentChapter = chapters[currentChapterIndex] || { title: 'Unknown', sections: [] };

    return (
        <div className='w-1/2 float-left'>
            <h1 className='shadow-custom'>{currentChapter.title}</h1>
            <div className='bg-white text-black p-4 overflow-y-auto max-h-96'>
                {currentChapter.sections.map((section, index) => (
                    <div key={index}>
                        <h4>{section.title}</h4>
                        <p>{section.content}</p>
                    </div>
                ))}
                <button onClick={handleNextChapter} disabled={currentChapterIndex >= chapters.length - 1}>
                    Back
                </button>
                <button onClick={handlePrevChapter} disabled={currentChapterIndex >= chapters.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Chapter_side;
