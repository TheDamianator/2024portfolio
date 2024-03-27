import React from "react";
import LandingPage from "./LandingPage";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Projectcomponent from "./component/Projectcomponent";
import Jumbo from "./Jumbo";
import './styles.css';

export default function App() {
  return (
    <>
    
      <Navigation/>
      <LandingPage/>
      <About/>
      <Projects/>
      <Contact/>
      <Jumbo/>
      <Projectcomponent/>
      
    </>
  )
}