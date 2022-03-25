import React, { FunctionComponent } from "react";
import { SearchIcon } from "@heroicons/react/outline";

interface OwnProps {
  setModal: () => void;
}

type Props = OwnProps;

const Modal: FunctionComponent<Props> = ({ setModal }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-gray-300 bg-opacity-50">
      <div className="absolute top-0 left-0 w-full bg-white h-[460px] rounded-t-2xl">
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
              onClick={setModal}
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
