import React, { FunctionComponent } from "react";
import Logo from "../logo.png";
import { SearchIcon } from "@heroicons/react/outline";

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
  return (
    <div className="flex w-full my-10 justify-between items-center px-3">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <input
          placeholder="Helsinki Finland"
          className="shadow py-3 px-2 rounded-l-2xl"
        />
        <input placeholder="Add guests" className="shadow py-3 px-2" />

        <button className="flex justify-center items-center shadow h-[48px] w-[48px] rounded-r-2xl">
          <SearchIcon className="w-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;
