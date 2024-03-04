import React from "react";
import right from "../assets/right.png";
import bg from "../assets/bg.jpg";
import play from "../assets/play.png";
const Hero = () => {
  return (
    <div id="home" className="h-screen w-full ">
      <div className="relative">
        <img
          className="z-[-1] absolute h-screen w-screen mx-auto object-cover pointer-events-none select-none"
          src={bg}
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black pointer-events-none"></div>
      </div>

      <div className="md:h-screen lg:px-32 md:px-20  text-white w-full">
        <div className="flex md:h-screen pt-24 gap-2 px-4 md:flex-row flex-col-reverse">
          <div className="md:w-1/2 my-auto justify-start flex flex-col">
            <h1 className="text-center md:text-3xl lg:text-5xl text-lg md:text-start font-bold">
              Hi, welcome to <span className="text-primary">eLstudio</span>
            </h1>
            <p className="text-xs py-4 md:text-base text-justify">
              Welcome to our E-Learning Hub! Dive into an infinite world of
              opportunities for academic and personal development. With a wide
              array of tools and resources tailored to your needs, we're here to
              support your learning journey. Whether you're enhancing coursework
              comprehension, exploring new topics, or connecting with peers, all
              members of the campus community are invited to thrive with us.
            </p>
            <div className="flex gap-2 md:justify-start justify-center">
              <button className="bg-primary text-white rounded-lg px-4 py-2">
                See Projects
              </button>
              <button>
                <img className="h-10" src={play} alt="" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex md:justify-end">
            <img className="md:ml-auto md:my-auto mx-auto" src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
