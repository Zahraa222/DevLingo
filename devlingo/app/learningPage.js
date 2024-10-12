"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chapter_side from "./components/chapter_side";
import Roadmap_side from "./components/roadmap_side";

const App = () => {
  return (
    <div className="flex flex-row ">
      <Chapter_side />
      <Roadmap_side />
    </div>
  );
};

export default App;
