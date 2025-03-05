import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
// import SectionHeading from "../elememtcomponents/SectionHeading";
// SectionHeadin/g

import {features, sliderImages} from "../../data/features.js";
import SectionHeading from "../elementComponents/SectionHeading.jsx";



const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
    arrows: false,
  };


  return (
    <section className="bg-gradient-to-r from-[#d3cce3] to-[#e9e4f0] min-h-screen py-16 flex flex-col items-center overflow-hidden">
      <SectionHeading
        title={"Our Featured Courses"}
        span={"Lorem ipsum dolor sit"}
        description={"amet consectetur adipisicing elit. Perferendis, omnis!"}
      />

      <div className="container mx-auto flex flex-col md:flex-row gap-6 p-6">
        {/* Accordion Section */}
        <div className="w-full md:w-1/2  p-6 rounded-3xl shadow-lg bg-green-200">
          <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h2>
          <div className="space-y-3">

            {features.map((item, index) => (
              <div key={index} className="rounded-[40px] bg-white overflow-hidden shadow-sm">
                <button
                  className={`w-full flex justify-between items-center px-5 py-4 text-lg font-semibold  transition duration-200
                    ${
                      activeIndex === index ? "text-green-500" : ""
                    }` }
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden rounded-b-[40px] transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 py-3 px-5 " : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-full md:w-1/2 p-6 rounded-lg">
  <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
    Our Facilities
  </h2>
  <div className="relative border-l-4 border-green-400 pl-2">
  <Slider {...sliderSettings} className=" overflow-hidden">
    {sliderImages.map((image, index) => (
      <motion.div 
        key={index} 
        className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image fully covering the div */}
        <img
          src={image.images}
          alt={`Facility ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient overlay for modern effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Optional: Add text over the image */}
        <div className="absolute bottom-4 left-4 text-white text-xl font-semibold bg-black/50 px-4 py-2 rounded-lg">
        {image.title}
        </div>
      </motion.div>
    ))}
  </Slider>
  </div>
</div>


      </div>
    </section>
  );
};

export default Features;
