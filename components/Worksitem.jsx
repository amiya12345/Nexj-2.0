import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <Link href={projectUrl}>
      <div className="w-full">
        <div className="max-w-full mx-auto">
          <div className="relative flex items-center justify-center h-[100%] w-full shadow-xl group transition-all duration-300 ease-linear hover:bg-sky-500">
            <Image
              className="group-hover:opacity-10 cursor-pointer"
              src={backgroundImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3
                className="text-2xl text-white tracking-wider text-center"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-delay="0"
              >
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
