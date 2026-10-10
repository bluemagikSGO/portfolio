import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV, SITE } from "../config/site";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route or anchor changes.
  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();

    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper transition-colors duration-300 ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-serif text-[1.375rem] leading-none tracking-[-0.015em]"
        >
          {SITE.name}
          <span className="sr-only">, home</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9 text-[15px]">
            {NAV.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={SITE.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[3px] border border-ink px-3.5 py-2 font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                CV
                <span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 px-2 py-2 text-[15px] font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          ref={menuRef}
          aria-label="Menu"
          className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-paper md:hidden"
        >
          <div className="wrap flex min-h-full flex-col justify-between pt-6 pb-10">
            <ul>
              {NAV.map((item, i) => (
                <li key={item.id} className="border-b border-line">
                  <Link
                    to={`/#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5"
                  >
                    <span className="heading text-[2.5rem]">{item.label}</span>
                    <span className="label text-subtle">0{i + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 text-[15px]">
              <a href={SITE.cv} target="_blank" rel="noopener noreferrer" className="link self-start">
                Download CV (PDF)
              </a>
              <a href={`mailto:${SITE.email}`} className="link self-start">
                {SITE.email}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
