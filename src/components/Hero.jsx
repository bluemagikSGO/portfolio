import { GlobeLock } from "lucide-react";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import logo from "../assets/programming.png";

AOS.init();

import React, { useState } from "react";
import { Link } from "react-scroll";
import cv from "/public/gabsteven.pdf";

const Hero = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false); // Modal state
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggled = () => {
    setMenu(!menu);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // form handling

    emailjs
      .sendForm(
        "service_56vf85l", // Replace with your EmailJS Service ID
        "template_7up3rad", // Replace with your EmailJS Template ID
        formRef.current,
        "rX-Q7uQmFYKniQDoU" // Replace with your Public Key
      )
      .then(
        (result) => {
          alert("Message sent and delivered!");
          setShowModal(false);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div>
      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="bg-gray-300 rounded-lg p-8 w-full max-w-sm shadow-lg relative font-['Montserrat'] z-10">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-black">
              Contact Me
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="relative h-fit bg-[url('assets/background.jpg')] bg-cover z-10">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <nav className="relative md:flex justify-between px-[10rem] pt-[2rem] items-center z-10 hidden">
          <div className="text-3xl font-bold text-white">
            <span className="flex items-center gap-4 justify-center font-['Ubuntu']">
              <img className="w-17" src={logo} alt="logo" />
              Gabriel Steven
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
              <Link to="testimonial" smooth={true} duration={500}>
                <li className="hover:text-white transition-all duration-300 hover:scale-[1.1] cursor-pointer">
                  Testimonials
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <button className="border-1 px-[1.5rem] py-[0.8rem] text-white hover:bg-white hover:text-black transition-all duration-500 font-semibold">
              <a href={cv} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </button>
          </div>
        </nav>

        {/* menu button */}

        <nav className="relative z-10 flex justify-between items-center p-6">
          <div className="text-3xl font-bold text-white md:hidden">
            <span className="flex items-center gap-4 justify-center">
              <img className="w-12" src={logo} alt="logo" />
              Gabriel Steven
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
                <Link to="testimonial" smooth={true} duration={500}>
                  <li
                    className="hover:text-white transition-all duration-300 hover:scale-[1.1] cursor-pointer border-b-2 pl-9 pb-4"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Testimonials
                  </li>
                </Link>
                <li
                  className="hover:text-white transition-all duration-300 hover:scale-[1.1] cursor-pointer border-b-2 pl-9 pb-4"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <button className="border-1 px-[1rem] py-[0.4rem] text-white hover:bg-white hover:text-black transition-all duration-500 font-semibold active:text-red-500">
                    <a href={cv} target="_blank" rel="noopener noreferrer">
                      Download CV
                    </a>
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
          <div className="text-5xl font-bold  leading-16 md:w-[50rem] font-['Montserrat']">
            Freelance front-end web developer based in Lagos Nigeria
          </div>
          <div className="mt-8 text-lg font-sans font-semibold">
            Expert development services by Nigeria-based freelancer for your
            website and web app needs.
          </div>
          <div className="leading-normal mt-8 space-x-4">
            <button
              className="border-1 px-[1.5rem] py-[0.8rem] text-black bg-white hover:bg-transparent hover:text-white transition-all duration-500 font-semibold"
              onClick={() => setShowModal(true)}
            >
              Let's Connect
            </button>
            <Link to="portfolio" smooth={true} duration={500}>
              <button className=" border-1 px-[1.5rem] py-[0.8rem] text-white hover:bg-white hover:text-black transition-all duration-500 font-semibold">
                Check My Works
              </button>
            </Link>
          </div>
        </section>

        {/* Contact Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 opacity-60">
            <div className="bg-white rounded-lg p-8 w-full max-w-sm shadow-lg relative font-['Montserrat'] z-50">
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center text-black">
                Contact Me
              </h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
        {/* ...existing code... */}
      </div>
    </div>
  );
};

export default Hero;
