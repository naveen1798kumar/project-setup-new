import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheckCircle, FaPhoneAlt, FaAward, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa';
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import TestimonialSlider from "../components/aboutcomponents/TestimonialSlider";
// import SectionHeading from '../components/elememtcomponents/SectionHeading';

import AboutBanner from "../assets/Banners/About-Banner.jpg";
import ContactSection from "../assets/Banners/Contact-Section.jpg";
import Background from "../assets/background1.jpg"
import CoursesPreview from '../components/CoursesPreview';
import HoverButton from '../components/elementComponents/HoverButton';
import MissionVision from '../components/aboutcomponents/MissionVision';
import Testimonials from '../components/aboutcomponents/Testimonials';
import SectionHeading from '../components/elementComponents/SectionHeading';



const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  

  return (
    <section className="bg-gray-100 text-gray-900">
      {/* Banner Section */}
<Banner 
  backgroundImage={AboutBanner}
  title="Transform Your Career with EduCenter"
  description="Upgrade your skills with expert-led courses and take your career to the next level."
  breadcrumbs={[ "About"]}
  bgColor="bg-gradient-to-r from-indigo-600 to-blue-500"
  data-aos="fade-up"
/>

{/* About Us Section */}
<div className="container mx-auto py-16 flex flex-col md:flex-row items-center gap-12 px-6">
  {/* Text Section */}
  <div className="md:w-1/2 space-y-6" data-aos="fade-right">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">
      About Us
    </h2>

    <div className="flex items-start gap-4">
      <FaCheckCircle className="text-green-500 text-2xl mt-1" />
      <p className="text-lg text-gray-700 leading-relaxed">
        EduCenter is at the forefront of providing world-class education that bridges the gap between theoretical knowledge and practical skills, empowering students to excel in the ever-evolving IT and software industry.
      </p>
    </div>

    <div className="flex items-start gap-4">
      <FaCheckCircle className="text-green-500 text-2xl mt-1" />
      <p className="text-lg text-gray-700 leading-relaxed">
        We offer dynamic courses in web development, app development, digital marketing, and more, guided by industry experts. Join EduCenter today and unlock endless career opportunities.
      </p>
    </div>

    <HoverButton link=" " text="Learn More" color="indigo"/>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 relative" data-aos="fade-left">
    <img 
      src={AboutBanner} 
      alt="About EduCenter" 
      className="w-full rounded-lg shadow-lg"
    />
    {/* Decorative Blur Effect */}
    <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-500 rounded-full blur-2xl"></div>
    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full blur-2xl"></div>
  </div>
</div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-200 py-16" style={{ backgroundImage: `url(${Background})` }} data-aos="zoom-in">
        <div className="container mx-auto">
        <SectionHeading 
          title="Why Choose TICE?" 
          // span="Explore our courses designed" 
          // description="to equip you with in-demand skills."
        />          
{/* Who We Are Section */}
<section className="container mx-auto px-6">
  <div className="flex flex-col md:flex-row items-center gap-12">
    {/* Image Section */}
    <div className="md:w-1/2 relative" data-aos="fade-right">
      <img 
        src={AboutBanner} 
        alt="Who We Are" 
        className="w-full rounded-lg shadow-lg"
      />
      {/* Decorative Blur Effects */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-500 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full blur-2xl"></div>
    </div>

{/* Who We Are Content */}
<div className="md:w-1/2" data-aos="fade-left">
  <h2 className="text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-indigo-500 pl-4">
    Who We Are
  </h2>

  {/* Why Choose Us Cards */}
  <div className="grid gap-6">
    {[
      { 
        title: "Expert Faculty", 
        desc: "Learn from top industry professionals with years of experience.", 
        icon: <FaChalkboardTeacher className="text-white text-3xl" />, 
        bgColor: "bg-blue-500" 
      },
      { 
        title: "Updated Curriculum", 
        desc: "Stay ahead with the latest technologies and trends.", 
        icon: <FaBookOpen className="text-white text-3xl" />, 
        bgColor: "bg-green-500" 
      },
      { 
        title: "Recognized Certifications", 
        desc: "Gain globally accepted certifications to boost your career.", 
        icon: <FaAward className="text-white text-3xl" />, 
        bgColor: "bg-purple-500" 
      }
    ].map((item, index) => (
      <div 
        key={index} 
        className={`p-6 shadow-lg rounded-lg flex items-start gap-4 transition-all hover:scale-105 duration-300 ${item.bgColor} text-white`} 
        data-aos="flip-up"
      >
        <div className="p-3 rounded-full bg-white bg-opacity-20">
          {item.icon}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
          <p className="text-white">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  </div>
</section>

<MissionVision />
        </div>
      </div>

    {/* Our Courses Section */}
    <CoursesPreview />

    {/* <Testimonials/> */}
    
    <TestimonialSlider />

  <div className="relative py-20 px-6 overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${ContactSection})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
  <div className="absolute inset-0 bg-gray-800 bg-opacity-80"></div> {/* Overlay */}

  <div className="relative container mx-auto text-center">
    {/* <SectionHeading title="Our Featured Courses" color= "green-200" />  */}
    <p className="text-xl font-bold italic text-gray-200 mb-6 max-w-2xl mx-auto">
      Have questions or ready to start your learning journey? Reach out to us today!
    </p>
    <HoverButton link="/contact" text="Get in Touch" color="indigo" />
  </div>
</div>
      {/* <FAQ /> */}
    </section>
  );
};

export default About;
