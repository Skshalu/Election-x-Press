import React from 'react'

function About() {

    const strengths = [
        "Unmatched Accuracy",
        "Robust Security",
        "Scalable Solutions",
        "Proven Expertise"
    ];
    const fieldsOfOperation = [
        "Election Data Management",
        "Electronic Voting Solutions",
        "Real-time Monitoring",
        "Secure Vote Counting"
    ];
    const note = "ElectionXPress is committed to delivering reliable and transparent electoral solutions.";

    return (
        <div>
            <section id="strengths" className="py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Our Strengths
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {strengths.map((strength, index) => (
                            <div key={index} className="bg-white/80 p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800">{strength}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fields of Operation Section */}
            <section id="fields-of-operation" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center"
                >
                    <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Fields of Operation
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {fieldsOfOperation.map((field, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800">{field}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Note Part */}
            <section id="note" className="py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Commitment to Transparency
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-lg">
                        {note}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About