import React from "react";
import { Mail, Twitter, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { EMAIL } from "./SiteFooter";
import enhancedImage from "../assets/steven.webp";

const About = () => {
  const socialLinks = [
    {
      icon: <Mail size={22} />,
      link: `mailto:${EMAIL}`,
      label: "Email",
    },
    {
      icon: <Twitter size={22} />,
      link: "https://x.com/bluemagikSGO",
      label: "Twitter",
    },
    {
      icon: <Github size={22} />,
      link: "https://github.com/bluemagikSGO",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={22} />,
      link: "https://www.linkedin.com/in/steven-gabriel-059345371/",
      label: "LinkedIn",
    },
  ];

  const skills = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Firebase",
    "Git",
  ];

  return (
    <section
      id="about"
      className="w-full py-24 px-6 md:px-20 lg:px-32 text-white flex justify-center items-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 md:gap-20 items-center">
        {/* Left Side: Image Card */}
        <div className="relative w-full md:w-5/12 flex justify-center">
          <div className="relative w-full max-w-[360px]">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>

            {/* Card Container */}
            <div className="relative bg-[#1b1448] w-full aspect-[4/5] rounded-2xl border border-white/5 shadow-2xl p-5 group overflow-hidden">
              {/* Image */}
              <div className="overflow-hidden rounded-xl w-full h-[82%] bg-black/20">
                <img
                  src={enhancedImage}
                  alt="Portrait of Gabriel Steven"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="921"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Social Icons Row */}
              <div className="w-full h-[18%] flex items-center justify-around px-2">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="text-gray-500 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-7/12 flex flex-col gap-6 text-center md:text-left">
          <p className="text-blue-400 font-semibold font-['Ubuntu'] text-sm tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-3xl md:text-5xl font-bold font-['Ubuntu'] leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gabriel Steven
            </span>
            .
          </h2>

          <p className="text-lg md:text-xl font-medium text-gray-200 font-['Montserrat']">
            I am passionate about crafting exceptional softwares and
            distribution pipelines.
          </p>

          <p className="text-base md:text-lg text-gray-400 font-['Montserrat'] leading-relaxed">
            With a blend of design skills and coding expertise, I create unique
            online experiences that captivate users. Looking for a top-notch web
            developer to revamp your website? I can take your site or app to the
            next level, helping you attract more visitors and boost your reach.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-300 font-['Montserrat']"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4 flex justify-center md:justify-start">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all duration-300 font-semibold text-sm shadow-lg shadow-blue-600/20"
            >
              Let's Talk
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
