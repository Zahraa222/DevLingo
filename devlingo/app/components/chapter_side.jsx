"use client";
import React, { useState } from "react";
import { chapters } from "./chapters";
import Roadmap_side from "./roadmap_side";
import Image from "next/image"; 
import lockImage from "../images/lock.png";

function Chapter_side() {
  const [unlockedChapters, setUnlockedChapters] = useState([true, false, false]); // Initially only the first chapter is unlocked

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
        <div key={chapterIndex} className="flex flex-row mb-10">
          {/* Chapter content */}
          <div className="w-1/2 mr-8">
            <h1 className="font-bold text-3xl mb-4">{chapter.title}</h1>
            <div
              className={`bg-white text-black p-4 overflow-y-auto max-h-lvh mb-10 rounded-md shadow-md ${
                unlockedChapters[chapterIndex] ? "" : "blur-md"
              }`}
              style={{ minHeight: "500px" }}
            >
              {unlockedChapters[chapterIndex] ? (
                // Show content if the chapter is unlocked
                chapter.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-4">
                    <h4 className="font-bold mb-2">{section.title}</h4>
                    <p>{section.content}</p>
                  </div>
                ))
              ) : (
                // Show locked PNG image and message if the chapter is locked
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white bg-opacity-80">
                  <Image
                    src={lockImage} // Use your PNG image here
                    alt="Locked Chapter"
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <p className="text-gray-500 font-bold">
                    Complete the previous chapter to unlock!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Roadmap_side now properly aligned to the right */}
          <div className="w-1/2">
            <Roadmap_side
              chapterIndex={chapterIndex}
              unlockNextChapter={unlockNextChapter}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chapter_side;
