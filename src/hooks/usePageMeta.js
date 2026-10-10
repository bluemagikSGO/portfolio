import { useEffect } from "react";
import { SITE } from "../config/site";

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/**
 * Keeps the document title, description, canonical URL and robots directive
 * in sync with the current route.
 *
 * Note: social scrapers (LinkedIn, X, Facebook) do not execute JS, so they
 * always read the static tags in index.html. Per-project link previews would
 * require prerendering or SSR.
 */
export default function usePageMeta({ title, description, canonicalPath, noindex = false }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMeta('meta[property="og:title"]', "content", title);
      setMeta('meta[name="twitter:title"]', "content", title);
    }

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }

    if (canonicalPath) {
      // Always the production origin, so previews and local builds agree.
      const url = new URL(canonicalPath, SITE.url).href;
      setMeta('link[rel="canonical"]', "href", url);
      setMeta('meta[property="og:url"]', "content", url);
    }

    setMeta('meta[name="robots"]', "content", noindex ? "noindex" : "index, follow");
  }, [title, description, canonicalPath, noindex]);
}
