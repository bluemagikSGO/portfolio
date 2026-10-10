import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { ArrowLink, SectionHead, Shot } from "./ui";
import { projects } from "../data/projects";
import { pad } from "../lib/pad";

const Featured = ({ project }) => (
  <article className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
    <Reveal className="relative lg:col-span-8 lg:col-start-5 lg:row-start-1">
      <Link to={`/${project.slug}`} tabIndex={-1} aria-hidden="true" className="group block">
        <Shot
          image={project.cover}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="sm:w-[86%]"
          imgClassName="transition-transform duration-700 ease-out-expo motion-safe:group-hover:scale-[1.015]"
        />
        <Shot
          image={project.coverPhone}
          sizes="200px"
          className="absolute right-0 -bottom-10 hidden w-[24%] max-w-[230px] rounded-[10px] shadow-[0_30px_60px_-30px_rgba(22,20,15,0.45)] sm:block"
        />
      </Link>
    </Reveal>

    <Reveal delay={60} className="flex flex-col lg:col-span-4 lg:row-start-1 lg:pr-4">
      <p className="label flex gap-4 text-subtle">
        <span>01</span>
        <span>{project.period}</span>
      </p>
      <h3 className="display mt-6 text-[clamp(2.75rem,5vw,4.5rem)]">
        <Link to={`/${project.slug}`} className="transition-colors hover:text-accent">
          {project.title}
        </Link>
      </h3>
      <p className="mt-6 text-[17px] leading-relaxed text-muted">{project.summary}</p>

      <dl className="mt-8 border-t border-line text-[14px]">
        {[
          ["Role", project.role],
          ["Platforms", project.platforms],
          ["Status", project.status],
        ].map(([k, v]) => (
          <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3">
            <dt className="text-subtle">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
        <ArrowLink to={`/${project.slug}`}>Read the case study</ArrowLink>
        <ArrowLink href={project.links.at(-1).href}>{project.links.at(-1).label}</ArrowLink>
      </div>
    </Reveal>
  </article>
);

const Item = ({ project, index }) => (
  <Reveal as="li" delay={(index % 2) * 80}>
    <Link to={`/${project.slug}`} className="group block">
      <Shot
        image={project.cover}
        className="aspect-[16/10]"
        imgClassName="h-full object-cover object-top transition-transform duration-700 ease-out-expo motion-safe:group-hover:scale-[1.02]"
      />
      <div className="mt-6 grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-3">
        <span className="label text-subtle">{pad(index + 1)}</span>
        <h3 className="heading text-[clamp(1.75rem,2.6vw,2.25rem)] transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <ArrowRight
          size={20}
          strokeWidth={1.5}
          aria-hidden
          className="self-center text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
        />
        <p className="col-start-2 col-end-4 mt-3 max-w-[34rem] text-[15px] leading-relaxed text-muted">
          {project.summary}
        </p>
        <p className="col-start-2 col-end-4 mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-subtle">
          <span>{project.category}</span>
          {project.status && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-accent">{project.status}</span>
            </>
          )}
          <span aria-hidden="true">·</span>
          <span>{project.stack.join(", ")}</span>
        </p>
      </div>
    </Link>
  </Reveal>
);

const Work = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="work" aria-labelledby="work-title" className="mt-24 border-t border-line sm:mt-32">
      <div className="wrap py-20 sm:py-28">
        <SectionHead id="work-title" index="01" label="Selected work" title="Products I've founded, and work I've built for others.">
          <p>
            Each project has a case study covering what I built and what I
            learned. Some client work is under NDA and isn't shown here.
          </p>
        </SectionHead>

        <div className="mt-16 sm:mt-24">
          <Featured project={featured} />
        </div>

        <ol className="mt-24 grid gap-x-10 gap-y-20 border-t border-line pt-16 sm:mt-32 md:grid-cols-2">
          {rest.map((p, i) => (
            <Item key={p.slug} project={p} index={i + 1} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Work;
