import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { ArrowLink } from "./ui";
import { STUDIO, studioMailto } from "../config/site";
import { STAGES } from "../data/studio";
import logo from "../assets/iteminder/iteminder-horizontal-dark.svg";

const Studio = () => (
  <section id="studio" aria-labelledby="studio-title" className="on-ink bg-ink text-on-ink">
    <div className="wrap py-24 sm:py-32">
      <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
        <div className="flex flex-col gap-8 lg:col-span-3 lg:pt-4">
          <p className="label flex gap-4 text-on-ink-subtle">
            <span>02</span>
            <span>The studio</span>
          </p>
          <img src={logo} alt="Iteminder" width="2389" height="452" className="h-8 w-auto self-start" />
        </div>
        <div className="lg:col-span-9">
          <h2 id="studio-title" className="heading max-w-[20ch] text-[clamp(2.25rem,5vw,4.25rem)]">
            We build software, then scale it to everything it can earn.
          </h2>
          <p className="mt-6 max-w-[38rem] text-[17px] leading-relaxed text-on-ink-muted sm:text-lg">
            <span className="text-on-ink">Iteminder LTD</span> is the software studio I run as CEO.
            It builds apps of any kind (consumer, SaaS, B2B, AI) and stays on after launch for
            the work that turns them into businesses: pricing, onboarding, retention and
            infrastructure cost.
          </p>
        </div>
      </div>

      <ol className="mt-16 grid gap-y-12 sm:mt-20 md:grid-cols-3 md:gap-x-10">
        {STAGES.map((s, i) => (
          <Reveal as="li" key={s.name} delay={i * 80} className="border-t border-on-ink-line pt-6">
            <p className="label text-on-ink-subtle">0{i + 1}</p>
            <h3 className="heading mt-6 text-[2.25rem]">{s.name}</h3>
            <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-on-ink-muted">
              {s.summary}
            </p>
          </Reveal>
        ))}
      </ol>

      <div className="mt-20 grid gap-y-12 border-t border-on-ink-line pt-10 sm:mt-28 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-3">
          <p className="label text-on-ink-subtle">Portfolio</p>
        </div>
        <div className="lg:col-span-4">
          <p className="text-[13px] text-on-ink-subtle">Product 01</p>
          <p className="heading mt-2 text-[1.875rem]">
            <Link to="/mybabe" className="transition-colors hover:text-accent-on-ink">
              MyBabe AI
            </Link>
          </p>
          <p className="mt-3 max-w-[30ch] text-[15px] leading-relaxed text-on-ink-muted">
            The studio's first product, live on the App Store and Google Play.
          </p>
        </div>
        <div className="lg:col-span-5">
          <p className="text-[13px] text-on-ink-subtle">For investors</p>
          <p className="mt-2 max-w-[38ch] text-[15px] leading-relaxed text-on-ink-muted">
            Iteminder is open to investors who want to back the studio model as it grows.{" "}
            <a href={studioMailto("Investor enquiry")} className="link text-on-ink">
              {STUDIO.email}
            </a>
          </p>
        </div>
      </div>

      <div className="mt-14 lg:grid lg:grid-cols-12 lg:gap-x-10">
        <div className="flex flex-wrap gap-x-8 gap-y-4 lg:col-span-9 lg:col-start-4">
          <ArrowLink to="/iteminder">More about the studio</ArrowLink>
          <ArrowLink href={STUDIO.url}>iteminder.com</ArrowLink>
        </div>
      </div>
    </div>
  </section>
);

export default Studio;
