import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../assets/partnership/1.png";
import two from "../assets/partnership/2.png";

class Partnership extends React.Component {
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
      <div id="partnership" className="h-full w-full ">
        <dialog id="partnership1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">CvSU MAIN</h3>
            <p className="py-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis qui cum unde consectetur aliquam? Saepe, consequuntur.
              Veniam tempora, tenetur nam sed dolorem minus iusto, facere id et
              laboriosam ipsa voluptates?
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog id="partnership2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">CvSU CCAT</h3>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              atque ratione voluptates, qui reprehenderit sunt, veniam soluta
              vitae adipisci voluptas maiores accusamus cupiditate explicabo
              iste deleniti est non necessitatibus nisi.
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <div className="h-full flex items-center py-36 lg:px-20 text-black w-full">
          <div className="hidden md:block w-full">
            <div className="w-full lg:px-16 pb-5">
              <h1 className="text-center md:text-left lg:text-3xl  text-5xl  text-black">
                Get to know
              </h1>
              <h1 className="text-primary text-center md:text-left font-bold lg:text-7xl text-2xl ">
                Our Partners
              </h1>
            </div>
            <div className="w-full mx-auto max-w-screen-lg px-1 object-contain  h-full shadow-primary">
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
                    <h2 className="card-title">CvSU CCAT</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet quos, in perferendis ratione necessitatibus quam
                      suscipit velit architecto pariatur repudiandae enim neque
                      doloribus accusantium voluptates corrupti repellat quia
                      earum molestias.
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("partnership2").showModal()
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
                    <h2 className="card-title">CvSU Main</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minima assumenda rerum atque voluptatum corporis iure
                      eveniet aut debitis ipsa repudiandae molestiae, amet,
                      obcaecati ullam suscipit tempore modi incidunt nisi
                      libero?
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("partnership1").showModal()
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
              <h1 className=" text-center text-black">Get to know</h1>
              <h1 className="text-primary pb-5 text-2xl font-bold text-center">
                Our Partners
              </h1>
            </div>
            <div className="w-full px-2">
              <Slider {...settings}>
                <div className="card card-compact  w-96 bg-base-300 shadow-xl">
                  <figure>
                    <img
                      className="p-3 h-60 object-cover w-full"
                      src={one}
                      alt="Server"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">CvSU CCAT</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus expedita rem, perspiciatis in distinctio at
                      adipisci, illum alias, mollitia dignissimos reiciendis
                      voluptatem est ipsam. Temporibus fugit quo tenetur debitis
                      excepturi?
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("partnership2").showModal()
                        }
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card-compact w-96 bg-base-300 shadow-xl">
                  <figure>
                    <img
                      className="p-3 h-60 object-cover w-full"
                      src={two}
                      alt="Inventory"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">CvSU Main</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minima assumenda rerum atque voluptatum corporis iure
                      eveniet aut debitis ipsa repudiandae molestiae, amet,
                      obcaecati ullam suscipit tempore modi incidunt nisi
                      libero?
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("partnership1").showModal()
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

export default Partnership;
