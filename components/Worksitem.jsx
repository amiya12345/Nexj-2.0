import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <Link href={projectUrl}>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group hover:bg-sky-500 transition duration-700">
        <Image
          className="rounded-xl group-hover:opacity-10 cursor-pointer"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
