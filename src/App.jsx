import React from "react";
import LandingPage from "./LandingPage";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import './styles.css';

export default function App() {
  return (
    <>
    
      <Navigation/>
      <LandingPage/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}