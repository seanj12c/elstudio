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
        "The faculty Corner is an exclusive area designated for faculty members, with restricted access for students. This space serves as a venue for seminars and classes within the E-Learning hub. It is equipped with 12 high-end computers with web camera and noise-canceling headsets, photocopy machine and, whiteboard for class discussions.",
    },
    {
      id: 2,
      title: "Multimedia Hub",
      description:
        "The multimedia hub is complete with multimedia equipments such as LCD projectors, HD Smart TVs, graphic tablet, printers, and 12 high-end computer units. Here, students can accomplish their school projects and assignments with ease and comfort as each computer is internet-powered. Students can also have their brainstorming at the meeting area. ",
    },
    {
      id: 3,
      title: "Audio/Video Production Room",
      description:
        "The AVP room is an area perfect for audio and video recording, as well as live broadcast. It is equipped with drone camera, camera stabilizers, wireless audio records, camera slider/dolly track, DSLR camera, mirrorless cameras, audio mixers, video recorders, 5 high-end computer units installed with audio, photo and video editing softwares, and even studio lights and a green area.",
    },
    {
      id: 4,
      title: "Reading Hub",
      description:
        "El Studio has a mini library with books and internet. In this space, students can sit, relax and read. Faculty and students are also allowed to borrow tablets and computers for online reading. If you find our books lacking, contact us for book donations.",
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
    <div id="facilities" className=" h-full w-full">
      <div className=" h-full pb-32 px-4 md:px-20 lg:px-32 text-black">
        <div>
          <h1 className="text-center pt-32 text-2xl md:text-5xl font-bold">
            Get innovative with our
            <span className="text-primary"> Facilities </span>
          </h1>
          <p className="text-center pt-3 text-primary text-xs md:text-base pb-5">
            Choose a facility to view its details
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
                <div className="absolute text-white inset-0 flex  items-center justify-center text-center bg-black bg-opacity-75">
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
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-90">
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
