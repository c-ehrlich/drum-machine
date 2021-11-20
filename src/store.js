import create from "zustand";
import getSoundBankFromTitle from "./helpers";

const soundBankInit = getSoundBankFromTitle("uk-drill");

const useStore = create(set => ({
  power: true,
  togglePower: () => set(state => ({ power: !state.power })),
  volume: 50,
  setVolume: (volume) => set(state => ({ ...state, volume })),
  display: "Drum Machine",
  setDisplay: (display) => set(state => ({ ...state, display })),
  bank: soundBankInit,
  setBank: (bank) => {
    const newBank = getSoundBankFromTitle(bank);
    set(state => ({ ...state, newBank }));
    console.log(bank);
    console.log(newBank);
  },
}))

export default useStore;
