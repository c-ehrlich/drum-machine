import React from "react";
import useStore from "../store";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

const PlayStopButton = styled.div`
  background-color: yellow;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PlayStopIcon = styled(FontAwesomeIcon)`
  color: green;
  cursor: pointer;
  font-size: 24px;
`;

const SequencerIsPlaying = () => {
  const sequencerIsPlaying = useStore((state) => state.sequencerIsPlaying);
  const toggleSequencerIsPlaying = useStore(
    (state) => state.toggleSequencerIsPlaying
  );

  const handleClick = () => {
    toggleSequencerIsPlaying();
  };

  return (
    <PlayStopButton onClick={handleClick}>
      <PlayStopIcon icon={sequencerIsPlaying ? faStop : faPlay} />
    </PlayStopButton>
  );
};

export default SequencerIsPlaying;
