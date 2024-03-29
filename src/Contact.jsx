import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Contact() {
    const [currentTime, setCurrentTime] = useState("");
    const [currentGMT, setCurrentGMT] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
            setCurrentGMT(now.toLocaleTimeString('en-US', { timeZoneName: 'short', timeZone: 'GMT' }));
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div id="contact" className="bg-secondarygreen min-h-screen font-custom font-bold flex flex-col justify-center items-center relative">
           
            <div className="text-center mb-8">
                <h1 className="text-5xl sm:text-9xl text-lightertext mb-4">GET IN T<span className="white-text">O</span>UCH</h1>
                <h2 className="text-4xl sm:text-6xl text-lightertext mb-4">Let's stay in C<span className="white-text">O</span>NTACT</h2>
                <div className="text-left mb-8 flex flex-col items-center"> {/* Center vertically */}
                    <a href="mailto:damiancaelen@gmail.com" className="text-lg sm:text-xl text-primarywhite mb-2">
                        {/* <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> */}
                        damiancaelen@gmail.com
                    </a> <br></br>
                    <a href="https://linkedin.com/damiancaelen" className="text-lg sm:text-xl text-primarywhite hover:underline">
                        {/* <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> */}
                        linkedin.com/damiancaelen
                    </a>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-secondarygreen text-lightertext flex justify-between">
                <div className="text-sm sm:text-base flex items-center">
                    &copy; 2024 Damian Caelen
                </div>
                <div className="text-base sm:text-xl">Local time: {currentTime} CET + 01:00</div>
            </div>
        </div>
    );
}
