import React from "react";
import elearn from "../assets/elphotos/elearn.JPG";
import multi from "../assets/elphotos/multi.JPG";
import av from "../assets/elphotos/av.JPG";
import reading from "../assets/elphotos/reading.JPG";

const Facilities = () => {
  const featuresData = [
    {
      id: 1,
      title: "E-Learning Hub",
      description:
        "Our computer feature boasts cutting-edge technology designed to cater to all your computing needs. From seamless multitasking to high-performance processing, our computer feature ensures that you stay productive and efficient in your work. With advanced graphics capabilities and ample storage, it's the perfect tool for professionals, creatives, and enthusiasts alike.",
    },
    {
      id: 2,
      title: "Multimedia Hub",
      description:
        "Dive into the realm of creativity with our Media & Arts feature. Whether you're a digital artist, photographer, musician, or filmmaker, this feature provides you with a suite of powerful tools to bring your imagination to life. From photo editing software to audio production suites, our Media & Arts feature empowers you to express yourself and unleash your artistic vision.",
    },
    {
      id: 3,
      title: "Audio/Video Production Room",
      description:
        "Capture every moment with pristine clarity using our Audio Recorder feature. Whether you're recording interviews, lectures, or musical performances, our feature ensures that every sound is faithfully reproduced. With adjustable settings and intuitive controls, you can tailor your recordings to perfection. Say goodbye to background noise and hello to crystal-clear audio with our Audio Recorder.",
    },
    {
      id: 4,
      title: "Reading Hub",
      description:
        "Explore the versatility and functionality of Feature 4. With a wide range of capabilities and customizable options, Feature 4 adapts to your needs seamlessly. Whether you're managing tasks, organizing data, or enhancing productivity, this feature offers intuitive solutions and streamlined workflows. Discover endless possibilities and unlock new horizons with Feature 4.",
    },
  ];

  const [activeFeature, setActiveFeature] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedDescription, setSelectedDescription] = React.useState("");
  const [selectedTitle, setSelectedTitle] = React.useState("");

  React.useEffect(() => {
    const body = document.querySelector("body");
    if (modalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [modalOpen]);

  const openModal = (index, description, title) => {
    let imageSrc;
    switch (index) {
      case 0:
        imageSrc = elearn;
        break;
      case 1:
        imageSrc = multi;
        break;
      case 2:
        imageSrc = av;
        break;
      case 3:
        imageSrc = reading;
        break;
      default:
        imageSrc = elearn;
    }
    setSelectedImage(imageSrc);
    setSelectedDescription(description);
    setSelectedTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedDescription("");
    setModalOpen(false);
  };

  return (
    <div id="facilities" className=" h-screen w-full">
      <div className=" h-screen px-4 md:px-20 lg:px-32 text-white">
        <div>
          <h1 className="text-center pt-32 text-2xl md:text-5xl font-bold">
            You are welcome to our{" "}
            <span className="text-primary">Facilities</span>
          </h1>
          <p className="text-center pt-3 text-primary text-xs md:text-base pb-5">
            Select Facilities
          </p>
        </div>
        <div className="grid gap-5 grid-cols-2 ">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="relative overflow-hidden rounded-md cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() =>
                openModal(feature.id - 1, feature.description, feature.title)
              }
              onMouseEnter={() => setActiveFeature(feature)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <img
                className="object-cover w-full md:h-80 h-60"
                src={
                  feature.id === 1
                    ? elearn
                    : feature.id === 2
                    ? multi
                    : feature.id === 3
                    ? av
                    : reading
                }
                alt=""
              />

              {activeFeature && activeFeature.id === feature.id && (
                <div className="absolute inset-0 flex  items-center justify-center text-center bg-black bg-opacity-75">
                  <div>
                    <h2 className="text-lg font-bold">{feature.title}</h2>
                    <p className="text-xs">
                      {feature.description.split(" ").slice(0, 4).join(" ")}...
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className=" mx-auto">
            <h1 className="font-bold text-center pb-4 pt-10 text-4xl md:text-6xl">
              <span className="text-primary">
                {selectedTitle.split(" ")[0]}
              </span>{" "}
              <span className="text-white">{selectedTitle.split(" ")[1]}</span>
            </h1>

            <img
              src={selectedImage}
              alt=""
              className="w-full h-full px-3 md:px-0 rounded-lg md:rounded-none md:h-[550px] object-cover"
            />
            <div className="md:flex px-10 pt-6">
              <p className="text-xs md:text-base text-justify md:w-2/3 text-white">
                {selectedDescription}
              </p>
            </div>
            <div className="flex md:justify-end justify-center pt-3 md:pt-0 px-10">
              <button
                className="text-lg hover:bg-white hover:text-black ease-in-out duration-300 transition-all text-white px-3 py-1 rounded-sm bg-primary"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;
