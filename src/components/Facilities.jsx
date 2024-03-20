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

  const [selectedFeature, setSelectedFeature] = React.useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div id="facilities" className="h-full bg-base-200 w-full">
      <div className="h-full pb-32 px-4 md:px-20 lg:px-32 text-black">
        <div>
          <h1 className="text-center pt-32 text-2xl md:text-5xl font-bold">
            Get innovative with our
            <span className="text-primary"> Facilities </span>
          </h1>
          <p className="text-center pt-3 text-primary text-xs md:text-base pb-5">
            Choose a facility to view its details
          </p>
        </div>
        <div className="grid gap-5 grid-cols-2">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="relative overflow-hidden rounded-md cursor-pointer transition duration-300"
              onClick={() => handleFeatureClick(feature)}
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

              <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-30">
                <div>
                  <h2 className="text-base md:text-lg font-bold text-white">
                    {feature.title}
                  </h2>
                  <button
                    className="btn btn-xs btn-primary text-white"
                    onClick={() => handleFeatureClick(feature)}
                  >
                    Click to know more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedFeature && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="mx-auto">
            <h1 className="font-bold text-center pb-4 pt-10 text-4xl md:text-6xl">
              <span className="text-primary">
                {selectedFeature.title.split(" ")[0]}
              </span>{" "}
              <span className="text-white">
                {selectedFeature.title.split(" ")[1]}
              </span>
            </h1>

            <div className="flex justify-center">
              <img
                src={
                  selectedFeature.id === 1
                    ? elearn
                    : selectedFeature.id === 2
                    ? multi
                    : selectedFeature.id === 3
                    ? av
                    : reading
                }
                alt=""
                className="w-full h-auto md:h-[550px] object-cover"
              />
            </div>
            <div className="md:flex px-10 pt-6">
              <p className="text-xs md:text-base text-justify md:w-2/3 text-white">
                {selectedFeature.description}
              </p>
            </div>
            <div className="flex justify-center pt-3 md:pt-0 px-10">
              <button
                className="text-lg hover:bg-white hover:text-black ease-in-out duration-300 transition-all text-white px-3 py-1 rounded-sm bg-primary"
                onClick={() => setSelectedFeature(null)}
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
