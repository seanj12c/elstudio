import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../assets/staffs/1.png";
import two from "../assets/staffs/2.png";
import three from "../assets/staffs/3.png";
import four from "../assets/staffs/4.png";
import bg from "../assets/bg.jpg";

class Hero extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    };
    return (
      <div id="staffs" className="h-screen w-full ">
        <div className="relative">
          <img
            className="z-[-1] blur-sm absolute h-screen w-screen mx-auto object-cover pointer-events-none select-none"
            src={bg}
            alt=""
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black pointer-events-none"></div>
        </div>

        <div className="h-screen flex items-center pt-24 lg:px-32 md:px-20  text-white w-full">
          <div className="hidden md:block w-full">
            <div className="w-full">
              <h1 className="text-left font-bold text-5xl text-white">
                Meet our eLstudio <br />{" "}
                <span className="text-primary">staffs</span>
              </h1>
            </div>
            <div className="w-3/4 object-contain rounded-lg h-full ml-auto shadow-primary">
              <Slider {...settings}>
                <div>
                  <img
                    src={one}
                    className="h-[500px] w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={two}
                    className="h-[500px] w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={three}
                    className="h-[500px] w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={four}
                    className="h-[500px] w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className=" md:hidden w-full">
            <div className="w-full">
              <h1 className=" text-center font-bold text-2xl text-white">
                Meet our eLstudio <span className="text-primary">Staffs</span>
              </h1>
            </div>
            <div className="w-full px-2 mx-auto object-contain h-full ml-auto">
              <Slider {...settings}>
                <div>
                  <img
                    src={one}
                    className="h-96 w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={two}
                    className="h-96 w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={three}
                    className="h-96 w-full object-contain rounded-lg "
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={four}
                    className="h-96 w-full object-contain rounded-lg "
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

export default Hero;
