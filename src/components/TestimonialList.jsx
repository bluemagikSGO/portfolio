import React from "react";
import { Quote } from "lucide-react"; // Assuming you have lucide-react installed

const TestimonialCard = ({ comment, image, clientName, role }) => {
  return (
    <div className="h-full flex flex-col justify-between bg-[#1b1448] p-8 rounded-xl border border-white/5 shadow-lg transition-transform duration-300 hover:-translate-y-2">
      {/* Top Section: Quote Icon & Text */}
      <div>
        <div className="mb-6 text-blue-400 opacity-50">
          <Quote size={40} />
        </div>

        <p className="font-['Montserrat'] text-gray-200 text-lg leading-relaxed italic">
          "{comment}"
        </p>
      </div>

      {/* Bottom Section: Client Info */}
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
        <img
          className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/50"
          src={image}
          alt={`${clientName} profile`}
        />

        <div>
          <h4 className="font-['Ubuntu'] text-lg font-bold text-white tracking-wide">
            {clientName}
          </h4>
          {/* Optional: Add role if you have it (e.g. CEO, Founder) */}
          {role && (
            <p className="text-sm text-gray-400 font-['Montserrat']">{role}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
