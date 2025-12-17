import React from "react";
import {
  Copyright,
  ExternalLink,
  Github,
  MapPin,
  Users,
  Calendar,
  Shield,
  Database,
  Layout,
  Server,
  ArrowRight,
  Mail,
} from "lucide-react";

// Images
import portimg from "../assets/sportsloc.jpg";
import sportcode1 from "../assets/sportcode1.png";
import sportcode2 from "../assets/sportcode2.png";
import sportcode3 from "../assets/sportcode3.png";

const Sportsloc = () => {
  return (
    <div className="min-h-screen text-white font-['Montserrat'] bg-[#0f0a2a] pb-16">
      {/* 1. HERO SECTION */}
      <section className="flex flex-col items-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-['Ubuntu']">
          SportsLoc
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl text-gray-300">
          Connect. Play. Compete. A location-based discovery platform for
          finding sports facilities, players, and local communities.
        </p>

        {/* Hero Image */}
        <div className="mb-10 relative group">
          {/* Green/Blue Glow for Sports Theme */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src={portimg}
            alt="sportsloc homepage mockup"
            className="relative w-full max-w-[500px] rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="https://sportsloc.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-600/20"
          >
            <ExternalLink size={20} /> View Live
          </a>
          <a
            href="https://github.com/bluemagikSGO/sportsloc.git"
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
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-green-500 pl-4">
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
                <Layout size={18} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>Product Architecture:</strong> Defined user flows and
                  core logic.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Layout size={18} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>UI/UX Design:</strong> Designed responsive interfaces
                  using Tailwind CSS & Figma.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <ArrowRight size={18} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>Frontend Development:</strong> Built React interface
                  and integrated APIs.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Users size={18} className="text-blue-500 mt-1 shrink-0" />
                <span>
                  <strong>Collaboration:</strong> Synced with backend engineers
                  on infrastructure.
                </span>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-green-400">✨</span> Core Features
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-center">
                <MapPin size={18} className="text-green-500 shrink-0" />{" "}
                <span>
                  <strong>Geolocation:</strong> Find nearby facilities &
                  players.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Users size={18} className="text-green-500 shrink-0" />{" "}
                <span>
                  <strong>Social:</strong> Message players & join groups.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Shield size={18} className="text-green-500 shrink-0" />{" "}
                <span>
                  <strong>Auth:</strong> Secure profiles for users/owners.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Calendar size={18} className="text-green-500 shrink-0" />{" "}
                <span>
                  <strong>Events:</strong> Create & share sporting events.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK (Badges) */}
      <section className="max-w-4xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Technologies Used</h2>
        <div className="flex flex-wrap justify-center gap-4">
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
              className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 5. GALLERY */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Interface Shots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[sportcode1, sportcode2, sportcode3].map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-white/10 shadow-lg group hover:scale-105 transition-transform duration-500"
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
        <div className="grid md:grid-cols-2 gap-12">
          {/* Challenges */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              Challenges & Learnings
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li>
                <strong>Geolocation:</strong> Implementing accurate location
                data via Google Maps API while optimizing load times.
              </li>
              <li>
                <strong>Full Stack Sync:</strong> aligning data models and API
                endpoints with the backend team.
              </li>
              <li>
                <strong>Performance:</strong> Optimizing third-party scripts
                (Maps) to keep the UI snappy.
              </li>
            </ul>
          </div>

          {/* Future Plans */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              What’s Next?
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li>
                <strong>Facility Dashboard:</strong> A portal for owners to
                manage listings and bookings.
              </li>
              <li>
                <strong>Push Notifications:</strong> Real-time alerts for match
                invites.
              </li>
              <li>
                <strong>Mobile App:</strong> React Native version for on-the-go
                access.
              </li>
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

export default Sportsloc;
