import React, { useEffect, useCallback } from "react";
import useStore from "../store";
import styled from "styled-components";
import LabelText from "../styled";

const MIN_VOLUME = 0;
const MAX_VOLUME = 100;

const InfoElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Volume = () => {
  const volume = useStore((state) => state.volume);
  const setVolume = useStore((state) => state.setVolume);
  const power = useStore((state) => state.power);
  const setDisplay = useStore((state) => state.setDisplay);
  const showFocus = useStore((state) => state.showFocus);

  const handleVolumeChange = useCallback((newVolumeInput) => {
    const volumeErrorCheck = (newVolumeInput) => {
      if (newVolumeInput < MIN_VOLUME) {return MIN_VOLUME}
      else if (newVolumeInput > MAX_VOLUME) {return MAX_VOLUME}
      else return newVolumeInput;
    }
    const newVolume = volumeErrorCheck(newVolumeInput);
    setDisplay(`Volume ${String(newVolume).padStart(3, '0')}%`);
    setVolume(newVolume);
  }, [setVolume, setDisplay]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === "Y") handleVolumeChange(volume - 1);
      if (e.key.toUpperCase() === "U") handleVolumeChange(volume + 1);
    }
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    }
  })

  return (
    <InfoElement>
      <input
        type="range"
        min={MIN_VOLUME}
        max={MAX_VOLUME}
        value={volume}
        onChange={(e) => handleVolumeChange(e.target.value)}
        className={`slider ${!showFocus && "no-outline-on-focus"}`}
        id="myRange"
        disabled={!power}
      />
      <LabelText>
        Volume
      </LabelText>
    </InfoElement>
  );
};

export default Volume;
