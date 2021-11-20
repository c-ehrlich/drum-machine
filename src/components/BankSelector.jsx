import React from "react";
import useStore from "../store";
import soundBanks from "../sounds.json";

const BankSelector = () => {
  const bank = useStore((state) => state.bank);
  const setBank = useStore((state) => state.setBank);

  const handleChange = (e) => {
    setBank(e.target.value);
  };

  return (
    <div>
      <label htmlFor="bank-select">Choose a Bank</label>
      <select
        onChange={(e) => handleChange(e)}
        defaultValue={bank.url}
        id="bank-select"
        name="bank"
      >
        {Object.values(soundBanks.soundBanks).map(key => {
          return <option key={key.url} value={key.url}>{key.name}</option>
        })}
      </select>
    </div>
  );
};

export default BankSelector;
