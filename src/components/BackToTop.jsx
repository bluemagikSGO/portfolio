import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Lightweight replacement for antd's FloatButton.BackTop — appears once the
 * user has scrolled a screen down, and respects prefers-reduced-motion.
 */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#1b1448] border border-white/10 text-gray-300 shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
