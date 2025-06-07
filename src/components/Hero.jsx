import { GlobeLock } from "lucide-react";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import React, { useState } from "react";
import { Link } from "react-scroll";

const Hero = () => {
  const [menu, setMenu] = useState(false);

  const toggled = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="relative h-screen bg-[url('assets/background.jpg')] bg-cover z-10">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <nav className="relative md:flex justify-between px-[10rem] pt-[2rem] items-center z-10 hidden">
          <div className="text-3xl font-bold text-white">
            <span className="flex items-center gap-4 justify-center font-['Ubuntu']">
              <GlobeLock size={48} strokeWidth={1.25} />
              G'Steven's
            </span>{" "}
          </div>

          <div>
            <ul className="md:flex gap-9  text-lg font-semibold text-gray-300 font-['Ubuntu']">
              <Link to="about" smooth={true} duration={500}>
                <li className="hover:text-white transition-all duration-300 hover:scale-[1.1] cursor-pointer">
                  About
                </li>
              </Link>

              <Link to="portfolio" smooth={true} duration={500}>
                <li className="hover:text-white transition-all duration-300 hover:scale-[1.1] cursor-pointer">
                  Portfolio
                </li>
              </Link>

              <li className="hover:text-white transition-all duration-300 hover:scale-[1.1] cursor-pointer">
                Testimonials
              </li>
            </ul>
          </div>
          <div>
            <button className="border-1 px-[1.5rem] py-[0.8rem] text-white hover:bg-white hover:text-black transition-all duration-500 font-semibold">
              Download CV
            </button>
          </div>
        </nav>

        {/* menu button */}

        <nav className="relative z-10 flex justify-between items-center p-6">
          <div className="text-3xl font-bold text-white md:hidden">
            <span className="flex items-center gap-4 justify-center">
              <GlobeLock size={48} strokeWidth={1.25} />
              G'Steven's
            </span>{" "}
          </div>

          <div
            className="relative z-10 text-white transition-all duration-300 md:hidden"
            onClick={toggled}
          >
            {menu ? <X size={40} /> : <Menu size={40} />}
          </div>
        </nav>
        {menu && (
          <div className="relative">
            <div className="absolute md:hidden w-full z-50">
              <ul className="flex flex-col text-lg font-semibold text-gray-300  bg-[#211c3f] gap-9 pt-8 transition-all duration-300 font-['Ubuntu']">
                <Link to="about" smooth={true} duration={500}>
                  <li
                    className="hover:text-white transition-all duration-300 hover:scale-[1.1] cursor-pointer border-b-2 pl-9 pb-4"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    About
                  </li>
                </Link>
                <Link to="portfolio" smooth={true} duration={500}>
                  <li
                    className="hover:text-white transition-all duration-300 hover:scale-[1.1] cursor-pointer border-b-2 pl-9 pb-4"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Portfolio
                  </li>
                </Link>

                <li
                  className="hover:text-white transition-all duration-300 hover:scale-[1.1] cursor-pointer border-b-2 pl-9 pb-4"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Testimonials
                </li>
                <li
                  className="hover:text-white transition-all duration-300 hover:scale-[1.1] cursor-pointer border-b-2 pl-9 pb-4"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <button className="border-1 px-[1rem] py-[0.4rem] text-white hover:bg-white hover:text-black transition-all duration-500 font-semibold active:text-red-500">
                    Download CV
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}

        <section
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-white relative z-10 flex flex-col items-center justify-center h-[40rem]  text-center px-3"
        >
          <div className="text-6xl font-bold  leading-16 md:w-[50rem] font-['Montserrat']">
            Freelance web developer based in Lagos Nigeria
          </div>
          <div className="mt-8 text-lg font-sans font-semibold">
            Expert development services by Nigeria-based freelancer for your
            website and web app needs.
          </div>
          <div className="leading-normal mt-8 space-x-4">
            <button className="border-1 px-[1.5rem] py-[0.8rem] text-black bg-white hover:bg-transparent hover:text-white transition-all duration-500 font-semibold">
              Let's Connect
            </button>
            <Link to="portfolio" smooth={true} duration={500}>
              <button className=" border-1 px-[1.5rem] py-[0.8rem] text-white hover:bg-white hover:text-black transition-all duration-500 font-semibold">
                Check My Works
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
