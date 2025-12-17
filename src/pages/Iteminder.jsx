import React from "react";
import {
  Copyright,
  Mail,
  ExternalLink,
  Github,
  ArrowRight,
  Download,
} from "lucide-react";

// Hero / gallery assets
import itemHero from "../assets/iteminder.png";
// Removed unused dashboard image imports
import code1 from "../assets/code1.png";
import code2 from "../assets/code2.png";
import code3 from "../assets/code3.png";

const Iteminder = () => {
  return (
    <div
      id="iteminder"
      className="min-h-screen text-white font-['Montserrat'] bg-[#0f0a2a] pb-16"
    >
      {/* 1. HERO SECTION */}
      <section className="flex flex-col items-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-['Ubuntu']">
          Iteminder
        </h1>
        {/* Updated Description */}
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl text-gray-300">
          Pack smarter. Remember everything. **Available now on the iOS App
          Store** and as a lightweight PWA for organizing trip items and sharing
          accountability.
        </p>

        {/* Hero Image - Made smaller (max-w-[450px]) */}
        <div className="mb-10 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src={itemHero}
            alt="Iteminder app preview"
            // CHANGE: Reduced max-width from 800px to 450px
            className="relative w-full max-w-[450px] rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Buttons - Added App Store Button */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* NEW: App Store Button */}
          <a
            href="https://apps.apple.com/ng/app/iteminder/id6755497161" // <-- REPLACE THIS WITH YOUR REAL APP STORE URL
            target="_blank"
            rel="noopener noreferrer"
            // Using black background standard for App Store buttons
            className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-bold transition-all border border-white/20"
          >
            <Download size={20} /> Download on App Store
          </a>

          <a
            href="https://iteminder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
          >
            <ExternalLink size={20} /> View Web App
          </a>
          <a
            href="https://github.com/bluemagiksgo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-bold transition-all"
          >
            <Github size={20} /> View Code
          </a>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">
          Project Overview
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Iteminder streamlines trip prep with checklists, item photos, and
          timely reminders (push & email). It’s installable as a native iOS app
          and works great offline. Users can also invite a “trusted reminder” —
          a friend who helps keep them on track if they forget to pack an item.
        </p>
      </section>

      {/* REMOVED APP INTERFACE SECTION HERE */}

      {/* 4. ROLE & FEATURES */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Role */}
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-blue-400">🔧</span> My Role
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <ArrowRight size={18} className="text-blue-500 mt-1 shrink-0" />{" "}
                Frontend development (React + Vite)
              </li>
              <li className="flex gap-3">
                <ArrowRight size={18} className="text-blue-500 mt-1 shrink-0" />{" "}
                UX/UI design for mobile-first flows
              </li>
              <li className="flex gap-3">
                <ArrowRight size={18} className="text-blue-500 mt-1 shrink-0" />{" "}
                Supabase schema & Edge Functions
              </li>
              <li className="flex gap-3">
                <ArrowRight size={18} className="text-blue-500 mt-1 shrink-0" />{" "}
                iOS App Store deployment
              </li>
              <li className="flex gap-3">
                <ArrowRight size={18} className="text-blue-500 mt-1 shrink-0" />{" "}
                Admin metrics & analytics
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-purple-400">✨</span> Core Features
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <ArrowRight
                  size={18}
                  className="text-purple-500 mt-1 shrink-0"
                />{" "}
                Smart packing lists with photos
              </li>
              <li className="flex gap-3">
                <ArrowRight
                  size={18}
                  className="text-purple-500 mt-1 shrink-0"
                />{" "}
                Timezone-aware reminders
              </li>
              <li className="flex gap-3">
                <ArrowRight
                  size={18}
                  className="text-purple-500 mt-1 shrink-0"
                />{" "}
                Native Push notifications
              </li>
              <li className="flex gap-3">
                <ArrowRight
                  size={18}
                  className="text-purple-500 mt-1 shrink-0"
                />{" "}
                "Trusted Reminder" accountability sharing
              </li>
              <li className="flex gap-3">
                <ArrowRight
                  size={18}
                  className="text-purple-500 mt-1 shrink-0"
                />{" "}
                Offline-first architecture
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. TECH STACK */}
      <section className="max-w-4xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Technologies Used</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Vite",
            "Tailwind CSS",
            "Supabase",
            "PostgreSQL",
            "Edge Functions",
            "Capacitor (for iOS)",
            "Mailjet",
          ].map((tech) => (
            <span
              key={tech}
              className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 6. CHALLENGES & CODE SNIPPETS */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-red-500 pl-4">
          Challenges & Implementation
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-300">
            <p>
              One of the biggest challenges was handling{" "}
              <strong>Timezone-safe reminders</strong>. Since users travel
              across zones, a reminder set for 8 AM in Lagos needs to alert them
              correctly if they are currently in London.
            </p>
            <p>
              Another hurdle was preparing the web app for the{" "}
              <strong>iOS App Store</strong>. This involved using Capacitor to
              wrap the React application into a native container and ensuring it
              met Apple's strict review guidelines.
            </p>

            <h3 className="text-xl font-bold text-white mt-6">
              Key Learnings:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Native app deployment process via Capacitor.</li>
              <li>Optimizing Supabase Edge Functions for speed.</li>
              <li>Handling native push notification permissions.</li>
            </ul>
          </div>

          {/* Code Snippet Gallery */}
          <div className="grid gap-4">
            <div className="bg-black/40 p-2 rounded-lg border border-white/10">
              <img
                src={code1}
                alt="Code Snippet"
                className="rounded w-full opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={code2}
                alt="Code Snippet"
                className="rounded-lg border border-white/10 opacity-80"
              />
              <img
                src={code3}
                alt="Code Snippet"
                className="rounded-lg border border-white/10 opacity-80"
              />
            </div>
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

export default Iteminder;
