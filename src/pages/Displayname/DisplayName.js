// ./src/components/DisplayName.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const DisplayName = () => {
  // 從 store 中獲取 name 狀態
  const name = useSelector((state) => state.nameSlice.name);

  return <div>{name}</div>;
};

export default DisplayName;
