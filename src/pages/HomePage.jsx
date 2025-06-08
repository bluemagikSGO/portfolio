import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Counter />
      <Testimonials />
    </div>
  );
};

export default HomePage;
