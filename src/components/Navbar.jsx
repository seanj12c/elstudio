import React from "react";
import logo from "../assets/logo.png";
import {
  CiCircleInfo,
  CiBank,
  CiViewList,
  CiPhone,
  CiUser,
} from "react-icons/ci";
export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div className="text-primary px-5 rounded-md ease-in-out transition-all duration-500 active:bg-primary active:text-white hover:text-white hover:bg-primary  flex w-full items-center">
              <CiCircleInfo size={20} />

              <a className="w-full p-4  " href="#home">
                <li className="">About</li>
              </a>
            </div>
            <div className="text-primary px-5 rounded-md ease-in-out transition-all duration-500 active:bg-primary active:text-white hover:text-white hover:bg-primary  flex w-full items-center">
              <CiBank size={20} />
              <a href="#facilities">
                <li className="p-4  ">Facilities</li>
              </a>
            </div>{" "}
            <div className="text-primary px-5 rounded-md ease-in-out transition-all duration-500 active:bg-primary active:text-white hover:text-white hover:bg-primary  flex w-full items-center">
              <CiUser size={20} />
              <a href="#updates">
                <li className="p-4  ">Updates</li>
              </a>
            </div>
            <div className="text-primary px-5 rounded-md ease-in-out transition-all duration-500 active:bg-primary active:text-white hover:text-white hover:bg-primary  flex w-full items-center">
              <CiViewList size={20} />
              <a href="#features">
                <li className="p-4  ">Features</li>
              </a>
            </div>
          </ul>
        </div>
        <a href="#about" className="">
          <img className="w-36 pb-2" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about">About</a>
          </li>{" "}
          <li>
            <a href="#updates">Updates</a>
          </li>
          <li>
            <a href="#facilities">Facilities</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-xs md:btn-sm btn-primary text-white"
          href="#contacts"
        >
          {" "}
          <CiPhone size={20} />
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
