import React from "react";

function SectionBanner({ title, span, description, color="gray-800", textcolor="gray-600" }) {
  return (
    <div className="max-w-3xl mx-auto text-center py-8 px-4">
      <div className="relative inline-block">
        {/* Accent Bar behind the Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-2 bg-gradient-to-r from-green-400 to-indigo-600 rounded-md opacity-50"></div>
        </div>
        <h2 className={`relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-${color} mb-2`}>
          {title}
        </h2>
      </div>
      <p className={`text-lg sm:text-xl md:text-2xl font-semibold text-${textcolor} mb-1`}>
        <span className="text-green-600 underline decoration-green-500 underline-offset-4 mr-2">
          {span}
        </span>
        {description}
      </p>
      {/* Decorative Divider */}
      <div className="mt-4 flex justify-center">
        <div className="w-20 h-1 bg-green-600 rounded-full"></div>
      </div>
    </div>
  );
}

export default SectionBanner;
