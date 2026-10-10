import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top on route changes, or to the element named in the hash
 * (e.g. /#work from an inner page). Lazy routes may not have rendered the
 * target yet, so the lookup retries for a few frames.
 */
const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let frame;
    let tries = 0;
    const find = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ block: "start" });
      } else if (tries++ < 30) {
        frame = requestAnimationFrame(find);
      }
    };
    find();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
