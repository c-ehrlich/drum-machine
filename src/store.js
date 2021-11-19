import create from "zustand";

const useStore = create(set => ({
  power: true,
  togglePower: () => set(state => ({ power: !state.power })),
  volume: 50,
  setVolume: () => set(state => ({ volume: state.volume })),
  display: "Drum Machine",
  setDisplay: (display) => set(state => ({ ...state, display })),
  bank: "nujabes",
  setBank: (bank) => set(state => ({ ...state, bank })),
}))

export default useStore;
