import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "Why is this important? Because clients want to know the businesses they depend on for advice are well managed in their own right.",
    image: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
    name: "Mahfuz Riad",
    designation: "UI Designer & CEO",
  },
  {
    text: "Not only that, but this event gives you the chance to give your back-office team the credit they deserve.",
    image: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
    name: "Mahfuz Riad",
    designation: "UI Designer & CEO",
  },
  {
    text: "Your clients will be reassured knowing their service providers are experienced and knowledgeable professionals.",
    image: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
    name: "Mahfuz Riad",
    designation: "UI Designer & CEO",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
};

const TestimonialSection = () => {
  return (
    <section className="testimonial-section relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="sec-title text-center mb-16">
          <span className="title text-lg text-gray-600">Testimonial</span>
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say?</h2>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-block px-4">
              <div className="inner-box bg-white p-10 shadow-lg rounded-md">
                <p className="text-gray-700 text-lg leading-7 mb-6">{testimonial.text}</p>
                <div className="info-box flex items-center mt-4">
                  <div className="thumb w-20 h-20 mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full border-4 border-gray-200 shadow-md"
                    />
                  </div>
                  <div>
                    <h4 className="name text-xl font-bold text-gray-900">{testimonial.name}</h4>
                    <span className="designation text-sm text-purple-600">{testimonial.designation}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
