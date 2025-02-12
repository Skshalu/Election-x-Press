import React from 'react'

function Hero({scrollY, isVisible}) {
    const intro = "Empowering electoral processes with cutting-edge technology and efficiency.";
    const whyElectionXPress = "ElectionXPress revolutionizes the way elections are managed, ensuring transparency, speed, and accuracy.";
    const stats = [
        { value: '98%', label: 'Accuracy Rate' },
        { value: '500+', label: 'Campaigns Managed' },
        { value: '50M+', label: 'Voters Processed' },
        { value: '25+', label: 'Countries Served' }
    ];
    return (
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
                            className={`bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg transform transition-all duration-500 ${isVisible?.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
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
    )
}

export default Hero