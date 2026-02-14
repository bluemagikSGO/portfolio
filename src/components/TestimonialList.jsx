import React from "react";
import { Quote } from "lucide-react";

const gradientColors = [
  "from-blue-500 to-purple-600",
  "from-teal-500 to-blue-500",
  "from-pink-500 to-rose-500",
  "from-amber-500 to-orange-500",
  "from-green-500 to-emerald-600",
];

const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const TestimonialCard = ({ comment, clientName, role, index = 0 }) => {
  const gradient = gradientColors[index % gradientColors.length];

  return (
    <div className="h-full flex flex-col justify-between bg-[#1b1448] p-8 rounded-2xl border border-white/5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-blue-500/30">
      {/* Top Section: Quote Icon & Text */}
      <div>
        <div className="mb-6 text-blue-400 opacity-40">
          <Quote size={36} />
        </div>

        <p className="font-['Montserrat'] text-gray-200 text-base md:text-lg leading-relaxed italic">
          "{comment}"
        </p>
      </div>

      {/* Bottom Section: Client Info with Initials */}
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg font-['Ubuntu'] shrink-0 shadow-lg`}
        >
          {getInitials(clientName)}
        </div>

        <div>
          <h4 className="font-['Ubuntu'] text-base font-bold text-white tracking-wide">
            {clientName}
          </h4>
          {role && (
            <p className="text-sm text-gray-400 font-['Montserrat']">{role}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
