// components/MobileMenu.js
import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <ul
      className={`absolute top-16 left-0 w-full bg-gray-200 flex flex-col items-center py-4 md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      {["Home", "About", "Courses", "Contact"].map((item) => (
        <li key={item} className="py-2">
          <NavLink
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md block ${
                isActive ? "text-white bg-blue-500" : "text-black hover:text-blue-500"
              }`
            }
            onClick={toggleMenu}
          >
            {item}
          </NavLink>
        </li>
      ))}
      <li className="py-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={toggleMenu}
        >
          Get Started
        </button>
      </li>
    </ul>
  );
};

export default MobileMenu;
