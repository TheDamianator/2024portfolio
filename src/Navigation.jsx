import React, { useState } from "react";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="fixed top-2 right-2 z-50">
            {/* Hamburger menu icon */}
            <button className="block md:hidden text-NewColorNav hover:text-NewColorNav focus:outline-none" onClick={toggleMobileMenu}>
                <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                    />
                </svg>
            </button>
            {/* Mobile menu */}
            <div className={`md:hidden fixed top-0 left-0 w-screen h-screen bg-secondarygreen bg-opacity-90 flex justify-center items-center transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center">
                    <button onClick={toggleMobileMenu} className="absolute top-3  right-3 text-lightertext">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.7 6.7a1 1 0 0 0-1.4 1.4L10.6 12l-5.3 5.3a1 1 0 1 0 1.4 1.4L12 13.4l5.3 5.3a1 1 0 1 0 1.4-1.4L13.4 12l5.3-5.3a1 1 0 0 0-1.4-1.4L12 10.6l-5.3-5.3z"
                            />
                        </svg>
                    </button>
                    <NavLink href="#landingpage" onClick={handleNavLinkClick}>Home</NavLink>
                    <NavLink href="#about" onClick={handleNavLinkClick}>About</NavLink>
                    <NavLink href="#projects" onClick={handleNavLinkClick}>Projects</NavLink>
                    <NavLink href="#contact" onClick={handleNavLinkClick}>Contact</NavLink>
                </div>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:block">
                <NavLink href="#landingpage">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </div>
        </div>
    );
}

function NavLink({ href, children, onClick }) {
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            onClick(); // Call the onClick function passed from the parent component
        }
    };

    return (
        <a href={href} onClick={handleClick} className="text-NewColorNav hover:text-HoverColorNav mb-4 ml-4 font-bold font-custom nav-link text-base md:text-lg text-xl">
        {children}
    </a>
    );
}
