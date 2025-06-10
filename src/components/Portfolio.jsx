import React from "react";
import PortList from "./PortList";
import portimg from "../assets/metherappy.jpg";
import portsport from "../assets/sportsloc.jpg";
import { Link } from "react-router-dom";
import Metherappy from "../pages/Metherappy";

const Portfolio = () => {
  return (
    <section id="portfolio" className="h-fit  text-white">
      <hr className="mx-15 mt-10" />
      <p className="text-center text-2xl font-['Montserrat'] pt-10">
        Portfolio
      </p>
      <div className="md:flex md:space-y-0 space-y-10 gap-10 md:p-12 p-6 ">
        <div className="md:w-1/2 border-1">
          <Link to="/metherappy">
            <PortList
              image={portimg}
              imageAlt="metherappy platform screenshot"
              category="Tele-Health Platform"
              title="meTherappy"
            />
          </Link>
        </div>

        <div className="md:w-1/2 border-1">
          <Link to="/sportloc">
            <PortList
              image={portsport}
              imageAlt="Sportsloc platform"
              category="Sport Facility Discovery and Community"
              title="SportsLoc"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
