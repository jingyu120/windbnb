import React, { FunctionComponent } from "react";
import Card from "./Card";
import data from "../stays.json";

interface OwnProps {}

type Props = OwnProps;

const Result: FunctionComponent<Props> = (props) => {
  return (
    <div className="flex flex-wrap">
      {data.map((d, i) => {
        return <Card key={i} res={d} />;
      })}
    </div>
  );
};

export default Result;
