import React from "react";
import { Copyright } from "lucide-react";

// Hero / gallery assets (swap in your real screenshots anytime)
import itemHero from "../assets/iteminder.png";
import dash1 from "../assets/dashbordImg.png";
import dash2 from "../assets/loginImg.png";
import dash3 from "../assets/bookingImg.png";
import code1 from "../assets/code1.png";
import code2 from "../assets/code2.png";
import code3 from "../assets/code3.png";

const Iteminder = () => {
  return (
    <div
      id="iteminder"
      className="min-h-screen text-white font-['Montserrat'] pb-16"
    >
      {/* Hero */}
      <section className="flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Iteminder — Pack smarter. Remember everything.
        </h1>
        <p className="text-lg md:text-xl mb-6 text-center max-w-2xl">
          A lightweight PWA that helps travelers organize trip items, set smart
          reminders, and share accountability with trusted contacts.
        </p>

        <div className="mb-6">
          <img
            src={itemHero}
            alt="Iteminder app preview"
            className="w-80 md:w-[420px] rounded-xl shadow-lg border border-white/10"
          />
        </div>

        <div>
          <a
            href="https://iteminder.com" // ← replace with your live URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
          >
            View Live
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-2">Project Overview</h2>
        <p>
          Iteminder streamlines trip prep with checklists, item photos, and
          timely reminders (push & email). It’s installable as a PWA and works
          great offline. Users can also invite a “trusted reminder” — a friend
          who helps keep them on track.
        </p>
      </section>

      {/* Role & Features */}
      <section className="max-w-4xl mx-auto py-8 px-4 grid md:grid-cols-2 gap-8 md:pl-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            My Role & Responsibilities
          </h2>
          <ul className="space-y-3">
            <li>🔧 Frontend development (React + Vite + Tailwind)</li>
            <li>🧠 UX/UI design for fast, mobile-first flows</li>
            <li>🗄️ Supabase schema, Edge Functions & querying</li>
            <li>🔔 Web Push (VAPID) + service worker integration</li>
            <li>📈 Admin metrics & analytics (Recharts)</li>
            <li>🧪 Testing, performance, and PWA hardening</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Core Features</h2>
          <ul className="space-y-3">
            <li>📋 Smart packing lists with per-item photos</li>
            <li>🕒 Trip timeline with scheduled reminders (timezone aware)</li>
            <li>🔔 Push notifications + optional email fallback</li>
            <li>👥 “Trusted reminder” sharing (capped at 3 per trip)</li>
            <li>📶 Offline-first PWA, install prompts, background uploads</li>
            <li>
              📊 User analytics (top destinations, items) & admin dashboard
            </li>
          </ul>
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>React, Vite, Tailwind CSS, React Router</li>
          <li>Mailjet, Easy cron</li>
          <li>Supabase (Auth, Postgres, Storage, Edge Functions)</li>
          <li>Service Workers & Web Push (VAPID)</li>
        </ul>
      </section>

      {/* Challenges & Learnings */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Challenges & Learnings</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Accurate PWA install analytics (dedupe & “installed session” logs)
          </li>
          <li>Per-trip share caps vs global limits for “trusted reminders”</li>
          <li>Timezone-safe reminder scheduling (DST-safe conversions)</li>
          <li>Background image uploads with compression and retries</li>
          <li>Making push opt-in seamless while respecting user privacy</li>
        </ul>
      </section>

      {/* What’s Next */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">What’s Next?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Real-time collaborative lists for group trips</li>
          <li>Tour company integrations & promo trip templates</li>
          <li>
            Premium tiers (cloud backup, multi-device sync, pro reminders)
          </li>
          <li>Deeper analytics: packing trends, auto-suggested items</li>
        </ul>
      </section>

      {/* Links */}
      <section className="max-w-3xl mx-auto py-8 px-4 flex flex-col items-center gap-4">
        <a
          href="https://iteminder.com" // ← replace with your live URL
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
        >
          🔗 Live Demo
        </a>
        <a
          href="https://github.com/bluemagiksgo" // ← optional repo link
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          📦 GitHub Repo
        </a>
      </section>

      {/* Footer */}
      <hr className="mt-10 w-11/12 mx-auto border-white/20" />
      <div className="text-center">stevengabriel2015@gmail.com</div>
      <footer className="flex gap-2 items-center justify-center mt-6">
        <Copyright />
        {new Date().getFullYear()} All Rights Reserved Gabriel Steven O
      </footer>
    </div>
  );
};

export default Iteminder;
