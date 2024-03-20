import React from "react";
import box from "../assets/elphotos/net.jpg";
import box2 from "../assets/elphotos/tech.JPG";
import box3 from "../assets/elphotos/fac.JPG";

const Service = () => {
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

  const [selectedFeature, setSelectedFeature] = React.useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div id="service" className="h-full w-full">
      <div className="h-full px-4 pb-32 md:px-20 lg:px-32 text-black">
        <div>
          <h1 className="text-center pt-32 text-2xl md:text-5xl font-bold">
            Get <span className="text-primary">inspired</span> with our Services
          </h1>

          <p className="text-center pt-3 text-primary text-xs md:text-base pb-5">
            Choose a service to view its details
          </p>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="relative overflow-hidden rounded-md cursor-pointer transition duration-300"
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
                    : box
                }
                alt=""
              />

              <div className="absolute inset-0 text-white flex items-center justify-center text-center bg-black bg-opacity-30">
                <div>
                  <h2 className="text-lg font-bold">{feature.title}</h2>
                  <button
                    className="text-xs bg-primary text-white px-2 py-1 rounded-md mt-2"
                    onClick={() => handleFeatureClick(feature)}
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedFeature && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-90">
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
                    ? box
                    : selectedFeature.id === 2
                    ? box2
                    : selectedFeature.id === 3
                    ? box3
                    : box
                }
                alt=""
                className="w-full h-auto md:h-[550px] object-cover"
              />
            </div>
            <div className="md:flex px-10 pt-6">
              <p className="text-xs md:text-base text-justify pb-2 text-white">
                {selectedFeature.description}
              </p>
            </div>
            <div className="flex justify-center pt-3 md:pt-0 px-10">
              <button
                className="btn btn-primary text-white "
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

export default Service;
