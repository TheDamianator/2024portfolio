import React from "react";
import jumbo from "./assets/projects/Jumbosmall.png";
import dummy from "./assets/projects/dummysmall.png";

export default function Projects() {
  const projects = [
    { 
      title: "Jumbo", 
      image: jumbo, 
      url: "#", 
      description: "Throughout this project I collaborated with Jumbo as a school project.",
      btn1: "Design",
      btn2: "Development",
      btn3: "Jumbo"
    },
    { 
      title: "Bolt IT", 
      image: dummy, 
      url: "#", 
      description: "Bolt IT is a revolutionary software solution that aims to streamline project management workflows. With intuitive user interfaces and powerful backend algorithms, Bolt IT ensures that your projects are delivered on time and within budget. Say goodbye to project management headaches and hello to Bolt IT!" 
    },
    { 
      title: "BieSjefke", 
      image: dummy, 
      url: "#", 
      description: "BieSjefke is a cozy café located in the heart of the city. With its rustic charm and welcoming atmosphere, BieSjefke is the perfect spot to unwind with friends or catch up on work. From artisanal coffee to mouthwatering pastries, BieSjefke offers a delightful selection of treats to satisfy your cravings." 
    },
  ];

  return (
    <div id="projects" className="bg-primarywhite min-h-screen font-custom font-bold flex flex-col justify-center items-center relative">
      <h1 className="text-7xl text-accentbrown mb-8">PROJECTS</h1>
      <div className="grid gap-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center min-h-96"> {/* Adjusted minimum height */}
            <div className="flex flex-col items-center"> {/* Updated flex container */}
              <img
                src={project.image}
                alt={project.title}
                className="w-100 h-auto object-cover rounded-2xl" // Added rounded-lg class
              />
              <div className=" text-left"> {/* Removed flex-grow class */}
                <h2 className="text-xl text-accentbrown mb-4">{project.title}</h2>
                <p className="w-96">{project.description}</p>
                <div className="flex space-x-2 mt-2">
                  <div className="outline outline-1 rounded-2xl p-1 text-xs">{project.btn1}</div>
                  <div className="outline outline-1 rounded-2xl p-1 text-xs">{project.btn2}</div>
                  <div className="outline outline-1 rounded-2xl p-1 text-xs bg-secondarygreen outline-secondarygreen">{project.btn3}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
