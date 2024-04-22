import React, { useState } from "react";

function Footermodal() {
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="">
      {modalOpen && (
        <div className="fixed bottom-[-20px] left-0 w-full bg-black bg-opacity-50 h-20 p-5 text-white">
          <button
            className="absolute top-0 right-0 btn-ghost btn btn-circle btn-xs"
            onClick={closeModal}
          >
            x
          </button>
          <div className="flex items-center justify-between">
            <p>Willing to use eLstudio?</p>
            <button
              className="btn btn-primary text-white btn-xs md:btn-sm"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Be a member!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footermodal;
