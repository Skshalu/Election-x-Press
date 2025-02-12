import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import IndiaMap from './components/IndiaMap'

import './App.css'

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [activeService, setActiveService] = useState(null);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            const sections = document.querySelectorAll('section');
            const newVisibility = {}; // To accumulate visibility status

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                newVisibility[section.id] = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;
            });

            setIsVisible(newVisibility); // Update visibility at once after checking all sections
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='min-h-screen'>
            <Navbar scrollY={scrollY}/>
            <Hero scrollY={scrollY} isVisible={isVisible}/>
            <About/>
            <IndiaMap/>
            <Services isVisible={isVisible}/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App