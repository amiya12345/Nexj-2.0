import React from "react";

const About = () => {
  return (
    <div id="about" className=" h-full bg-omio text-gray-300 max-w-full">
      <div className="max-w-full flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-full w-full grid grid-cols-2 gap-8 mt-20">
          <div className="sm:text-right pb-8 px-8">
            <p className="lg:text-3xl font-bold inline border-b-2 border-sky-500 text-3xl font-omiofont2 sm:text-2xl">
              About
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
