import React from "react";

export const ModalPage = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <div
          id="modal"
          className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
        >
          <div className="relative p-5 top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">
            <div className="flex telex text-5xl justify-between items-center text-black text-xl rounded-t-md px-4 py-2">
              <h3>Mint Status</h3>
              <button
                className="text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                x
              </button>
            </div>

            <div className="max-h-58 text-4xl p-4">
              <p className={props.colorStatus}>{props.modalContent}</p>
              
            </div>

            <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
              <button
                className="bg-blue-500 telex text-xl text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
