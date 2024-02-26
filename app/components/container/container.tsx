import React from "react";

type Props = {
  children: React.ReactNode;
  classNames: string | "max-w-7xl mx-auto";
};

const Container = ({ children, classNames }: Props) => {
  return <main className={classNames}>{children}</main>;
};

export default Container;
