import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navigation() {
    const [activeLink, setActiveLink] = useState("landingpage");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    useEffect(() => {
        // Update active link based on scroll position
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = ["landingpage", "about", "projects", "contact"];
            const offsets = sections.map(section => document.getElementById(section).offsetTop);
            const activeSectionIndex = offsets.findIndex(offset => scrollPosition < offset);
            const activeLink = sections[activeSectionIndex > 0 ? activeSectionIndex - 1 : 0];
            setActiveLink(activeLink);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="fixed top-2 right-2 z-50">
            {/* Hamburger menu icon */}
            <button
                className="block md:hidden text-gray-800 hover:text-gray-500 focus:outline-none"
                onClick={toggleMobileMenu}
            >
                <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                    />
                </svg>
            </button>
            {/* Mobile menu */}
            <div className={`md:hidden fixed top-0 left-0 w-screen h-screen bg-darkgreen bg-opacity-90 flex justify-center items-center transition-opacity duration-300 ${isMobileMenuOpen ? '' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center">
                    <button onClick={toggleMobileMenu} className="absolute top-2 right-2 text-accentbrown">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.7 6.7a1 1 0 0 0-1.4 1.4L10.6 12l-5.3 5.3a1 1 0 1 0 1.4 1.4L12 13.4l5.3 5.3a1 1 0 1 0 1.4-1.4L13.4 12l5.3-5.3a1 1 0 0 0-1.4-1.4L12 10.6l-5.3-5.3z"
                            />
                        </svg>
                    </button>
                    <NavLink to="landingpage" activeLink={activeLink} onClick={() => { handleSetActive("landingpage"); toggleMobileMenu(); }}>Home</NavLink>
                    <NavLink to="about" activeLink={activeLink} onClick={() => { handleSetActive("about"); toggleMobileMenu(); }}>About</NavLink>
                    <NavLink to="projects" activeLink={activeLink} onClick={() => { handleSetActive("projects"); toggleMobileMenu(); }}>Projects</NavLink>
                    <NavLink to="contact" activeLink={activeLink} onClick={() => { handleSetActive("contact"); toggleMobileMenu(); }}>Contact</NavLink>
                </div>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:block">
                <NavLink to="landingpage" activeLink={activeLink} onClick={handleSetActive}>Home</NavLink>
                <NavLink to="about" activeLink={activeLink} onClick={handleSetActive}>About</NavLink>
                <NavLink to="projects" activeLink={activeLink} onClick={handleSetActive}>Projects</NavLink>
                <NavLink to="contact" activeLink={activeLink} onClick={handleSetActive}>Contact</NavLink>
            </div>
        </div>
    );
}

function NavLink({ to, children, activeLink, onClick }) {
    return (
        <Link
            to={to}
            spy={true}
            smooth={true}
            offset={0}
            duration={555}
            className={`block text-accentbrown hover:text-gray-300 mb-4 ml-4 font-custom nav-link ${activeLink === to ? 'font-bold' : ''}`}
            activeClass="font-bold"
            onClick={onClick}
            style={{ cursor: 'pointer', fontSize: '1.4rem' }} // Adjust text size here
        >
             {activeLink === to ? `{${children}}` : children}
        </Link>
    );
}
