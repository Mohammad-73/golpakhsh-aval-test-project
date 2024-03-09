import React from "react";
import classes from "./divider.module.scss";

type Props = {
  title: string;
};

const Divider = ({ title }: Props) => {
  return (
    <div className={`${classes.root} pt-8 pb-2 max-w-7xl mx-auto`}>
      <h1 className="text-[#289672]">{title}</h1>
    </div>
  );
};

export default Divider;
