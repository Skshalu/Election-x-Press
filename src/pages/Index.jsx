import React from "react";
import IndiaMap from "../components/IndiaMap";
import Services from "./Services";
import ContactUs from "../components/ContactUs";
import Misc from "./Misc";
import Conclu from "./Conclu";
import { motion } from "framer-motion";

const intro = "Empowering electoral processes with cutting-edge technology and efficiency.";
const whyElectionXPress = "ElectionXPress revolutionizes the way elections are managed, ensuring transparency, speed, and accuracy.";

const strengths = [
    "Unmatched Accuracy",
    "Robust Security",
    "Scalable Solutions",
    "Proven Expertise",
];

const fieldsOfOperation = [
    "Election Data Management",
    "Electronic Voting Solutions",
    "Real-time Monitoring",
    "Secure Vote Counting",
];

const note = "ElectionXPress is committed to delivering reliable and transparent electoral solutions.";

function Index() {
    return (
        <div className="w-full min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-700 to-purple-600 text-white py-20 text-center">
                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} 
                    className="text-5xl font-bold">Election-X-Press</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}
                    className="text-lg mt-4 max-w-3xl mx-auto">
                    {intro}
                </motion.p>
                <motion.button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
                    whileHover={{ scale: 1.1 }}>
                    Learn More
                </motion.button>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
                {/* Why ElectionXPress */}
                <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
                    className="text-center">
                    <h2 className="text-3xl font-bold text-blue-700">Why ElectionXPress?</h2>
                    <p className="text-gray-700 mt-4">{whyElectionXPress}</p>
                </motion.section>

                {/* Strengths */}
                <section className="grid md:grid-cols-2 gap-6">
                    {strengths.map((item, index) => (
                        <motion.div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center border-l-4 border-blue-500"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }}>
                            <h3 className="text-lg font-semibold text-gray-800">{item}</h3>
                        </motion.div>
                    ))}
                </section>

                {/* Field of Operation */}
                <section className="grid md:grid-cols-2 gap-6">
                    {fieldsOfOperation.map((item, index) => (
                        <motion.div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center border-l-4 border-purple-500"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }}>
                            <h3 className="text-lg font-semibold text-gray-800">{item}</h3>
                        </motion.div>
                    ))}
                </section>

                {/* Note Section */}
                <section className="p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-md text-center">
                    <h2 className="text-lg font-semibold">Important Note</h2>
                    <p className="text-gray-700">{note}</p>
                </section>
            </div>

            {/* India Map */}
            <div id="about" className="relative w-full h-auto">
                <IndiaMap />
            </div>

            <Services />
            <Conclu />
            <Misc />
            <ContactUs />
        </div>
    );
}

export default Index;
