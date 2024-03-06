import React from "react";
import box from "../assets/box.jpg";
import box2 from "../assets/box2.jpg";
import box3 from "../assets/box3.jpg";
import box4 from "../assets/box4.jpg";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: "E-Learning Hub",
      description:
        "The E-Learning hub is a space dedicated for faculty members and students are not allowed in this area. Seminars and classes can be held in the E-Learning hub. It also includes, 12 high-end computers with web camera and noise-canceling headsets, photocopy machine and, whiteboard for class discussions.",
    },
    {
      id: 2,
      title: "Multimedia Hub",
      description:
        "The multimedia hub is complete with multimedia equipments such as LCD projectors, HD Smart TVs, graphic tablet, printers and, 12 high-end computer units. Here, students can accomplish their school projects and assignments with ease and comfort as each computer is internet-powered. Students can also have their brainstorming at the meeting area. ",
    },
    {
      id: 3,
      title: "Audio/Video Production Room",
      description:
        "The AVP room is an area perfect for audio and video recording, and live broadcast. It is equipped with drone camera, camera stabilizers, wireless audio records, camera slider/dolly track, DSLR camera, mirrorless cameras, audio mixers, video recorders, 5 high-end computer units installed with audio, photo and video editing softwares, studio lights and, green area",
    },
    {
      id: 4,
      title: "Reading Hub",
      description:
        "eLStudio has a mini library with books and internet. Here, students can sit, relax and read. Staff and students are also allowed to borrow tablets and computers for online reading. eLStudio is also open for book donations. ",
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
        imageSrc = box;
        break;
      case 1:
        imageSrc = box2;
        break;
      case 2:
        imageSrc = box3;
        break;
      case 3:
        imageSrc = box4;
        break;
      default:
        imageSrc = box;
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
    <div id="features" className=" h-full w-full">
      <div className=" h-full px-4 pb-32 md:px-20 lg:px-32 text-black">
        <div>
          <h1 className="text-center pt-32 text-2xl md:text-5xl font-bold">
            Check out our <span className="text-primary">feature</span> section
          </h1>
          <p className="text-center pt-3 text-primary text-xs md:text-base pb-5">
            Select feature
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
                    ? box
                    : feature.id === 2
                    ? box2
                    : feature.id === 3
                    ? box3
                    : box4
                }
                alt=""
              />

              {activeFeature && activeFeature.id === feature.id && (
                <div className="absolute inset-0 text-white flex  items-center justify-center text-center bg-black bg-opacity-75">
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

export default Features;
