import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Brain,
  Calendar,
  Code,
  Download,
  ExternalLink,
  Github,
  Heart,
  Layout,
  Lock,
  MapPin,
  MessageSquare,
  Mic,
  Paintbrush,
  Shield,
  Smartphone,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import SiteFooter from "./SiteFooter";

const ICONS = {
  ArrowRight,
  Bell,
  Brain,
  Calendar,
  Code,
  Download,
  ExternalLink,
  Github,
  Heart,
  Layout,
  Lock,
  MapPin,
  MessageSquare,
  Mic,
  Paintbrush,
  Shield,
  Smartphone,
  Sparkles,
  UserCheck,
  Users,
};

const LINK_STYLES = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20",
  outline: "border border-white/20 hover:bg-white/5 hover:border-white/40 text-white",
  dark: "bg-black hover:bg-gray-900 text-white border border-white/20",
};

/** Renders `**bold**` spans inside a data-file paragraph. */
const renderEmphasis = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith("**") && chunk.endsWith("**") ? (
      <strong key={i} className="text-white">
        {chunk.slice(2, -2)}
      </strong>
    ) : (
      chunk
    )
  );

/** A panel list item: plain string, or { icon, label, text }. */
const PanelItem = ({ item, iconClass, defaultIcon }) => {
  const isObject = typeof item === "object";
  const Icon = ICONS[isObject ? item.icon : defaultIcon] || ArrowRight;

  return (
    <li className="flex gap-3 items-start">
      <Icon size={16} className={`${iconClass} mt-1 shrink-0`} />
      <span>
        {isObject && item.label && (
          <strong className="text-white">{item.label} </strong>
        )}
        {isObject ? item.text : item}
      </span>
    </li>
  );
};

const Panel = ({ panel, fallbackIconClass, accent }) => (
  <div className="bg-[#1b1448] p-8 rounded-2xl border border-white/5">
    <h2 className="text-2xl font-bold mb-6 font-['Ubuntu']">{panel.title}</h2>

    {panel.items && (
      <ul className="space-y-4 text-gray-300">
        {panel.items.map((item, i) => (
          <PanelItem
            key={i}
            item={item}
            iconClass={panel.iconClass || fallbackIconClass}
            defaultIcon="ArrowRight"
          />
        ))}
      </ul>
    )}

    {panel.tags && (
      <div className="flex flex-wrap gap-3 mb-6">
        {panel.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    {panel.subItems && (
      <div className="pt-6 border-t border-white/10">
        <h3 className="font-bold mb-3 text-gray-200 font-['Ubuntu']">
          {panel.subTitle}
        </h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          {panel.subItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ArrowRight size={14} className={accent.arrow} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const Section = ({ section, accent }) => {
  switch (section.type) {
    case "twoCol":
      return (
        <section className="max-w-6xl mx-auto py-10 px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Panel
              panel={section.left}
              fallbackIconClass="text-blue-500"
              accent={accent}
            />
            <Panel
              panel={section.right}
              fallbackIconClass={accent.icon}
              accent={accent}
            />
          </div>
        </section>
      );

    case "tech":
      return (
        <section className="max-w-4xl mx-auto py-10 px-6 text-center">
          <h2 className="text-2xl font-bold mb-8 font-['Ubuntu']">
            Technologies Used
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {section.items.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      );

    case "gallery": {
      const Icon = section.icon ? ICONS[section.icon] : null;
      const isCode = section.variant === "code";
      const isPhone = section.variant === "phone";

      // Portrait phone shots need a narrower, centred track -- stretching them
      // across a 3-column grid makes them comically tall.
      if (isPhone) {
        return (
          <section className="max-w-4xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3 font-['Ubuntu']">
              {Icon && <Icon size={24} />}
              {section.title}
            </h2>
            {/* Matched on height, not width, so shots cropped at different
                aspect ratios still line up as a row of phones. */}
            <div className="flex flex-wrap justify-center items-start gap-10">
              {section.images.map((img, i) => (
                <figure key={i} className="flex flex-col items-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[380px] sm:h-[460px] w-auto rounded-2xl border border-white/10 shadow-2xl"
                  />
                  {img.caption && (
                    <figcaption className="mt-4 text-center text-sm text-gray-400 max-w-[240px]">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        );
      }

      return (
        <section className="max-w-7xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3 font-['Ubuntu']">
            {Icon && <Icon size={24} />}
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {section.images.map((img, i) =>
              isCode ? (
                <div
                  key={i}
                  className="bg-black/40 p-2 rounded-xl border border-white/10"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-lg opacity-85 hover:opacity-100 transition-opacity"
                  />
                </div>
              ) : (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-500"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </section>
      );
    }

    case "narrative":
      return (
        <section className="max-w-6xl mx-auto py-12 px-6">
          <h2
            className={`text-3xl font-bold mb-8 border-l-4 border-red-500 pl-4 font-['Ubuntu']`}
          >
            {section.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-300">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{renderEmphasis(p)}</p>
              ))}

              {section.list && (
                <>
                  <h3 className="text-xl font-bold text-white mt-6 font-['Ubuntu']">
                    {section.listTitle}
                  </h3>
                  <ul className="space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className={`${accent.arrow} mt-1 shrink-0`}>-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="grid gap-4 content-start">
              <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                <img
                  src={section.images[0].src}
                  alt={section.images[0].alt}
                  loading="lazy"
                  decoding="async"
                  className="rounded-lg w-full opacity-85 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {section.images.slice(1).map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="rounded-xl border border-white/10 opacity-85 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    case "compare":
      return (
        <section className="max-w-6xl mx-auto py-10 px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[section.left, section.right].map((panel, i) => (
              <div
                key={i}
                className="bg-[#1b1448]/50 p-8 rounded-2xl border border-white/5"
              >
                <h2
                  className={`text-2xl font-bold mb-4 font-['Ubuntu'] ${panel.titleClass}`}
                >
                  {panel.title}
                </h2>
                <ul className="space-y-3 text-gray-300">
                  {panel.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className={`${panel.markerClass} mt-1 shrink-0`}>
                        -
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      );

    default:
      return null;
  }
};

const CaseStudyLayout = ({ project }) => {
  const { accent } = project;

  return (
    <div
      id={project.slug}
      className="min-h-screen text-white font-['Montserrat'] bg-[#0f0a2a] pb-16"
    >
      {/* Back Navigation */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-['Ubuntu'] text-sm group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="flex flex-col items-center py-16 px-6">
        <div
          className={`mb-4 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase ${accent.badge}`}
        >
          Case Study
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-['Ubuntu']">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl text-gray-300">
          {project.tagline}
        </p>

        <div className="mb-10 relative group w-full max-w-[500px]">
          <div
            className={`absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 ${accent.glow}`}
          ></div>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              width="1200"
              fetchPriority="high"
              decoding="async"
              className="relative w-full rounded-2xl shadow-2xl border border-white/10"
            />
          ) : project.logo ? (
            /* App-icon treatment, mirroring how the app appears on the store */
            <div className="relative w-full aspect-[16/10] rounded-2xl border border-white/10 bg-[#14102e] shadow-2xl flex flex-col items-center justify-center gap-5">
              <img
                src={project.logo}
                alt={`${project.title} app icon`}
                width="512"
                height="512"
                fetchPriority="high"
                decoding="async"
                className="w-28 h-28 md:w-32 md:h-32 object-contain"
              />
              <span className="text-xl md:text-2xl font-bold font-['Ubuntu'] text-white/90">
                {project.title}
              </span>
            </div>
          ) : (
            <div
              className={`relative w-full aspect-[16/10] rounded-2xl border border-white/10 bg-gradient-to-br ${accent.glow} bg-opacity-20 flex items-center justify-center`}
            >
              <span className="text-3xl md:text-4xl font-bold font-['Ubuntu'] text-white/90 px-6 text-center">
                {project.title}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {project.links.map((link) => {
            const Icon = ICONS[link.icon] || ExternalLink;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all text-sm ${
                  LINK_STYLES[link.style] || LINK_STYLES.outline
                }`}
              >
                <Icon size={18} /> {link.label}
              </a>
            );
          })}
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2
          className={`text-3xl font-bold mb-6 border-l-4 pl-4 font-['Ubuntu'] ${accent.bar}`}
        >
          Project Overview
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          {project.overview}
        </p>
      </section>

      {project.sections.map((section, i) => (
        <Section key={i} section={section} accent={accent} />
      ))}

      <SiteFooter />
    </div>
  );
};

export default CaseStudyLayout;
