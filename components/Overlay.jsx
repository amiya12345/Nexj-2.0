import Image from "next/image";
import React from "react";

const OverlayItem = ({ title, backgroundImg, des }) => {
  return (
    <div
      className="w-full"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-offset="0"
      data-aos-duration="1000"
      data-aos-delay="0"
    >
      <div className="max-w-full mx-auto">
        <Image
          className="group-hover:opacity-10 cursor-pointer"
          src={backgroundImg}
          alt="/"
        />
        <div className="absolute flex items-center justify-center w-full bottom-0 group transition-all duration-300 ease-linear hover:bg-sky-500">
          <h3
            className="text-2xl text-white tracking-wider text-center"
            
          >
            {title}
          </h3>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};
export default OverlayItem;
