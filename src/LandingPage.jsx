import React from "react";
import dutchFlag from "./assets/dutch.png"; // Import the Dutch flag image
import ukFlag from "./assets/uk.png"; // Import the UK flag image

export default function LandingPage() {
    return (
        <>
            <div id="landingpage">
                <div className="bg-primarywhite h-screen font-custom font-bold flex justify-center items-center relative">
                    <div className="font-display text-left px-8 relative z-10">
                        <p className="text-8xl text-accentbrown mb-6">HI THERE, I'M <br/> DAMIAN CAELEN.</p>
                        <p className="text-sm text-accentbrown flex justify-center items-center">
                            <span> A passionate student from </span>
                            <img src={dutchFlag} alt="Dutch flag" className="h-4 w-auto mx-1" />
                            <span> who also speaks fluent </span>
                            <img src={ukFlag} alt="UK flag" className="h-4 w-auto mx-1" />
                            <span> and loves coding.</span>
                        </p>
                    </div>
                    <img
                        src="/src/assets/Rectangle 1.png"
                        alt=""
                        className="absolute top-1/5 left-1/2 transform -translate-x-1/2 w-1/3 opacity-75 z-0"
                    />
                </div>
            </div>
        </>
    );
}
