import React from "react";
import portimg from "../assets/sportsloc.jpg";

import sportcode1 from "../assets/sportcode1.png";
import sportcode2 from "../assets/sportcode2.png";
import sportcode3 from "../assets/sportcode3.png";

import { Copyright } from "lucide-react";

const Sportsloc = () => {
  return (
    <div>
      <div className="min-h-screen text-white font-['Montserrat'] pb-15">
        {/* Hero Section */}
        <section className="flex flex-col items-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4 text-center">
            SportLoc
          </h1>
          <p className="text-lg md:text-xl  mb-6 text-center max-w-2xl">
            A sport center and facility location discovery platform that also
            allows users search for players, message players and create groups
            for sport purpose
          </p>
          <div className="mb-6">
            <img
              src={portimg}
              alt="sportsloc homepage mockup"
              className="w-80 md:w-[420px] rounded-xl shadow-lg border"
            />
          </div>
          <div className="">
            <a
              href="https://sportsloc.netlify.app"
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
            Sportsloc is a location-based web platform that helps users discover
            nearby sports facilities for various sports, connect with fellow
            players, and build sports communities through groups and events. It
            aims to simplify how athletes, enthusiasts, and casual players find
            places to play and people to play with. The platform is designed to
            empower both users and facility owners by creating a digital
            ecosystem where they can connect, interact, and grow local sporting
            communities.
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
                📍 Find Sports Facilities: Users can search for sports centers
                by location, sport type, or name.
              </li>
              <li>
                👥 Player Discovery: View other players nearby and ping them to
                play together.
              </li>
              <li>
                🛡️ Secure Login & Profiles: Authentication system for users and
                facility managers.
              </li>
              <li>
                📆 Create & Join Groups: Users can create sports groups for
                specific interests; others can request to join.
              </li>
              <li>
                📢 Event Announcements (Planned): Hosts can create and share
                public sporting events.
              </li>
              <li>
                🎯 Subscription-Ready Architecture: Backend prepared to support
                future free and premium subscription tiers.
              </li>
              <li>
                🧪 Mobile-Responsive Design: Ensures accessibility across all
                devices.
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
            <li>Maps & Geolocation: Google Maps API / Leaflet.js</li>
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
              src={sportcode1}
              alt="Dashboard"
              className="rounded-lg shadow"
            />
            <img
              src={sportcode2}
              alt="Login Page"
              className="rounded-lg shadow"
            />
            <img
              src={sportcode3}
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
              🌍 Geolocation Integration Displaying accurate nearby facilities
              using location data required a good understanding of Google Maps
              API and optimization to reduce load time.
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

        {/* What's Next / Future Plans */}
        <section className="max-w-3xl mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold  mb-4">What’s Next?</h2>
          <ul className="list-disc pl-6 space-y-2 ">
            <li>
              💼 Facility Owner Dashboard: A backend portal where sports centers
              can register, manage listings, and monitor traffic.
            </li>
            <li>
              🔔 Push Notifications: Alert users about match invites, group
              messages, or event reminders.
            </li>
            <li>
              💳 Subscription Plans: Roll out freemium models offering premium
              visibility, advanced filters, or group analytics.
            </li>
            <li>
              📱 Mobile App: React Native version of Sportsloc for on-the-go
              access and better native performance.
            </li>
            <li>
              🧠 AI Matchmaking (Future): Suggest players, groups, or venues
              using user behavior and location preferences.
            </li>
          </ul>
        </section>

        {/* Links & CTA */}
        <section className="max-w-3xl mx-auto py-8 px-4 flex flex-col items-center gap-4">
          <a
            href="https://sportsloc.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
          >
            🔗 Live Demo
          </a>
          <a
            href="https://github.com/bluemagikSGO/sportsloc.git"
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

export default Sportsloc;
