import React from "react";
import { Link } from "react-router-dom";
import {
  Copyright,
  ExternalLink,
  Github,
  Layout,
  Shield,
  MessageSquare,
  UserCheck,
  Code,
  ArrowRight,
  ArrowLeft,
  Mail,
} from "lucide-react";

import portimg from "../assets/metherappy.jpg";
import dashboardImg from "../assets/dashbordImg.png";
import loginImg from "../assets/loginImg.png";
import bookingImg from "../assets/bookingImg.png";
import code1 from "../assets/code1.png";
import code2 from "../assets/code2.png";
import code3 from "../assets/code3.png";

const Metherappy = () => {
  return (
    <div
      id="metherappy"
      className="min-h-screen text-white font-['Montserrat'] bg-[#0f0a2a] pb-16"
    >
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
        <div className="mb-4 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-wider uppercase">
          Case Study
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-['Ubuntu']">
          meTherappy
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl text-gray-300">
          Your Mental Health Companion. An online platform connecting people
          with licensed therapists and counselors.
        </p>

        {/* Hero Image */}
        <div className="mb-10 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src={portimg}
            alt="meTherappy homepage mockup"
            className="relative w-full max-w-[500px] rounded-2xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://metherappy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-blue-600/20 text-sm"
          >
            <ExternalLink size={18} /> View Live
          </a>
          <a
            href="https://github.com/bluemagikSGO/meTherappy.git"
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
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-teal-500 pl-4 font-['Ubuntu']">
          Project Overview
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          meTherappy is a mental health platform designed to lower the barrier
          to entry for therapy. I developed this to help users seamlessly book
          sessions with qualified therapists, track their progress, and access
          curated wellness resources in a safe, non-judgmental digital
          environment.
        </p>
      </section>

      {/* 3. ROLE & FEATURES */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 font-['Ubuntu']">
              My Role
            </h2>
            <ul className="space-y-4 text-gray-300">
              {[
                "Frontend Architecture & Development",
                "UI/UX Design (Figma to Code)",
                "Backend API Integration",
                "Responsive Mobile Testing",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <ArrowRight
                    size={16}
                    className="text-blue-500 mt-1 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 font-['Ubuntu']">
              Core Features
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-center">
                <UserCheck size={16} className="text-teal-500 shrink-0" />
                Therapist discovery & booking
              </li>
              <li className="flex gap-3 items-center">
                <Shield size={16} className="text-teal-500 shrink-0" />
                Secure user authentication
              </li>
              <li className="flex gap-3 items-center">
                <MessageSquare size={16} className="text-teal-500 shrink-0" />
                Real-time chat messaging system
              </li>
              <li className="flex gap-3 items-center">
                <Layout size={16} className="text-teal-500 shrink-0" />
                Therapist profile filtering
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK */}
      <section className="max-w-4xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8 font-['Ubuntu']">
          Technologies Used
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Tailwind CSS",
            "REST APIs",
          ].map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 5. GALLERY */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center font-['Ubuntu']">
          App Interface
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[loginImg, dashboardImg, bookingImg].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-500"
            >
              <img src={img} alt="App UI" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 font-['Ubuntu']">
          <Code size={24} /> Under the Hood
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[code1, code2, code3].map((code, i) => (
            <div
              key={i}
              className="bg-black/40 p-2 rounded-xl border border-white/10"
            >
              <img
                src={code}
                alt={`Code snippet ${i}`}
                className="w-full rounded-lg opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 6. CHALLENGES & FUTURE */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1b1448]/50 p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-4 text-red-400 font-['Ubuntu']">
              Challenges & Learnings
            </h2>
            <ul className="space-y-3 text-gray-300">
              {[
                "Handling complex User Authentication flows securely.",
                'Designing a UI that feels "calm" and welcoming (Color psychology).',
                "Ensuring perfect responsiveness across varied mobile viewports.",
                "Managing complex state for the therapist booking system.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-red-400 mt-1 shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1b1448]/50 p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-4 text-green-400 font-['Ubuntu']">
              What's Next?
            </h2>
            <ul className="space-y-3 text-gray-300">
              {[
                "Implement live video call rooms for sessions.",
                "AI-driven wellness recommendations.",
                "Stripe integration for seamless payments.",
                "Community blog and resource hub.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-green-400 mt-1 shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
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

export default Metherappy;
