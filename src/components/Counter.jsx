import React from "react";
import CountUp from "react-countup";
import { Briefcase, FolderOpen, Users, Award } from "lucide-react";

const Counter = () => {
  const stats = [
    { number: 2, label: "Years of Experience", icon: <Briefcase size={24} /> },
    { number: 20, label: "Successful Projects", icon: <FolderOpen size={24} /> },
    { number: 11, label: "Happy Clients", icon: <Users size={24} /> },
    { number: 1, label: "Award Won", icon: <Award size={24} /> },
  ];

  return (
    <div className="w-full text-white">
      {/* Divider */}
      <hr className="w-11/12 max-w-6xl mx-auto border-white/10 my-10" />

      {/* Stats Container */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-[#1b1448]/30 border border-white/5 hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="text-blue-400 mb-1">{stat.icon}</div>

            <h3 className="text-4xl md:text-5xl font-bold text-white font-['Montserrat']">
              <CountUp start={0} end={stat.number} duration={3} delay={0.5} />
              <span className="text-blue-400 text-2xl ml-1">+</span>
            </h3>

            <p className="text-sm font-['Montserrat'] font-medium text-gray-400 text-center leading-tight">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
