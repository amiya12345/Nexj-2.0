import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[72px] flex justify-between items-center px-4 bg-omio text-nft z-10">
      <div className="text-[16px] font-omiofont3">AR.</div>
      <ul className="hidden md:flex font-omiofont3 text-[16px] ">
        <li className="ml-10 hover:text-sky-500 font-omiofont3 ">
          <Link href="/" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="ml-10 hover:text-sky-500">
          <Link href="/" smooth={true} offset={0} duration={500}>
            Works
          </Link>
        </li>
        <li className="ml-10 hover:text-sky-500">
          <Link href="/" smooth={true} offset={0} duration={500}>
            About
          </Link>
        </li>
        <li className="ml-10 hover:text-sky-500">
          <Link href="/" smooth={true} offset={0} duration={500}>
            NFTs
          </Link>
        </li>
      </ul>

      {/* Omio man burger */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-omio flex flex-col justify-center items-center font-omiofont3"
        }
      >
        <li className="py-3 text-2xl">
          <Link
            href="/"
            onClick={handleClick}
            smooth={true}
            offset={0}
            duration={700}
          >
            Home
          </Link>
        </li>
        <li className="py-3 text-2xl">
          <Link
            href="/"
            onClick={handleClick}
            smooth={true}
            offset={0}
            duration={700}
          >
            Works
          </Link>
        </li>
        <li className="py-3 text-2xl">
          <Link
            href="/"
            onClick={handleClick}
            smooth={true}
            offset={0}
            duration={700}
          >
            About
          </Link>
        </li>
        <li className="py-3 text-2xl">
          <a
            href="https://nft.wazirx.org/amiya_fury/created?sort=created-desc"
            target="_blank"
            rel="noreferrer"
          >
            Nfts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
