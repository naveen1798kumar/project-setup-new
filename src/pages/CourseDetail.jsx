import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses, diplomaCourse } from '../data/courses';
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaArrowLeft, FaRocket } from "react-icons/fa";
import SectionHeading from "../components/elementComponents/SectionHeading";
import { FaPhone } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CourseDetail = () => {
  const { category, title } = useParams();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Find course from courses
  const courseCategory = courses.find(
    (cat) => cat.category.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') === category
  );
  const course = courseCategory?.courses.find(
    (course) => course.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') === title
  );

  // Find diploma course from diplomaCourse
  const diplomaCategory = diplomaCourse.find(
    (cat) => cat.category.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') === category
  );
  const diploma = diplomaCategory?.courses.find(
    (course) => course.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') === title
  );

  // Use course if found; otherwise fallback to diploma
  const courseData = course || diploma;

  if (!courseData) {
    navigate('/courses');
    return null;
  }

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-[100vh] py-16 bg-gray-100 text-gray-800">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-6" data-aos="fade-right">
        <button
          onClick={() => navigate('/courses')}
          className="flex items-center gap-2 text-lg text-gray-800 hover:text-blue-500 transition duration-300"
        >
          <FaArrowLeft className="text-xl" /> Back to Courses
        </button>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1 space-y-8">
          {/* Course Title */}
          <div data-aos="fade-up">
            <SectionHeading 
              title={courseData.title}
              description={courseData.description}
            />
          </div>

          {/* Course Details & Image */}
          <div data-aos="fade-up" className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            {/* Course Details */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-indigo-800 p-1 pl-4 bg-gray-200">
                Course Details
              </h2>
               {/* Render as List if it's an Array */}
  {Array.isArray(courseData.detailedDescription) ? (
    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
      {courseData.detailedDescription.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  ) : (
    <p className="text-lg text-gray-700 leading-relaxed">
      {courseData.detailedDescription}
    </p>
  )}
            </div>

            {/* Image Section */}
            <div className="md:w-1/3 flex-shrink-0 mt-6 md:mt-0 flex justify-center" data-aos="zoom-in">
              <div className="relative overflow-hidden">
                <img
                  src={courseData.image}
                  alt={courseData.title}
                  className="w-full h-96 object-contain rounded-lg transform transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Topics by Level */}
          {courseData.topics && Object.keys(courseData.topics).length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
              {Object.entries(courseData.topics).map(([level, data]) => (
                <div 
                  key={level} 
                  className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl"
                  data-aos="flip-left"
                >
                  <h3 className="text-2xl font-bold text-blue-800 mb-6 border-l-4 border-indigo-800 pl-4">
                    {level} Level - {data.duration}
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray-700">
                    {data.topics.map((topic, index) => (
                      <li 
                        key={index} 
                        className="flex items-center gap-2 transition-all duration-300 hover:text-blue-600 hover:translate-x-2"
                      >
                        <FaCheckCircle className="text-green-500" /> {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* FAQ Section */}
          {courseData.faq && courseData.faq.length > 0 && (
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-indigo-800 pl-4 bg-gray-100 p-2">
                Frequently Asked Questions
              </h2>
              <ul className="mt-4 space-y-6">
                {courseData.faq.map((faq, index) => (
                  <li key={index} className="border-b border-gray-200 pb-4" data-aos="fade-up">
                    <button 
                      className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-800 transition-all duration-300 hover:text-blue-500"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span>{faq.question}</span>
                      {openIndex === index ? <FaChevronUp className="text-blue-500" /> : <FaChevronDown className="text-blue-500" />}
                    </button>
                    <div 
                      className={`mt-3 text-gray-600 text-base transition-all duration-300 overflow-hidden ${
                        openIndex === index ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4" data-aos="fade-up">
            {/* Enroll Button */}
            <button className="w-full min-w-[350px] sm:w-auto bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <FaRocket /> Enroll Now 🚀
            </button>
            {/* Enquire Button */}
            <button className="w-full min-w-[350px] sm:w-auto bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <FaPhone /> Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
