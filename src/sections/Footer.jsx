import React from 'react'

import {
    Mail,
    Phone,
    MapPin,
    ChevronRight
} from 'lucide-react';

function Footer() {
    const note = "ElectionXPress is committed to delivering reliable and transparent electoral solutions.";
  return (
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
  )
}

export default Footer