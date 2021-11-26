import React from "react";
import useStore from "../store";

const SequencerBPM = () => {
  const power = useStore((state) => state.power);
  const setDisplay = useStore((state) => state.setDisplay);
  const sequencerBPM = useStore((state) => state.sequencerBPM);
  const setSequencerBPM = useStore((state) => state.setSequencerBPM);

  const handleBPMChange = (bpm) => {
    setSequencerBPM(bpm);
    setDisplay(`${sequencerBPM}bpm`);
  }

  return (
    <div>
      <div>{sequencerBPM}</div>
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
    </div>
  );
};

export default SequencerBPM;
