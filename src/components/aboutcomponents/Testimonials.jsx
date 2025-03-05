import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import testimonials from '../../data/testimonials';

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 py-12 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
        What Our Clients Say
      </h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 slides on medium screens
          1024: { slidesPerView: 3 }, // Show 3 slides on large screens
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white w-[90%] md:w-[85%] mx-auto rounded-2xl flex flex-col items-center justify-center h-auto min-h-[320px] p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <p className="relative text-lg md:text-xl text-center text-gray-800 italic leading-relaxed">
                <span className="absolute top-0 left-0 text-4xl text-indigo-900">
                  <FaQuoteLeft />
                </span>
                {testimonial.feedback}
                <span className="absolute bottom-0 right-0 text-4xl text-indigo-900">
                  <FaQuoteRight />
                </span>
              </p>

              {/* Profile Section */}
              <div className="mt-6 flex items-center space-x-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm font-bold italic">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
