import React from "react";

const TitleBar = () => {
  return (
    <div className="w-full h-6 bg-gray-900 flex items-center gap-x-2 px-5 rounded-t-md">
      <div className="bg-red-700 h-3 w-3 rounded-full"></div>
      <div className="bg-yellow-700 h-3 w-3 rounded-full"></div>
      <div className="bg-green-700 h-3 w-3 rounded-full"></div>
    </div>
  );
};

export default TitleBar;
