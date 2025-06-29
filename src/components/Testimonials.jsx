import React from "react";
import TestimonialList from "./TestimonialList";
import test1 from "../assets/therapist1.jpg";
import test2 from "../assets/therapist2.jpg";
import test3 from "../assets/therapist4.jpg";
import { Copyright } from "lucide-react";

const Testimonials = () => {
  return (
    <div id="testimonial" className="text-white pb-15">
      <hr className="mx-15 mt-10" />
      <p className="text-center text-2xl font-['Montserrat'] pt-10">
        What my clients have to say
      </p>
      <div className="md:flex md:items-stretch md:justify-center md:mx-10 md:ml-10 flex flex-col gap-6">
        <TestimonialList
          comment='"Steven is an easy to work with developer and he really knows how to make complicated tasks come alive, I recommend"'
          clientName="Donald"
          image={test2}
        />
        <TestimonialList
          comment='"A good frontend developer with creative eyes for simplified UX, I enjoy working with Steve"'
          clientName="Seyifunmi"
          image={test1}
        />
        <TestimonialList
          comment='"A friend recommended Steve and i must confess, I wish i had known him a while ago. My projects are done exactly to my taste with the right attention to details needed by a frontend developer, highly recommended"'
          clientName="Ruben"
          image={test3}
        />
      </div>
      <hr className="mx-15 mt-10" />
      <div className="text-center">stevengabriel2015@gmail.com</div>
      <footer className="flex gap-4 items-center justify-center mt-10">
        <Copyright /> {new Date().getFullYear()} All Rights Reserved Gabriel
        Steven O
      </footer>
    </div>
  );
};

export default Testimonials;
