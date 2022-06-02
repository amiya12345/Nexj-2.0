import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hover from "react-3d-hover";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";

const Works = () => {
  return (
    <section name="work" className="bg-omio font-omiofont2 max-w-full ">
      <div className="max-w-full mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 px-4">
          <Hover scale={0.9} perspective={1000} speed={500}>
            <a
              href="https://www.behance.net/gallery/142907041/36-Days-of-Typo"
              target="_blank"
              rel="noreferrer"
            >
              <div
                style={{ backgroundImage: `url(${TypeImg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="lg:text-2xl font-bold text-white tracking-wider sm:text-[16px] content-div1">
                    36 Days Of Type
                  </span>
                </div>
              </div>
            </a>
          </Hover>
          <Hover scale={0.9} perspective={1000} speed={500}>
            <a
              href="https://www.behance.net/gallery/143047525/3D-ILLUSTRATION"
              target="_blank"
              rel="noreferrer"
            >
              <div
                style={{ backgroundImage: `url(${Webi})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="lg:text-2xl font-bold text-white tracking-wider sm:text-[16px]">
                    3D Illustration
                  </span>
                </div>
              </div>
            </a>
          </Hover>
          <Hover scale={0.9} perspective={1000} speed={500}>
            <a
              href="https://www.behance.net/gallery/142924833/The-Ethereum-portals"
              target="_blank"
              rel="noreferrer"
            >
              <div
                style={{ backgroundImage: `url(${Ethp})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="lg:text-2xl font-bold text-white tracking-wider sm:text-[16px]">
                    ETH Portal
                  </span>
                </div>
              </div>
            </a>
          </Hover>
          <Hover scale={0.9} perspective={1000} speed={500}>
            <a
              href="https://www.behance.net/gallery/142934087/Abstracto"
              target="_blank"
              rel="noreferrer"
            >
              <div
                style={{ backgroundImage: `url(${Abstracto})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="lg:text-2xl font-bold text-white tracking-wider sm:text-[16px]">
                    Abstracto
                  </span>
                </div>
              </div>
            </a>
          </Hover>
        </div>
      </div>
    </section>
  );
};

export default Works;
