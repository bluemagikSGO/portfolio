import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import { ArrowLink, ButtonLink, Shot } from "../components/ui";
import { SITE, STUDIO, studioMailto } from "../config/site";
import { CAPABILITIES, PRINCIPLES, STAGES } from "../data/studio";
import { getProject } from "../data/projects";
import usePageMeta from "../hooks/usePageMeta";
import logo from "../assets/iteminder/iteminder-horizontal-light.svg";

const Head = ({ index, label, title, id }) => (
  <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-10">
    <p className="label flex gap-4 text-subtle lg:col-span-3 lg:pt-4 [.on-ink_&]:text-on-ink-subtle">
      <span>{index}</span>
      <span>{label}</span>
    </p>
    <h2 id={id} className="heading max-w-[20ch] text-[clamp(2.25rem,5vw,4.25rem)] lg:col-span-9">
      {title}
    </h2>
  </div>
);

const StudioPage = () => {
  const mybabe = getProject("mybabe");

  usePageMeta({
    title: "Iteminder — Steven Gabriel's software studio",
    description:
      "Iteminder LTD is a software studio in Lagos, led by Steven Gabriel, that builds apps, SaaS, B2B and AI products and scales them to their full revenue potential. Its first product is MyBabe AI.",
    canonicalPath: "/iteminder",
  });

  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <header className="wrap pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28">
          <div className="rise flex flex-wrap items-center justify-between gap-6">
            <img src={logo} alt="Iteminder" width="2389" height="452" className="h-9 w-auto sm:h-11" />
            <p className="label text-subtle">{STUDIO.legalName} · Software studio · Lagos</p>
          </div>

          <h1 className="rise display mt-16 max-w-[15ch] text-[clamp(2.875rem,8vw,8rem)] [animation-delay:60ms] sm:mt-24">
            We build software.{" "}
            <em className="text-muted italic">Then we scale it to everything it can earn.</em>
          </h1>

          <div className="rise mt-12 grid gap-y-10 [animation-delay:140ms] lg:mt-16 lg:grid-cols-12 lg:gap-x-10">
            <p className="max-w-[36rem] text-[17px] leading-relaxed text-muted sm:text-lg lg:col-span-6">
              Iteminder is the software studio I run as CEO. It takes software from first commit
              to its full revenue potential. Consumer apps, SaaS, B2B tools and AI products: the
              studio designs and builds them, then stays on for the work that compounds after
              launch.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5 lg:col-span-5 lg:col-start-8 lg:self-end lg:justify-end">
              <ButtonLink href={studioMailto("New project enquiry")}>Start a project</ButtonLink>
              <ArrowLink href={STUDIO.url}>iteminder.com</ArrowLink>
            </div>
          </div>
        </header>

        <section aria-labelledby="approach-title" className="border-t border-line">
          <div className="wrap py-20 sm:py-28">
            <Head
              id="approach-title"
              index="01"
              label="Approach"
              title="Most software gets its best attention before launch. The real work starts after it."
            />
            <ol className="mt-16 grid gap-y-10 md:grid-cols-3 md:gap-x-10 lg:mt-20">
              {PRINCIPLES.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 80} className="border-t border-ink pt-6">
                  <p className="label text-subtle">0{i + 1}</p>
                  <h3 className="mt-8 text-[1.25rem] font-medium tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="process-title" className="on-ink bg-ink text-on-ink">
          <div className="wrap py-20 sm:py-28">
            <Head id="process-title" index="02" label="How it works" title="Build. Launch. Scale." />
            <ol className="mt-16 lg:mt-20">
              {STAGES.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.name}
                  className="grid gap-y-6 border-t border-on-ink-line py-10 lg:grid-cols-12 lg:gap-x-10"
                >
                  <div className="flex items-baseline gap-5 lg:col-span-3">
                    <span className="label text-on-ink-subtle">0{i + 1}</span>
                    <h3 className="heading text-[2.5rem]">{s.name}</h3>
                  </div>
                  <p className="max-w-[40ch] text-[16px] leading-relaxed text-on-ink-muted lg:col-span-5">
                    {s.summary}
                  </p>
                  <ul className="text-[15px] lg:col-span-4">
                    {s.items.map((item) => (
                      <li key={item} className="border-b border-on-ink-line py-2.5 first:pt-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="capabilities-title">
          <div className="wrap py-20 sm:py-28">
            <Head
              id="capabilities-title"
              index="03"
              label="Capabilities"
              title="Any kind of software. One standard."
            />
            <dl className="mt-16 grid gap-x-10 border-b border-line md:grid-cols-2 lg:mt-20">
              {CAPABILITIES.map((c) => (
                <div key={c.name} className="border-t border-line py-7">
                  <dt className="text-[1.25rem] font-medium tracking-[-0.01em]">{c.name}</dt>
                  <dd className="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-muted">{c.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="portfolio-title" className="border-t border-line">
          <div className="wrap py-20 sm:py-28">
            <Head
              id="portfolio-title"
              index="04"
              label="Portfolio"
              title="One product, done properly, before the next."
            />
            <div className="mt-16 grid gap-y-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-10">
              <Reveal className="lg:col-span-4 lg:col-start-4">
                <p className="text-[13px] text-subtle">Product 01 · Live</p>
                <h3 className="display mt-3 text-[clamp(2.5rem,4.5vw,4rem)]">
                  <Link to="/mybabe" className="transition-colors hover:text-accent">
                    MyBabe AI
                  </Link>
                </h3>
                <p className="mt-5 text-[16px] leading-relaxed text-muted">
                  An AI companion app, live on the App Store and Google Play. It is where the
                  studio model is being proven end to end: designed, built, launched and grown
                  in-house. Next, the studio will take on a small number of products, its own
                  and with founders, where it can own both the build and the growth.
                </p>
                <div className="mt-7">
                  <ArrowLink to="/mybabe">Read the case study</ArrowLink>
                </div>
              </Reveal>
              <Reveal delay={80} className="lg:col-span-5">
                <Link to="/mybabe" tabIndex={-1} aria-hidden="true" className="block">
                  <Shot image={mybabe.cover} sizes="(min-width: 1024px) 40vw, 100vw" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section aria-labelledby="investors-title" className="on-ink bg-ink text-on-ink">
          <div className="wrap grid gap-y-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-x-10">
            <p className="label flex gap-4 text-on-ink-subtle lg:col-span-3 lg:pt-4">
              <span>05</span>
              <span>For investors</span>
            </p>
            <div className="lg:col-span-9">
              <h2 id="investors-title" className="heading max-w-[18ch] text-[clamp(2.25rem,5vw,4.25rem)]">
                Open to the right partners.
              </h2>
              <p className="mt-6 max-w-[38rem] text-[17px] leading-relaxed text-on-ink-muted">
                Iteminder builds software and scales it to its full revenue potential, one product
                at a time. MyBabe AI is the first. If you'd like to back the studio model as it
                grows, write to {SITE.name} at the studio address.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <ButtonLink href={studioMailto("Investor enquiry")}>Investor enquiries</ButtonLink>
                <a href={studioMailto("Investor enquiry")} className="link text-[15px]">
                  {STUDIO.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default StudioPage;
