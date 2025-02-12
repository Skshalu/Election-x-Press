import React, {useState} from 'react'

import {
    ArrowRight,
} from 'lucide-react';

function Services({ isVisible }) {


    const [activeService, setActiveService] = useState(null);

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
        { title: "Crisis Management", description: "Handling political crises effectively." }
    ];


    return (
        <section id="services" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Our Services
                    </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onMouseEnter={() => setActiveService(index)}
                            onMouseLeave={() => setActiveService(null)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10" />
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                                {service.description}
                            </p>
                            <ArrowRight className="absolute bottom-4 right-4 w-6 h-6 text-blue-600 group-hover:text-white transform group-hover:translate-x-2 transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services