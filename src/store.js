import create from "zustand";
import { devtools } from "zustand/middleware";
import getSoundBankFromTitle from "./helpers";
import sequencerInit from "./sequencer";

const soundBankInit = getSoundBankFromTitle("nujabes");


let useStore = (set) => ({
  power: true,
  togglePower: () => set((state) => ({ power: !state.power })),
  volume: 50,
  setVolume: (volume) => set((state) => ({ ...state, volume })),
  display: "Drum Machine",
  setDisplay: (display) => set((state) => ({ ...state, display })),
  bank: soundBankInit,
  setBank: (bank) => {
    set((state) => ({ ...state, bank: getSoundBankFromTitle(bank) }));
  },
  sequencer: sequencerInit,
  toggleSequencer: ({ button, step }) => {
    set((state) => {
      console.log(button);
      console.log(step);
      state.sequencer[button][step] = !state.sequencer[button][step];
    });
  },
});

useStore = devtools(useStore);
useStore = create(useStore);
export default useStore;
