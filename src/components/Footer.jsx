import React from "react";

const Footer = () => {
  return (
    <div className="h-6 hidden md:flex mt-[-24px] text-xs items-center  justify-between px-10  bg-gray text-white">
      <h1>© 2024 CvSU CCAT eLstudio, Inc All rights reserved</h1>
      <div className="flex gap-2">
        <a
          href="https://seanjimwell.netlify.app"
          rel="noreferrer"
          target="_blank"
          className="hover:text-primary hover:underline hover:-translate-y-1 ease-in-out duration-300 transition-all"
        >
          View Developer
        </a>{" "}
        <a
          href="https://www.facebook.com/hrldrcy"
          rel="noreferrer"
          target="_blank"
          className="hover:text-primary hover:underline hover:-translate-y-1 ease-in-out duration-300 transition-all"
        >
          View Designer
        </a>
      </div>
    </div>
  );
};

export default Footer;
