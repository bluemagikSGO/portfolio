import React from "react";
import { Copyright, Mail, ArrowUpRight } from "lucide-react";

export const EMAIL = "stevengabriel2015@gmail.com";

const SiteFooter = ({ className = "mt-20 border-t border-white/10 pt-10" }) => {
  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <a
          href={`mailto:${EMAIL}`}
          className="group flex items-center gap-3 text-lg hover:text-blue-400 transition-colors duration-300"
        >
          <Mail size={22} />
          <span className="font-['Montserrat']">{EMAIL}</span>
          <ArrowUpRight
            size={16}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </a>

        <footer className="flex items-center gap-2 text-gray-500 text-sm font-['Ubuntu']">
          <Copyright size={14} />
          <span>
            {new Date().getFullYear()} Gabriel Steven O. All rights reserved.
          </span>
        </footer>
      </div>
    </div>
  );
};

export default SiteFooter;
