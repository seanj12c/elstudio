import React from "react";

const Video = () => {
  return (
    <div className="py-10 w-full max-w-7xl rounded-lg mx-auto">
      <div className="card rounded-lg px-2 md:px-0  lg:card-side bg-base-200 shadow-lg ">
        <figure>
          <iframe
            className="md:w-[2300px] rounded-lg w-full h-96 md:h-[500px]"
            src="https://www.youtube.com/embed/8EZ-o1j3Ct4?si=hUcFVcuHpzqqk20i&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Learn more about eLStudio</h2>
          <p>
            Watch this video for a deeper look at eLStudio's accomplishments and
            how it effectively serves as an open resource center for all.
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://www.youtube.com/watch?v=8EZ-o1j3Ct4&t=15s&fbclid=IwAR2tD-9iKq0D4yzQ5ix2bAENmYLaFkbE6sqPE22ly3M3nDtqkB6KWWtY8-M"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary text-white"
            >
              Play on Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
