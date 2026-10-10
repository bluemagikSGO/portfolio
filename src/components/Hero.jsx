import { ArrowDown } from "lucide-react";
import { ButtonLink, ArrowLink } from "./ui";
import { SITE } from "../config/site";

const FACTS = [
  { k: "Now", v: "Founder, MyBabe AI" },
  { k: "Company", v: "CEO, Iteminder LTD" },
  { k: "Since 2024", v: "Freelance frontend for businesses and agencies" },
  { k: "Based in", v: SITE.location },
];

const Hero = () => (
  <section aria-labelledby="hero-title" className="wrap pt-14 sm:pt-20 lg:pt-28">
    <p className="rise label text-subtle">
      {SITE.role} <span className="mx-2 text-line-strong">/</span> Lagos
    </p>

    <h1
      id="hero-title"
      className="rise display mt-8 max-w-[16ch] text-[clamp(2.875rem,8vw,8.25rem)] [animation-delay:60ms]"
    >
      I build software end to end,{" "}
      <em className="text-muted italic">from the schema to the store listing.</em>
    </h1>

    <div className="rise mt-12 grid gap-y-10 [animation-delay:140ms] lg:mt-16 lg:grid-cols-12 lg:gap-x-10">
      <p className="max-w-[36rem] text-[17px] leading-relaxed text-muted sm:text-lg lg:col-span-6">
        I'm {SITE.name}, a software engineer and founder in Lagos. I founded{" "}
        <span className="text-ink">MyBabe AI</span>, an AI companion app live on
        the App Store and Google Play, and I run{" "}
        <span className="text-ink">Iteminder</span>, the software studio behind
        it. Since 2024 I've also built websites and web apps for businesses and
        agencies.
      </p>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-5 lg:col-span-5 lg:col-start-8 lg:self-end lg:justify-end">
        <ButtonLink to="/#work" icon={ArrowDown}>
          Selected work
        </ButtonLink>
        <ArrowLink to="/#contact">Get in touch</ArrowLink>
      </div>
    </div>

    <dl className="rise mt-20 grid grid-cols-2 gap-x-6 [animation-delay:220ms] sm:mt-24 lg:grid-cols-4 lg:gap-x-10">
      {FACTS.map(({ k, v }) => (
        <div key={k} className="border-t border-line py-6">
          <dt className="label text-subtle">{k}</dt>
          <dd className="mt-2.5 max-w-[22ch] text-[15px] leading-snug">{v}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Hero;
