import create from "zustand";
import { devtools } from "zustand/middleware";
import getSoundBankFromTitle from "./helpers";
import sequencerInit from "./sequencer";

/*
 * get necessary data for initializing the store
 */
const soundBankInit = getSoundBankFromTitle("nujabes");

let useStore = (set) => ({
  // name and file location of sounds in the sound bank
  bank: soundBankInit,
  setBank: (bank) => {
    set((state) => ({ ...state, bank: getSoundBankFromTitle(bank) }));
  },

  // TODO having the current step instead of maybe something like an array of steps means that
  // every sequencer pad gets rerendered everytime the step changes
  // (confirm this with a console log in useEffect)
  // so instead it's probably better to have an array or something, and have each pad only
  // know about the state of its location in the array?
  currentStep: 0,
  setCurrentStep: (currentStep) => set((state) => ({ ...state, currentStep })),

  // what the display is currently showing
  display: "Drum Machine",
  setDisplay: (display) => set((state) => ({ ...state, display })),

  // Hide focus markers
  // This breaks some accessbility features
  // but makes the app look nicer
  showFocus: false,
  setShowFocus: (showFocus) => set((state) => ({ ...state, showFocus })),

  // drum machine / sequencer power
  power: true,
  togglePower: () =>
    set((state) => ({ power: !state.power, sequencerIsPlaying: false })),

  // on/off status of all sound buttons on the sequencer
  sequencer: sequencerInit,
  toggleSequencer: ({ button, step }) => {
    set((state) => {
      state.sequencer[button][step] = !state.sequencer[button][step];
    });
  },
  turnOffSequencer: ({ button, step }) => {
    set((state) => {
      state.sequencer[button][step] = false;
    });
  },

  // BPM of the sequencer
  sequencerBPM: 92,
  setSequencerBPM: (sequencerBPM) =>
    set((state) => ({ ...state, sequencerBPM })),

  // is the sequencer playing or not
  // toggling the sequencer also resets its current position to 0
  sequencerIsPlaying: false,
  toggleSequencerIsPlaying: () => {
    set((state) => ({
      sequencerIsPlaying: !state.sequencerIsPlaying,
      currentStep: 0,
    }));
  },

  // volume
  volume: 50,
  setVolume: (volume) => set((state) => ({ ...state, volume })),
});

useStore = devtools(useStore); // TEMP - remove this in prod
useStore = create(useStore);
export default useStore;
