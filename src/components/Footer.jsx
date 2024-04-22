import React from "react";
import ched from "../assets/ched.png";
import cvsu from "../assets/cvsu.png";
import logo from "../assets/logo.png";
import upou from "../assets/upou.png";
import csc from "../assets/csc.png";

import VisitCounter from "./VisitCounter";

const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer p-10 pb-20 bg-base-200 text-base-content">
        <aside>
          <p>
            <img className="h-24 lg:h-28 object-contain" src={logo} alt="" />
            <br />
            Copyright © 2024 | All rights reserved
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
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
        </nav>
        <nav>
          <h6 className="footer-title">Other Links</h6>
          <a rel="noreferrer" target="_blank" href="/">
            <li className="my-1 hover:text-primary duration-500">CODEPP</li>
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
        </nav>
        <nav className="flex justify-center flex-col w-full mx-auto items-center">
          <div className=" border-white justify-center md:justify-start grid-cols-4 md:grid-cols-2  grid gap-2 pl-2">
            <a rel="noreferrer" target="_blank" href="https://ched.gov.ph">
              <img className="h-16  object-contain" src={ched} alt="" />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://cvsu-rosario.edu.ph"
            >
              <img className="h-16 object-contain" src={cvsu} alt="" />{" "}
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.upou.edu.ph/home/"
            >
              <img className="h-16 object-contain" src={upou} alt="" />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.csc.gov.ph">
              <img className="h-16 object-contain" src={csc} alt="" />
            </a>
          </div>
          <div className="hover:translate-y-1 ease-in-out transition-all duration-300">
            <VisitCounter />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
