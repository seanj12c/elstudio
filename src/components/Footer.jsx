import React from "react";
import ched from "../assets/ched.png";
import cvsu from "../assets/cvsu.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-full bg-gray">
      <div className="text-center  md:justify-around text-xs md:text-base px-10 font-bold text-white lg:text-left text-gray-300 p-4 lg:grid grid-cols-4">
        {/* col1 */}
        <div className=" gap-2 md:gap-16 flex flex-col justify-center items-center ">
          <img className="h-24 lg:h-32 object-contain" src={logo} alt="" />
          Copyright © 2024 | All rights reserved
          <hr className="my-2 block lg:hidden border  w-[85%] mx-auto" />
        </div>
        {/* col2 */}
        <div className=" border-white pl-2">
          <ul className="pb-3 flex flex-col md:gap-5 lg:text-lg">
            <a rel="noreferrer" target="_blank" href="https://cvsu.edu.ph">
              <li className="my-1 hover:text-primary duration-500">
                Cavite State University
              </li>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://cvsu-rosario.edu.ph"
            >
              <li className="my-1 hover:text-primary duration-500">
                Cavite State University - CCAT
              </li>
            </a>
            <a rel="noreferrer" target="_blank" href="https://ched.gov.ph">
              <li className="my-1 hover:text-primary duration-500">
                Commission on Higher Education
              </li>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.upou.edu.ph/home/"
            >
              <li className="my-1 hover:text-primary duration-500">
                UP Open University
              </li>
            </a>
          </ul>

          <hr className="my-2 block lg:hidden border border-white w-[85%] mx-auto" />
        </div>
        {/* col3 */}
        <div className=" border-white pl-2">
          <ul className="pb-3 flex flex-col md:gap-5 lg:text-lg">
            <a rel="noreferrer" target="_blank" href="http://www.codepp.net">
              <li className="my-1 hover:text-primary duration-500">CODEPP</li>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.csc.gov.ph">
              <li className="my-1 hover:text-primary duration-500">
                Civil Service Commission
              </li>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://contactcenterngbayan.gov.ph"
            >
              <li className="my-1 hover:text-primary duration-500">
                Contact Center ng Bayan
              </li>
            </a>
          </ul>
          <hr className="my-2 hover:text-primary duration-500 block lg:hidden border border-white w-[85%] mx-auto" />
        </div>
        {/* col4 */}
        <div className=" border-white justify-center md:justify-start flex gap-2 pl-2">
          <img className="h-16 lg:h-24 object-contain" src={ched} alt="" />
          <img className="h-16 lg:h-24 object-contain" src={cvsu} alt="" />

          <img className="h-16 lg:h-24 object-contain" src={ched} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
