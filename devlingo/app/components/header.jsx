import React from "react";
import Image from "next/image";
import logo from "../images/devlingologo.png";
import Link from "next/link";

function Header() {
  return (
    <div className="relative flex justify-start items-center pr-8 pl-8 pt-8 pb-8 w-full">
      <Image
        src={logo}
        alt="Dev Lingo Logo"
        className="object-cover"
        width={50}
        height={50}
      />
      <div className="ml-2 text-2xl font-bold text-white">DevLingo</div>
      {/* Link to chat with AI bot */}
      <Link
        href="/gethelp" // Use 'to' instead of 'href'
        className="absolute top-4 right-4 text-sm text-white bg-black py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
      >
        Need help? Chat with our AI bot
      </Link>
    </div>
  );
}

export default Header;
