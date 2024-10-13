import React from "react";
import Chapter_side from "../components/chapter_side";
import Header from "../components/header";

function page() {
  return (
    <div className="p-8 bg-blue-600 min-h-screen">
      <Header></Header>
      <Chapter_side />
    </div>
  );
}

export default page;
