import React from "react";
import portnova from "../assets/portnova.png";

import novacode1 from "../assets/novacode1.png";
import novacode2 from "../assets/novacode2.png";
import novacode3 from "../assets/novacode3.png";

import { Copyright } from "lucide-react";

const Novabeak = () => {
  return (
    <div>
      <div className="min-h-screen text-white font-['Montserrat'] pb-15">
        {/* Hero Section */}
        <section className="flex flex-col items-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4 text-center">
            Novabeak
          </h1>
          <p className="text-lg md:text-xl  mb-6 text-center max-w-2xl">
            A huge platform where people can invest in digital assets like
            cryptocurrency and stocks
          </p>
          <div className="mb-6">
            <img
              src={portnova}
              alt="Novabeak homepage mockup"
              className="w-80 md:w-[420px] rounded-xl shadow-lg border"
            />
          </div>
          <div className="">
            <a
              href="https://novabeak.netlify.app"
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
            Nova Beak is a modern, user-friendly crypto investment web app that
            helps users explore and participate in digital asset opportunities
            with ease. The platform focuses on accessibility, transparency, and
            simplicity in crypto investing, featuring an intuitive interface,
            staff verification system, and seamless user experience.
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
                user-friendly interfaces using Tailwind CSS and Figma
                prototypes.
              </li>
              <li>
                💻<strong>Frontend Development</strong> : Built the platform
                interface using React and integrated APIs.
              </li>
              <li>
                🧠 <strong>Feature Planning</strong>: Scoped the MVP and
                prioritized features for initial release and future growth.
              </li>
              <li>
                🔄<strong>Collaboration</strong> : Worked closely with a full
                stack engineer to align frontend with backend infrastructure.
              </li>
              <li>
                ✅ <strong>Testing & Feedback</strong>: Conducted user feedback
                sessions to iterate on usability and flow.
              </li>
            </ul>
          </div>
          {/* Core Features */}
          <div>
            <h2 className="text-2xl font-bold  mb-4">Core Features</h2>
            <ul className="space-y-3">
              <li>
                Crypto Investment Dashboard – Simple, guided interface for
                crypto investors
              </li>
              <li>
                Secure Staff Card System – Displays verified staff identities
                for trust and transparency
              </li>
              <li>
                Hero Section with CTA – Clear entry point for users to explore
                investment options
              </li>
              <li>
                Responsive UI – Fully mobile-friendly layout for all screen
                sizes
              </li>
              <li>
                Smooth Routing – Seamless page navigation using React Router
              </li>
              <li>
                Netlify Hosting with SPA Support – Fast loading and 404-safe
                direct routes
              </li>
            </ul>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-3xl mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold  mb-4">Tech Stack</h2>
          <ul className="list-disc pl-6 space-y-2 ">
            <li>Frontend: React.js, Tailwind CSS, React Router</li>
            <li>Backend: Node.js, Express.js (by full stack engineer)</li>
            <li>Database: MongoDB / Firebase Firestore</li>
            <li>Authentication: Firebase Auth / JWT</li>

            <li>Deployment: Vercel (Frontend), Render/Railway (Backend)</li>
            <li>
              Other Tools: GitHub for version control, Figma for design, Postman
              for API testing
            </li>
          </ul>
        </section>

        {/* Screenshots / Demo Gallery */}
        <section className="max-w-8xl mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold  mb-4">Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src={novacode1}
              alt="Dashboard"
              className="rounded-lg shadow"
            />
            <img
              src={novacode2}
              alt="Login Page"
              className="rounded-lg shadow"
            />
            <img
              src={novacode3}
              alt="Booking Page"
              className="rounded-lg shadow"
            />
          </div>
        </section>

        {/* Challenges & Learnings */}
        <section className="max-w-3xl mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold  mb-4">Challenges & Learnings</h2>
          <ul className="list-disc pl-6 space-y-2 ">
            <li>
              🔄 Coordinating Full Stack Development Working with a backend
              developer required constant communication to align data models and
              API endpoints. I learned how crucial clear documentation and
              shared tools (like Postman) are for syncing frontend and backend.
            </li>

            <li>
              🎨 Designing for Scale Creating UI components that are scalable
              and modular made it easier to iterate quickly, especially during
              feedback sessions.
            </li>
            <li>
              🧪 MVP Prioritization Balancing ambition with delivery meant
              carefully choosing features that demonstrate value without
              overcomplicating the MVP.
            </li>
            <li>
              📶 Performance Optimizing image loading and third-party scripts
              helped keep load times low even with interactive maps and location
              services.
            </li>
          </ul>
        </section>

        {/* Links & CTA */}
        <section className="max-w-3xl mx-auto py-8 px-4 flex flex-col items-center gap-4">
          <a
            href="https://novabeak.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
          >
            🔗 Live Demo
          </a>
          <a
            href="https://github.com/bluemagikSGO/Novabeak.git"
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

export default Novabeak;
