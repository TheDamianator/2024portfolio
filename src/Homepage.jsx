import React from "react";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Projects from "./Projects";


 function HomePage() {
    return(
        <>
            <LandingPage/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    );
}
export default HomePage;