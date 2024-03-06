import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../assets/updates/1.png";

class Updates extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div id="updates" className="h-full w-full ">
        <div className="h-full flex items-center py-36 lg:px-20 text-black w-full">
          <div className="hidden md:block w-full">
            <div className="w-full lg:px-16">
              <h1 className="text-center md:text-left font-bold text-5xl lg:text-7xl text-black">
                What's Latest?
              </h1>
              <h1 className="text-primary text-center md:text-left  text-2xl lg:text-3xl">
                Heres our Updates
              </h1>
            </div>
            <div className="w-full object-contain pt-10  h-full ml-auto shadow-primary">
              <Slider {...settings}>
                <div>
                  <img
                    src={one}
                    className="h-[600px] w-full object-contain "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={one}
                    className="h-[600px] w-full object-contain "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={one}
                    className="h-[600px] w-full object-contain "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={one}
                    className="h-[600px] w-full object-contain "
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className=" md:hidden w-full">
            <div className="w-full">
              <h1 className=" text-center font-bold text-2xl text-black">
                What's Latest?
              </h1>
              <h1 className="text-primary text-center">Heres out Updates</h1>
            </div>
            <div className="w-full px-2 mx-auto object-contain h-full ml-auto">
              <Slider {...settings}>
                <div>
                  <img
                    src={one}
                    className="h-96 select-none pointer-events-none w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={one}
                    className="h-96 select-none pointer-events-none w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={one}
                    className="h-96 select-none pointer-events-none w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={one}
                    className="h-96 select-none pointer-events-none w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Updates;
