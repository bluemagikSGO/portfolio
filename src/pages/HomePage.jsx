import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Counter from "../components/Counter";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
};

export default HomePage;
