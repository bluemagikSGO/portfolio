import Reveal from "./Reveal";
import { ArrowLink } from "./ui";
import { SITE } from "../config/site";
import portrait480 from "../assets/steven-480.webp";
import portrait800 from "../assets/steven-800.webp";

const EXPERIENCE = [
  {
    when: "2026 — Present",
    what: "Founder, MyBabe AI",
    detail: "AI companion app on iOS and Android, built solo.",
  },
  {
    when: "Present",
    what: "CEO, Iteminder LTD",
    detail: "Software studio that builds and scales apps.",
  },
  {
    when: "2024 — Present",
    what: "Freelance frontend developer",
    detail: "Websites and web apps for businesses and agencies.",
  },
  {
    when: "2025",
    what: "Frontend Web Development Bootcamp",
    detail: "Appclick Academy, Ibadan.",
  },
];

const TOOLBOX = [
  { k: "Languages", v: "JavaScript, TypeScript" },
  { k: "Web", v: "React, Next.js, Tailwind CSS" },
  { k: "Mobile", v: "React Native, Expo" },
  { k: "Backend", v: "Node.js, Supabase, Postgres, Prisma" },
  { k: "Auth and payments", v: "Clerk, Better Auth, RevenueCat" },
  { k: "AI", v: "Gemini, Claude, OpenAI, LiveKit" },
];

const About = () => (
  <section id="about" aria-labelledby="about-title" className="wrap py-24 sm:py-32">
    <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
      <div className="lg:col-span-3">
        <p className="label flex gap-4 text-subtle">
          <span>03</span>
          <span>About</span>
        </p>
      </div>

      <div className="lg:col-span-9">
        <div className="grid gap-y-12 md:grid-cols-9 md:gap-x-10">
          <Reveal as="figure" className="md:col-span-4">
            <div className="overflow-hidden rounded-[4px] bg-[#6f7174]">
              <img
                src={portrait800}
                srcSet={`${portrait480} 480w, ${portrait800} 800w`}
                sizes="(min-width: 1024px) 26vw, (min-width: 768px) 40vw, 100vw"
                width="800"
                height="921"
                alt={`Portrait of ${SITE.name}`}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 flex justify-between text-[13px] text-subtle">
              <span>{SITE.fullName}</span>
              <span>Lagos</span>
            </figcaption>
          </Reveal>

          <Reveal delay={60} className="md:col-span-5">
            <h2 id="about-title" className="heading text-[clamp(2.25rem,4.4vw,3.75rem)]">
              I like owning the whole problem.
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-muted">
              <p>
                I'm {SITE.fullName}, Steven Gabriel to most people: a software
                engineer in Ikeja, Lagos. Since January 2024 I've built websites
                and web apps as a freelance frontend developer, working directly
                with businesses and agencies to turn loose requirements into
                interfaces that ship.
              </p>
              <p>
                In 2026 I founded MyBabe AI and built it on my own: the Supabase
                backend and streaming chat engine, a voice-call pipeline on
                self-hosted LiveKit, the subscriptions and the store listings. It
                is live on iOS and Android and is now the first product of
                Iteminder, the studio I run.
              </p>
              <p>
                I'm most comfortable owning a product end to end, from backend
                architecture and AI integration to App Store launch, growth and
                iteration.
              </p>
            </div>
            <div className="mt-8">
              <ArrowLink href={SITE.cv}>Download my CV (PDF)</ArrowLink>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-y-14 md:grid-cols-9 md:gap-x-10">
          <Reveal className="md:col-span-5">
            <h3 className="label text-subtle">Experience</h3>
            <ol className="mt-5 border-t border-line">
              {EXPERIENCE.map((e) => (
                <li key={e.what} className="grid gap-x-6 gap-y-1 border-b border-line py-4 sm:grid-cols-[8.5rem_1fr]">
                  <span className="text-[14px] text-subtle tabular-nums">{e.when}</span>
                  <div>
                    <p className="text-[16px] font-medium">{e.what}</p>
                    <p className="mt-1 text-[15px] text-muted">{e.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={60} className="md:col-span-4">
            <h3 className="label text-subtle">Toolbox</h3>
            <dl className="mt-5 border-t border-line">
              {TOOLBOX.map((t) => (
                <div key={t.k} className="border-b border-line py-4">
                  <dt className="text-[14px] text-subtle">{t.k}</dt>
                  <dd className="mt-1 text-[15px]">{t.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
