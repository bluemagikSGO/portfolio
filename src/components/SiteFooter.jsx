import { Link } from "react-router-dom";
import { SITE, SOCIALS } from "../config/site";

/**
 * Closing band on every page. Inner pages pass `cta` to get a short
 * contact prompt above the footer; the home page has a full Contact section.
 */
const SiteFooter = ({ cta = false }) => (
  <footer className="on-ink bg-ink text-on-ink">
    {cta && (
      <div className="wrap border-b border-on-ink-line py-20 sm:py-28">
        <p className="label text-on-ink-subtle">Get in touch</p>
        <p className="heading mt-6 max-w-[18ch] text-[clamp(2.25rem,5.5vw,4.75rem)]">
          Have a project, a role or a question?
        </p>
        <a
          href={`mailto:${SITE.email}`}
          className="link mt-10 inline-block font-serif text-[clamp(1.375rem,3vw,2.25rem)] break-all"
        >
          {SITE.email}
        </a>
      </div>
    )}

    <div className={`wrap flex flex-col gap-8 py-10 ${cta ? "" : "border-t border-on-ink-line"} text-[14px] text-on-ink-muted md:flex-row md:items-center md:justify-between`}>
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
        <span className="text-on-ink">
          © {new Date().getFullYear()} {SITE.name}
        </span>
        <span>{SITE.location}</span>
      </div>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="link">
              {s.label}
            </a>
          </li>
        ))}
        <li>
          <a href={SITE.cv} target="_blank" rel="noopener noreferrer" className="link">
            CV
          </a>
        </li>
        <li>
          <Link to="/iteminder" className="link">
            Iteminder
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default SiteFooter;
