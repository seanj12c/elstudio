import React from "react";
import box from "../assets/elphotos/net.jpg";
import box2 from "../assets/elphotos/tech.JPG";
import box3 from "../assets/elphotos/fac.JPG";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: "Internet access",
      description:
        "El Studio is an internet-powered learning hub originally established for flexible learning. Students can utilize the internet through the provided computers. Unfortunately, Wi-Fi access is limited for personal devices. However, if you are using personal laptops for your projects, you can request Wi-Fi access from the staff.",
    },
    {
      id: 2,
      title: "Technological Resources",
      description:
        "We offer free access to our media production and learning equipment. Whether you need to study, practice programming, or write research papers, you can use the provided computers in the E-learning hub. For visual graphic designs or video editing, our high-end computer units in the AVP room are available. Additionally, you can borrow cameras, stabilizers, drones, and other equipment for multimedia creation.",
    },
    {
      id: 3,
      title: "Multipurpose Facility",
      description:
        "El Studio not only acts as an open space for academic activities but also serves as a platform for extra-curricular events such as seminars and hosts e-games.",
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
    <div id="features" className=" h-full bg-base-200 w-full">
      <div className=" h-full px-4 pb-32 md:px-20 lg:px-32 text-black">
        <div>
          <h1 className="text-center pt-32 text-2xl md:text-5xl font-bold">
            Get <span className="text-primary">inspired</span> with our Services
          </h1>

          <p className="text-center pt-3 text-primary text-xs md:text-base pb-5">
            Select feature
          </p>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 ">
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
                    : feature.id === 4
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
