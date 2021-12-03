import React from "react";
import useStore from "../store";
import LabelText from "../styled";
import styled from "styled-components";

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

  const handleBPMChange = (bpm) => {
    setSequencerBPM(bpm);
    setDisplay(`${String(sequencerBPM).padStart(3, '0')} bpm`);
  }

  return (
    <StyledSequencerBPM>
      <input
        type="range"
        min="50"
        max="180"
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
