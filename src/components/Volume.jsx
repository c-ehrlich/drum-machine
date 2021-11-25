import React from "react";
import useStore from "../store";

const Volume = () => {
  const volume = useStore((state) => state.volume);
  const setVolume = useStore((state) => state.setVolume);
  const power = useStore((state) => state.power);
  const setDisplay = useStore((state) => state.setDisplay);

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    setVolume(volume);
    setDisplay(`Volume: ${volume}%`);
  }

  return (
    <div>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="slider"
          id="myRange"
          disabled={!power}
        />
      </div>
    </div>
  );
};

export default Volume;
