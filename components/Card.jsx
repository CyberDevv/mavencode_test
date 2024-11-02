import React from "react";

const Card = ({ children, label }) => {
  return (
    <div className="border border-gray-300 bg-gray-50">
      <h5 className="px-3 lg:px-5 py-2 lg:py-3 text-sm lg:text-base font-medium border-b border-gray-300">{label}</h5>

      <div className= "py-2 lg:py-4">{children}</div>
    </div>
  );
};

export default Card;
