import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
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
    <nav className="bg-[#fff] text-[#378CE7] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className=" flex flex-row gap-3">
            <img className="w-[150px]" src={logo}/>
            {/* Election-x-Press */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (          
                <a 
                  href={link.path}
                  key={link.path}
                  className="hover:bg-[#0055aa] hover:text-white p-2 rounded-[5px]"
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
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 space-y-4 py-4 text-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="block hover:text-gray-200 transition"
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
