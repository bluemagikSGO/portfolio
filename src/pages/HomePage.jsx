import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import Metherappy from "./Metherappy";

const HomePage = () => {
  return (
    <div id="homepage">
      <Hero />
      <About />
      <Portfolio />
      <Counter />
      <Testimonials />
    </div>
  );
};

export default HomePage;
