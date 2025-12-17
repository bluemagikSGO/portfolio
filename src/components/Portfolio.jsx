import React from "react";
import { Link } from "react-router-dom";
// We don't need PortList anymore, we will build the card here for better control
// import PortList from "./PortList";

// Import images
import portimg from "../assets/metherappy.jpg";
import portsport from "../assets/sportsloc.jpg";
import portnova from "../assets/portnova.png";
import myport from "../assets/myport.png";
import portItem from "../assets/iteminder.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Iteminder",
      category: "Trip Items Documentation and Reminder",
      image: portItem,
      link: "/iteminder",
    },
    {
      id: 2,
      title: "meTherappy",
      category: "Tele-Health Platform",
      image: portimg,
      link: "/metherappy",
    },
    {
      id: 3,
      title: "SportsLoc",
      category: "Sport Facility Discovery and Community",
      image: portsport,
      link: "/sportloc",
    },
    {
      id: 5,
      title: "Portfolio Site",
      category: "My Personal Portfolio",
      image: myport,
      link: "/myport",
    },
  ];

  return (
    <section id="portfolio" className="text-white w-full py-10">
      {/* Divider */}
      <hr
        className="w-11/12 max-w-6xl mx-auto border-white/20 mb-10"
        aria-hidden="true"
      />

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] mb-2">
          Featured Projects
        </h2>
        <p className="text-gray-400">A selection of my recent work</p>
      </div>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            className="group block w-full h-full"
          >
            <div className="w-full h-full flex flex-col border border-white/10 rounded-xl overflow-hidden bg-[#1b1448]/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2">
              {/* IMAGE CONTAINER - THE FIX IS HERE */}
              <div className="w-full h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  // object-cover: ensures image fills the box without stretching
                  // object-top: ensures the top of the website/app is always visible
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-['Ubuntu'] mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 font-['Montserrat'] text-sm">
                  {project.category}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Disclaimer / Footer Note */}
      <div className="text-center mt-16 px-4">
        <p className="text-gray-500 font-['Montserrat'] text-sm md:text-base italic border border-white/10 inline-block px-6 py-3 rounded-full bg-black/20">
          Note: Due to NDA restrictions, some client projects cannot be publicly
          displayed.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
