import React from "react";
import useStore from "../store";

const BankSelector = () => {
  const bank = useStore((state) => state.bank);
  const setBank = useStore((state) => state.setBank);

  const handleChange = (e) => {
    console.log(e.target.value);
    setBank(e.target.value);
  };

  return (
    <div>
      <label for="bank-select">Choose a Bank</label>
      <select
        onChange={(e) => handleChange(e)}
        selected={bank}
        id="bank-select"
        name="bank"
      >
        <option value="nujabes">Nujabes</option>
        <option value="ukdrill">UK Drill</option>
        <option value="amenbreak">Amen Break</option>
      </select>
    </div>
  );
};

export default BankSelector;
