import React from "react";
import portraitImage from "./assets/damian.jpeg"; // Import your portrait image
import html from "./assets/html5.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import vue from "./assets/vue.png";
import blazor from "./assets/blazor.png";
import wordpress from "./assets/wordpress.png";
import swiftui from "./assets/swift.png";
import figma from "./assets/figma.png";
import git from "./assets/git.png";
import adobe from "./assets/adobe.png";
import canva from "./assets/canva.png";

import { Fade } from 'react-reveal';


const stackImages = [
    { src: html, alt: "HTML5" },
    { src: css, alt: "CSS3" },
    { src: js, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: vue, alt: "Vue.js" },
    { src: blazor, alt: "Blazor" },
    { src: wordpress, alt: "Wordpress" },
    { src: swiftui, alt: "SwiftUI" }
];

const toolImages = [
    { src: figma, alt: "Figma" },
    { src: git, alt: "Git" },
    { src: adobe, alt: "Adobe Suite" },
    { src: canva, alt: "Canva" }
];

export default function About() {
    return (
        <>
            <div id="about">

            
                <div className="bg-secondarygreen h-screen font-custom font-bold flex justify-center items-center relative">
                    <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center">
                        <div className="font-display text-left px-8 max-w-md">
                            <p className="text-8xl  text-lightertext mb-12">ABOUT ME</p>
                            <div className="mb-6">
                                <p className="text-m text-lightertext mb-6">Welcome to my portfolio! I'm passionate about crafting exceptional web experiences that not only look stunning but also deliver seamless functionality. Below, you'll find a showcase of my expertise, my coding and the design tools I use to sculpt great experiences.</p>
                            </div>
                            <div className="mb-8">
                                <p className="text-3xl text-lightertext mb-4">Check out my stack!</p>
                                <div className="flex">
                                    {stackImages.map((img, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                className="w-12 h-12 mr-4 transition-transform duration-300 transform hover:scale-115"
                                                // style={{ filter: "brightness(30%) saturate(0%) invert(15%) sepia(100%) hue-rotate(80deg) contrast(125%)" }}
                                            />
                                            <span className="absolute opacity-0 bg-white text-black px-2 py-1 rounded-md z-10 text-sm transition-opacity duration-300 hover:opacity-100 top-10 left-0 transform -translate-y-full">{img.alt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-8">
                                <p className="text-3xl text-lightertext mb-4">The tools I use daily</p>
                                <div className="flex">
                                    {toolImages.map((img, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                className="w-12 h-12 mr-4 transition-transform duration-300 transform hover:scale-115"
                                                // style={{ filter: "brightness(40%) saturate(0%) invert(15%) sepia(100%) hue-rotate(80deg) contrast(125%)" }}
                                            />
                                            <span className="absolute opacity-0 bg-white text-black z-10 px-2 py-1 rounded-md text-sm transition-opacity duration-300 hover:opacity-100 top-10 left-0 transform -translate-y-full">{img.alt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-8">
                                <a href="./assets/resume.pdf" download>
                                    <button className="bg-white hover:bg-gray-200 text-accentgreen-dark font-bold py-2 px-4 border border-gray-300 rounded-full transition-colors duration-300">
                                        Download my resume!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex w-96 h-196 justify-end pr-12">
                        <img
                            src={portraitImage}
                            alt="Portrait"
                            className="w-full drop-shadow-2xl h-full object-cover shadow-xl filter brightness-100 grayscale-0 hover:brightness-100 hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                </div>
               
            </div>
           
        </>
    );
}
