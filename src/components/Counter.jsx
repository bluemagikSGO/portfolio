import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  const stats = [
    { number: 1, label: "Year of Experience" },
    { number: 9, label: "Successful Projects" },
    { number: 11, label: "Happy Clients" },
    { number: 1, label: "Award Won" },
  ];

  return (
    <div className="w-full text-white">
      {/* Divider */}
      <hr className="w-11/12 max-w-6xl mx-auto border-white/20 my-10" />

      {/* Stats Container */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 w-full md:w-1/4"
          >
            {/* The Number */}
            <h3 className="text-5xl md:text-6xl font-bold text-blue-400">
              <CountUp start={0} end={stat.number} duration={3} delay={0.5} />
              <span className="text-3xl ml-1">+</span> {/* Optional '+' sign */}
            </h3>

            {/* The Label */}
            <p className="text-sm md:text-base font-['Montserrat'] font-medium text-gray-300 text-center md:text-left max-w-[100px] leading-tight">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
