import React from "react";
import lobby from "../assets/elphotos/lobby.JPG";
import bg from "../assets/bg.jpg";
import play from "../assets/play.png";
const Hero = () => {
  return (
    <div id="home" className="h-screen w-full ">
      <div className="relative">
        <img
          className="z-[-1] opacity-90 absolute h-screen w-full mx-auto object-cover pointer-events-none select-none"
          src={bg}
          alt=""
        />
      </div>

      <div className="md:h-screen lg:px-32 md:px-20  text-black  w-full">
        <div className="flex md:h-screen pt-36 md:pt-24 md:gap-10 px-4 md:flex-row flex-col-reverse">
          <div className="md:w-1/2 my-auto justify-start flex flex-col">
            <h1 className="text-center pt-10 md:pt-0 md:text-3xl lg:text-7xl text-lg md:text-start font-bold">
              Hi, welcome to <span className="text-primary">eLstudio</span>
            </h1>
            <p className="text-xs py-4 md:text-base lg:text-lg text-justify">
              Welcome to our E-Learning Hub! Dive into an infinite world of
              opportunities for academic and personal development. With a wide
              array of tools and resources tailored to your needs, we're here to
              support your learning journey. Whether you're enhancing coursework
              comprehension, exploring new topics, or connecting with peers, all
              members of the campus community are invited to thrive with us.
            </p>
            <div className="flex gap-2 md:justify-start justify-center">
              <a href="#facilities">
                <button className="transition-all duration-300 hover:-translate-y-1 bg-primary text-white rounded-lg px-4 py-2">
                  See Facilities
                </button>
              </a>
              <button className="transition-all duration-300 hover:translate-x-1 ">
                <img className="h-10" src={play} alt="" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex md:justify-end">
            <img
              className="md:ml-auto md:h-96 rounded-md md:my-auto mx-auto"
              src={lobby}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
