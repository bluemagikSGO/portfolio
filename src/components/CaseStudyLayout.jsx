import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Reveal from "./Reveal";
import { ArrowLink, Shot } from "./ui";
import { getNextProject, projects } from "../data/projects";
import { pad } from "../lib/pad";

/** Every section sits on the same 3 / 9 grid: a heading rail and the content. */
const Row = ({ title, children }) => (
  <section className="border-t border-line py-14 sm:py-20">
    <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
      <h2 className="heading text-[1.75rem] lg:col-span-3">{title}</h2>
      <div className="lg:col-span-9">{children}</div>
    </div>
  </section>
);

const ListSection = ({ section }) => (
  <Row title={section.title}>
    <ul className="border-t border-line">
      {section.items.map((item, i) => {
        const isObject = typeof item === "object";
        return (
          <li
            key={i}
            className="grid gap-x-10 gap-y-1 border-b border-line py-4 text-[16px] leading-relaxed sm:grid-cols-[11rem_1fr] sm:text-[17px]"
          >
            {isObject ? (
              <>
                <span className="font-medium">{item.label}</span>
                <span className="text-muted">{item.text}</span>
              </>
            ) : (
              <span className="text-muted sm:col-span-2">{item}</span>
            )}
          </li>
        );
      })}
    </ul>
  </Row>
);

const Gallery = ({ section }) => {
  if (section.variant === "phone") {
    return (
      <Row title={section.title}>
        <ul
          className={`grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 ${
            section.images.length > 2 ? "md:grid-cols-4" : "md:max-w-[36rem]"
          }`}
        >
          {section.images.map((img, i) => (
            <Reveal as="li" key={i} delay={i * 60}>
              <figure>
                <Shot image={img} sizes="(min-width: 768px) 220px, 45vw" className="rounded-[10px]" />
                {img.caption && (
                  <figcaption className="mt-3 text-[13px] text-subtle">{img.caption}</figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </ul>
      </Row>
    );
  }

  // Wide screenshots: the first runs full width, the rest pair up beneath it.
  const [first, ...rest] = section.images;
  return (
    <Row title={section.title}>
      <div className="grid gap-6 sm:gap-8">
        <Reveal>
          <Shot image={first} className={section.variant === "code" ? "bg-[#1e1e1e]" : ""} />
        </Reveal>
        {rest.length > 0 && (
          <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-8">
            {rest.map((img, i) => (
              <Reveal key={i} delay={i * 60}>
                <Shot image={img} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Row>
  );
};

const Stack = ({ section }) => (
  <Row title="Stack">
    <ul className="flex flex-wrap gap-x-2 gap-y-2 font-mono text-[13px]">
      {section.items.map((t) => (
        <li key={t} className="rounded-[3px] border border-line px-3 py-1.5 text-muted">
          {t}
        </li>
      ))}
    </ul>
  </Row>
);

const SECTIONS = { list: ListSection, gallery: Gallery, stack: Stack };

const CaseStudyLayout = ({ project }) => {
  const index = projects.findIndex((p) => p.slug === project.slug) + 1;
  const next = getNextProject(project.slug);

  const meta = [
    ["Role", project.role],
    ["Platforms", project.platforms],
    [project.status ? "Status" : "Type", project.status || project.category],
    ...(project.period ? [["Period", project.period]] : []),
  ];

  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <article aria-labelledby="case-title">
          <header className="wrap pt-10 sm:pt-14">
            <Link
              to="/#work"
              className="group inline-flex items-center gap-2 text-[14px] text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.5}
                aria-hidden
                className="transition-transform group-hover:-translate-x-0.5"
              />
              All work
            </Link>

            <div className="rise mt-14 grid gap-y-8 sm:mt-20 lg:grid-cols-12 lg:gap-x-10">
              <p className="label flex gap-4 text-subtle lg:col-span-3 lg:pt-5">
                <span>
                  {pad(index)} / {pad(projects.length)}
                </span>
                <span>{project.category}</span>
              </p>
              <div className="lg:col-span-9">
                <h1 id="case-title" className="display text-[clamp(3rem,9vw,8.5rem)]">
                  {project.title}
                </h1>
                <p className="mt-8 max-w-[34ch] font-serif text-[clamp(1.375rem,2.4vw,2rem)] leading-[1.3] tracking-[-0.01em] text-muted">
                  {project.tagline}
                </p>
              </div>
            </div>

            <div className="rise mt-14 grid gap-y-8 [animation-delay:120ms] lg:grid-cols-12 lg:gap-x-10">
              <dl className="grid grid-cols-1 gap-x-10 border-t border-line sm:grid-cols-2 lg:col-span-9 lg:col-start-4 lg:grid-cols-4">
                {meta.map(([k, v]) => (
                  <div key={k} className="border-b border-line py-4 lg:border-b-0">
                    <dt className="label text-subtle">{k}</dt>
                    <dd className="mt-2 text-[15px] leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>
              <ul className="flex flex-wrap gap-x-7 gap-y-3 lg:col-span-9 lg:col-start-4">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <ArrowLink href={l.href}>{l.label}</ArrowLink>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <div className="wrap rise mt-16 [animation-delay:200ms] sm:mt-20">
            <Shot
              image={project.cover}
              eager
              sizes="(min-width: 1440px) 1340px, 100vw"
            />
          </div>

          <div className="wrap mt-16 sm:mt-24">
            <section className="py-14 sm:py-20">
              <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
                <h2 className="label pt-2 text-subtle lg:col-span-3">Overview</h2>
                <p className="max-w-[44ch] font-serif text-[clamp(1.375rem,2.2vw,1.875rem)] leading-[1.4] tracking-[-0.01em] lg:col-span-9">
                  {project.overview}
                </p>
              </div>
            </section>

            {project.sections.map((section, i) => {
              const Section = SECTIONS[section.type];
              return Section ? <Section key={i} section={section} /> : null;
            })}
          </div>

          <nav aria-label="Next project" className="mt-10 border-t border-line">
            <Link to={`/${next.slug}`} className="group block">
              <div className="wrap grid gap-y-4 py-16 sm:py-24 lg:grid-cols-12 lg:gap-x-10">
                <p className="label pt-4 text-subtle lg:col-span-3">Next project</p>
                <div className="flex items-center justify-between gap-6 lg:col-span-9">
                  <span className="display text-[clamp(2.75rem,7vw,6.5rem)] transition-colors group-hover:text-accent">
                    {next.title}
                  </span>
                  <ArrowRight
                    strokeWidth={1}
                    aria-hidden
                    className="size-10 shrink-0 transition-transform duration-300 group-hover:translate-x-2 sm:size-16"
                  />
                </div>
              </div>
            </Link>
          </nav>
        </article>
      </main>
      <SiteFooter cta />
    </>
  );
};

export default CaseStudyLayout;
