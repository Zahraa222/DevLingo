import React from "react";
import Chapter_side from "../components/chapter_side";
import Header from "../components/header";

function page() {
  return (
    <div className="pr-8 pl-8 bg-[#ef4035] min-h-screen">
      <Header></Header>
      <Chapter_side />
    </div>
  );
}

export default page;
