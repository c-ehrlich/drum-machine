import React, { useEffect } from "react";
import SequencerButton from "./SequencerButton";
import keys from "../tools/keys";
import styled from "styled-components";
import useStore from "../store";
import SequencerBPM from "./SequencerBPM";
import SequencerIsPlaying from "./SequencerIsPlaying";

const SequencerOuter = styled.div`
  margin: auto;
`;
const SequencerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const SequencerRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const SequencerButtonBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 20px);
`;

const Sequencer = () => {
  const bank = useStore((state) => state.bank);
  const currentStep = useStore((state) => state.currentStep);
  const setCurrentStep = useStore((state) => state.setCurrentStep);
  const sequencer = useStore((state) => state.sequencer);
  const sequencerBPM = useStore((state) => state.sequencerBPM);
  const sequencerIsPlaying = useStore((state) => state.sequencerIsPlaying);
  const turnOffSequencer = useStore((state) => state.turnOffSequencer);
  const power = useStore((state) => state.power);

  // TODO extract this logic into its own component? and just unmount that component when
  // the sequences isn't playing?
  // also then have currentStep reset to 0?
  useEffect(() => {
    const interval = setInterval(() => {
      if (power && sequencerIsPlaying) {
        currentStep <= 0 || currentStep >= 16
          ? setCurrentStep(1)
          : setCurrentStep(currentStep + 1);
      }
    }, (1000 / sequencerBPM) * 15);
    return () => clearInterval(interval);
  }, [currentStep, setCurrentStep, sequencerBPM, sequencerIsPlaying, power]);

  const clearSequencerRow = (button) => {
    Object.keys(sequencer[button]).forEach((step) => {
      turnOffSequencer({button: button, step: step});
  })};

  return (
    <SequencerOuter>
      <SequencerIsPlaying />
      <SequencerBPM />
      {currentStep}
      {keys.map((button) => {
        return (
          <SequencerBlock>
            <div key={`sequencer-${button}`}>{bank.pads[button].name}</div>
            <SequencerRow>
              <SequencerButtonBlock>
                {[...Array(16).keys()].map((step) => {
                  return (
                    <SequencerButton
                      key={`sequencer-${button}-${step + 1}`}
                      button={button}
                      // maybe find a function that can create a range between
                      // two arbitrary numbers instead of doing this awful hack?
                      step={step + 1}
                    />
                  );
                })}
              </SequencerButtonBlock>
              <button onClick={() => clearSequencerRow(button)}>
                clear
              </button>
            </SequencerRow>
          </SequencerBlock>
        );
      })}
    </SequencerOuter>
  );
};

export default Sequencer;
