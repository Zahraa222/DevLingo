"use client";
import React, { useState } from "react";
import { chapters } from "./chapters";
import Roadmap_side from "./roadmap_side";
import Image from "next/image"; 
import lockImage from "../images/lock.png";

function Chapter_side() {
  const [unlockedChapters, setUnlockedChapters] = useState([true, ...Array(chapters.length-1).fill(false)]); // Initially only the first chapter is unlocked

  const unlockNextChapter = (index) => {
    setUnlockedChapters((prev) => {
      const updated = [...prev];
      if (index < chapters.length - 1) {
        updated[index + 1] = true; // Unlock the next chapter
      }
      return updated;
    });
  };

  return (
    <div className="flex flex-col ml-8">
      {chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex} className="flex flex-row mb-10 relative">
          {!unlockedChapters[chapterIndex] ? (
            <div className="w-1/2 mr-8 relative">
              <h1 className="font-bold text-3xl mb-4">{chapter.title}</h1>

              {/* Parent component with image and text */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
                <Image
                  src={lockImage}
                  alt="Locked Chapter"
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <p className="text-gray-500 font-bold">
                  Complete the previous chapter to unlock!
                </p>
              </div>

              {/* Child component with blurred white space */}
              <div
                className={`relative w-full h-48 bg-white ${
                  unlockedChapters[chapterIndex] ? "" : "blur-md"
                }`}
                style={{ height: "700px" }}
              ></div>
            </div>
          ) : (
            <div className="w-1/2 mr-8 relative">
              <h1 className="font-bold text-3xl mb-4">{chapter.title}</h1>
              <div className="bg-white text-black p-4 overflow-y-auto max-h-[850px] mb-10 rounded-md shadow-md">
                {/* Show content if the chapter is unlocked */}
                {chapter.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-4">
                    <h4 className="font-bold mb-2">{section.title}</h4>
                    <p>{section.content}</p>
                    <code className="bg-gray-200">{section.code}</code>
                  </div>
              ))}
            </div>
            </div>
          )}
          <div className="w-1/2">
            <Roadmap_side
              chapterIndex={chapterIndex}
              unlockNextChapter={unlockNextChapter}
              unlockedChapters={unlockedChapters}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chapter_side;
