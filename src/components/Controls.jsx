import React from "react";
import Display from "./Display";
import Volume from "./Volume";
import BankSelector from "./BankSelector";

const Controls = () => {
  return (
    <div>
      <Display />
      <Volume />
      <BankSelector />
    </div>
  );
};

export default Controls;
