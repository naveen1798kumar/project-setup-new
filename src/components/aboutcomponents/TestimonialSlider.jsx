import React from 'react';
import Slider from "react-slick";
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaReact, FaUserCog, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import testimonials from '../../data/testimonials.js'; // Import testimonials data

const iconMap = {
  FaLaptopCode: <FaLaptopCode className="text-5xl text-indigo-600" />,
  FaPaintBrush: <FaPaintBrush className="text-5xl text-pink-600" />,
  FaChartLine: <FaChartLine className="text-5xl text-green-600" />,
  FaReact: <FaReact className="text-5xl text-blue-600" />,
  FaUserCog: <FaUserCog className="text-5xl text-orange-600" />,
};

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "ease-in-out",
    arrows: false,
  };

  return (
    <div className="py-16 bg-gradient-to-r from-gray-400 to-gray-300">
      <div className="container mx-auto text-center px-4 md:px-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">What Our Students Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-center ">
              <div className="relative bg-gray-100 p-10 md:p-12 container mx-auto overflow-hidden shadow-lg rounded-3xl max-w-2xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  {iconMap[testimonial.icon]}
                </div>

                {/* Quote with Marks */}
                <p className="relative text-xl text-gray-700 italic leading-relaxed">
                  <FaQuoteLeft className="absolute -top-4 -left-2 text-3xl text-indigo-900 opacity-50" />
                  {testimonial.feedback}
                  <FaQuoteRight className="absolute -bottom-4 -right-2 text-3xl text-indigo-900 opacity-50" />
                </p>

                {/* Name & Role */}
                <h3 className="text-2xl font-semibold text-gray-900 mt-6">{testimonial.name}</h3>
                <p className="text-indigo-600 text-lg font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
