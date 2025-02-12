import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

const services = [
  { title: "Electoral Survey", description: "Comprehensive election surveys and analytics." },
  { title: "Social Media Management", description: "Strategic social media campaigns for political outreach." },
  { title: "Campaign Strategy", description: "Tailored campaign planning and execution." },
  { title: "Data Analytics", description: "Data-driven insights for electoral success." },
  { title: "Event Management", description: "Organizing political events and rallies." },
  { title: "Grassroots Mobilization", description: "Engaging and mobilizing local communities." },
  { title: "Public Relations", description: "Building and maintaining a positive public image." },
  { title: "D2P", description: "Direct-to-public communication strategies." },
  { title: "Constituency Mapping", description: "Detailed mapping and analysis of electoral districts." },
  { title: "Voter Management", description: "Streamlined voter data management systems." },
  { title: "WAR ROOM", description: "Real-time monitoring and response unit." },
  { title: "Crisis Management", description: "Handling political crises effectively." },
];

const Services = () => {
  return (
    <div id="services" className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold text-center mb-10 text-blue-700"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ServiceCard title={service.title} description={service.description} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
