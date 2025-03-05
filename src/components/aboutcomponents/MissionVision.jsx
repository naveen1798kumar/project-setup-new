import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing icons

const MissionVision = () => {
  const data = [
    {
      title: "Our Mission",
      points: [
        "Deliver high-quality IT education",
        "Focus on innovation and excellence",
        "Empower students with practical skills",
      ],
      borderSide: "border-l-8 hover:border-l-2 border-blue-500 hover:border-black", // Left Border
      hoverBg: "hover:bg-blue-300 hover:scale-110",
      aos: "fade-right",
    },
    {
      title: "Our Vision",
      points: [
        "Be a globally recognized tech institute",
        "Transform students into tech leaders",
        "Bridge the gap between education and industry",
      ],
      borderSide: "border-r-8 hover:border-r-2 border-green-500 hover:border-black", // Right Border
      hoverBg: "hover:bg-green-300 hover:scale-110",
      aos: "fade-left",
    },
  ];

  return (
    <div className="container mx-auto text-center my-12 px-6 ">
      {/* Section Heading */}
      <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-8 flex items-center justify-center">
        <span className="w-10 sm:w-12 md:w-16 h-1 bg-green-600 inline-block mr-3 rounded-full"></span>
        Our Mission & Vision
        <span className="w-10 sm:w-12 md:w-16 h-1 bg-green-600 inline-block ml-3 rounded-full"></span>
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12">
        {data.map((item, index) => (
          <div
            key={index}
            className={`group p-12 bg-white shadow-lg rounded-lg transition-all duration-500  transform  ${item.borderSide} ${item.hoverBg} hover:text-white`}
            data-aos={item.aos}
          >
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 group-hover:text-white text-left px-4 border-l-4 border-indigo-500 mb-6">
              {item.title}
            </h3>

            {/* List with Icons */}
            <ul className="text-gray-600 list-none space-y-4">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="text-left flex items-center gap-3 transition-all duration-300 group-hover:translate-x-2 group-hover:font-semibold"
                >
                  <FaCheckCircle className="text-green-500 group-hover:text-white text-lg" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
