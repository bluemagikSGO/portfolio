import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const iconProps = { size: 16, strokeWidth: 1.5, "aria-hidden": true };

/** Numbered section heading on the shared 3 / 9 column grid. */
export const SectionHead = ({ id, index, label, title, children }) => (
  <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-10">
    <p className="label flex gap-4 text-subtle lg:col-span-3 lg:pt-4 [.on-ink_&]:text-on-ink-subtle">
      <span>{index}</span>
      <span>{label}</span>
    </p>
    <div className="lg:col-span-9">
      <h2 id={id} className="heading max-w-[20ch] text-[clamp(2.25rem,5vw,4.25rem)]">
        {title}
      </h2>
      {children && (
        <div className="mt-6 max-w-[38rem] text-[17px] leading-relaxed text-muted sm:text-lg [.on-ink_&]:text-on-ink-muted">
          {children}
        </div>
      )}
    </div>
  </div>
);

/** Text link with a trailing arrow. Internal paths use the router. */
export const ArrowLink = ({ to, href, children, className = "" }) => {
  const classes = `group inline-flex items-center gap-2 text-[15px] font-medium ${className}`;
  const label = (
    <span className="underline decoration-current/30 decoration-1 underline-offset-[0.3em] transition-[text-decoration-color] group-hover:decoration-current">
      {children}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {label}
        <ArrowRight
          {...iconProps}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {label}
      <ArrowUpRight
        {...iconProps}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
};

/** Solid rectangular button-style link. */
export const ButtonLink = ({ to, href, children, icon = ArrowRight, download }) => {
  const Icon = icon;
  const classes =
    "group inline-flex items-center gap-3 rounded-[3px] bg-ink px-5 py-3.5 text-[15px] font-medium text-paper transition-colors duration-300 hover:bg-accent [.on-ink_&]:bg-paper [.on-ink_&]:text-ink [.on-ink_&]:hover:bg-accent-on-ink";
  const content = (
    <>
      {children}
      <Icon {...iconProps} />
    </>
  );
  return to ? (
    <Link to={to} className={classes}>
      {content}
    </Link>
  ) : (
    <a href={href} className={classes} download={download}>
      {content}
    </a>
  );
};

/** Bordered frame for screenshots, with explicit dimensions to avoid layout shift. */
export const Shot = ({ image, className = "", imgClassName = "", sizes, eager = false }) => (
  <div
    className={`overflow-hidden rounded-[4px] border border-line bg-paper-2 [.on-ink_&]:border-on-ink-line [.on-ink_&]:bg-ink-2 ${className}`}
  >
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes : undefined}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      className={`block h-auto w-full ${imgClassName}`}
    />
  </div>
);
