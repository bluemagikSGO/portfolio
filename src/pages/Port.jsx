import React from "react";
import {
  Copyright,
  ExternalLink,
  Github,
  Layout,
  Code,
  Paintbrush,
  Globe,
  Mail,
  ArrowRight,
} from "lucide-react";

// Images
import myport from "../assets/myport.png";
import portapp from "../assets/portapp.png";
import portapp2 from "../assets/portapp2.png";
import portapp3 from "../assets/portapp3.png";

const Port = () => {
  return (
    <div className="min-h-screen text-white font-['Montserrat'] bg-[#0f0a2a] pb-16">
      {/* 1. HERO SECTION */}
      <section className="flex flex-col items-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-['Ubuntu']">
          Gabsteven Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl text-gray-300">
          The container for my digital work. A responsive, high-performance
          portfolio website built to showcase frontend projects.
        </p>

        {/* Hero Image */}
        <div className="mb-10 relative group">
          {/* Pink/Purple Glow Effect for this project */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src={myport}
            alt="Portfolio homepage mockup"
            className="relative w-full max-w-[500px] rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="https://gabsteven.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-600/20"
          >
            <ExternalLink size={20} /> View Live
          </a>
          <a
            href="https://github.com/bluemagikSGO/my-portfolio" // Updated link structure
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-bold transition-all"
          >
            <Github size={20} /> View Code
          </a>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-pink-500 pl-4">
          Project Overview
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          GabSteven.com is a centralized hub designed to aggregate my
          development work. Since the portfolio itself is a custom-built React
          application, it serves as both a container for my work and a testament
          to my skills in component architecture, responsive design, and
          deployment pipelines.
        </p>
      </section>

      {/* 3. ROLE & TECH (Grid Layout) */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Role */}
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-blue-400">🔧</span> My Role
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-start">
                <Layout size={18} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>Product Architecture:</strong> Defined the overall
                  structure, routing, and component hierarchy.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Paintbrush size={18} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>UI/UX Design:</strong> Crafted a dark-mode aesthetic
                  with responsive layouts using Tailwind CSS.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Code size={18} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>Frontend Development:</strong> Built interactive
                  components (Galleries, Modals) using React.
                </span>
              </li>
            </ul>
          </div>

          {/* Tech Stack (Badges) */}
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-pink-400">⚡</span> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "Tailwind CSS",
                "React Router",
                "Vercel",
                "EmailJS",
                "Lucide React",
                "Git/GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="font-bold mb-2 text-gray-200">Key Features:</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} /> Fully Responsive Mobile-First Design
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} /> Contact Form Integration (EmailJS)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} /> Scroll Animations (AOS)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Interface Shots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[portapp, portapp2, portapp3].map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-white/10 shadow-lg group hover:scale-105 transition-transform duration-500"
            >
              <img
                src={img}
                alt={`Portfolio screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <div className="mt-20 border-t border-white/10 pt-10">
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:stevengabriel2015@gmail.com"
            className="flex items-center gap-3 text-xl hover:text-blue-400 transition-colors duration-300"
          >
            <Mail size={24} />
            <span className="font-['Montserrat']">
              stevengabriel2015@gmail.com
            </span>
          </a>
          <footer className="flex items-center gap-2 text-gray-500 text-sm font-['Ubuntu']">
            <Copyright size={16} />
            <span>
              {new Date().getFullYear()} All Rights Reserved | Gabriel Steven O.
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Port;
