import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Phone } from "lucide-react";
import anime from "animejs";

const sourceOptions = [
  "Referral",
  "Social Media",
  "Website",
  "Advertisement",
  "Other"
];

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [sourceType, setSourceType] = useState(sourceOptions[0]);

  useEffect(() => {
    anime({
      targets: ".animated-bg div",
      translateY: ["0", "20vh"],
      opacity: [0.5, 1, 0.5],
      duration: 5000,
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
      delay: anime.stagger(500)
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted:\n  Name: ${fullName}\n  Contact Number: ${contactNumber}\n  Source: ${sourceType}`);
  };

  return (
    <div id="contact" className="relative w-full py-16 flex flex-col items-center overflow-hidden rounded-lg shadow-xl bg-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 animated-bg pointer-events-none flex flex-wrap">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-400 rounded-full opacity-30"
            style={{
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <motion.h1 
        className="text-4xl font-bold text-blue-700 mb-10 text-center relative"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get Political Consultation
      </motion.h1>

      <motion.form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-xl rounded-lg p-8 border border-gray-200 max-w-lg w-full relative z-10"
        initial={{ scale: 0.9 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {/* Full Name */}
        <div className="mb-6 flex items-center border-b border-gray-300 py-2">
          <User className="text-gray-500 mr-3" />
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full p-3 text-gray-700 focus:outline-none"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="mb-6 flex items-center border-b border-gray-300 py-2">
          <Phone className="text-gray-500 mr-3" />
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Contact Number"
            className="w-full p-3 text-gray-700 focus:outline-none"
            required
          />
        </div>

        {/* Type of Source */}
        <div className="mb-6">
          <label htmlFor="sourceType" className="block text-lg font-semibold text-gray-700 mb-2">How Did You Hear About Us?</label>
          <select
            id="sourceType"
            value={sourceType}
            onChange={(e) => setSourceType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            {sourceOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <motion.button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactUs;
