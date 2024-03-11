import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../assets/updates/1.png";
import two from "../assets/updates/2.png";

class Updates extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };
    return (
      <div id="updates" className="h-full w-full ">
        <div className="h-full flex items-center py-36 lg:px-20 text-black w-full">
          <div className="hidden md:block w-full">
            <div className="w-full lg:px-16 pb-5">
              <h1 className="text-center md:text-left font-bold text-5xl lg:text-7xl text-black">
                What's Latest?
              </h1>
              <h1 className="text-primary text-center md:text-left  text-2xl lg:text-3xl">
                Heres our Updates
              </h1>
            </div>
            <div className="w-full px-1 object-contain  h-full shadow-primary">
              <Slider {...settings}>
                <div className="card card-compact w-96 bg-base-300 shadow-xl">
                  <figure>
                    <img className="p-3" src={one} alt="Server" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Server's in PC!</h2>
                    <p> Out server is now working</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        See More
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Pan Cafe Pro Server
                          </h3>
                          <p className="py-4">Information about server in pc</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </div>
                  </div>
                </div>
                <div className="card card-compact w-96 bg-base-300 shadow-xl">
                  <figure>
                    <img className="p-3" src={two} alt="Inventory" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Our Inventory System</h2>
                    <p>Our inventory system was currently working now!</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_2").showModal()
                        }
                      >
                        See More
                      </button>
                      <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Information about inventory system
                          </h3>
                          <p className="py-4">Information about server in pc</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </div>
                  </div>
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
            <div className="w-full px-2">
              <Slider {...settings}>
                <div className="card card-compact  w-96 bg-base-300 shadow-xl">
                  <figure>
                    <img className="p-3" src={one} alt="Server" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Server's in PC!</h2>
                    <p>
                      {" "}
                      Out server is now working so the server can control others
                      pc
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        See More
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Pan Cafe Pro Server
                          </h3>
                          <p className="py-4">Information about server in pc</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </div>
                  </div>
                </div>
                <div className="card card-compact w-96 bg-base-300 shadow-xl">
                  <figure>
                    <img className="p-3" src={two} alt="Inventory" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Our Inventory System</h2>
                    <p>Our inventory system was currently working now!</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_2").showModal()
                        }
                      >
                        open modal
                      </button>
                      <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Information about inventory system
                          </h3>
                          <p className="py-4">Information about server in pc</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </div>
                  </div>
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
