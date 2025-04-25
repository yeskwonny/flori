import React from "react";

const CustomButton = ({ title, style, onClick }) => {
  return (
    <button
      className={`bg-customYellow font-semibold rounded-md px-10 py-3 mt-5 transition-all duration-300 shadow-md hover:shadow-lg ${style}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
