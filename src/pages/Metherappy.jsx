import React from "react";
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
  Mail,
} from "lucide-react";

// Images
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
      {/* 1. HERO SECTION */}
      <section className="flex flex-col items-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-['Ubuntu']">
          meTherappy
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl text-gray-300">
          Your Mental Health Companion. An online platform connecting people
          with licensed therapists and counselors.
        </p>

        {/* Hero Image */}
        <div className="mb-10 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src={portimg}
            alt="meTherappy homepage mockup"
            className="relative w-full max-w-[500px] rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="https://metherappy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-600/20"
          >
            <ExternalLink size={20} /> View Live
          </a>
          <a
            href="https://github.com/bluemagikSGO/meTherappy.git"
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
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-teal-500 pl-4">
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

      {/* 3. ROLE & FEATURES (Grid Layout) */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Role */}
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-blue-400">🔧</span> My Role
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-start">
                <ArrowRight size={18} className="text-blue-500 mt-1 shrink-0" />{" "}
                Frontend Architecture & Development
              </li>
              <li className="flex gap-3 items-start">
                <ArrowRight size={18} className="text-blue-500 mt-1 shrink-0" />{" "}
                UI/UX Design (Figma to Code)
              </li>
              <li className="flex gap-3 items-start">
                <ArrowRight size={18} className="text-blue-500 mt-1 shrink-0" />{" "}
                Backend API Integration
              </li>
              <li className="flex gap-3 items-start">
                <ArrowRight size={18} className="text-blue-500 mt-1 shrink-0" />{" "}
                Responsive Mobile Testing
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-teal-400">✨</span> Core Features
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-center">
                <UserCheck size={18} className="text-teal-500 shrink-0" />{" "}
                Therapist discovery & booking
              </li>
              <li className="flex gap-3 items-center">
                <Shield size={18} className="text-teal-500 shrink-0" /> Secure
                user authentication
              </li>
              <li className="flex gap-3 items-center">
                <MessageSquare size={18} className="text-teal-500 shrink-0" />{" "}
                Real-time chat messaging system
              </li>
              <li className="flex gap-3 items-center">
                <Layout size={18} className="text-teal-500 shrink-0" />{" "}
                Therapist profile filtering
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK (Chips) */}
      <section className="max-w-4xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Technologies Used</h2>
        <div className="flex flex-wrap justify-center gap-4">
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
              className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 5. GALLERY (Screenshots & Code) */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        {/* UI Gallery */}
        <h2 className="text-3xl font-bold mb-8 text-center">App Interface</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[loginImg, dashboardImg, bookingImg].map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-white/10 shadow-lg group hover:scale-105 transition-transform duration-500"
            >
              <img
                src={img}
                alt="App UI"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Code Snippets */}
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <Code /> Under the Hood
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[code1, code2, code3].map((code, i) => (
            <div
              key={i}
              className="bg-black/40 p-2 rounded-lg border border-white/10 shadow-inner"
            >
              <img
                src={code}
                alt={`Code snippet ${i}`}
                className="w-full rounded opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 6. CHALLENGES & FUTURE */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Challenges */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              Challenges & Learnings
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li>Handling complex User Authentication flows securely.</li>
              <li>
                Designing a UI that feels "calm" and welcoming (Color
                psychology).
              </li>
              <li>
                Ensuring perfect responsiveness across varied mobile viewports.
              </li>
              <li>Managing complex state for the therapist booking system.</li>
            </ul>
          </div>

          {/* Future Plans */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              What’s Next?
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li>Implement live video call rooms for sessions.</li>
              <li>AI-driven wellness recommendations.</li>
              <li>Stripe integration for seamless payments.</li>
              <li>Community blog and resource hub.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
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

export default Metherappy;
