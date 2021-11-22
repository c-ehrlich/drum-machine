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
  // TODO having the current step instead of maybe something like an array of steps means that
  // every sequencer pad gets rerendered everytime the step changes
  // (confirm this with a console log in useEffect)
  // so instead it's probably better to have an array or something, and have each pad only
  // know about the state of its location in the array?
  currentStep: null,
  setCurrentStep: (currentStep) => set((state) => ({ ...state, currentStep})),
});

useStore = devtools(useStore);
useStore = create(useStore);
export default useStore;
