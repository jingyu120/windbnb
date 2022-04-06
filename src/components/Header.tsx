import React, { FunctionComponent, useState } from "react";
import Logo from "../logo.png";
import { SearchIcon } from "@heroicons/react/outline";
import Modal from "./Modal";

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="flex w-full my-10 justify-between items-center px-3">
      {modal && <Modal toggleModal={toggleModal} modal={modal} />}
      <div>
        <img className="h-7" src={Logo} alt="logo" />
      </div>
      <div className="flex items-center" onClick={toggleModal}>
        <span className="shadow p-3 rounded-l-2xl w-[250px] pl-5">
          Helsinki Finland
        </span>
        <span className="shadow p-3 text-gray-300 w-[200px]">Add guests</span>
        <span className="flex justify-center items-center shadow h-[48px] w-[48px] rounded-r-2xl">
          <SearchIcon className="w-5 text-red-500" />
        </span>
      </div>
    </div>
  );
};

export default Header;
