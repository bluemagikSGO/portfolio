import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import BackToTop from "../components/BackToTop";
import usePageMeta from "../hooks/usePageMeta";

const HomePage = () => {
  usePageMeta({
    title: "Gabriel Steven — Full-Stack Developer in Lagos",
    description:
      "Full-stack developer based in Lagos building performant websites, web apps, and mobile experiences with React, Node.js, and Supabase.",
    canonicalPath: "/",
  });

  return (
    <div id="homepage">
      <Hero />
      <About />
      <Portfolio />
      <Counter />
      <Testimonials />
      <BackToTop />
    </div>
  );
};

export default HomePage;
