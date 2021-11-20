import create from "zustand";
import { devtools } from "zustand/middleware";
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
    set(state => ({ ...state, bank: getSoundBankFromTitle(bank) }));
  },
}))

export default useStore;
