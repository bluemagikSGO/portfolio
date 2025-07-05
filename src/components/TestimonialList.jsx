import React from "react";

const TestimonialList = ({ comment, image, clientName }) => {
  return (
    <div>
      <div className="md:relative md:max-w-sm md:h-[257.15px]  bg-[#3a3179] p-5 mx-7 mt-5">
        <p className="font-['Montserrat'] text-lg">{comment}</p>
        <div className="md:absolute md:bottom-3 flex items-center gap-4">
          <img className="rounded-[50%] w-10" src={image} alt="image" />
          <p className="font-['Montserrat'] text-xl font-bold">{clientName}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
