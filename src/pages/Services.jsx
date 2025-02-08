import React from "react";
import ServiceCard from "../components/ServiceCard";

const services = [
  { title: "Electoral Survey", description: "" },
  { title: "Social Media Management", description: "" },
  { title: "Service 3", description: "" },
  { title: "Service 4", description: "" },
  { title: "Service 5", description: "" },
  { title: "Service 6", description: "" },
  { title: "Service 7", description: "" },
  { title: "D2P", description: "" },
  { title: "Service 9", description: "" },
  { title: "Voter Management", description: "" },
  { title: "WAR ROOM", description: "" },
  { title: "Service 12", description: "" },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
