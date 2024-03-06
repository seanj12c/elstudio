import React from "react";
import ched from "../assets/ched.png";
import cvsu from "../assets/cvsu.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-full ">
      <div className="text-center text-white lg:text-left text-gray-300 p-4 lg:grid grid-cols-4">
        {/* col1 */}
        <div className="lg:border-r-2 gap-2 flex flex-col justify-center items-center border-white">
          <img src={logo} alt="" />
          <img className="h-36" src={cvsu} alt="" />
          <img className="h-36" src={ched} alt="" />

          <hr className="my-2 block lg:hidden border border-white w-[85%] mx-auto" />
        </div>
        {/* col2 */}
        <div className="lg:border-r-2 border-white pl-2">
          <ul className="pb-3">
            <a href="/">
              <li className="my-1 hover:text-primary duration-500">
                Cavite State University
              </li>
            </a>
            <a href="/">
              <li className="my-1 hover:text-primary duration-500">
                Cavite State University - CCAT
              </li>
            </a>
            <a href="/">
              <li className="my-1 hover:text-primary duration-500">
                Commission on Higher Education
              </li>
            </a>
          </ul>

          <hr className="my-2 block lg:hidden border border-white w-[85%] mx-auto" />
        </div>
        {/* col3 */}
        <div className="lg:border-r-2 border-white pl-2">
          <ul className="pb-3">
            <a href="/">
              <li className="my-1 hover:text-primary duration-500">
                UP Open University
              </li>
            </a>
            <a href="/">
              <li className="my-1 hover:text-primary duration-500">CODEPP</li>
            </a>
            <a href="/">
              <li className="my-1 hover:text-primary duration-500">
                Civil Service Commission
              </li>
            </a>
            <a href="/">
              <li className="my-1 hover:text-primary duration-500">
                Contact Center ng Bayan
              </li>
            </a>
          </ul>
          <hr className="my-2 hover:text-primary duration-500 block lg:hidden border border-white w-[85%] mx-auto" />
        </div>
        {/* col4 */}
        <div className="pl-2 pt-1">
          <div className=" grid grid-cols-2 gap-5 items-center justify-center">
            <img className="h-36 object-contain" src={ched} alt="" />
            <img className="h-36 object-contain" src={ched} alt="" />
            <img className="h-36 object-contain" src={ched} alt="" />
            <img className="h-36 object-contain" src={ched} alt="" />
          </div>
          <div>
            <h1>counter</h1>
          </div>
        </div>
      </div>
      <div className="flex text-xs justify-center w-full">
        <h1 className="text-center text-white">
          Copyright © 2024 | All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
