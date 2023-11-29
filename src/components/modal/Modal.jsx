import React from "react";

const Modal = ({ showModal, setShowModal,children }) => {
  return (
    <div>
      {showModal && (
        <div>
          <div
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-40 w-full h-full  bg-opacity-50 bg-black"
          ></div>
          <div className="absolute  z-50 rounded-lg bg-white w-auto h-auto left-1/2 top-1/2  translate-x-[-50%] translate-y-[-50%]  ">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
