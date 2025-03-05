import React, { useEffect } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = ({ backgroundImage, title, description, breadcrumbs, bgColor }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className={`relative min-h-[70vh] ${bgColor} bg-fixed bg-cover bg-center bg-no-repeat m-0 md:m-2 rounded-b-2xl md:rounded-lg overflow-hidden shadow-lg`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Banner Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
        data-aos="fade-up"
      >
        <h2 className="text-green-200 text-3xl md:text-5xl font-extrabold drop-shadow-lg font-poppins flex items-center gap-2">
          {/* <span className="before:content-['🔥'] before:mr-2"></span> */}
            <Typewriter
              words={[title]} // Uses the slide title dynamically
              loop={1} // Type only once
              cursor
              cursorStyle=" "
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          
        </h2>
        {description && (
          <p className="text-white text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md">
            {description}
          </p>
        )}
      </div>

      {/* Breadcrumbs */}
      {breadcrumbs && (
        <div
          className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-60 px-4 py-2 rounded-md flex items-center gap-2"
          data-aos="fade-left"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-gray-300 transition">
            <FaHome /> Home
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-1">
              <FaChevronRight className="text-gray-300" />
              {crumb}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;
