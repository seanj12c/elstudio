import React from "react";
import ched from "../assets/ched.png";
import cvsu from "../assets/cvsu.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <p>
            <img className="h-24 lg:h-28 object-contain" src={logo} alt="" />
            <br />
            Copyright © 2024 | All rights reserved
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Other Links</h6>
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
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
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
        </nav>
        <nav>
          <div className=" border-white justify-center md:justify-start grid-cols-4 md:grid-cols-2  grid gap-2 pl-2">
            <img className="h-16  object-contain" src={ched} alt="" />
            <img className="h-16 object-contain" src={cvsu} alt="" />{" "}
            <img className="h-16 object-contain" src={cvsu} alt="" />
            <img className="h-16 object-contain" src={ched} alt="" />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
