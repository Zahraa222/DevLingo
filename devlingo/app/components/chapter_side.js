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
        if (currentChapterIndex > 0) {
            setCurrentChapterIndex(currentChapterIndex - 1);
        }
    };

    const currentChapter = chapters[currentChapterIndex];

    return (
        <div className='w-1/2 float-left ml-8'>
            <h1 className='font-bold text-3xl'>{currentChapter.title}</h1>
            <div className='bg-white text-black p-4 overflow-y-auto max-h-lvh mb-10 rounded-md'>
                {currentChapter.sections.map((section, index) => (
                    <div key={index}>
                        <h4 className='font-bold'>{section.title}</h4>
                        <p>{section.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chapter_side;
