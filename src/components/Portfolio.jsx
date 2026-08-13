import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="text-white w-full py-20">
      {/* Divider */}
      <hr className="w-11/12 max-w-6xl mx-auto border-white/10 mb-20" />

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-blue-400 font-semibold font-['Ubuntu'] text-sm tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg">A selection of my recent work</p>
      </div>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/${project.slug}`}
            className="group block w-full h-full"
          >
            <div className="w-full h-full flex flex-col border border-white/5 rounded-2xl overflow-hidden bg-[#1b1448]/50 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2">
              {/* Image Container */}
              <div className="w-full h-56 md:h-64 overflow-hidden relative">
                {project.status && (
                  <span
                    className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full border text-[11px] font-semibold tracking-wide uppercase backdrop-blur-sm flex items-center gap-1.5 ${project.accent.badge}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                    {project.status}
                  </span>
                )}

                {project.cardImage || project.image ? (
                  <img
                    src={project.cardImage || project.image}
                    alt={`${project.title} — ${project.category}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : project.logo ? (
                  <div className="w-full h-full bg-[#14102e] flex items-center justify-center">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      loading="lazy"
                      decoding="async"
                      className="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br flex items-center justify-center ${project.accent.glow}`}
                  >
                    <span className="text-3xl font-bold font-['Ubuntu'] text-white/90 px-6 text-center">
                      {project.cardTitle || project.title}
                    </span>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100">
                    <ArrowUpRight size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold font-['Ubuntu'] text-white group-hover:text-blue-400 transition-colors">
                    {project.cardTitle || project.title}
                  </h3>
                </div>
                <p className="text-gray-400 font-['Montserrat'] text-sm mb-4">
                  {project.category}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.cardTech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-white/5 rounded-md text-xs text-gray-400 font-['Montserrat']"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="text-center mt-16 px-4">
        <p className="text-gray-500 font-['Montserrat'] text-sm italic border border-white/5 inline-block px-6 py-3 rounded-full bg-white/[0.02]">
          Note: Due to NDA restrictions, some client projects cannot be publicly
          displayed.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
