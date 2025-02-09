import React from "react";
import IndiaMap from "../components/IndiaMap";
import Services from "./Services";
import ContactUs from "../components/ContactUs";
import Misc from "./Misc";
import Conclu from "./Conclu";


//Actual Data to be placed
const intro = "This is a placeholder for the introduction details of ElectionXPress.";
const whyElectionXPress = "Placeholder text explaining why ElectionXPress is beneficial.";

const strengths = [
    "Strength 1",
    "Strength 2",
    "Strength 3",
    "Strength 4",
];

const fieldsOfOperation = [
    "Operation 1",
    "Operation 2",
    "Operation 3",
    "Operation 4",
];

const note = "This is an important note related to ElectionXPress.";

function Index() {
    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 space-y-6">
                {/* Intro Section */}
                <section>
                    <h2 className="text-2xl font-bold text-blue-600">Intro</h2>
                    <p className="text-gray-700">{intro}</p>
                </section>

                {/* Why ElectionXPress */}
                <section>
                    <h2 className="text-2xl font-bold text-blue-600">Why ElectionXPress?</h2>
                    <p className="text-gray-700">{whyElectionXPress}</p>
                </section>

                {/* Strengths */}
                <section>
                    <h2 className="text-2xl font-bold text-blue-600">Strengths</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {strengths.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                {/* Field of Operation */}
                <section>
                    <h2 className="text-2xl font-bold text-blue-600">Field of Operation</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {fieldsOfOperation.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                {/* Note Section */}
                <section className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-sm">
                    <h2 className="text-lg font-semibold">Note:</h2>
                    <p className="text-gray-700">{note}</p>
                </section>


            </div>
            <div id="about" className="relative w-full h-auto">
                <IndiaMap/>
            </div>

            <Services/>
            <Conclu/>
            <Misc/>
            <ContactUs/>
            
        </div>

    );
}

export default Index;
