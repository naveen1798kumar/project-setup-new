import React from "react";
import ComingSoon from "../assets/comingsoon.png";
import SectionBanner from "../components/elementComponents/SectionBanner";


function OnlineCourses() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-2xl flex flex-col items-center text-center">
        <SectionBanner
          title="Online Courses"
          span="Explore our courses online,"
          description="Designed for remote access."
        />
        <img
          src={ComingSoon} // Replace with actual image URL
          alt="Coming Soon"
          className="w-3/4 md:w-1/2 lg:w-1/3 object-cover rounded-lg shadow-md"
        />
        <p className="text-lg md:text-2xl text-gray-600 mt-4">
          Coming Soon...
        </p>
      </div>
    </div>
  );
}

export default OnlineCourses;
