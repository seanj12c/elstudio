import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1554579859-b14939c01ec6?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay glass rounded-md"></div>
      <div className="hero-content  text-center text-neutral-content">
        <div className="max-w-md lg:max-w-xl">
          <h1 className="mb-5 text-5xl md:text-7xl font-bold">
            Unlock Your Potential at
            <span className="text-primary"> eLstudio</span>
          </h1>
          <p className="mb-5 md:text-lg text-justify">
            Our E-Learning hub is your bridge towards academic innovation. We
            offer free access to facilities and resources that empower flexible
            learning and multimedia project production. Whether you're a
            seasoned student or just starting your journey, we invite you to
            thrive with us.
          </p>

          <button
            className="btn btn-primary text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Want to be a Member?
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-4 md:p-8">
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
              <h3 className="font-bold text-lg mb-5">
                Please follow the instructions stated below!
              </h3>
              <p className="py-2 md:py-4 text-left">
                <strong className="font-bold">Step 1:</strong> Go to the
                elStudio, located inside the technovation building, 3rd floor.{" "}
                <br />
                <br />
                <strong className="font-bold">Step 2:</strong> Ask the
                Server/Counter for membership registration. <br />
                <br />
                <strong className="font-bold">Step 3:</strong> Fill up the
                elStudio membership form with valid information.
                <br />
                <br /> <strong className="font-bold">Step 4:</strong> Submit the
                filled membership form to the Server/Counter.
                <br /> <br />
                <strong className="font-bold">Step 5:</strong> Wait for the
                Server/Counter to process your membership. <br />
                <br />
                <strong className="font-bold">Step 6:</strong> Receive your
                membership confirmation from the Server/Counter. <br />
                <br />
                <strong className="font-bold">Step 7:</strong> Enjoy the
                benefits of being an elStudio member, including discounts on
                food and beverages, access to exclusive events, and more!
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => document.getElementById("my_modal_3").close()}
                  className="btn btn-secondary "
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Hero;
