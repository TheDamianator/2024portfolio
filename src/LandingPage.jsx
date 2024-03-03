import React from "react";
import dutchFlag from "./assets/dutch.png"; // Import the Dutch flag image
import ukFlag from "./assets/uk.png"; // Import the UK flag image
import circleImage from "./assets/circle2.png";

export default function LandingPage() {
    return (
        <>
            <div id="landingpage">
                <div className="bg-primarywhite h-screen font-custom font-bold flex justify-center items-center relative">
                    <div className="font-display text-left px-8 relative z-10 text-center">
                        <p className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl text-accentbrown mb-6">HI THERE, I'M <br/> DAMIAN CAELEN.</p>
                        {/* Different text for mobile */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-accentbrown flex justify-center items-center">
                            {/* Mobile version of text */}
                            <span>A passionate student from NL</span>
                            {/* Only show the flags on screens larger than md */}
                            <img src={dutchFlag} alt="Dutch flag" className="h-4 w-auto mx-1 hidden md:block" />
                            {/* Mobile version of text */}
                            <span>who also speaks fluent English</span>
                            {/* Only show the flags on screens larger than md */}
                            <img src={ukFlag} alt="UK flag" className="h-4 w-auto mx-1 hidden md:block" />
                            {/* Mobile version of text */}
                            <span>and loves coding.</span>
                        </p>
                        {/* Circle image for mobile */}
                        <img
                            src={circleImage}
                            alt=""
                            className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 opacity-75 z-0"
                        />
                    </div>
                    {/* Conditionally render the image based on screen size */}
                    <img
                        src="/src/assets/Rectangle 1.png"
                        alt=""
                        className="hidden md:block absolute top-1/5 left-1/2 transform -translate-x-1/2 w-1/3 opacity-75 z-0"
                    />
                </div>
            </div>
        </>
    );
}
