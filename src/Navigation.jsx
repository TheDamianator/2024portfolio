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
        <div className="fixed top-1/2 right-2 transform -translate-y-1/2 z-50">
            {/* Hamburger menu icon */}
            <button
                className="block md:hidden text-gray-800 hover:text-gray-500 focus:outline-none"
                onClick={toggleMobileMenu}
            >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                        />
                    ) : (
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                        />
                    )}
                </svg>
            </button>
            {/* Mobile menu */}
            <div className={`md:hidden absolute top-14 right-0 w-40 bg-white rounded shadow-lg ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <div className="p-4">
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
            style={{ cursor: 'pointer' }}
        >
             {activeLink === to ? `{${children}}` : children}
        </Link>
    );
}
