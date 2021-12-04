import React, { useCallback, useEffect } from "react";
import useStore from "../store";
import LabelText from "../styled";
import styled from "styled-components";

const MIN_BPM = 50;
const MAX_BPM = 180;

const StyledSequencerBPM = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SequencerBPM = () => {
  const power = useStore((state) => state.power);
  const setDisplay = useStore((state) => state.setDisplay);
  const sequencerBPM = useStore((state) => state.sequencerBPM);
  const setSequencerBPM = useStore((state) => state.setSequencerBPM);

  const handleBPMChange = useCallback((bpm) => {
    setSequencerBPM(bpm);
    setDisplay(`${String(bpm).padStart(3, '0')} bpm`);
  }, [setDisplay, setSequencerBPM]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === "N" && sequencerBPM > MIN_BPM) {
        handleBPMChange(sequencerBPM - 1);
      }
      if (e.key.toUpperCase() === "M" && sequencerBPM < MAX_BPM) {
        handleBPMChange(sequencerBPM + 1);
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [sequencerBPM, handleBPMChange])

  return (
    <StyledSequencerBPM>
      <input
        type="range"
        min={MIN_BPM}
        max={MAX_BPM}
        value={sequencerBPM}
        onChange={(e) => handleBPMChange(e.target.value)}
        className="slider"
        id="myRange"
        disabled={!power}
      />
      <LabelText>Sequencer BPM</LabelText>
    </StyledSequencerBPM>
  );
};

export default SequencerBPM;
