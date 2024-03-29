import React from "react";
import circleImage from "./assets/circle2.png";

export default function LandingPage() {
  return (
    <>
      <div id="landingpage">
        <div className="bg-primarywhite h-screen font-custom font-bold flex justify-center items-center relative">


          <div className="  absolute bottom-12 left-1/2 transform w-3/4 -translate-x-1/2">


            <p className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl text-accentbrown z-10 mb-6">
              HI THERE, I'M <br /> DAMIAN CAELEN.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-accentbrown flex justify-center items-center z-10">
              Born and raised in the Netherlands, I am a dedicated student
              of UI/UX design, fluent in English, and driven by a
              profound passion for crafting seamless digital experiences
              through code.
            </p>
          </div>

          <img
            src={circleImage}
            alt=""
            className="md:hidden absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/5 w-4/6 opacity-100 z-0"
          />
 
          <img
            src={circleImage}
            alt=""
            className="hidden md:block absolute top-1/5 left-1/2 transform -translate-x-1/2 w-1/3 opacity-100 z-0"
          />
        </div>
      </div>
    </>
  );
}
