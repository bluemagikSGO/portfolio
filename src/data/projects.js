import mbDesktop960 from "../assets/mybabe/desktop-1-960.webp";
import mbDesktop1440 from "../assets/mybabe/desktop-1-1440.webp";
import mbMobile1 from "../assets/mybabe/mobile-1-390.webp";
import mbMobile1x2 from "../assets/mybabe/mobile-1-780.webp";
import mbMobile2 from "../assets/mybabe/mobile-2-390.webp";
import mbMobile2x2 from "../assets/mybabe/mobile-2-780.webp";
import mbMobile3 from "../assets/mybabe/mobile-3-390.webp";
import mbMobile3x2 from "../assets/mybabe/mobile-3-780.webp";
import mbMobile6 from "../assets/mybabe/mobile-6-390.webp";
import mbMobile6x2 from "../assets/mybabe/mobile-6-780.webp";
import mbAppstore from "../assets/mybabe-appstore.webp";
import mbChat from "../assets/mybabe-chat.webp";

import tbaLanding from "../assets/tba-landing.webp";
import tbaFeatures from "../assets/tba-features.webp";
import tbaPreview from "../assets/tba-preview.webp";
import tbaPricing from "../assets/tba-pricing.webp";

import metherappyImg from "../assets/metherappy.webp";
import mtLogin from "../assets/loginImg.webp";
import mtDashboard from "../assets/dashbordImg.webp";
import mtBooking from "../assets/bookingImg.webp";
import mtCode1 from "../assets/code1.webp";
import mtCode2 from "../assets/code2.webp";
import mtCode3 from "../assets/code3.webp";

import sportslocImg from "../assets/sportsloc.webp";
import slSearch from "../assets/sportcode1.webp";
import slCodeHero from "../assets/sportcode2.webp";
import slCodeLogin from "../assets/sportcode3.webp";

import siteHome from "../assets/site-home.webp";
import siteWork from "../assets/site-work.webp";
import siteCase from "../assets/site-case.webp";

/**
 * Single source of truth for every project.
 *
 * The home page index (Work.jsx) and the case study pages (CaseStudy.jsx) both
 * read from here, so a new project only needs an entry in this array. Order
 * here is the order on the site.
 *
 * Images are { src, alt, width, height } and optionally `srcSet`. Section
 * types are rendered in CaseStudyLayout.jsx: `list`, `gallery`, `stack`.
 */
export const projects = [
  {
    slug: "mybabe",
    title: "MyBabe AI",
    category: "AI companion app",
    period: "2026 — Present",
    role: "Founder. Designed, built and launched solo",
    platforms: "iOS, Android, web, Telegram",
    status: "Live on the App Store and Google Play",
    summary:
      "An AI companion that texts first, remembers what matters and picks up when you call. Built solo and live on iOS and Android.",
    tagline:
      "An AI companion built as a relationship product, not a chatbot. I designed it, built it on my own and launched it on iOS and Android.",
    stack: ["Expo", "Supabase", "LiveKit", "Gemini", "Claude"],
    cover: {
      src: mbDesktop960,
      srcSet: `${mbDesktop960} 960w, ${mbDesktop1440} 1440w`,
      width: 1440,
      height: 840,
      alt: "The mybabe.app home page: “Someone who remembers it all”, beside a chat between a user and their companion",
    },
    coverPhone: {
      src: mbMobile1,
      srcSet: `${mbMobile1} 390w, ${mbMobile1x2} 780w`,
      width: 390,
      height: 780,
      alt: "mybabe.app on a phone: “Someone who misses you too”",
    },
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6762082613" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=app.mybabe.mobile",
      },
      { label: "mybabe.app", href: "https://mybabe.app/" },
    ],
    overview:
      "MyBabe AI lets people create one companion, with a face, voice, personality and backstory of their choosing, and build a relationship with them over time. The companion remembers what matters, reaches out first with good-morning texts and check-ins, sends voice notes and photos, and picks up when you call. It is free to start with 10 messages a day; a subscription unlocks unlimited messaging. I took it from first user to first revenue with no outside funding or team, and it is now the first product of Iteminder, the software studio I run.",
    sections: [
      {
        type: "list",
        title: "What I built",
        items: [
          {
            label: "Backend",
            text: "Supabase (Postgres and edge functions) for auth sync, the database schema and a streaming chat engine.",
          },
          {
            label: "Chat",
            text: "Gemini 2.5 Flash for real-time conversation, with context caching on long conversations.",
          },
          {
            label: "Voice calls",
            text: "Gemini Live over a self-hosted LiveKit server, driven by a Python agent.",
          },
          {
            label: "Memory",
            text: "Claude extracts long-term memories asynchronously, outside the chat's response path.",
          },
          { label: "Voice notes", text: "OpenAI for voice generation." },
          {
            label: "Subscriptions",
            text: "Diagnosed a long-running Apple subscription review problem and rebuilt the product IDs and subscription groups, unblocking purchases through RevenueCat end to end.",
          },
          {
            label: "Growth",
            text: "App Store Optimization (keyword research and metadata rewrites) and localisation, with automatic language detection in chat.",
          },
        ],
      },
      {
        type: "gallery",
        title: "mybabe.app",
        variant: "phone",
        images: [
          {
            src: mbMobile1,
            srcSet: `${mbMobile1} 390w, ${mbMobile1x2} 780w`,
            width: 390,
            height: 780,
            alt: "mybabe.app on mobile: “Someone who misses you too”, with App Store and Google Play buttons",
            caption: "The landing page on mobile",
          },
          {
            src: mbMobile2,
            srcSet: `${mbMobile2} 390w, ${mbMobile2x2} 780w`,
            width: 390,
            height: 780,
            alt: "A lock screen showing good-morning notifications from a companion",
            caption: "Texts first",
          },
          {
            src: mbMobile3,
            srcSet: `${mbMobile3} 390w, ${mbMobile3x2} 780w`,
            width: 390,
            height: 780,
            alt: "The voice and video calls section: “Call. They pick up.”",
            caption: "Picks up when you call",
          },
          {
            src: mbMobile6,
            srcSet: `${mbMobile6} 390w, ${mbMobile6x2} 780w`,
            width: 390,
            height: 780,
            alt: "Relationship cycles, each unlocking new voices, personality modes and other rewards at an XP threshold",
            caption: "Relationship cycles",
          },
        ],
      },
      {
        type: "list",
        title: "Inside the product",
        items: [
          "One companion across chat, voice notes, photos and real-time calls, backed by a single long-term memory",
          "Texts first: good-morning messages, check-ins and reminders on the companion's own schedule",
          "Relationship cycles, unlocked with XP earned in conversation",
          "Conversations in the user's own language, detected automatically",
          "Telegram integration for chatting outside the app",
        ],
      },
      {
        type: "gallery",
        title: "In the wild",
        variant: "phone",
        images: [
          {
            src: mbAppstore,
            width: 900,
            height: 1267,
            alt: "The MyBabe AI: AI Friend listing on the iOS App Store, rated 18+ in Entertainment",
            caption: "The App Store listing",
          },
          {
            src: mbChat,
            width: 800,
            height: 1614,
            alt: "A MyBabe AI chat on iPhone, with the companion sharing a photo",
            caption: "Chat, with memory and photo sharing",
          },
        ],
      },
      {
        type: "list",
        title: "Privacy and safety",
        items: [
          "Users can export their data at any time",
          "Individual conversations, stored memories or the whole account can be deleted",
          "Built for adults (18+) as a companion for support and connection, not a substitute for professional mental health care",
        ],
      },
      {
        type: "stack",
        items: [
          "Expo (React Native)",
          "Supabase",
          "Postgres",
          "Edge Functions",
          "LiveKit",
          "Python",
          "Gemini 2.5 Flash",
          "Gemini Live",
          "Claude",
          "OpenAI",
          "RevenueCat",
          "PostHog",
          "Sentry",
          "AppsFlyer",
          "Railway",
          "Vercel",
        ],
      },
    ],
  },
  {
    slug: "textback-advisor",
    title: "Textback Advisor",
    category: "AI communication coach",
    role: "Founder and engineer",
    platforms: "iOS, web",
    status: "In development",
    summary:
      "Paste any message, pick a tone, and get an honest read of it plus replies you can send. An Expo app on a Next.js and Neon backend.",
    tagline:
      "Know exactly what to text back. Share or paste any message, pick a tone, and get confident replies for dating, work and every conversation in between.",
    stack: ["Expo", "Next.js", "Neon"],
    cover: {
      src: tbaLanding,
      width: 1200,
      height: 750,
      alt: "The Textback Advisor landing page: “Know exactly what to text back”, beside the app on an iPhone",
    },
    links: [{ label: "textbackadvisor.com", href: "https://textbackadvisor.com" }],
    overview:
      "Textback Advisor turns the message you don't know how to answer into one you do. Paste or share any text (a dating opener, a tense work thread, an apology, a boundary you need to hold), pick a tone, goal and boldness, and it returns an advisor's read of what the message is actually asking for alongside several natural replies you can send as they are. It is deliberately positioned as a general communication coach rather than a dating app: work, family and conflict conversations are most of the need. The iOS app is built in Expo, backed by a Next.js API on Neon Postgres, with every AI call running server-side.",
    sections: [
      {
        type: "list",
        title: "What I built",
        items: [
          {
            label: "Product",
            text: "Set the vision, positioning and pricing, and wrote the plan the build follows.",
          },
          {
            label: "Mobile",
            text: "The Expo iOS app: design system, a 14-screen onboarding funnel and the threaded reply flow.",
          },
          {
            label: "Backend",
            text: "The Next.js API, Drizzle schema and server-side AI pipeline on Neon Postgres.",
          },
          {
            label: "Security",
            text: "A two-layer data isolation model and the anonymous-to-real account linking flow.",
          },
          {
            label: "Brand and web",
            text: "The landing page, brand palette and app iconography.",
          },
        ],
      },
      {
        type: "list",
        title: "Core features",
        items: [
          "An advisor's read of the situation, plus three to five labelled reply options",
          "Tone, goal and boldness controls that shape every suggestion",
          "Threaded conversations: the advisor carries context from turn to turn",
          "Screenshot a chat and get the read without retyping anything",
          "Saved replies, and history grouped by whose turn it is rather than by date",
        ],
      },
      {
        type: "gallery",
        title: "Landing page",
        images: [
          {
            src: tbaFeatures,
            width: 1200,
            height: 584,
            alt: "Features grid covering reply generation, meaning analysis and tone selection",
          },
          {
            src: tbaPreview,
            width: 1200,
            height: 584,
            alt: "Product preview showing the advisor's read and reply options",
          },
          {
            src: tbaPricing,
            width: 1200,
            height: 650,
            alt: "Pricing section with weekly and annual plans",
          },
        ],
      },
      {
        type: "list",
        title: "Problems worth writing down",
        items: [
          "Neon's default database role carries BYPASSRLS, which silently defeats every row-level security policy. It only surfaced through an isolation test that seeds two users and asserts five ways they cannot reach each other's data.",
          "Enforcing a free tier without a sign-up meant creating a real anonymous user on first launch, then merging that account on sign-in. Signing in must never look like data loss.",
          "The auth library's anonymous linking hook never fires on native, because the callback arrives from the system browser with no session cookie. I replaced it with an endpoint that requires two independent proofs of identity.",
          "The usage check runs before inference, so a request over the limit costs nothing, and the conversation, replies and usage event are written in one transaction.",
          "Keeping the positioning general rather than dating-first, enforced through the ordering and defaults of every list in the UI, not just the marketing copy.",
        ],
      },
      {
        type: "list",
        title: "What's next",
        items: [
          "RevenueCat subscriptions wired through to StoreKit",
          "An iOS share extension, to send a screenshot straight from iMessage or Instagram",
          "TestFlight beta, then App Store submission",
          "Android from the same Expo codebase",
        ],
      },
      {
        type: "stack",
        items: [
          "Expo (React Native)",
          "expo-router",
          "TypeScript",
          "Next.js",
          "Neon Postgres",
          "Drizzle ORM",
          "Better Auth",
          "DeepSeek",
          "RevenueCat",
          "Vercel",
          "EAS Build",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    slug: "metherappy",
    title: "meTherappy",
    category: "Tele-health platform",
    role: "Frontend architecture, UI design, API integration",
    platforms: "Web",
    summary:
      "A web platform for finding and booking sessions with licensed therapists and counsellors.",
    tagline:
      "An online platform connecting people with licensed therapists and counsellors, designed to lower the barrier to starting therapy.",
    stack: ["React", "Tailwind CSS", "REST APIs"],
    cover: {
      src: metherappyImg,
      width: 1200,
      height: 578,
      alt: "The meTherappy home page, with an illustration of a therapist on a phone screen reaching out to a stressed person",
    },
    links: [
      { label: "metherappy.com", href: "https://metherappy.com" },
      { label: "Source", href: "https://github.com/bluemagikSGO/meTherappy" },
    ],
    overview:
      "meTherappy is a mental health platform designed to lower the barrier to entry for therapy. I built it so people can book sessions with qualified therapists, track their progress and reach curated wellness resources in a calm, non-judgemental space.",
    sections: [
      {
        type: "list",
        title: "My role",
        items: [
          "Frontend architecture and development",
          "UI design, from Figma to code",
          "Backend API integration",
          "Responsive testing across mobile viewports",
        ],
      },
      {
        type: "list",
        title: "Core features",
        items: [
          "Therapist discovery and booking",
          "Secure user authentication",
          "Real-time chat messaging",
          "Filtering therapist profiles",
        ],
      },
      {
        type: "gallery",
        title: "Interface",
        images: [
          { src: mtLogin, width: 1200, height: 582, alt: "meTherappy login screen" },
          { src: mtDashboard, width: 1200, height: 581, alt: "meTherappy user dashboard" },
          { src: mtBooking, width: 1200, height: 575, alt: "meTherappy therapist booking flow" },
        ],
      },
      {
        type: "gallery",
        title: "Under the hood",
        variant: "code",
        images: [
          {
            src: mtCode1,
            width: 1400,
            height: 1303,
            alt: "HTML for the dashboard welcome banner and mood picker",
          },
          {
            src: mtCode2,
            width: 1400,
            height: 742,
            alt: "HTML for the section inviting therapists to join the platform",
          },
          {
            src: mtCode3,
            width: 1400,
            height: 1580,
            alt: "Client-side validation for the sign-up form",
          },
        ],
      },
      {
        type: "list",
        title: "Challenges",
        items: [
          "Handling authentication flows securely",
          "Designing a UI that feels calm and welcoming, down to the colour choices",
          "Keeping the layout responsive across a wide range of mobile viewports",
          "Managing state for the therapist booking system",
        ],
      },
      {
        type: "list",
        title: "What's next",
        items: [
          "Live video rooms for sessions",
          "Wellness recommendations based on a user's history",
          "Stripe for payments",
          "A community blog and resource hub",
        ],
      },
      {
        type: "stack",
        items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "REST APIs"],
      },
    ],
  },
  {
    slug: "sportloc",
    title: "SportsLoc",
    category: "Sports facility discovery",
    role: "Product architecture, UI design, frontend",
    platforms: "Web",
    summary:
      "A location-based platform for finding sports facilities, players and local communities nearby.",
    tagline:
      "Connect. Play. Compete. A location-based platform for finding sports facilities, players and local communities.",
    stack: ["React", "Node.js", "MongoDB"],
    cover: {
      src: sportslocImg,
      width: 1200,
      height: 579,
      alt: "The SportsLoc home page: “Find Sport Centers Near You”, with a location search and sport categories",
    },
    links: [
      { label: "sportsloc.netlify.app", href: "https://sportsloc.netlify.app" },
      { label: "Source", href: "https://github.com/bluemagikSGO/sportsloc" },
    ],
    overview:
      "SportsLoc tackles how fragmented recreational sport is. It helps people discover facilities nearby, connect with other players and build local communities, giving athletes and facility owners one place to organise games and find venues.",
    sections: [
      {
        type: "list",
        title: "My role",
        items: [
          { label: "Product architecture", text: "Defined user flows and core logic." },
          {
            label: "UI design",
            text: "Designed responsive interfaces in Figma and Tailwind CSS.",
          },
          { label: "Frontend", text: "Built the React interface and integrated the APIs." },
          {
            label: "Collaboration",
            text: "Worked with the backend engineers on data models and endpoints.",
          },
        ],
      },
      {
        type: "list",
        title: "Core features",
        items: [
          { label: "Geolocation", text: "Find facilities and players nearby." },
          { label: "Social", text: "Message players and join groups." },
          { label: "Accounts", text: "Secure profiles for players and facility owners." },
          { label: "Events", text: "Create and share sporting events." },
        ],
      },
      {
        type: "gallery",
        title: "Interface and code",
        images: [
          {
            src: slSearch,
            width: 1400,
            height: 680,
            alt: "SportsLoc location search, with a sport category picker",
          },
          {
            src: slCodeHero,
            width: 1400,
            height: 707,
            alt: "The React Hero component behind the location search",
          },
          {
            src: slCodeLogin,
            width: 1400,
            height: 973,
            alt: "The React LoginModal component",
          },
        ],
      },
      {
        type: "list",
        title: "Challenges",
        items: [
          "Accurate location data through the Google Maps API without slowing the page down",
          "Aligning data models and API endpoints with the backend team",
          "Loading third-party map scripts so the UI stays responsive",
        ],
      },
      {
        type: "list",
        title: "What's next",
        items: [
          "A portal for owners to manage listings and bookings",
          "Push notifications for match invites",
          "A React Native app",
        ],
      },
      {
        type: "stack",
        items: [
          "React",
          "Tailwind CSS",
          "React Router",
          "Node.js",
          "Express",
          "MongoDB",
          "Google Maps API",
          "Leaflet",
          "Firebase Auth",
        ],
      },
    ],
  },
  {
    slug: "myport",
    title: "gabsteven.com",
    category: "Personal site",
    role: "Design and engineering",
    platforms: "Web",
    summary:
      "The site you're on. An editorial React build where every case study is generated from a single data file.",
    tagline:
      "The site you're reading: a small React app, designed and built by hand, where every project page comes from one data file.",
    stack: ["React", "Vite", "Tailwind CSS"],
    cover: {
      src: siteHome,
      width: 1200,
      height: 750,
      alt: "The gabsteven.com home page",
    },
    links: [
      { label: "gabsteven.com", href: "https://gabsteven.com" },
      { label: "Source", href: "https://github.com/bluemagikSGO/my-portfolio" },
    ],
    overview:
      "A portfolio is a product with one user journey: someone arrives, decides quickly whether the work is serious, and either reads on or leaves. This site is built for that. It is typographic rather than decorative, loads only what the current page needs, and keeps every project in a single file so adding new work is a few lines of data.",
    sections: [
      {
        type: "list",
        title: "How it's built",
        items: [
          {
            label: "Framework",
            text: "React 19, Vite and React Router 7, deployed on Netlify with an SPA fallback.",
          },
          {
            label: "Content",
            text: "Each project card and case study page is generated from one data file. A new project is one object.",
          },
          {
            label: "Performance",
            text: "Case studies are split out of the home page bundle, images are WebP with explicit dimensions, and fonts are self-hosted.",
          },
          {
            label: "Type",
            text: "Newsreader for headings, Schibsted Grotesk for text and JetBrains Mono for labels.",
          },
          {
            label: "Accessibility",
            text: "Semantic landmarks, a skip link, visible focus states, AA contrast throughout, and reduced-motion support.",
          },
          {
            label: "Contact",
            text: "The form sends through EmailJS, with a honeypot field to catch bots.",
          },
        ],
      },
      {
        type: "gallery",
        title: "Pages",
        images: [
          { src: siteHome, width: 1200, height: 750, alt: "The home page hero" },
          { src: siteWork, width: 1200, height: 750, alt: "The selected work index" },
          { src: siteCase, width: 1200, height: 750, alt: "A case study page" },
        ],
      },
      {
        type: "stack",
        items: [
          "React 19",
          "Vite",
          "React Router 7",
          "Tailwind CSS 4",
          "EmailJS",
          "Netlify",
        ],
      },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
