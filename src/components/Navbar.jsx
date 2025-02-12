import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-blue-700 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img className="w-36" src={logo} alt="Election-X-Press Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (          
            <a 
              href={link.path}
              key={link.path}
              className="px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 py-4 text-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="block py-2 text-white hover:text-gray-200 transition"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
