import React from "react";
import { NavLink, Button } from "./Styles";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b bg-white">
      <h1 className="text-2xl font-bold text-blue-600">Upskill</h1>

      <div className="hidden md:flex items-center gap-7">
        <a href="#" className={NavLink}>
          Home
        </a>

        <a href="#" className={NavLink}>
          Courses
        </a>

        <a href="#" className={NavLink}>
          Testimonials
        </a>

        <a href="#" className={NavLink}>
          Scholarship
        </a>

        <a href="#" className={NavLink}>
          Partners
        </a>

        <a href="#" className={NavLink}>
          About
        </a>

        <a href="#" className={NavLink}>
          Log in
        </a>

        <button className={Button}>Start Learning</button>
      </div>
    </nav>
  );
}

export default Navbar;
