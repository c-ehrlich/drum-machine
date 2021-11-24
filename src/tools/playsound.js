import useStore from "../store";

const playSound = (triggerKey) => {
  const power = useStore.getState().power;
  const sequencerIsPlaying = useStore.getState().sequencerIsPlaying;

  if (power && sequencerIsPlaying) {
    const volume = useStore.getState().volume;
    const pad = document.querySelector(`#pad-${triggerKey}`);
    pad.pause();
    pad.currentTime = 0;
    pad.volume = volume / 100;
    pad.play();
  }
};

export default playSound;
