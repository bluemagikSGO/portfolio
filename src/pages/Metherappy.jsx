import React from "react";
import portimg from "../assets/metherappy.jpg";
// Example images (replace with your actual image paths)
// import heroMockup from "../assets/metherappy-hero.png";
import dashboardImg from "../assets/dashbordImg.png";
import loginImg from "../assets/loginImg.png";
import bookingImg from "../assets/bookingImg.png";
import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";
// import reactLogo from "../assets/react-logo.svg";
// import tailwindLogo from "../assets/tailwind-logo.svg";
// import firebaseLogo from "../assets/firebase-logo.svg";
// import vercelLogo from "../assets/vercel-logo.svg";

const Metherappy = () => {
  return (
    <div
      id="metherappy"
      className="min-h-screen text-white font-['Montserrat']"
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4 text-center">
          meTherappy – Your Mental Health Companion
        </h1>
        <p className="text-lg md:text-xl  mb-6 text-center max-w-2xl">
          An online platform connecting people with licensed therapists and
          counselors.
        </p>
        <div className="mb-6">
          <img
            src={portimg}
            alt="meTherappy homepage mockup"
            className="w-80 md:w-[420px] rounded-xl shadow-lg border"
          />
        </div>
        <div className="flex gap-4">
          <a
            href="https://metherappy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
          >
            View Live
          </a>
          <a
            href="/case-study-metherappy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border  text-black px-6 py-2 rounded-lg font-semibold shadow"
          >
            Case Study
          </a>
        </div>
      </section>

      {/* Project Overview */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold  mb-2">Project Overview</h2>
        <p className="">
          meTherappy is a mental health platform I designed and developed to
          help users book sessions with qualified therapists, track progress,
          and access resources for wellness.
        </p>
      </section>

      {/* My Role & Responsibilities */}
      <section className="max-w-4xl mx-auto py-8 px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold  mb-4">
            My Role & Responsibilities
          </h2>
          <ul className="space-y-3">
            <li>🔧 Frontend Development (React, Tailwind)</li>
            <li>🧠 UX/UI Design</li>
            <li>🗄️ Backend Collaboration</li>
            <li>🧪 Testing & Deployment</li>
          </ul>
        </div>
        {/* Core Features */}
        <div>
          <h2 className="text-2xl font-bold  mb-4">Core Features</h2>
          <ul className="space-y-3">
            <li>🗂️ Therapist discovery & booking</li>
            <li>🔒 User authentication</li>
            <li>💬 Chat or messaging</li>
            <li>👩‍⚕️ Therapist profiles & filtering</li>
            <li>📱 Responsive design</li>
            <li>📝 Secure form handling</li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold  mb-4">Tech Stack</h2>
        <ul className="list-disc pl-6 space-y-2 ">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVA SCRIPT</li>
        </ul>
      </section>

      {/* Screenshots / Demo Gallery */}
      <section className="max-w-5xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold  mb-4">Screenshots</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <img
            src={dashboardImg}
            alt="Dashboard"
            className="rounded-lg shadow"
          />
          <img src={loginImg} alt="Login Page" className="rounded-lg shadow" />
          <img
            src={bookingImg}
            alt="Booking Page"
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* Challenges & Learnings */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold  mb-4">Challenges & Learnings</h2>
        <ul className="list-disc pl-6 space-y-2 ">
          <li>User authentication complexity</li>
          <li>Designing a sensitive and welcoming UI</li>
          <li>Ensuring mobile responsiveness</li>
          <li>Managing therapist data and booking flow</li>
        </ul>
      </section>

      {/* What's Next / Future Plans */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold  mb-4">What’s Next?</h2>
        <ul className="list-disc pl-6 space-y-2 ">
          <li>Add group therapy rooms</li>
          <li>AI recommendations</li>
          <li>Payment integration</li>
          <li>Mental health blog</li>
        </ul>
      </section>

      {/* Links & CTA */}
      <section className="max-w-3xl mx-auto py-8 px-4 flex flex-col items-center gap-4">
        <a
          href="https://metherappy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
        >
          🔗 Live Demo
        </a>
        <a
          href="https://github.com/yourusername/metherappy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline "
        >
          📦 GitHub Repo
        </a>
        <a
          href="/case-study-metherappy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline "
        >
          📝 Case Study PDF
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
  );
};

export default Metherappy;
