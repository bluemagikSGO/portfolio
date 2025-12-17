import React from "react";
import TestimonialCard from "./TestimonialList"; // Assuming you renamed the file, or keep as "./TestimonialList"
import { Copyright, Mail } from "lucide-react";

// Import images
import test1 from "../assets/therapist1.jpg";
import test2 from "../assets/therapist2.jpg";
import test3 from "../assets/therapist4.jpg";

const Testimonials = () => {
  // 1. Data Array for cleaner code
  const testimonials = [
    {
      id: 1,
      name: "Donald",
      role: "Client",
      image: test2,
      comment:
        "Steven is an easy-to-work-with developer and he really knows how to make complicated tasks come alive. I recommend him.",
    },
    {
      id: 2,
      name: "Seyifunmi",
      role: "Product Designer",
      image: test1,
      comment:
        "A good frontend developer with creative eyes for simplified UX. I enjoy working with Steve.",
    },
    {
      id: 3,
      name: "Ruben",
      role: "Entrepreneur",
      image: test3,
      comment:
        "A friend recommended Steve and I must confess, I wish I had known him a while ago. My projects are done exactly to my taste with the right attention to details.",
    },
  ];

  return (
    <section id="testimonial" className="text-white w-full py-16 ">
      {/* Divider */}
      <hr className="w-11/12 max-w-6xl mx-auto border-white/20 mb-16" />

      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] mb-3">
          Client Testimonials
        </h2>
        <p className="text-gray-400 text-lg">
          What people are saying about my work
        </p>
      </div>

      {/* Grid Container (Better than Flex for cards) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10">
        {testimonials.map((item) => (
          <div key={item.id} className="h-full">
            <TestimonialCard
              comment={item.comment}
              clientName={item.name}
              role={item.role}
              image={item.image}
            />
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-24 border-t border-white/10 pt-10">
        <div className="flex flex-col items-center gap-6">
          {/* Email CTA */}
          <a
            href="mailto:stevengabriel2015@gmail.com"
            className="flex items-center gap-3 text-xl hover:text-blue-400 transition-colors duration-300"
          >
            <Mail size={24} />
            <span className="font-['Montserrat']">
              stevengabriel2015@gmail.com
            </span>
          </a>

          {/* Copyright */}
          <footer className="flex items-center gap-2 text-gray-500 text-sm font-['Ubuntu']">
            <Copyright size={16} />
            <span>
              {new Date().getFullYear()} All Rights Reserved | Gabriel Steven O.
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
