import useStore from "../store";

const playSound = ({ triggerKey, volume }) => {
  const power = useStore.getState().power;
  if (power) {
    try {
      const padAudio = document.querySelector(`#pad-${triggerKey}`);
      console.log("current time: " + padAudio.currentTime);
      console.log("paused: " + padAudio.paused);
      console.log("ended: " + padAudio.ended);
      console.log("readyState :" + padAudio.readyState);
      console.log("HAVE_CURRENT_DATA: " + padAudio.HAVE_CURRENT_DATA);

      console.log(padAudio);
      padAudio.pause();
      padAudio.currentTime = 0;
      padAudio.volume = volume / 100;
      padAudio.play();
      const padButton = document.querySelector(`#drum-pad-${triggerKey}`);
      padButton.classList.add("hit");
      setTimeout(() => {
        padButton.classList.remove("hit");
      }, 200);

    } catch (err) {
      console.log("Failed to play..." + err);
    }
  }
};

export default playSound;
