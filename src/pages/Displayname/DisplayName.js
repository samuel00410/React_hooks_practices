// ./src/components/DisplayName.js
import React from "react";
import { useSelector } from "react-redux";

const DisplayName = () => {
  const name = useSelector((state) => state.name);

  return <div>{name}</div>;
};

export default DisplayName;
