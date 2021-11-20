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
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="slider"
          id="myRange"
        />
      </div>
    </div>
  );
};

export default Volume;
