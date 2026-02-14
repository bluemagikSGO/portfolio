import React from "react";
import { Link } from "react-router-dom";
import {
  Copyright,
  ExternalLink,
  Github,
  Layout,
  Code,
  Paintbrush,
  Mail,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import myport from "../assets/myport.png";
import portapp from "../assets/portapp.png";
import portapp2 from "../assets/portapp2.png";
import portapp3 from "../assets/portapp3.png";

const Port = () => {
  return (
    <div className="min-h-screen text-white font-['Montserrat'] bg-[#0f0a2a] pb-16">
      {/* Back Navigation */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-['Ubuntu'] text-sm group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <section className="flex flex-col items-center py-16 px-6">
        <div className="mb-4 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-wider uppercase">
          Case Study
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-['Ubuntu']">
          Gabsteven Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl text-gray-300">
          The container for my digital work. A responsive, high-performance
          portfolio website built to showcase frontend projects.
        </p>

        <div className="mb-10 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src={myport}
            alt="Portfolio homepage mockup"
            className="relative w-full max-w-[500px] rounded-2xl shadow-2xl border border-white/10"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://gabsteven.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-blue-600/20 text-sm"
          >
            <ExternalLink size={18} /> View Live
          </a>
          <a
            href="https://github.com/bluemagikSGO/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/20 hover:bg-white/5 hover:border-white/40 text-white px-8 py-3 rounded-lg font-bold transition-all text-sm"
          >
            <Github size={18} /> View Code
          </a>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-pink-500 pl-4 font-['Ubuntu']">
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

      {/* 3. ROLE & TECH */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 font-['Ubuntu']">My Role</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-start">
                <Layout size={16} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>Product Architecture:</strong> Defined the overall
                  structure, routing, and component hierarchy.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Paintbrush size={16} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>UI/UX Design:</strong> Crafted a dark-mode aesthetic
                  with responsive layouts using Tailwind CSS.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Code size={16} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>Frontend Development:</strong> Built interactive
                  components (Galleries, Modals) using React.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 font-['Ubuntu']">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3 mb-6">
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
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <h3 className="font-bold mb-3 text-gray-200 font-['Ubuntu']">
                Key Features:
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-pink-400" /> Fully
                  Responsive Mobile-First Design
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-pink-400" /> Contact
                  Form Integration (EmailJS)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-pink-400" /> Scroll
                  Animations (AOS)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center font-['Ubuntu']">
          Interface Shots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[portapp, portapp2, portapp3].map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-500"
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
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <a
            href="mailto:stevengabriel2015@gmail.com"
            className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors duration-300"
          >
            <Mail size={22} />
            <span className="font-['Montserrat']">
              stevengabriel2015@gmail.com
            </span>
          </a>
          <footer className="flex items-center gap-2 text-gray-500 text-sm font-['Ubuntu']">
            <Copyright size={14} />
            <span>
              {new Date().getFullYear()} Gabriel Steven O. All rights reserved.
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Port;
