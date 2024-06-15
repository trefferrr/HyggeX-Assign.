// components/Header.js
import React from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <nav className="flex flex-row justify-between items-center mx-5 sm:mx-20 mt-6">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="flex items-center gap-8">
          <li className="hidden sm:block cursor-pointer text-blue-800 text-lg font-semibold">Home</li>
          <li className="hidden sm:block cursor-pointer  text-lg font-semibold">Flashcard</li>
          <li className="hidden sm:block cursor-pointer text-lg font-semibold">Contact</li>
          <li className="hidden sm:block cursor-pointer  text-lg font-semibold">FAQ</li>
          <button className="login text-white ml-4 md:ml-0 bg-blue-900 rounded-3xl px-6 py-2">
            Login
          </button>
          <button className="menu-button sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;