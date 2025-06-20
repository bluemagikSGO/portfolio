import React from "react";

const PortList = ({ image, imageAlt, category, title }) => {
  return (
    <div>
      <img src={image} alt={imageAlt} />
      <p className="p-8 text-lg font-['Ubuntu']  text-gray-300">{category}</p>
      <p className="pl-8 pb-4 md:text-4xl text-3xl font-bold font-['Montserrat']">
        {title}
      </p>
    </div>
  );
};

export default PortList;
