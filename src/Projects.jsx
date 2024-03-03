import React, { useState } from "react";
import jumbo from "./assets/projects/Jumbosmall.png";
import dummy from "./assets/projects/dummysmall.png";

const Popup = ({ project, onClose }) => (
  <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center overflow-hidden">
    <div className="bg-white p-8 max-w-screen-lg max-h-screen overflow-auto flex relative">
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
        Close
      </button>
      <img src={project.image} alt={project.title} className="w-64 h-auto mr-8" />
      <div>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const [popupProject, setPopupProject] = useState(null);

  const handleProjectClick = (project) => {
    setPopupProject(project);
    document.body.style.overflow = "hidden"; // Disable scroll for the background
  };

  const handleClosePopup = () => {
    setPopupProject(null);
    document.body.style.overflow = "auto"; // Enable scroll for the background
  };

  const projects = [
    { 
      title: "Bolt IT", 
      image: dummy, 
      url: "#", 
      description: "Bolt IT is a revolutionary software solution that aims to streamline project management workflows. With intuitive user interfaces and powerful backend algorithms, Bolt IT ensures that your projects are delivered on time and within budget. Say goodbye to project management headaches and hello to Bolt IT!" 
    },
    { 
      title: "Jumbo", 
      image: jumbo, 
      url: "#", 
      description: "Jumbo is a cutting-edge e-commerce platform designed to revolutionize the way you shop online. With a vast selection of products, lightning-fast delivery, and personalized recommendations, Jumbo makes online shopping a breeze. Whether you're looking for electronics, groceries, or fashion items, Jumbo has got you covered!" 
    },
    { 
      title: "BieSjefke", 
      image: dummy, 
      url: "#", 
      description: "BieSjefke is a cozy café located in the heart of the city. With its rustic charm and welcoming atmosphere, BieSjefke is the perfect spot to unwind with friends or catch up on work. From artisanal coffee to mouthwatering pastries, BieSjefke offers a delightful selection of treats to satisfy your cravings." 
    },
    { 
      title: "Dummy Project", 
      image: dummy, 
      url: "#", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
    }
  ];

  return (
    <div id="projects" className="bg-primarywhite min-h-screen font-custom font-bold flex flex-col justify-center items-center relative">
      <h1 className="text-7xl text-accentbrown mb-8">PROJECTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-start">
            <h2 className="text-xl text-accentbrown mb-4">{project.title}</h2>
            <img
              src={project.image}
              alt={project.title}
              className="w-64 h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleProjectClick(project)}
            />
          </div>
        ))}
      </div>
      {popupProject && <Popup project={popupProject} onClose={handleClosePopup} />}
    </div>
  );
}
