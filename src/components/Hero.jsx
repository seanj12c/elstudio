import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1554579859-b14939c01ec6?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md lg:max-w-xl">
          <h1 className="mb-5 text-5xl md:text-7xl font-bold">
            Hi, welcome to <span className="text-primary">eLstudio</span>{" "}
          </h1>
          <p className="mb-5 md:text-lg text-justify">
            Welcome to our E-Learning Hub! Dive into an infinite world of
            opportunities for academic and personal development. With a wide
            array of tools and resources tailored to your needs, we're here to
            support your learning journey. Whether you're enhancing coursework
            comprehension, exploring new topics, or connecting with peers, all
            members of the campus community are invited to thrive with us.
          </p>
          <a href="#updates" className="btn btn-primary text-white">
            What's Latest?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
