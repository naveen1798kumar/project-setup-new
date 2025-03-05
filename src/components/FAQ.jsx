import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SectionHeading from "./elementComponents/SectionHeading";
import Questions from "../assets/faq-questions.png";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What will you learn in our courses?",
    answer: "Our courses cover web development, app development, graphic design, and digital marketing, ensuring you gain industry-relevant skills.",
  },
  {
    question: "Who are we?",
    answer: "We are a team of passionate developers and educators committed to empowering learners with cutting-edge technology skills.",
  },
  {
    question: "What certifications do we provide?",
    answer: "Upon course completion, you'll receive a valid certification recognized by industry professionals and employers.",
  },
  {
    question: "How can you enroll?",
    answer: "Simply visit our website, choose a course, and complete the registration process to start learning immediately.",
  },
  {
    question: "Do we offer live classes or recorded sessions?",
    answer: "We provide both live interactive sessions and recorded materials, giving you flexibility in your learning experience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <SectionHeading 
          title="Frequently Asked Questions" 
          span="Find answers to common queries" 
          description=" about our courses and certifications."
          color="green-200"
        />
      </div>

      <div className="max-w-5xl mx-auto mt-8 flex flex-col md:flex-row items-center gap-10">
        {/* FAQ Section */}
        <div className="w-full md:w-1/2" data-aos="fade-up">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-gray-800 shadow-lg rounded-xl overflow-hidden transition duration-300 hover:shadow-2xl"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left text-lg font-medium text-white bg-gray-700 hover:bg-gray-600 transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <FaChevronUp className="text-yellow-400" /> : <FaChevronDown className="text-yellow-400" />}
              </button>

              {openIndex === index && (
                <div 
                  className="p-6 text-gray-300 text-md leading-relaxed border-t border-l-2 border-gray-600 bg-gray-750 animate-fadeIn"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
          <img src={Questions} alt="FAQ Questions" className="w-full h-auto max-w-md md:max-w-lg object-contain " />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
