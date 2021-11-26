import React, { useEffect } from "react";
import useStore from "../store";
import soundBanks from "../sounds.json";

const BankSelector = () => {
  const bank = useStore((state) => state.bank);
  const setBank = useStore((state) => state.setBank);
  const power = useStore((state) => state.power);
  const setDisplay = useStore((state) => state.setDisplay);

  useEffect(() => {
    setDisplay(bank.name);
  }, [bank, setDisplay])

  const handleChange = (e) => {
    setBank(e.target.value);
  };

  const prevBank = () => {
    // set the current active sound bank to the previous one
    const currentIndex = soundBanks.soundBanks.findIndex((element) => element === bank);
    const prevIndex = currentIndex === 0 ? soundBanks.soundBanks.length - 1 : currentIndex - 1;
    setBank(soundBanks.soundBanks[prevIndex % soundBanks.soundBanks.length].url);
  }

  const nextBank = () => {
    // set the current active sound bank to the next one
    const nextIndex = soundBanks.soundBanks.findIndex((element) => element === bank) + 1;
    setBank(soundBanks.soundBanks[nextIndex % soundBanks.soundBanks.length].url);
  }

  return (
    <div>
      <button onClick={prevBank}>{"< Previous"}</button>
      <select
        onChange={(e) => handleChange(e)}
        defaultValue={bank.url}
        id="bank-select"
        name="bank"
        disabled={!power}
      >
        {Object.values(soundBanks.soundBanks).map(key => {
          return <option key={key.url} value={key.url}>{key.name}</option>
        })}
      </select>
      <button onClick={nextBank}>{"Next >"}</button>
    </div>
  );
};

export default BankSelector;
