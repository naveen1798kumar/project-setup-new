import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLinkClass = `
  relative font-semibold text-indigo-600 px-4 py-2 rounded-xl transition-all duration-300 
  after:content-[''] after:absolute after:left-0 -after:bottom-10 after:w-full after:h-[3px] 
  after:bg-gradient-to-r from-blue-500 to-indigo-600 after:scale-x-100 after:transition-transform 
  after:duration-300 after:origin-left hover:after:scale-x-110
`;

const defaultLinkClass = `
  relative font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-300 
  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
  after:bg-indigo-400 after:transition-all after:duration-300 after:origin-left hover:after:w-full
`;


  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`w-full sticky top-0 left-0 z-50 backdrop-blur-lg transition-all duration-300 ease-in-out bg-white/10 border-b border-white/20 shadow-lg ${
        isScrolled ? "bg-white/30 shadow-md py-2" : "bg-gradient-to-r from-[#d3cce3] to-[#e9e4f0] py-4"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Mobile Menu Button */}
        <button onClick={onToggleSidebar} className="md:hidden text-2xl text-gray-700 cursor-pointer">
          {isSidebarOpen ? <FaBarsStaggered /> : <FaBars />}
        </button>

        {/* Logo */}
        <div
          className={`font-extrabold tracking-wide text-gray-800 ${isScrolled ? "text-lg" : "text-xl"}`}
          onClick={handleClick}
        >
          <Link to="/">TI<span className="text-indigo-600">CE</span></Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-4 relative">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>

    {/* Courses with Improved Dropdown */}
    <li
      className="relative group"
      onMouseEnter={() => setIsCoursesOpen(true)}
      onMouseLeave={() => setIsCoursesOpen(false)}
    >
      {/* Courses Button */}
      <button className="flex items-center gap-2 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-100 transition-all duration-300">
        <NavLink 
        to="/courses"
        className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}
        onClick={handleClick}
        >Courses</NavLink> <FaChevronDown />
      </button>

      {/* Dropdown Menu (Centered & Responsive) */}
      <div
        className={`absolute left-1/2 top-full min-w-5xl w-full  transition-all duration-300 -translate-x-1/2 ${
          isCoursesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-3 gap-6 px-6 py-4 mt-2 bg-white shadow-lg rounded-lg ">
          {[
            { title: "Frontend Development", path: "/courses/frontend" },
            { title: "Backend Development", path: "/courses/backend" },
            { title: "Full Stack Development", path: "/courses/fullstack" },
            { title: "Graphic Design", path: "/courses/graphic-design" },
            { title: "Digital Marketing", path: "/courses/digital-marketing" },
            { title: "Data Science & AI", path: "/courses/data-science" },
          ].map((course, index) => (
            <Link
              key={index}
              to={course.path}
              className="block p-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-300"
            >
              {course.title}
            </Link>
          ))}
        </div>
      </div>
    </li>

          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}
              onClick={handleClick}
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}
              onClick={handleClick}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <Link
              className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-medium shadow-md hover:bg-[#009961] transition-all duration-300"
              to="/courses-online"
              onClick={handleClick}
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Get Started Button */}
        <button
          className="md:hidden px-4 py-2 rounded-full bg-green-500 text-white text-sm font-medium shadow-md hover:bg-[#009961] transition-all duration-300"
          onClick={handleClick}
        >
          Get Started
        </button>

        {/* Contact Info */}
        <div className="hidden md:flex flex-col items-end gap-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-400 text-white shadow-md">
              <FaPhoneAlt className="text-sm" />
            </div>
            <span className="text-gray-800 font-semibold text-sm">9876543210</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md">
              <FaEnvelope className="text-sm" />
            </div>
            <span className="text-gray-800 font-semibold text-sm">9876543210@gmail.com</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
