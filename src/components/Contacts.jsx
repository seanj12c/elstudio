import React from "react";
import bg from "../assets/bg.jpg";
import {
  CiLocationArrow1,
  CiPhone,
  CiMail,
  CiFacebook,
  CiChat1,
} from "react-icons/ci";

const Contacts = () => {
  return (
    <div id="contacts" className=" h-screen w-full">
      <div className="relative">
        <img
          className="z-[-1] absolute h-screen w-screen mx-auto object-cover pointer-events-none select-none"
          src={bg}
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black pointer-events-none"></div>
      </div>
      <div className="h-screen my-auto pb-3 pt-24 w-full">
        <h1 className="text-white pb-10 text-center pt-10 font-bold text-5xl">
          <span className="text-primary ">Contact</span> Us
        </h1>
        <div className="text-white mx-auto md:mx-0 gap-5 px-3 md:px-10 md:flex justify-around">
          <div className=" md:my-auto">
            <h1 className="text-center md:text-start md:text-5xl pb-2 font-bold">
              Keep in <span className="text-primary">touch</span> <br /> with
              us!
            </h1>
            <p className="text-justify">
              Welcome to our Contact Page! Here, you'll find various ways to
              connect with us, from email to social media. We value your
              messages and aim to respond promptly. Reach out—we're eager to
              hear from you!
            </p>
            <div className="py-3 text-xs">
              <a
                className="flex items-center gap-2 py-1 hover:text-primary duration-500 hover:translate-x-2"
                href="https:www.facebook.com"
                rel="noreferrer"
                target="_blank"
              >
                <CiFacebook size={20} />
                eL studio CCAT
              </a>
              <a
                className="flex items-center gap-2 py-1 hover:text-primary duration-500 hover:translate-x-2"
                href="mailto:ccatelstudio@cvsu.edu.ph"
                rel="noreferrer"
                target="_blank"
              >
                <CiMail size={20} />
                ccatelstudio@cvsu.edu.ph
              </a>
              <a
                className="flex items-center gap-2 py-1 hover:text-primary duration-500 hover:translate-x-2"
                href="tel:0909090909"
                target="_blank"
                rel="noreferrer"
              >
                <CiPhone size={20} />
                +(639) 652 376 005
              </a>

              <a
                className="flex items-center gap-2 py-1 hover:text-primary duration-500 hover:translate-x-2"
                href="https://www.google.com.ph/maps/dir//CV38%2BC99,+Rosario,+Cavite/@14.4035308,120.7835775,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33962cec6eaa540d:0x494a6f0a105a7ef1!2m2!1d120.8659793!2d14.4035451?entry=ttu"
                target="_blank"
                rel="noreferrer"
              >
                <CiLocationArrow1 size={20} />
                Cavite State University CCAT Campus
              </a>
            </div>
          </div>
          <div className="w-full ">
            <form
              className="bg-gray text-black md:w-[500px] md:h-[550px] ml-auto rounded-md w-full px-10 py-4"
              action="submit"
            >
              <h1 className="text-primary pt-10">First Name</h1>
              <input
                type="text"
                className="w-full h-10 px-4 rounded-md"
                placeholder="Herald Racy"
              />
              <h1 className="text-primary pt-3">Last Name</h1>
              <input
                className="w-full h-10 px-4 rounded-md"
                type="text"
                placeholder="Sumido"
              />
              <h1 className="text-primary pt-3">Address</h1>
              <input
                className="w-full h-10 px-4 rounded-md"
                type="text"
                placeholder="123 Jeepney St. Rosario, Cavite"
              />
              <h1 className="text-primary pt-3">Message</h1>
              <input
                className="w-full h-24 pb-10 px-4 rounded-md"
                type="message"
                placeholder="Your message here..."
              />
              <div className="pt-3">
                <button className="flex gap-2 justify-center w-full items-center px-4 py-2 bg-primary text-white rounded-md">
                  <CiChat1 size={30} />
                  <h1>Submit Form</h1>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
