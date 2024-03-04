import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png"; // Import the new logo
import { CiCircleInfo, CiBank, CiViewList, CiPhone } from "react-icons/ci";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [fix, setFix] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(logo1); // Initialize currentLogo state with logo

  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
      setCurrentLogo(logo);
    } else {
      setFix(false);
      setCurrentLogo(logo1); // Set it back to original logo when not scrolling
    }
  }

  window.addEventListener("scroll", setFixed);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`${
        fix
          ? "bg-white text-black bg-opacity-90 transition-all ease-in-out duration-700 "
          : "text-white"
      } flex justify-between items-center h-24 mx-auto lg:px-32 md:px-20  px-6  fixed top-0 w-full  md:w-full z-50`}
    >
      <a href="#home">
        <img className="w-32 md:w-44" src={currentLogo} alt="" />{" "}
        {/* Use currentLogo state */}
      </a>
      <ul className="hidden md:flex font-semibold">
        <a href="#home">
          <li className="p-4 hover:text-primary hover:underline ease-in-out transition-all duration-500">
            About
          </li>
        </a>
        <a href="#facilities">
          <li className="p-4 hover:text-primary hover:underline ease-in-out transition-all duration-500">
            Facilities
          </li>
        </a>
        <a href="#features">
          <li className="p-4 hover:text-primary hover:underline ease-in-out transition-all duration-500">
            Features
          </li>
        </a>
        <a href="#contacts">
          <li className="py-4 pl-4 hover:text-primary hover:underline ease-in-out transition-all duration-500">
            Contact
          </li>
        </a>
      </ul>

      <div
        onClick={handleNav}
        className={`block text-primary md:hidden ease-in-out transition-all duration-500`}
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full shadow-lg bg-white ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <a href="#home">
          <img className="w-32 object-contain mt-4 ml-4" src={logo} alt="" />{" "}
          {/* Use currentLogo state */}
        </a>

        <ul className="w-full py-4 px-1 flex flex-col gap-2 text-xs pt-10">
          <div className="text-primary px-5 rounded-md ease-in-out transition-all duration-500 active:bg-primary active:text-white hover:text-white hover:bg-primary  flex w-full items-center">
            <CiCircleInfo size={20} />

            <a className="w-full p-4  " onClick={handleNav} href="#home">
              <li className="">About</li>
            </a>
          </div>
          <div className="text-primary px-5 rounded-md ease-in-out transition-all duration-500 active:bg-primary active:text-white hover:text-white hover:bg-primary  flex w-full items-center">
            <CiBank size={20} />
            <a onClick={handleNav} href="#facilities">
              <li className="p-4  ">Facilities</li>
            </a>
          </div>
          <div className="text-primary px-5 rounded-md ease-in-out transition-all duration-500 active:bg-primary active:text-white hover:text-white hover:bg-primary  flex w-full items-center">
            <CiViewList size={20} />
            <a onClick={handleNav} href="#features">
              <li className="p-4  ">Features</li>
            </a>
          </div>
          <div className="text-primary px-5 rounded-md ease-in-out transition-all duration-500 active:bg-primary active:text-white hover:text-white hover:bg-primary  flex w-full items-center">
            <CiPhone size={20} />
            <a onClick={handleNav} href="#contacts">
              <li className="p-4  y">Contact</li>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
