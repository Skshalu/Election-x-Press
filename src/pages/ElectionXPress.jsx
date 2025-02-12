import React, { useState, useEffect } from 'react';
import {
    ChevronDown,
    CheckCircle,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    ChevronRight
} from 'lucide-react';
import IndiaMap from '../components/IndiaMap';

export default function ElectionXPress() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [activeService, setActiveService] = useState(null);
    const [isVisible, setIsVisible] = useState({});

    // Constants
    const intro = "Empowering electoral processes with cutting-edge technology and efficiency.";
    const whyElectionXPress = "ElectionXPress revolutionizes the way elections are managed, ensuring transparency, speed, and accuracy.";
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

    const sourceOptions = [
        "Referral",
        "Social Media",
        "Website",
        "Advertisement",
        "Other"
    ];

    const stats = [
        { value: '98%', label: 'Accuracy Rate' },
        { value: '500+', label: 'Campaigns Managed' },
        { value: '50M+', label: 'Voters Processed' },
        { value: '25+', label: 'Countries Served' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                setIsVisible(prev => ({
                    ...prev,
                    [section.id]: rect.top < window.innerHeight * 0.75 && rect.bottom >= 0
                }));
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Election-X-Press
                            </span>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            {['Home', 'Services', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="relative group text-gray-600 hover:text-blue-600 px-3 py-2"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
                <div
                    className="max-w-7xl mx-auto px-4 py-20 relative"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                >
                    <div className="text-center mb-16 space-y-6">
                        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight">
                            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {intro.split(' ').slice(0, 2).join(' ')}
                            </span>
                            <span className="block">
                                {intro.split(' ').slice(2).join(' ')}
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {whyElectionXPress}
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
                                Get Started
                            </button>
                            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transform hover:-translate-y-1 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid md:grid-cols-4 gap-8 mt-20">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg transform transition-all duration-500 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
                </div>
            </section>
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
            {/* India Map */}
            <div id="about" className="relative w-full h-auto">
                <IndiaMap/>
            </div>

            {/* Services Section */}
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

            {/* Contact Section */}
            <section id="contact" className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
                <div className="max-w-4xl mx-auto px-4 relative">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
                        <h2 className="text-4xl font-bold text-center mb-8">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Get Political Consultation
                            </span>
                        </h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-lg"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-gray-700 font-medium">Contact Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-lg"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium">How did you hear about us?</label>
                                <select
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-lg"
                                >
                                    <option value="">Select an option</option>
                                    {sourceOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
                            >
                                Get Started Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Election-X-Press
                            </h3>
                            <p className="text-gray-400 leading-relaxed">{note}</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
                            <div className="space-y-4">
                                <a href="mailto:info@electionxpress.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                                    info@electionxpress.com
                                </a>
                                <a href="tel:+15551234567" className="flex items-center text-gray-400 hover:text-white transition-colors">
                                    <Phone className="w-5 h-5 mr-3 text-blue-400" />
                                    +1 (555) 123-4567
                                </a>
                                <p className="flex items-center text-gray-400">
                                    <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                                    123 Democracy Ave, Election City
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                            <div className="space-y-4">
                                {['Home', 'Services', 'Contact'].map((link) => (
                                    <a
                                        key={link}
                                        href={`#${link.toLowerCase()}`}
                                        className="flex items-center text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    );
}
