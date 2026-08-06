import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

const NotFound = () => {
  usePageMeta({
    title: "Page not found | Gabriel Steven",
    description: "The page you were looking for doesn't exist.",
  });

  return (
    <div className="min-h-screen bg-[#0f0a2a] text-white font-['Montserrat'] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-blue-400 font-semibold font-['Ubuntu'] text-sm tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="text-4xl md:text-6xl font-bold font-['Ubuntu'] mb-6">
        Page not found
      </h1>
      <p className="text-gray-400 text-lg max-w-md mb-10">
        That link doesn't lead anywhere. Let's get you back to the work.
      </p>
      <Link
        to="/"
        className="group inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all duration-300 font-semibold text-sm shadow-lg shadow-blue-600/20"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
