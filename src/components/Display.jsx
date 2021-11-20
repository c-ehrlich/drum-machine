import React from "react";
import useStore from "../store";

const Display = () => {
  const display = useStore(state => state.display);

  return <div id="display">Display: {display}</div>;
};

export default Display;
