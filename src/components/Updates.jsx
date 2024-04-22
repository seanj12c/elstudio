import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../assets/updates/1.png";
import two from "../assets/updates/2.png";
import three from "../assets/updates/3.png";

class Updates extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };
    return (
      <div id="updates" className="h-full  w-full ">
        <dialog id="updates1" className="modal w-full">
          <div className="modal-box">
            <h3 className="font-bold text-primary text-lg">
              eLStudio Inventory System
            </h3>
            <img
              className="p-3 h-[450px] w-full object-cover"
              src={two}
              alt="Server"
            />
            <p className="py-4 text-justify">
              The ongoing management of technological resources, including
              computers, printers, TVs, cameras, and essential supplies like
              cables, papers, and tapes, requires a consistent inventory
              process. With the newly implemented inventory system, keeping
              track of eL Studio assets is now significantly more efficient
              compared to the manual inventory approach. The staff only needs to
              scan the QR code of a specific item, and it will be automatically
              recorded in the system, indicating whether the item is still
              working, not working, or in need of improvement.
            </p>
            <form method="dialog" className="modal-action ">
              <button className="btn-error btn text-white">Close</button>
            </form>
          </div>
        </dialog>
        <dialog id="updates3" className="modal w-full">
          <div className="modal-box">
            <h3 className="font-bold text-primary text-lg">
              eLStudio Inventory System
            </h3>
            <img
              className="p-3 h-[450px] w-full object-cover"
              src={three}
              alt="Server"
            />
            <p className="py-4 text-justify">
              The ongoing management of technological resources, including
              computers, printers, TVs, cameras, and essential supplies like
              cables, papers, and tapes, requires a consistent inventory
              process. With the newly implemented inventory system, keeping
              track of eL Studio assets is now significantly more efficient
              compared to the manual inventory approach. The staff only needs to
              scan the QR code of a specific item, and it will be automatically
              recorded in the system, indicating whether the item is still
              working, not working, or in need of improvement.
            </p>
            <form method="dialog" className="modal-action ">
              <button className="btn-error btn text-white">Close</button>
            </form>
          </div>
        </dialog>
        <dialog id="updates2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-primary text-lg">
              Pan Cafe Pro Server
            </h3>
            <img
              className="p-3 h-[450px] w-full object-cover"
              src={one}
              alt="Server"
            />
            <p className="py-4 text-justify">
              This setup, known as the server-client relationship, enables the
              computers (referred to as the client) to be directly managed by a
              dedicated server, overseen by an administrator. In simple terms,
              the client represents individual computers, while the server acts
              as a centralized hub that manages and oversees these computers.
              <br />
              This server-client arrangement is crucial for the efficient
              operation of our e-learning hub. With this structure, the
              administrator gains enhanced control over the entire network.
            </p>
            <form method="dialog" className="modal-action ">
              <button className="btn-error btn text-white">Close</button>
            </form>
          </div>
        </dialog>
        <div className="h-full flex items-center py-36 lg:px-20 text-black w-full">
          <div className="hidden md:flex md:items-center w-full">
            <div className="w-full max-w-screen-sm lg:px-16 pb-5">
              <h1 className="text-center md:text-left text-2xl text-black">
                Get a taste of our
              </h1>
              <h1 className="text-primary text-center md:text-left font-bold text-7xl   ">
                Latest Arrivals
              </h1>
              <p className="text-xs  md:text-base">
                Our learning hub just got a super cool upgrade. Head over to
                eLStudio and check it out for yourself!
              </p>
            </div>
            <div className="w-full mx-auto max-w-screen-sm  xl:max-w-screen-lg px-1 object-contain  h-full shadow-primary">
              <Slider {...settings}>
                <div className="card card-compact w-96 bg-base-300 ">
                  <figure>
                    <img
                      className="p-3 h-[450px] w-full object-cover"
                      src={one}
                      alt="Server"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Networked Computers</h2>
                    <p>
                      The computers within the learning hub are now
                      interconnected through a centralized server. To facilitate
                      this network, our E-Learning hub employs PanCafe Pro, an
                      internet cafe management software.
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("updates2").showModal()
                        }
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card-compact w-96 bg-base-300">
                  <figure>
                    <img
                      className="p-3 h-[450px] w-full object-cover"
                      src={two}
                      alt="Inventory"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">eLStudio Inventory System</h2>
                    <p>
                      Our learning hub now deploys an inventory system for all
                      the properties of elStudio. This propels the learning hub
                      towards a more organized and streamlined management of
                      resources.
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("updates1").showModal()
                        }
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card-compact w-96 bg-base-300">
                  <figure>
                    <img
                      className="p-3 h-[450px] w-full object-cover"
                      src={three}
                      alt="ID"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">eLStudio ID System</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto molestias optio deserunt provident maxime
                      consequatur asperiores odio officiis quas quo quae ab
                      laudantium non, natus quis blanditiis omnis nemo sequi?
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("updates3").showModal()
                        }
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className=" md:hidden w-full">
            <div className="w-full">
              <h1 className=" text-center  text-black">Get a taste of our</h1>
              <h1 className="text-primary pb-5 font-bold  text-2xl text-center">
                Latest Arrivals
              </h1>
            </div>
            <div className="w-full px-2">
              <Slider {...settings}>
                <div className="card card-compact  w-96 bg-base-300 shadow-xl">
                  <figure>
                    <img className="p-3" src={one} alt="Server" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Networked Computers</h2>

                    <p>
                      The computers within the learning hub are now
                      interconnected through a centralized server. To facilitate
                      this network, our E-Learning hub employs PanCafe Pro, an
                      internet cafe management software.
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("updates2").showModal()
                        }
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card-compact w-96 bg-base-300 shadow-xl">
                  <figure>
                    <img className="p-3" src={two} alt="Inventory" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">eLStudio Inventory System</h2>
                    <p>
                      Our learning hub now deploys an inventory system for all
                      the properties of elStudio. This propels the learning hub
                      towards a more organized and streamlined management of
                      resources.
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("updates1").showModal()
                        }
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card-compact w-96 bg-base-300 shadow-xl">
                  <figure>
                    <img className="p-3" src={three} alt="ID" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">eLStudio ID System</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto molestias optio deserunt provident maxime
                      consequatur asperiores odio officiis quas quo quae ab
                      laudantium non, natus quis blanditiis omnis nemo sequi?
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("updates3").showModal()
                        }
                      >
                        See more
                      </button>
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
