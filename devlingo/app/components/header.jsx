import React from "react";
import Image from "next/image";
import logo from "../images/devlingologo.png";

function Header() {
  return (
    <div className="relative flex justify-start items-center pr-4 pl-4 w-full">
      <Image
        src={logo}
        alt="Dev Lingo Logo"
        className="object-cover"
        width={50}
        height={50}
      />
      <div className="ml-2 text-2xl font-bold text-white">DevLingo</div>
    </div>
  );
}

export default Header;
