import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

function MobileSidebar({ isSidebarOpen, onClose }) {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  if (!isSidebarOpen) return null;

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const activeLinkClass =
    "block w-full font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300";
  const defaultLinkClass =
    "block w-full font-medium text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300";

  return (
    <>
      <div className="fixed inset-0 z-50">
        {/* Background Overlay */}
        <div
          className={`fixed inset-0 bg-black transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "opacity-50 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"
          }`}
          onClick={onClose}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-[60%] min-w-[320px] bg-gray-900/80 backdrop-blur-lg shadow-2xl border-l border-gray-700 z-50 transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "translate-x-0 opacity-100 delay-150" : "translate-x-full opacity-0"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-5 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <button onClick={onClose} className="text-xl text-white">
              <FaTimes />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col p-4 space-y-4">
            {["Home", "About", "Courses", "Contact"].map((item, index) => (
              <li key={index} className="w-full">
                {item === "Courses" ? (
                  <>
                    {/* Dropdown Button */}
                    <button
                      onClick={toggleCoursesDropdown}
                      className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg transition-all duration-300"
                    >
                      <span>Courses</span>
                      {isCoursesOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {/* Dropdown Menu */}
                    <ul
                      className={`overflow-hidden transition-all duration-300 ${
                        isCoursesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {["Web Development", "Data Science", "UI/UX Design"].map(
                        (subItem, subIndex) => (
                          <li key={subIndex} className="w-full">
                            <NavLink
                              to={`/courses/${subItem.toLowerCase().replace(/ /g, "-")}`}
                              onClick={onClose}
                              className="block w-full text-gray-400 hover:text-white hover:bg-gray-700 px-6 py-2 rounded-lg transition-all duration-300"
                            >
                              {subItem}
                            </NavLink>
                          </li>
                        )
                      )}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive ? activeLinkClass : defaultLinkClass
                    }
                  >
                    {item}
                  </NavLink>
                )}
              </li>
            ))}

            {/* Get Started Button */}
            <li className="w-full">
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium shadow-md hover:opacity-90 transition-all duration-300">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileSidebar;
