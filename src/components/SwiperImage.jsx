import { useState } from "react";
import Slider from "react-slick";
import cvsu from "../assets/images/cvsu.png";
import cvsu2 from "../assets/images/cvsu.png";
import ched from "../assets/images/ched.png";
import ched2 from "../assets/images/ched.png";
import upou from "../assets/images/upou.png";
import upou2 from "../assets/images/upou.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Swipe.css";

const images = [cvsu, ched, upou, cvsu2, ched2, upou2];

function SwiperImage() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next btn btn-primary text-white" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev btn btn-primary text-white" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(Math.floor(images.length / 2));

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={
              idx === imageIndex
                ? "slide activeSlide object-contain"
                : "slide object-contain"
            }
          >
            <img
              src={img}
              className="md:h-80  p-2 md:p-5  object-contain"
              alt={img}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SwiperImage;
