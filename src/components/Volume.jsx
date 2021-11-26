import React from "react";
import useStore from "../store";
import styled from "styled-components";
import LabelText from "../styled";

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

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    setVolume(volume);
    setDisplay(`Volume: ${volume}%`);
  };

  return (
    <InfoElement>
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
      <LabelText>
        Volume
      </LabelText>
    </InfoElement>
  );
};

export default Volume;
