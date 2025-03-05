import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aboutus from "../../assets/TICE-About.jpg"; // Import your image here
import AboutBG from "../../assets/TICE-Abou-BG.jpg"; // Import your image here

// components
import HoverButton from '../elementComponents/HoverButton';

// AOS import
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set animation duration
      easing: 'ease-in-out', // Set easing for smoothness
    });
  }, []);

  return (
    <div className="min-h-screen pb-16 bg-gray-800">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-8">

      {/* Image Section */}
      <div className='relative w-full h-full mb-8 lg:w-1/2 min-h-[70vh] ' 
      data-aos="fade-right" // AOS effect for image section
      >
      {/* Background Image */}
      <img
          src={AboutBG}
          alt="Background Design"
          className="absolute w-full md:w-[90%] h-full object-cover rounded-lg shadow-xl transform scale-105 filter grayscale hover:filter-none transition-all duration-500"
        /> 
        {/* Foreground Image */}
        <motion.img
            src={Aboutus}
            alt="Foreground Design"
            className="absolute -bottom-10 -left-8 hidden lg:block w-3/5 h-3/5 object-cover rounded-lg shadow-2xl"
            // initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 min-h-[70vh] mb-8 lg:mb-0 p-2 md:p-8 " data-aos="fade-left">
      <div>
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
        About Us
      </h2>
      <h3 className="text-xl text-green-600 mb-2">
        Welcome to <span className="font-bold text-gray-800">TICE Academy</span>
      </h3>
      <p className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the best IT solutions in Coimbatore.
        </p>
      </div>
        <p className="text-lg text-gray-600 mb-6">
        At TICE Academy, we are dedicated to shaping the future of aspiring IT and software professionals. Our mission is to empower you with cutting-edge knowledge, hands-on experience, and industry-relevant skills to thrive in the ever-evolving tech landscape. With expert-led training, real-world projects, and comprehensive job placement support, we bridge the gap between learning and career success. Whether you're starting your journey or looking to advance your skills, TICE Academy is your gateway to a successful and rewarding career in technology.
        </p>
        <HoverButton link="/about" text="Discover More" color="green"/>
      </div>

      </div>
    </div>
  );
}

export default AboutSection;
