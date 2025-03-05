import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { FaAnglesUp } from "react-icons/fa6";
import Chatbot from './Chatbot';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrolled > windowHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919865826446?text=Hello%20Sir,%20I%20am%20interested%20in%20your%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 bg-opacity-80 backdrop-blur-lg text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:bg-green-600 hover:scale-110 hover:shadow-2xl"
      >
        <FaWhatsapp size={24} />
      </a>

    <Chatbot />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group relative bg-blue-950 bg-opacity-50 backdrop-blur-xl p-4 rounded-full shadow-xl transition-all duration-300 hover:bg-blue-500 hover:scale-110 hover:shadow-2xl"
        >
          {/* Icon */}
          <FaAnglesUp
            size={20}
            className="text-white group-hover:text-white transition-colors duration-300"
          />
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-semibold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll to Top
          </span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
