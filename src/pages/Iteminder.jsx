import React from "react";
import { Link } from "react-router-dom";
import {
  Copyright,
  Mail,
  ExternalLink,
  Github,
  ArrowRight,
  ArrowLeft,
  Download,
} from "lucide-react";

import itemHero from "../assets/iteminder.png";
import code1 from "../assets/code1.png";
import code2 from "../assets/code2.png";
import code3 from "../assets/code3.png";

const Iteminder = () => {
  return (
    <div
      id="iteminder"
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
        <div className="mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-wider uppercase">
          Case Study
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-['Ubuntu']">
          Iteminder
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl text-gray-300">
          Pack smarter. Remember everything. Available on the iOS App Store and
          as a lightweight PWA for organizing trip items and sharing
          accountability.
        </p>

        <div className="mb-10 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src={itemHero}
            alt="Iteminder app preview"
            className="relative w-full max-w-[450px] rounded-2xl shadow-2xl border border-white/10"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://apps.apple.com/ng/app/iteminder/id6755497161"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-bold transition-all border border-white/20 text-sm"
          >
            <Download size={18} /> App Store
          </a>
          <a
            href="https://iteminder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-blue-600/20 text-sm"
          >
            <ExternalLink size={18} /> Web App
          </a>
          <a
            href="https://github.com/bluemagiksgo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/20 hover:bg-white/5 hover:border-white/40 text-white px-6 py-3 rounded-lg font-bold transition-all text-sm"
          >
            <Github size={18} /> Code
          </a>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4 font-['Ubuntu']">
          Project Overview
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Iteminder streamlines trip prep with checklists, item photos, and
          timely reminders (push & email). It's installable as a native iOS app
          and works great offline. Users can also invite a "trusted reminder" --
          a friend who helps keep them on track if they forget to pack an item.
        </p>
      </section>

      {/* 3. ROLE & FEATURES */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 font-['Ubuntu']">My Role</h2>
            <ul className="space-y-4 text-gray-300">
              {[
                "Frontend development (React + Vite)",
                "UX/UI design for mobile-first flows",
                "Supabase schema & Edge Functions",
                "iOS App Store deployment",
                "Admin metrics & analytics",
              ].map((item) => (
                <li key={item} className="flex gap-3">
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
            <h2 className="text-2xl font-bold mb-6 font-['Ubuntu']">
              Core Features
            </h2>
            <ul className="space-y-4 text-gray-300">
              {[
                "Smart packing lists with photos",
                "Timezone-aware reminders",
                "Native Push notifications",
                '"Trusted Reminder" accountability sharing',
                "Offline-first architecture",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <ArrowRight
                    size={16}
                    className="text-purple-500 mt-1 shrink-0"
                  />
                  {item}
                </li>
              ))}
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
              className="px-5 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 5. CHALLENGES & CODE */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-red-500 pl-4 font-['Ubuntu']">
          Challenges & Implementation
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-300">
            <p>
              One of the biggest challenges was handling{" "}
              <strong className="text-white">Timezone-safe reminders</strong>.
              Since users travel across zones, a reminder set for 8 AM in Lagos
              needs to alert them correctly if they are currently in London.
            </p>
            <p>
              Another hurdle was preparing the web app for the{" "}
              <strong className="text-white">iOS App Store</strong>. This
              involved using Capacitor to wrap the React application into a
              native container and ensuring it met Apple's strict review
              guidelines.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 font-['Ubuntu']">
              Key Learnings:
            </h3>
            <ul className="space-y-2">
              {[
                "Native app deployment process via Capacitor.",
                "Optimizing Supabase Edge Functions for speed.",
                "Handling native push notification permissions.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-blue-400 mt-1 shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            <div className="bg-black/40 p-2 rounded-xl border border-white/10">
              <img
                src={code1}
                alt="Code Snippet"
                className="rounded-lg w-full opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={code2}
                alt="Code Snippet"
                className="rounded-xl border border-white/10 opacity-85 hover:opacity-100 transition-opacity"
              />
              <img
                src={code3}
                alt="Code Snippet"
                className="rounded-xl border border-white/10 opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
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

export default Iteminder;
