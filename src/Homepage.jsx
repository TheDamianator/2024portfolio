import React from "react";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import { Fade } from 'react-reveal';


 function HomePage() {
    return(
        <>
            <Fade left>
                <LandingPage/>
                <About/>
                <Projects/>
                <Contact/>
            </Fade>
        </>
    );
}
export default HomePage;