import React, { FunctionComponent, useEffect, useRef } from "react";
import { SearchIcon } from "@heroicons/react/outline";

interface OwnProps {
  toggleModal: () => void;
  modal: boolean;
}

type Props = OwnProps;

const Modal: FunctionComponent<Props> = ({ toggleModal, modal }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkIfClickOutide = (event: MouseEvent) => {
      if (modal && ref.current && !ref.current.contains(event.target)) {
        toggleModal();
      }
    };
    document.addEventListener("mousedown", checkIfClickOutide);

    return () => {
      document.removeEventListener("mousdown", checkIfClickOutide);
    };
  }, [modal]);

  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-gray-300 bg-opacity-50">
      <div
        className="absolute top-0 left-0 w-full bg-white h-[460px] rounded-t-2xl"
        ref={ref}
      >
        <div className="flex justify-center mt-[100px]">
          <div className="flex flex-col justify-center border-2 border-r-0 h-[60px] w-[300px] rounded-l-2xl pl-5 mt10">
            <label>Location</label>
            <input className="focus:outline-0" placeholder="Enter location" />
          </div>
          <div className="flex flex-col justify-center border-2 h-[60px] w-[250px] px-5">
            <label>Guests</label>
            <input className="focus:outline-0" placeholder="Add guests" />
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-l-0 h-[60px] w-[200px] rounded-r-2xl pl-5">
            <button
              onClick={toggleModal}
              className="flex bg-red-300 rounded-3xl p-4 text-white"
            >
              <SearchIcon className="h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
