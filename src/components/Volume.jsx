import React from "react";
import useStore from "../store";

const Volume = () => {
  const volume = useStore((state) => state.volume);
  const setVolume = useStore((state) => state.setVolume);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  }

  return (
    <div>
      Volume: {volume}
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          initialValue={volume}
          onChange={handleVolumeChange}
          class="slider"
          id="myRange"
        />
      </div>
    </div>
  );
};

export default Volume;
