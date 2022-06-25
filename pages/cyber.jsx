import Image from "next/image";
import React from "react";
import Cybr from "../public/assets/works/cyber.webp";
import Link from "next/link";
import Hover from "react-3d-hover";

const cyber = () => {
  return (
    <div className="w-full max-h-screen">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Cybr}
          alt="/"
        />
        <div className="absolute top-[70%] lg:mx-24 mx-4 max-w-[100%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2 font-omiofont2 text-3xl">3D illustrataion</h2>
          <h3 className="font-omiofont2 text-1.5xl">Blender / 3D UI</h3>
          <h3>Personal Project</h3>
        </div>
      </div>

      <div className="max-w-[100%] lg:mx-24  grid md:grid-cols-5 gap-8 pt-8 mx-4">
        <div className="col-span-6">
          <h2 className="text-3xl font-omiofont1">Project Overview</h2>
          <p className="font-omiofont3 mt-8 text-justify text-slate-500 " >
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
          </p>
        </div>
      </div>
      <div className="max-w-[100%] lg:mx-24 mt-8 mx-4">
        <div className="grid lg:gap-12 md:grid-cols-2 gap-4">
          <Hover scale={1.03} perspective={1000} speed={500}>
            <Image
              className="rounded"
              src={Cybr}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover scale={1.03} perspective={1000} speed={500} data-aos="fade-up">
            <Image
              className="rounded"
              src={Cybr}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover scale={1.03} perspective={1000} speed={500}>
            <Image
              className="rounded"
              src={Cybr}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover scale={1.03} perspective={1000} speed={500} data-aos="fade-up">
            <Image
              className="rounded"
              src={Cybr}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
        </div>
      </div>
      <div className="max-w-[100%] lg:mx-24">
        <Link href="/#works">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default cyber;
