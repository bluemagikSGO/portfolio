import React from "react";
import { Link } from "react-router-dom";
import {
  Copyright,
  ExternalLink,
  Github,
  MapPin,
  Users,
  Calendar,
  Shield,
  Layout,
  ArrowRight,
  ArrowLeft,
  Mail,
} from "lucide-react";

import portimg from "../assets/sportsloc.jpg";
import sportcode1 from "../assets/sportcode1.png";
import sportcode2 from "../assets/sportcode2.png";
import sportcode3 from "../assets/sportcode3.png";

const Sportsloc = () => {
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
        <div className="mb-4 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold tracking-wider uppercase">
          Case Study
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-['Ubuntu']">
          SportsLoc
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl text-gray-300">
          Connect. Play. Compete. A location-based discovery platform for
          finding sports facilities, players, and local communities.
        </p>

        <div className="mb-10 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src={portimg}
            alt="SportsLoc homepage mockup"
            className="relative w-full max-w-[500px] rounded-2xl shadow-2xl border border-white/10"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://sportsloc.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-blue-600/20 text-sm"
          >
            <ExternalLink size={18} /> View Live
          </a>
          <a
            href="https://github.com/bluemagikSGO/sportsloc.git"
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
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-green-500 pl-4 font-['Ubuntu']">
          Project Overview
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Sportsloc is a location-based web platform designed to solve the
          fragmentation in recreational sports. It helps users discover nearby
          facilities, connect with fellow players, and build communities. By
          creating a digital ecosystem for athletes and facility owners,
          Sportsloc makes organizing games and finding venues seamless.
        </p>
      </section>

      {/* 3. ROLE & FEATURES */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 font-['Ubuntu']">My Role</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-start">
                <Layout size={16} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>Product Architecture:</strong> Defined user flows and
                  core logic.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Layout size={16} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>UI/UX Design:</strong> Designed responsive interfaces
                  using Tailwind CSS & Figma.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <ArrowRight size={16} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>Frontend Development:</strong> Built React interface
                  and integrated APIs.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Users size={16} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>Collaboration:</strong> Synced with backend engineers
                  on infrastructure.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 font-['Ubuntu']">
              Core Features
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-center">
                <MapPin size={16} className="text-green-500 shrink-0" />
                <span>
                  <strong>Geolocation:</strong> Find nearby facilities & players.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Users size={16} className="text-green-500 shrink-0" />
                <span>
                  <strong>Social:</strong> Message players & join groups.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Shield size={16} className="text-green-500 shrink-0" />
                <span>
                  <strong>Auth:</strong> Secure profiles for users/owners.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Calendar size={16} className="text-green-500 shrink-0" />
                <span>
                  <strong>Events:</strong> Create & share sporting events.
                </span>
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
            "React.js",
            "Tailwind CSS",
            "React Router",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Google Maps API",
            "Leaflet.js",
            "Firebase Auth",
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
        <h2 className="text-3xl font-bold mb-10 text-center font-['Ubuntu']">
          Interface Shots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[sportcode1, sportcode2, sportcode3].map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-500"
            >
              <img
                src={img}
                alt={`Sportsloc screenshot ${index + 1}`}
                className="w-full h-full object-cover"
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
                "Implementing accurate location data via Google Maps API while optimizing load times.",
                "Aligning data models and API endpoints with the backend team.",
                "Optimizing third-party scripts (Maps) to keep the UI snappy.",
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
                "A portal for owners to manage listings and bookings.",
                "Real-time alerts for match invites via push notifications.",
                "React Native mobile app version for on-the-go access.",
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

export default Sportsloc;
