import React, { FunctionComponent } from "react";
import { StarIcon } from "@heroicons/react/solid";
interface OwnProps {
  res: any;
}

type Props = OwnProps;

const Card: FunctionComponent<Props> = (props) => {
  return (
    <div className="m-3">
      <img
        className="h-[250px] w-[350px] rounded-2xl object-cover"
        src={props.res.photo}
        alt="data"
      />
      <div className="mt-4 mb-4 flex justify-between">
        <div className="flex items-center">
          {props.res.superHost ? (
            <span className="border-2 border-gray-700 rounded-3xl py-1 px-2 mr-2">
              SuperHost
            </span>
          ) : null}
          <div className="text-gray-400">
            <span>{props.res.type}</span>
            {props.res.beds ? <span>{" . " + props.res.beds} Beds</span> : null}
          </div>
        </div>
        <div className="flex items-center">
          <StarIcon className="h-5 text-red-500" />
          <span className="text-[15px]">
            {props.res.rating.toString() +
              (props.res.rating.toString().length < 4 ? "0" : "")}
          </span>
        </div>
      </div>
      <h2 className="font-semibold w-[300px] truncate">{props.res.title}</h2>
    </div>
  );
};

export default Card;
