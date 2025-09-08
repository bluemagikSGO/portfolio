import React from "react";
import { Link } from "react-router-dom";
import PortList from "./PortList";

import portimg from "../assets/metherappy.jpg";
import portsport from "../assets/sportsloc.jpg";
import portnova from "../assets/portnova.png";
import myport from "../assets/myport.png";
import portItem from "../assets/iteminder.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="text-white">
      {/* divider */}
      <hr
        className="mt-10 w-11/12 mx-auto border-white/20"
        aria-hidden="true"
      />

      {/* heading */}
      <h2 className="text-center text-2xl font-['Montserrat'] pt-10">
        Portfolio
      </h2>

      {/* grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 p-6 md:p-12">
        <Link to="/iteminder" className="block w-full">
          <div className="w-full border border-white/10 rounded-lg overflow-hidden">
            <PortList
              image={portItem}
              imageAlt="iteminder platform screenshot"
              category="Trip Items documentation and Reminder"
              title="Iteminder"
            />
          </div>
        </Link>

        <Link to="/metherappy" className="block w-full">
          <div className="w-full border border-white/10 rounded-lg overflow-hidden">
            <PortList
              image={portimg}
              imageAlt="meTherappy platform screenshot"
              category="Tele-Health Platform"
              title="meTherappy"
            />
          </div>
        </Link>

        <Link to="/sportloc" className="block w-full">
          <div className="w-full border border-white/10 rounded-lg overflow-hidden">
            <PortList
              image={portsport}
              imageAlt="SportsLoc platform"
              category="Sport Facility Discovery and Community"
              title="SportsLoc"
            />
          </div>
        </Link>

        <Link to="/novabeak" className="block w-full">
          <div className="w-full border border-white/10 rounded-lg overflow-hidden">
            <PortList
              image={portnova}
              imageAlt="Novabeak platform"
              category="Crypto Investment"
              title="Novabeak"
            />
          </div>
        </Link>

        <Link to="/myport" className="block w-full">
          <div className="w-full border border-white/10 rounded-lg overflow-hidden">
            <PortList
              image={myport}
              imageAlt="My portfolio site"
              category="My Portfolio"
              title="Portfolio Site"
            />
          </div>
        </Link>
      </div>

      <p className="text-center text-2xl font-['Montserrat'] pb-8">
        (JOBS DONE FOR CLIENTS CAN NOT BE UPLOADED HERE)
      </p>
    </section>
  );
};

export default Portfolio;
