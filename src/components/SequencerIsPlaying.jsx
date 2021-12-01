import React from "react";
import useStore from "../store";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const PlayStopButton = styled.div`
  background-color: rgb(118, 118, 118);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border-style: outset;
  border-color: rgba(255, 255, 255, 0.125);

  cursor: pointer;

  &:hover {
    background-color: rgba(215, 215, 215, 0.5);
    box-shadow: 0px 0px 10px 5px rgba(215, 215, 215, 0.5);
  }

  &.playing {
    background-color: salmon;
    box-shadow: 0px 0px 10px 5px salmon;
  }

  &.playing:hover {
    box-shadow: 0px 0px 12px 6px salmon;
  }
`;

const PlayStopIcon = styled(FontAwesomeIcon)`
  color: rgb(80, 80, 80);
  cursor: pointer;
  font-size: 24px;
  filter: drop-shadow(0px -1px 0px black);

  &:hover {
    color: rgb(80, 80, 80);
    filter: drop-shadow(0px -1px 0px black);
  }
  &.playing {
    color: indianred;
    filter: drop-shadow(0px -1px 0px firebrick);
  }
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
    <PlayStopButton
      onClick={handleClick}
      className={sequencerIsPlaying ? "playing" : null}
    >
      <PlayStopIcon
        icon={faPlay}
        // icon={sequencerIsPlaying ? faStop : faPlay}
        className={sequencerIsPlaying ? "playing" : null}
      />
    </PlayStopButton>
  );
};

export default SequencerIsPlaying;
