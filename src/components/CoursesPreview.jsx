import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider
import SectionHeading from './elementComponents/SectionHeading';
import HoverButton from './elementComponents/HoverButton';

import { courses, diplomaCourse } from '../data/courses';

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const generatePath = (title) => title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');

const coursePreview = { courses, diplomaCourse }

const CoursesPreview = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const coursePreview = [...courses, ...diplomaCourse];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: 3 slides for large screens
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For md screens
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // For sm screens
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        
        <SectionHeading 
          title="Our Featured Courses" 
          span="Explore our courses designed" 
          description="to equip you with in-demand skills."
        />

        {/* Slider Wrapper */}
        <Slider {...settings} className="px-4 md:px-12 py-12">
          {coursePreview.map((category) => 
            category.courses.map((course) => (
              <div key={course.id} className="p-2 py-10"> {/* Adds padding between slides */}
<div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-[0_10px_50px_rgba(8,_112,_1,_0.7)] min-h-[450px]">
  
  {/* Image Section */}
  <div className="relative w-full h-60 overflow-hidden">
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60"></div>
  </div>

  {/* Text Content */}
  <div className="p-6 flex flex-col items-center text-center">
    <h3 className="text-xl font-bold text-gray-800 mb-3 transition duration-300 group-hover:text-green-600">
      {course.title}
    </h3>
    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
      {course.description}
    </p>

    {/* Learn More Button */}
    <Link
      to={`/courses/${generatePath(category.category)}/${generatePath(course.title)}`}
      className="mt-auto bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg text-md font-semibold transition-all duration-300 shadow-lg"
      onClick={handleClick}
    >
      Learn More
    </Link>
  </div>
</div>

              </div>
            ))
          )}
        </Slider>
        <div className='flex items-center justify-center mt-8'>
          <HoverButton link="/courses" text="Explore More" color="green"/>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;

{/* 
const featuredCourses = [
  {
    id: 1,
    title: "MERN Stack Development",
    description: "Master the MERN (MongoDB, Express.js, React.js, Node.js) stack and build dynamic, scalable, and high-performance full-stack applications. Learn database management with MongoDB, backend development with Express.js and Node.js, and frontend development using React.js. Gain hands-on experience with REST APIs, authentication, state management, and deployment techniques.",
    image: Mern,
    link: "/courses",
  },
  {
    id: 2,
    title: "Android App Development",
    // description: "Understand software testing fundamentals, methodologies, and best practices. Learn manual testing techniques for identifying bugs and defects, followed by automation testing using Selenium, JUnit, TestNG, and Postman for API testing. Explore test case creation, automation frameworks, debugging, and CI/CD integration to ensure software quality and efficiency.",
    description: "Develop modern Android applications using Java and Kotlin. Learn the fundamentals of Android Studio, UI/UX design principles, Activity and Fragment lifecycle, API integration, Firebase database, push notifications, and advanced topics like MVVM architecture, Jetpack Compose, and performance optimization. Create real-world projects to solidify your learning.",
    image: App,
    link: "/courses",
  },
  {
    id: 3,
    title: "Office & Accounting Mastery",
    description: "Learn Microsoft Office tools for document creation, data analysis, and presentations. Master Tally and QuickBooks for bookkeeping, GST calculations, and financial management. This course equips you with essential office and accounting skills for professional success",
    image: Tally,
    link: "/courses",
  },
];

*/}