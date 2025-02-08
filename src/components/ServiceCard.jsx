import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
