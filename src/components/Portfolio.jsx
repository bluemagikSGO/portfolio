import React from "react";
import PortList from "./PortList";
import portimg from "../assets/metherappy.jpg";
import portsport from "../assets/sportsloc.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="h-screen bg-[#0b043a] text-white">
      <hr className="mx-15" />
      <p className="text-center text-2xl font-['Montserrat'] pt-10">
        Portfolio
      </p>
      <div className="md:flex md:space-y-0 space-y-10 gap-10 md:p-12 p-6 md:mt-0 mt-6">
        <div className="md:w-1/2 border-1">
          <PortList
            image={portimg}
            imageAlt="metherappy platform screenshot"
            category="Tele-Health Platform"
            title="meTherappy"
          />
        </div>
        <div className="md:w-1/2 border-1">
          <PortList
            image={portsport}
            imageAlt="Sportsloc platform"
            category="Sport Facility Discovery and Community"
            title="SportsLoc"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
