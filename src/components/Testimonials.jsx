import React from "react";
import TestimonialCard from "./TestimonialList";
import { Copyright, Mail, ArrowUpRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Donald",
      role: "Client",
      comment:
        "Steven is an easy-to-work-with developer and he really knows how to make complicated tasks come alive. I recommend him.",
    },
    {
      id: 2,
      name: "Seyifunmi",
      role: "Product Designer",
      comment:
        "A good frontend developer with creative eyes for simplified UX. I enjoy working with Steve.",
    },
    {
      id: 3,
      name: "Ruben",
      role: "Entrepreneur",
      comment:
        "A friend recommended Steve and I must confess, I wish I had known him a while ago. My projects are done exactly to my taste with the right attention to details.",
    },
  ];

  return (
    <section id="testimonial" className="text-white w-full py-20">
      {/* Divider */}
      <hr className="w-11/12 max-w-6xl mx-auto border-white/10 mb-20" />

      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <p className="text-blue-400 font-semibold font-['Ubuntu'] text-sm tracking-widest uppercase mb-3">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] mb-4">
          What Clients Say
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Real feedback from people I've had the pleasure of working with
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10">
        {testimonials.map((item, index) => (
          <div key={item.id} className="h-full">
            <TestimonialCard
              comment={item.comment}
              clientName={item.name}
              role={item.role}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-28 border-t border-white/10 pt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Email CTA */}
          <a
            href="mailto:stevengabriel2015@gmail.com"
            className="group flex items-center gap-3 text-lg hover:text-blue-400 transition-colors duration-300"
          >
            <Mail size={22} />
            <span className="font-['Montserrat']">
              stevengabriel2015@gmail.com
            </span>
            <ArrowUpRight
              size={16}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Copyright */}
          <footer className="flex items-center gap-2 text-gray-500 text-sm font-['Ubuntu']">
            <Copyright size={14} />
            <span>
              {new Date().getFullYear()} Gabriel Steven O. All rights reserved.
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
