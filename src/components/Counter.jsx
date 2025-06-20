import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <>
      <hr className="mx-15 mt-10 text-white" />
      <div
        className="
    // medium devices
     md:flex md:flex-row md:px-0 md:justify-between
    //  mobile devices
     mt-15  px-25  flex flex-col items-center gap-12 text-center h-fit"
      >
        <div className="text-white text-5xl md:w-5 flex md:flex-row flex-col items-center gap-5 justify-center md:px-40 font-bold text-center">
          <CountUp start={0} end={1} duration={3} delay={0} />
          <div className="md:text-sm text-[0.9rem] font-['Montserrat']">
            Years of experience
          </div>
        </div>

        <div className="text-white text-5xl md:w-5 flex items-center gap-5 justify-center md:px-40 font-bold  text-center md:flex-row flex-col">
          <CountUp start={0} end={9} duration={3} />
          <div className="md:text-sm text-[0.9rem] font-['Montserrat']">
            Successful projects
          </div>
        </div>
        <div className="text-white text-5xl md:w-5 flex items-center gap-5 justify-center md:px-40 font-bold  text-center md:flex-row flex-col">
          <CountUp start={0} end={11} duration={3} />
          <div className="md:text-sm text-[0.9rem] font-['Montserrat']">
            Happy clients
          </div>
        </div>
        <div className="text-white text-5xl md:w-5 flex items-center gap-5 justify-center md:px-40 font-bold  text-center md:flex-row flex-col">
          <CountUp start={0} end={1} duration={3} />
          <div className="md:text-sm text-[0.9rem] font-['Montserrat']">
            Number of awards
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
