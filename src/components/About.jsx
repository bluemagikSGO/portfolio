import React from "react";
import { Instagram, Twitter, Youtube, X } from "lucide-react";
import enhancedImage from "../assets/steven.png";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen md:flex md:flex-row flex flex-col md:px-[10rem] text-white md:gap-9 items-center justify-center md:pt-0 pt-15"
    >
      <div className="flex md:w-[40%] md:py-35 ">
        <div className="relative bg-[#1b1448] md:w-[80%] w-[97%] md:h-[430px] h-[350px] border-1 border-blue-100 py-3 rounded-md">
          <img
            src={enhancedImage}
            alt="image"
            className="w-[320px] md:h-[340px] h-[290px] md:absolute left-6 p-3 md:p-0 transition-all duration-1000 hover:scale-[1.1] cursor-pointer"
          />

          <div className="absolute bottom-0 flex justify-between w-[100%] gap-5  text-2xl p-3">
            <div className="hover:text-red-500 active:text-red-500">
              <Instagram size={35} />
            </div>
            <div className="hover:text-red-500 active:text-red-500">
              <Twitter size={35} />
            </div>
            <div className="hover:text-red-500 active:text-red-500">
              <Youtube size={35} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:w-[60%]  flex-col gap-7 justify-center items-center p-6">
        <p className="md:text-[2.2rem] text-[1.3rem] font-semibold font-['Ubuntu']">
          I’m Gabriel Steven. I am passionate about crafting exceptional
          websites and web applications. With a blend of design skills and
          coding expertise, I create unique online experiences that captivate
          users.
        </p>

        <p className="text-[1.2rem] md:text-[1.2rem] text-gray-300 font-['Montserrat'] md:pb-0 pb-7">
          Looking for a top-notch web developer to revamp your website or web
          Apps? Look no further than Gabriel Steven. With years of experience
          and a keen eye for design, Steve can take your site or app to the next
          level, helping you attract more visitors and boost your reach.
        </p>
      </div>
    </section>
  );
};

export default About;
