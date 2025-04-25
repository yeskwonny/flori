import React from "react";

const CustomButton = ({ title, style }) => {
  return (
    <button
      className={`bg-customYellow font-semibold rounded-md px-10 py-3 mt-5 transition-all duration-300 shadow-md hover:shadow-lg ${style}`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
