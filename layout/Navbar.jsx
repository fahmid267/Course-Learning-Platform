import React from "react";
import {FaUser} from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="p-8 flex justify-between items-center">
      <div>
        <Link href="/"><h2 className="text-4xl">CodeHub</h2></Link>
      </div>

      <div className="flex gap-5">
        <Link href = "/courses">Courses</Link>
        <Link href = "">AI</Link>
        <Link href = "">NLP</Link>
        <Link href = ""><FaUser size={24}></FaUser></Link>
      </div>
    </nav>
  );
}

export default Navbar;
