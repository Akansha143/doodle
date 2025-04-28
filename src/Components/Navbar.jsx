import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-[#63559A]">
          goGetWell<span className="text-gray-700">.ai</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#About" className="hover:text-[#63559A] transition">About</a>
          <a href="#FAQ" className="hover:text-[#63559A] transition">FAQ</a>
          <a href="#Contact" className="hover:text-[#63559A] transition">Contact</a>

          {/* Update the Login button to use Link */}
          <Link
            to="/login"
            className="px-5 py-2 border border-[#63559A] text-[#63559A] rounded-full hover:bg-[#eff6ff] transition"
          >
            Login
          </Link>

         {/* Updated Get Started button */}
         <Link
            to="/get-started" // Navigate to the 'Get Started' page
            className="px-6 py-2 bg-[#63559A] text-white rounded-full hover:scale-105 hover:shadow-lg transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
