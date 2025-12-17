import React from "react";
import { Mail, Twitter, Youtube, Linkedin } from "lucide-react";
import enhancedImage from "../assets/steven.png";

const About = () => {
  const socialLinks = [
    {
      icon: <Mail size={30} />,
      link: "mailto:stevengabriel2015@gmail.com",
      label: "Email",
    },
    {
      icon: <Twitter size={30} />,
      link: "https://x.com/bluemagikSGO",
      label: "Twitter",
    },
    {
      icon: <Youtube size={30} />,
      link: "#", // Add your YT link if you have one
      label: "YouTube",
    },
    {
      icon: <Linkedin size={30} />,
      link: "https://www.linkedin.com/in/steven-gabriel-059345371/",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen md:min-h-fit py-20 px-6 md:px-20 lg:px-32 text-white flex justify-center items-center " // Added dark bg fallback
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        {/* Left Side: Image Card */}
        <div className="relative w-full md:w-5/12 flex justify-center">
          {/* Card Container */}
          <div className="relative bg-[#1b1448] w-full max-w-[380px] aspect-[4/5] rounded-xl border border-blue-900/50 shadow-2xl p-6 group">
            {/* Image */}
            <div className="overflow-hidden rounded-lg w-full h-[85%] bg-black/20">
              <img
                src={enhancedImage}
                alt="Gabriel Steven"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Social Icons Row */}
            <div className="absolute bottom-0 left-0 w-full h-[15%] flex items-center justify-around px-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-gray-400 hover:text-red-500 hover:-translate-y-1 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-7/12 flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold font-['Ubuntu'] leading-tight">
            Hi, I’m <span className="text-blue-400">Gabriel Steven</span>.
          </h2>

          <p className="text-lg md:text-xl font-medium text-gray-200">
            I am passionate about crafting exceptional websites and web
            applications.
          </p>

          <p className="text-base md:text-lg text-gray-400 font-['Montserrat'] leading-relaxed">
            With a blend of design skills and coding expertise, I create unique
            online experiences that captivate users. Looking for a top-notch web
            developer to revamp your website? I can take your site or app to the
            next level, helping you attract more visitors and boost your reach.
          </p>

          {/* Optional CTA Button */}
          <div className="pt-4">
            <a
              href="mailto:stevengabriel2015@gmail.com"
              className="inline-block px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300 font-semibold"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
