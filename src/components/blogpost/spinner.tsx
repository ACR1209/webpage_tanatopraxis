import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-96 relative">
      <div className="w-16 h-16 border-gray-300 border-8 rounded-full"></div>
      
      <div className="absolute w-16 h-16 border-primary border-t-gray-300 border-l-gray-300 border-8  rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
