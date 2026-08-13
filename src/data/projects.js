import tbaLogo from "../assets/tba-logo.webp";
import tbaLanding from "../assets/tba-landing.webp";
import tbaFeatures from "../assets/tba-features.webp";
import tbaPreview from "../assets/tba-preview.webp";
import tbaPricing from "../assets/tba-pricing.webp";

import mybabeLogo from "../assets/mybabe-logo.webp";
import mybabeAppstore from "../assets/mybabe-appstore.webp";
import mybabeChat from "../assets/mybabe-chat.webp";

import metherappyImg from "../assets/metherappy.webp";
import sportslocImg from "../assets/sportsloc.webp";
import myportImg from "../assets/myport.webp";
import iteminderImg from "../assets/iteminder.webp";

import dashboardImg from "../assets/dashbordImg.webp";
import loginImg from "../assets/loginImg.webp";
import bookingImg from "../assets/bookingImg.webp";
import code1 from "../assets/code1.webp";
import code2 from "../assets/code2.webp";
import code3 from "../assets/code3.webp";
import sportcode1 from "../assets/sportcode1.webp";
import sportcode2 from "../assets/sportcode2.webp";
import sportcode3 from "../assets/sportcode3.webp";
import portapp from "../assets/portapp.webp";
import portapp2 from "../assets/portapp2.webp";
import portapp3 from "../assets/portapp3.webp";

/**
 * Single source of truth for every project.
 *
 * The home page grid (Portfolio.jsx) and the case study pages (CaseStudy.jsx)
 * both read from here, so a new project only needs an entry in this array.
 *
 * Accent classes are written out in full because Tailwind scans source files
 * for complete class strings — never build them by concatenation.
 */
export const projects = [
  {
    slug: "textback-advisor",
    title: "Textback Advisor",
    category: "AI Communication Coach",
    status: "In Development",
    tagline:
      "Know exactly what to text back. Share or paste any message, pick a tone, and get confident replies for dating, work, and every conversation in between.",
    image: null, // app is pre-launch — the hero uses the logo tile
    logo: tbaLogo,
    cardImage: tbaLanding,
    cardTech: ["Expo", "Next.js", "Neon"],
    accent: {
      badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
      glow: "from-teal-400 to-cyan-600",
      bar: "border-teal-400",
      icon: "text-teal-400",
      arrow: "text-cyan-400",
    },
    links: [
      {
        label: "Visit Site",
        href: "https://textbackadvisor.com",
        icon: "ExternalLink",
        style: "primary",
      },
    ],
    overview:
      "Textback Advisor turns the message you don't know how to answer into one you do. Paste or share any text — a dating opener, a tense work thread, an apology, a boundary you need to hold — pick a tone, goal and boldness, and it returns an advisor read of what the message is actually asking for alongside several natural replies you can send as-is. It is deliberately positioned as a general communication coach rather than a dating app: work, family and conflict conversations are the bulk of the need. The iOS app is built in Expo, backed by a Next.js API on Neon Postgres, with every AI call running server-side.",
    sections: [
      {
        type: "twoCol",
        left: {
          title: "My Role",
          iconClass: "text-teal-400",
          items: [
            {
              icon: "Sparkles",
              label: "Founder:",
              text: "Set the product vision, positioning and pricing, and wrote the master plan the build follows.",
            },
            {
              icon: "Smartphone",
              label: "Mobile:",
              text: "Built the Expo iOS app — design system, 14-screen onboarding funnel, and the threaded reply flow.",
            },
            {
              icon: "Code",
              label: "Backend:",
              text: "Built the Next.js API, Drizzle schema, and the server-side AI pipeline on Neon Postgres.",
            },
            {
              icon: "Lock",
              label: "Security:",
              text: "Designed the two-layer data isolation model and the anonymous-to-real account linking flow.",
            },
            {
              icon: "Paintbrush",
              label: "Brand & Web:",
              text: "Designed and shipped the landing page, brand palette, and app iconography.",
            },
          ],
        },
        right: {
          title: "Core Features",
          items: [
            {
              icon: "Brain",
              text: "An advisor read of the situation, plus three to five labelled reply options",
            },
            {
              icon: "Layout",
              text: "Tone, goal and boldness controls that shape every suggestion",
            },
            {
              icon: "MessageSquare",
              text: "Threaded conversations — the advisor carries context from turn to turn",
            },
            {
              icon: "Users",
              text: "Screenshot a chat and get the read without retyping anything",
            },
            {
              icon: "Heart",
              text: "Saved replies and history grouped by whose turn it is, not by date",
            },
          ],
        },
      },
      {
        type: "tech",
        items: [
          "Expo (React Native)",
          "expo-router",
          "TypeScript",
          "Next.js",
          "Neon Postgres",
          "Drizzle ORM",
          "better-auth",
          "DeepSeek",
          "RevenueCat",
          "Vercel",
          "EAS Build",
          "Tailwind CSS",
        ],
      },
      {
        type: "gallery",
        title: "Landing Page",
        images: [
          {
            src: tbaFeatures,
            alt: "Textback Advisor features grid covering reply generation, meaning analysis and tone selection",
          },
          {
            src: tbaPreview,
            alt: "Textback Advisor product preview showing the advisor read and reply options",
          },
          {
            src: tbaPricing,
            alt: "Textback Advisor pricing section showing weekly and annual plans",
          },
        ],
      },
      {
        type: "compare",
        left: {
          title: "Challenges & Learnings",
          titleClass: "text-red-400",
          markerClass: "text-red-400",
          items: [
            "Neon's default database role carries BYPASSRLS, which silently defeats every row-level security policy. It only surfaced by writing an isolation test that seeds two users and asserts five ways they cannot reach each other's data.",
            "Enforcing a free tier without a sign-up meant creating a real anonymous user on first launch, then merging that account on sign-in — signing in must never look like data loss.",
            "The auth library's anonymous linking hook never fires on native, because the callback arrives from the system browser with no session cookie. Replaced with an endpoint that requires two independent proofs of identity.",
            "Running the usage check before inference, so a request over the limit costs nothing, and writing the conversation, replies and usage event in one transaction.",
            "Keeping the positioning general rather than dating-first — enforced through the ordering and defaults of every list in the UI, not just the marketing copy.",
          ],
        },
        right: {
          title: "What's Next?",
          titleClass: "text-green-400",
          markerClass: "text-green-400",
          items: [
            "RevenueCat subscriptions wired through to StoreKit.",
            "An iOS share extension — send a screenshot straight from iMessage or Instagram into the app.",
            "TestFlight beta, then App Store submission.",
            "Android from the same Expo codebase.",
          ],
        },
      },
    ],
  },
  {
    slug: "mybabe",
    title: "MyBabe AI",
    category: "AI Companion App",
    tagline:
      "An emotionally intelligent AI companion. Design a partner who texts first, remembers everything, and picks up every time you call.",
    image: null, // no wide hero shot -- the logo tile below is used instead
    logo: mybabeLogo,
    cardTech: ["Expo", "Supabase", "LiveKit"],
    accent: {
      badge: "border-rose-500/30 bg-rose-500/10 text-rose-400",
      glow: "from-rose-500 to-purple-600",
      bar: "border-rose-500",
      icon: "text-rose-500",
      arrow: "text-rose-400",
    },
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/app/id6762082613",
        icon: "Download",
        style: "dark",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=app.mybabe.mobile",
        icon: "Download",
        style: "dark",
      },
      {
        label: "Web App",
        href: "https://mybabe.app/",
        icon: "ExternalLink",
        style: "primary",
      },
    ],
    overview:
      "MyBabe AI lets anyone design their own AI boyfriend or girlfriend — choosing personality and communication style — then build a relationship with them over time. The companion reads your mood and matches your energy, remembers past conversations through long-term memory, and reaches out on its own with check-ins and good-morning texts. Chatting, sending voice notes, and sharing photos earn XP that levels the bond up from Strangers all the way to Soulmate. It ships on iOS, Android, and the web, with a free tier of 10 messages a day and unlimited messaging on premium.",
    sections: [
      {
        type: "twoCol",
        left: {
          title: "My Role",
          items: [
            {
              icon: "Sparkles",
              label: "Founder:",
              text: "Owned the product end to end, from concept through App Store and Play Store release.",
            },
            {
              icon: "Layout",
              label: "Project Architect:",
              text: "Designed the system across the Expo mobile app, web app, and Supabase backend.",
            },
            {
              icon: "Brain",
              label: "AI Orchestration:",
              text: "Selected and integrated ChatGPT, Gemini, and Claude behind the companion's personality and memory.",
            },
            {
              icon: "Mic",
              label: "Realtime Voice:",
              text: "Built the live voice-call pipeline on LiveKit.",
            },
            {
              icon: "UserCheck",
              label: "Growth & Monetization:",
              text: "Wired up subscriptions, attribution, analytics, and error monitoring.",
            },
          ],
        },
        right: {
          title: "Core Features",
          items: [
            {
              icon: "Sparkles",
              text: "Fully customizable companion — personality, tone, and communication style",
            },
            {
              icon: "Brain",
              text: "Long-term memory that carries context across conversations",
            },
            {
              icon: "Bell",
              text: "Proactive check-ins, good-morning texts, and mood tracking",
            },
            {
              icon: "Mic",
              text: "Real-time voice calls, voice notes, and photo sharing",
            },
            {
              icon: "MessageSquare",
              text: "Telegram integration for chatting outside the app",
            },
          ],
        },
      },
      {
        type: "tech",
        items: [
          "Expo (React Native)",
          "Supabase",
          "LiveKit",
          "Railway",
          "Vercel",
          "RevenueCat",
          "PostHog",
          "Sentry",
          "AppsFlyer",
          "OpenAI (ChatGPT)",
          "Google Gemini",
          "Anthropic Claude",
        ],
      },
      {
        type: "gallery",
        title: "In the Wild",
        variant: "phone",
        images: [
          {
            src: mybabeAppstore,
            alt: "MyBabe AI listing on the iOS App Store, rated 18+ in Entertainment",
            caption: "Live on the App Store",
          },
          {
            src: mybabeChat,
            alt: "MyBabe AI chat screen showing a companion conversation with photo sharing",
            caption: "Companion chat with memory and photo sharing",
          },
        ],
      },
      {
        type: "twoCol",
        left: {
          title: "Platform & Access",
          iconClass: "text-rose-400",
          items: [
            {
              icon: "Smartphone",
              text: "Native iOS and Android apps plus a full web experience",
            },
            {
              icon: "Heart",
              text: "XP-based bond system — progress from Strangers to Soulmate",
            },
            {
              icon: "UserCheck",
              text: "Free tier of 10 messages/day; premium unlocks unlimited messaging, voice, and memory",
            },
          ],
        },
        right: {
          title: "Privacy & Safety",
          items: [
            {
              icon: "Lock",
              text: "Export your data at any time — it stays yours",
            },
            {
              icon: "Shield",
              text: "Delete individual conversations, stored memories, or your entire account",
            },
            {
              icon: "MessageSquare",
              text: "Built for adults (18+) as a companion for support and connection — not a substitute for professional mental health care",
            },
          ],
        },
      },
    ],
  },
  {
    slug: "iteminder",
    title: "Iteminder",
    category: "Trip Items Documentation and Reminder",
    tagline:
      "Pack smarter. Remember everything. Available on the iOS App Store and as a lightweight PWA for organizing trip items and sharing accountability.",
    image: iteminderImg,
    cardTech: ["React", "Supabase", "Capacitor"],
    accent: {
      badge: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      glow: "from-blue-600 to-purple-600",
      bar: "border-blue-500",
      icon: "text-blue-500",
      arrow: "text-blue-400",
    },
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/ng/app/iteminder/id6755497161",
        icon: "Download",
        style: "dark",
      },
      {
        label: "Web App",
        href: "https://iteminder.com",
        icon: "ExternalLink",
        style: "primary",
      },
      {
        label: "Code",
        href: "https://github.com/bluemagiksgo",
        icon: "Github",
        style: "outline",
      },
    ],
    overview:
      'Iteminder streamlines trip prep with checklists, item photos, and timely reminders (push & email). It\'s installable as a native iOS app and works great offline. Users can also invite a "trusted reminder" — a friend who helps keep them on track if they forget to pack an item.',
    sections: [
      {
        type: "twoCol",
        left: {
          title: "My Role",
          items: [
            "Frontend development (React + Vite)",
            "UX/UI design for mobile-first flows",
            "Supabase schema & Edge Functions",
            "iOS App Store deployment",
            "Admin metrics & analytics",
          ],
        },
        right: {
          title: "Core Features",
          iconClass: "text-purple-500",
          items: [
            "Smart packing lists with photos",
            "Timezone-aware reminders",
            "Native Push notifications",
            '"Trusted Reminder" accountability sharing',
            "Offline-first architecture",
          ],
        },
      },
      {
        type: "tech",
        items: [
          "React",
          "Vite",
          "Tailwind CSS",
          "Supabase",
          "PostgreSQL",
          "Edge Functions",
          "Capacitor (for iOS)",
          "Mailjet",
        ],
      },
      {
        type: "narrative",
        title: "Challenges & Implementation",
        paragraphs: [
          "One of the biggest challenges was handling **Timezone-safe reminders**. Since users travel across zones, a reminder set for 8 AM in Lagos needs to alert them correctly if they are currently in London.",
          "Another hurdle was preparing the web app for the **iOS App Store**. This involved using Capacitor to wrap the React application into a native container and ensuring it met Apple's strict review guidelines.",
        ],
        listTitle: "Key Learnings:",
        list: [
          "Native app deployment process via Capacitor.",
          "Optimizing Supabase Edge Functions for speed.",
          "Handling native push notification permissions.",
        ],
        images: [
          { src: code1, alt: "Iteminder timezone-safe reminder scheduling code" },
          { src: code2, alt: "Iteminder Supabase Edge Function code" },
          { src: code3, alt: "Iteminder push notification handling code" },
        ],
      },
    ],
  },
  {
    slug: "metherappy",
    title: "meTherappy",
    category: "Tele-Health Platform",
    tagline:
      "Your Mental Health Companion. An online platform connecting people with licensed therapists and counselors.",
    image: metherappyImg,
    cardTech: ["React", "Tailwind", "REST APIs"],
    accent: {
      badge: "border-teal-500/30 bg-teal-500/10 text-teal-400",
      glow: "from-teal-500 to-blue-600",
      bar: "border-teal-500",
      icon: "text-teal-500",
      arrow: "text-teal-400",
    },
    links: [
      {
        label: "View Live",
        href: "https://metherappy.com",
        icon: "ExternalLink",
        style: "primary",
      },
      {
        label: "View Code",
        href: "https://github.com/bluemagikSGO/meTherappy.git",
        icon: "Github",
        style: "outline",
      },
    ],
    overview:
      "meTherappy is a mental health platform designed to lower the barrier to entry for therapy. I developed this to help users seamlessly book sessions with qualified therapists, track their progress, and access curated wellness resources in a safe, non-judgmental digital environment.",
    sections: [
      {
        type: "twoCol",
        left: {
          title: "My Role",
          items: [
            "Frontend Architecture & Development",
            "UI/UX Design (Figma to Code)",
            "Backend API Integration",
            "Responsive Mobile Testing",
          ],
        },
        right: {
          title: "Core Features",
          iconClass: "text-teal-500",
          items: [
            { icon: "UserCheck", text: "Therapist discovery & booking" },
            { icon: "Shield", text: "Secure user authentication" },
            { icon: "MessageSquare", text: "Real-time chat messaging system" },
            { icon: "Layout", text: "Therapist profile filtering" },
          ],
        },
      },
      {
        type: "tech",
        items: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.js",
          "Tailwind CSS",
          "REST APIs",
        ],
      },
      {
        type: "gallery",
        title: "App Interface",
        images: [
          { src: loginImg, alt: "meTherappy login screen" },
          { src: dashboardImg, alt: "meTherappy user dashboard" },
          { src: bookingImg, alt: "meTherappy therapist booking flow" },
        ],
      },
      {
        type: "gallery",
        title: "Under the Hood",
        icon: "Code",
        variant: "code",
        images: [
          { src: code1, alt: "meTherappy authentication flow code" },
          { src: code2, alt: "meTherappy booking state management code" },
          { src: code3, alt: "meTherappy API integration code" },
        ],
      },
      {
        type: "compare",
        left: {
          title: "Challenges & Learnings",
          titleClass: "text-red-400",
          markerClass: "text-red-400",
          items: [
            "Handling complex User Authentication flows securely.",
            'Designing a UI that feels "calm" and welcoming (Color psychology).',
            "Ensuring perfect responsiveness across varied mobile viewports.",
            "Managing complex state for the therapist booking system.",
          ],
        },
        right: {
          title: "What's Next?",
          titleClass: "text-green-400",
          markerClass: "text-green-400",
          items: [
            "Implement live video call rooms for sessions.",
            "AI-driven wellness recommendations.",
            "Stripe integration for seamless payments.",
            "Community blog and resource hub.",
          ],
        },
      },
    ],
  },
  {
    slug: "sportloc",
    title: "SportsLoc",
    category: "Sport Facility Discovery and Community",
    tagline:
      "Connect. Play. Compete. A location-based discovery platform for finding sports facilities, players, and local communities.",
    image: sportslocImg,
    cardTech: ["React", "Node.js", "MongoDB"],
    accent: {
      badge: "border-green-500/30 bg-green-500/10 text-green-400",
      glow: "from-green-500 to-blue-600",
      bar: "border-green-500",
      icon: "text-green-500",
      arrow: "text-green-400",
    },
    links: [
      {
        label: "View Live",
        href: "https://sportsloc.netlify.app",
        icon: "ExternalLink",
        style: "primary",
      },
      {
        label: "View Code",
        href: "https://github.com/bluemagikSGO/sportsloc.git",
        icon: "Github",
        style: "outline",
      },
    ],
    overview:
      "Sportsloc is a location-based web platform designed to solve the fragmentation in recreational sports. It helps users discover nearby facilities, connect with fellow players, and build communities. By creating a digital ecosystem for athletes and facility owners, Sportsloc makes organizing games and finding venues seamless.",
    sections: [
      {
        type: "twoCol",
        left: {
          title: "My Role",
          iconClass: "text-blue-500",
          items: [
            {
              icon: "Layout",
              label: "Product Architecture:",
              text: "Defined user flows and core logic.",
            },
            {
              icon: "Layout",
              label: "UI/UX Design:",
              text: "Designed responsive interfaces using Tailwind CSS & Figma.",
            },
            {
              icon: "ArrowRight",
              label: "Frontend Development:",
              text: "Built React interface and integrated APIs.",
            },
            {
              icon: "Users",
              label: "Collaboration:",
              text: "Synced with backend engineers on infrastructure.",
            },
          ],
        },
        right: {
          title: "Core Features",
          iconClass: "text-green-500",
          items: [
            {
              icon: "MapPin",
              label: "Geolocation:",
              text: "Find nearby facilities & players.",
            },
            {
              icon: "Users",
              label: "Social:",
              text: "Message players & join groups.",
            },
            {
              icon: "Shield",
              label: "Auth:",
              text: "Secure profiles for users/owners.",
            },
            {
              icon: "Calendar",
              label: "Events:",
              text: "Create & share sporting events.",
            },
          ],
        },
      },
      {
        type: "tech",
        items: [
          "React.js",
          "Tailwind CSS",
          "React Router",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Google Maps API",
          "Leaflet.js",
          "Firebase Auth",
        ],
      },
      {
        type: "gallery",
        title: "Interface Shots",
        images: [
          { src: sportcode1, alt: "SportsLoc facility discovery map view" },
          { src: sportcode2, alt: "SportsLoc player profile and messaging" },
          { src: sportcode3, alt: "SportsLoc event creation screen" },
        ],
      },
      {
        type: "compare",
        left: {
          title: "Challenges & Learnings",
          titleClass: "text-red-400",
          markerClass: "text-red-400",
          items: [
            "Implementing accurate location data via Google Maps API while optimizing load times.",
            "Aligning data models and API endpoints with the backend team.",
            "Optimizing third-party scripts (Maps) to keep the UI snappy.",
          ],
        },
        right: {
          title: "What's Next?",
          titleClass: "text-green-400",
          markerClass: "text-green-400",
          items: [
            "A portal for owners to manage listings and bookings.",
            "Real-time alerts for match invites via push notifications.",
            "React Native mobile app version for on-the-go access.",
          ],
        },
      },
    ],
  },
  {
    slug: "myport",
    title: "Gabsteven Portfolio",
    cardTitle: "Portfolio Site",
    category: "My Personal Portfolio",
    tagline:
      "The container for my digital work. A responsive, high-performance portfolio website built to showcase frontend projects.",
    image: myportImg,
    cardTech: ["React", "Tailwind", "EmailJS"],
    accent: {
      badge: "border-pink-500/30 bg-pink-500/10 text-pink-400",
      glow: "from-pink-600 to-purple-600",
      bar: "border-pink-500",
      icon: "text-pink-500",
      arrow: "text-pink-400",
    },
    links: [
      {
        label: "View Live",
        href: "https://gabsteven.com",
        icon: "ExternalLink",
        style: "primary",
      },
      {
        label: "View Code",
        href: "https://github.com/bluemagikSGO/my-portfolio",
        icon: "Github",
        style: "outline",
      },
    ],
    overview:
      "GabSteven.com is a centralized hub designed to aggregate my development work. Since the portfolio itself is a custom-built React application, it serves as both a container for my work and a testament to my skills in component architecture, responsive design, and deployment pipelines.",
    sections: [
      {
        type: "twoCol",
        left: {
          title: "My Role",
          iconClass: "text-blue-500",
          items: [
            {
              icon: "Layout",
              label: "Product Architecture:",
              text: "Defined the overall structure, routing, and component hierarchy.",
            },
            {
              icon: "Paintbrush",
              label: "UI/UX Design:",
              text: "Crafted a dark-mode aesthetic with responsive layouts using Tailwind CSS.",
            },
            {
              icon: "Code",
              label: "Frontend Development:",
              text: "Built interactive components (Galleries, Modals) using React.",
            },
          ],
        },
        right: {
          title: "Tech Stack",
          tags: [
            "React.js",
            "Tailwind CSS",
            "React Router",
            "Vercel",
            "EmailJS",
            "Lucide React",
            "Git/GitHub",
          ],
          subTitle: "Key Features:",
          subItems: [
            "Fully Responsive Mobile-First Design",
            "Contact Form Integration (EmailJS)",
            "Scroll Animations (AOS)",
          ],
        },
      },
      {
        type: "gallery",
        title: "Interface Shots",
        images: [
          { src: portapp, alt: "Portfolio hero section" },
          { src: portapp2, alt: "Portfolio project grid" },
          { src: portapp3, alt: "Portfolio case study page" },
        ],
      },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
