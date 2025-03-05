import React, { useState } from 'react';
import Slider from 'react-slick';
import { PiStudentFill } from "react-icons/pi";
import { FaQuoteLeft } from "react-icons/fa";
import SectionHeading from './elementComponents/SectionHeading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonials from '../data/testimonials';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 ">
      <SectionHeading 
        title="What Our Students Say"
        span="Hear from our successful students"
        description="Real experiences, real success stories."
      />

      <div className="container mx-auto px-6 md:px-12 my-10">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="px-2 ">
<div className={` shadow-gray-600 shadow-lg rounded-2xl p-6 py-10 text-center transition-all duration-700 ease-out transform ${
  activeSlide === index
    ? 'scale-120 min-h-[350px] md:min-h-[350px] min-h-auto bg-gray-900 shadow-xl z-10'
    : 'scale-90 opacity-50'
}`}>
<div className="mb-4 flex justify-center "><PiStudentFill className={`text-5xl mx-auto ${activeSlide === index ? 'text-white scale-150' : 'text-3xl text-gray-400' }`} /></div>

                <h3 className={` font-semibold ${activeSlide === index ? 'text-green-400 text-2xl' : 'text-xl' }`}>{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className={`relative mt-4 font-mono ${activeSlide === index ? 'text-white' : 'text-gray-700' }`}>
  "{testimonial.feedback}"  
  {activeSlide === index && (  
    <span>  
      <FaQuoteLeft className="absolute -top-5 -left-5 w-16 h-10 -z-10 text-green-600 inline-block"/>  
    </span>  
  )}
</p>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
