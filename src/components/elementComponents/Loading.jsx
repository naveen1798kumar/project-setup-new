import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="flex flex-col items-center">
        {/* Animated Loader */}
        <div className="w-12 h-12 border-4 border-gray-200 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
