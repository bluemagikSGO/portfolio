import React from "react";
import myport from "../assets/myport.png";

import portapp from "../assets/portapp.png";
import portapp2 from "../assets/portapp2.png";
import portapp3 from "../assets/portapp3.png";

import { Copyright } from "lucide-react";

const Port = () => {
  return (
    <div>
      <div className="min-h-screen text-white font-['Montserrat'] pb-15">
        {/* Hero Section */}
        <section className="flex flex-col items-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4 text-center">
            Gabsteven Portfolio
          </h1>
          <p className="text-lg md:text-xl  mb-6 text-center max-w-2xl">
            This current portfolio website that serves as a container for all
            frontend projects made by me
          </p>
          <div className="mb-6">
            <img
              src={myport}
              alt="Portfolio homepage mockup"
              className="w-80 md:w-[420px] rounded-xl shadow-lg border"
            />
          </div>
          <div className="">
            <a
              href="https://gabsteven.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
            >
              View Live
            </a>
          </div>
        </section>

        {/* Project Overview */}
        <section className="max-w-3xl mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold  mb-2">Project Overview</h2>
          <p className="">
            GabSteven is a simple yet concise portfolio website that serves as a
            container for all projects executed by me and since the porfolio
            container is also a project made and done by me, it is only logical
            to add it to the list of projects executed.
          </p>
        </section>

        {/* My Role & Responsibilities */}
        <section className="max-w-4xl mx-auto py-8 px-4 grid md:grid-cols-2 gap-8 md:pl-20">
          <div>
            <h2 className="text-2xl font-bold  mb-4">
              My Role & Responsibilities
            </h2>
            <ul className="space-y-3">
              <li>
                📐 <strong>Product Architecture</strong>: Defined the overall
                structure of the app from user flows to core feature logic.
              </li>
              <li>
                🎨<strong>UI/UX Design</strong> : Designed responsive,
                user-friendly interfaces using Tailwind CSS
              </li>
              <li>
                💻<strong>Frontend Development</strong> : Built the platform
                interface using React and styled with tailwind css
              </li>
            </ul>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-3xl mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold  mb-4">Tech Stack</h2>
          <ul className="list-disc pl-6 space-y-2 ">
            <li>Frontend: React.js, Tailwind CSS, React Router</li>
            <li>Deployment: Vercel (Frontend)</li>
            <li>Other Tools: GitHub for version control</li>
          </ul>
        </section>

        {/* Screenshots / Demo Gallery */}
        <section className="max-w-8xl mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold  mb-4">Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img src={portapp} alt="Dashboard" className="rounded-lg shadow" />
            <img
              src={portapp2}
              alt="Login Page"
              className="rounded-lg shadow"
            />
            <img
              src={portapp3}
              alt="Login Page"
              className="rounded-lg shadow"
            />
          </div>
        </section>

        {/* Links & CTA */}
        <section className="max-w-3xl mx-auto py-8 px-4 flex flex-col items-center gap-4">
          <a
            href="https://gabsteven.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
          >
            🔗 Live Demo
          </a>
          <a
            href="https://github.com/bluemagikSGO.git"
            target="_blank"
            rel="noopener noreferrer"
            className="underline "
          >
            📦 GitHub Repo
          </a>
        </section>

        {/* Footer */}

        <hr className="mx-15 mt-10" />
        <div className="text-center">stevengabriel2015@gmail.com</div>
        <footer className="flex gap-4 items-center justify-center mt-10">
          <Copyright /> {new Date().getFullYear()} All Rights Reserved Gabriel
          Steven O
        </footer>
      </div>
    </div>
  );
};

export default Port;
