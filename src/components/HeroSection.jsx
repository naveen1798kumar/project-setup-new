import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import hero1 from "../assets/TICE-Training-Center.jpg";
import hero2 from "../assets/TICE-Training-Center.jpg";
import hero3 from "../assets/TICE-Training-Center.jpg";

// import TICEBackground from "../assets/TICE-Training-Center.jpg";

const slides = [
  {
    title: "Boost Your Business",
    description: "Get the best digital solutions for your brand growth.",
    buttonText: "Get Started",
    image: hero1,
    gradient: "bg-gradient-to-r from-purple-500 to-indigo-600",
  },
  {
    title: "Innovate with Us",
    description: "We provide cutting-edge technology for your success.",
    buttonText: "Learn More",
    image: hero2,
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    title: "Transform Your Ideas",
    description: "Turn your vision into reality with our expert solutions.",
    buttonText: "Contact Us",
    image: hero3,
    gradient: "bg-gradient-to-r from-green-500 to-teal-500",
  },
];

const HeroSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    <Slider {...settings} className=" w-full h-screen">
      {slides.map((slide, index) => (
        <div key={index} className={`${slide.gradient} flex items-center justify-center h-screen px-6 md:px-16`}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="text-white text-center md:text-left md:w-1/2" data-aos="fade-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-6">{slide.description}</p>
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200">
                {slide.buttonText}
              </button>
            </div>
            {/* Right Image */}
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center" data-aos="fade-left">
              <img src={slide.image} alt="Hero" className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
