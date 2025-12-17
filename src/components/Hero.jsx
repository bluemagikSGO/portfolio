import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import logo from "../assets/programming.png";
import cv from "/public/gabsteven.pdf"; // Ensure this path is correct based on your folder structure

const Hero = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      once: true, // Animations only happen once
    });
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56vf85l",
        "template_7up3rad",
        formRef.current,
        "rX-Q7uQmFYKniQDoU"
      )
      .then(
        () => {
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
    <div className="relative w-full h-screen min-h-[600px]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-[url('assets/background.jpg')] bg-cover bg-center bg-no-repeat z-0">
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        
        {/* Navigation Bar */}
        <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold text-white font-['Ubuntu']">
            <span className="flex items-center gap-3">
              <img className="w-12 md:w-16" src={logo} alt="logo" />
              Gabriel Steven
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 text-lg font-semibold text-gray-300 font-['Ubuntu']">
              {["About", "Portfolio", "Testimonial"].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                >
                  <li className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
            
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold rounded-sm"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
            {menu ? <X size={35} /> : <Menu size={35} />}
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menu && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-[#211c3f] border-t border-gray-700 shadow-xl z-50">
            <ul className="flex flex-col text-lg font-semibold text-gray-300 font-['Ubuntu'] p-6 gap-4">
              {["About", "Portfolio", "Testimonial"].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(false)}
                >
                  <li className="hover:text-white border-b border-gray-600 pb-2 cursor-pointer">
                    {item}
                  </li>
                </Link>
              ))}
              <li className="pt-2">
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Hero Text Content */}
        <section
          className="flex-grow flex flex-col items-center justify-center text-center px-4"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white font-['Montserrat'] leading-tight max-w-4xl">
            Freelance front-end web developer based in Lagos, Nigeria
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-sans font-medium max-w-2xl">
            Expert development services by a Nigeria-based freelancer for your
            website and web app needs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 bg-white text-black font-semibold border border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-sm"
            >
              Let's Connect
            </button>
            
            <Link to="portfolio" smooth={true} duration={500}>
              <button className="px-8 py-3 border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                Check My Works
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* Contact Modal (Fixed Overlay) */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-2xl relative z-10 font-['Montserrat'] animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Get In Touch
            </h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#1b1448] text-white py-3 rounded font-bold hover:bg-blue-900 transition-colors duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;