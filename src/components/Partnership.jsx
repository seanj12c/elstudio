import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SwiperImage from "./SwiperImage";

class Partnership extends React.Component {
  render() {
    return (
      <div id="partnership" className="h-full bg-base-200 w-fu ll ">
        <div className="h-full flex items-center py-36 lg:px-20 text-black w-full">
          <div className="hidden md:flex  flex-row-reverse md:items-center w-full">
            <div className="w-full max-w-screen-sm lg:px-16 pb-5">
              <h1 className="text-center md:text-left lg:text-3xl  text-5xl  text-black">
                Get to know
              </h1>
              <h1 className="text-primary text-center md:text-left font-bold lg:text-7xl text-2xl ">
                Our Partners
              </h1>
              <p>
                El Studio has established partnership with University of the
                Philippines Open University for Flexo. We're also proud to
                announce that our learning hub has secured institutional
                membership in the Consortium of Open Distance Education
                Providers in the Philippines (CODEPP) through CvSU-ILCLO.
              </p>
            </div>
            <div className="w-full mx-auto max-w-screen-sm  xl:max-w-screen-lg px-1 object-contain  h-full shadow-primary">
              <SwiperImage />
            </div>
          </div>
          <div className=" md:hidden w-full">
            <div className="w-full">
              <h1 className=" text-center text-black">Get to know</h1>
              <h1 className="text-primary pb-5 text-2xl font-bold text-center">
                Our Partners
              </h1>
            </div>
            <div className="w-full py-10">
              <SwiperImage />
            </div>
            <p className="text-justify px-2">
              El Studio has established partnership with University of the
              Philippines Open University for Flexo. We're also proud to
              announce that our learning hub has secured institutional
              membership in the Consortium of Open Distance Education Providers
              in the Philippines (CODEPP) through CvSU-ILCLO.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Partnership;
