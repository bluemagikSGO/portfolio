import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Send, ArrowDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import logo from "../assets/programming.webp";
const cv = "/Gabriel_Steven_CV.pdf";

const Hero = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message }
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when modal or mobile menu is open
  useEffect(() => {
    if (showModal || menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal, menu]);

  const toggleMenu = () => setMenu(!menu);

  const closeModal = () => {
    setShowModal(false);
    setStatus(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot: bots fill hidden fields, humans never see this one.
    if (formRef.current.website.value) return;

    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_56vf85l",
        "template_7up3rad",
        formRef.current,
        "rX-Q7uQmFYKniQDoU"
      )
      .then(
        () => {
          setForm({ name: "", email: "", message: "" });
          setSending(false);
          setStatus({
            type: "success",
            message: "Message sent — I'll get back to you shortly.",
          });
          setTimeout(closeModal, 2500);
        },
        (error) => {
          console.error(error?.text || error);
          setSending(false);
          setStatus({
            type: "error",
            message: "Couldn't send that. Please try again or email me directly.",
          });
        }
      );
  };

  const navItems = ["About", "Portfolio", "Testimonial"];

  // Native smooth scroll — `html { scroll-behavior: smooth }` lives in App.css.
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ block: "start" });
  };

  return (
    <div className="relative w-full h-screen min-h-[600px]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-[url('assets/background.webp')] bg-cover bg-center bg-no-repeat z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#0f0a2a]/88 to-[#0f0a2a]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation Bar */}
        <nav className="w-full max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-white font-['Ubuntu']">
            <span className="flex items-center gap-2">
              <img
                className="w-10 md:w-12"
                src={logo}
                alt=""
                width="48"
                height="48"
              />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Gabriel Steven
              </span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 text-base font-medium text-gray-400 font-['Ubuntu']">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase());
                    }}
                    className="relative block hover:text-white transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500/50 px-6 py-2.5 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 font-semibold rounded-lg text-sm"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white cursor-pointer p-1"
            onClick={toggleMenu}
            aria-label={menu ? "Close menu" : "Open menu"}
          >
            {menu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden fixed inset-0 top-[72px] bg-[#0f0a2a]/98 backdrop-blur-md z-50 transition-all duration-300 ${
            menu
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col text-lg font-medium text-gray-300 font-['Ubuntu'] p-8 gap-2">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                    scrollToSection(item.toLowerCase());
                  }}
                  className="block hover:text-white hover:bg-white/5 py-4 px-4 rounded-lg cursor-pointer transition-all duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-4 px-4">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-blue-500/50 px-6 py-2.5 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold rounded-lg text-sm"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>

        {/* Hero Text Content */}
        <section className="flex-grow flex flex-col items-center justify-center text-center px-6 animate-fade-up">
          {/* Status Badge */}
          <div className="mb-8 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-['Ubuntu'] font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for freelance work
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-['Montserrat'] leading-tight max-w-5xl">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Based in Lagos
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-['Montserrat'] font-medium max-w-2xl leading-relaxed">
            I build performant websites, web apps, and mobile experiences
            that help businesses grow and connect with their audience.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3.5 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 rounded-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 text-sm"
            >
              Let's Connect
            </button>

            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("portfolio");
              }}
              className="px-8 py-3.5 border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 rounded-lg text-sm text-center"
            >
              View My Work
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce text-gray-500">
            <ArrowDown size={20} />
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="bg-[#1b1448] rounded-2xl p-8 w-full max-w-md shadow-2xl relative z-10 font-['Montserrat'] border border-white/10">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition-colors"
              onClick={closeModal}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <h2
              id="contact-modal-title"
              className="text-2xl font-bold mb-2 text-white font-['Ubuntu']"
            >
              Get In Touch
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Have a project in mind? Let's talk about it.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot — hidden from users, catches bots */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] w-px h-px opacity-0"
              />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <textarea
                name="message"
                placeholder="How can I help you?"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
                {!sending && <Send size={16} />}
              </button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm text-center rounded-lg px-4 py-3 border ${
                    status.type === "success"
                      ? "text-green-400 bg-green-500/10 border-green-500/30"
                      : "text-red-400 bg-red-500/10 border-red-500/30"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
