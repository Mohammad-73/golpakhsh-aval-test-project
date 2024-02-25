import React from "react";
import classes from "./divider.module.scss";

type Props = {
  title: string;
};

const Divider = ({ title }: Props) => {
  return (
    <div className={`${classes.root} py-8 max-w-7xl mx-auto`}>
      <h1>{title}</h1>
    </div>
  );
};

export default Divider;
