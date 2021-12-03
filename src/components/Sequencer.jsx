import React, { useEffect } from "react";
import SequencerButton from "./SequencerButton";
import keys from "../tools/keys";
import styled from "styled-components";
import useStore from "../store";
import SequencerBPM from "./SequencerBPM";
import SequencerIsPlaying from "./SequencerIsPlaying";
import LabelText from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const SequencerOuter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${'' /* TODO this 25px gap is a dumb hack
  to align things vertically. figure out
  the correct way of doing it. */}
  gap: 25px;
`;
const SequencerControls = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
const SequencerControlsLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;
const SequencerRowsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;
const SequencerRow = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: row;
  align-items: center;
`;
const SequencerBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const SequencerButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DeleteRowIcon = styled(FontAwesomeIcon)`
  color: rgb(118,118,118);
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: rgb(215, 215, 215);
  }
`;
const TitleText = styled.h1`
  color: #d1d1d1;
  margin: 0;
  font-size: 24px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  text-shadow: 0px -2px 0px #000, 0px 1px 1px #666;
`;
const ContrastText = styled.span`
  color: #ff0000;
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
      turnOffSequencer({ button: button, step: step });
    });
  };

  return (
    <SequencerOuter>
      <SequencerControls>
        <SequencerBPM />
        <SequencerControlsLeft>
          <TitleText>
            <ContrastText>JS</ContrastText>equencer
          </TitleText>
          <SequencerIsPlaying />
        </SequencerControlsLeft>
      </SequencerControls>
      <SequencerRowsContainer>
        {keys.map((button) => {
          return (
            <SequencerBlock key={`sequencer-block-${button}`}>
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
                <DeleteRowIcon
                  icon={faTrash}
                  onClick={() => clearSequencerRow(button)}
                />
              </SequencerRow>
              <LabelText key={`sequencer-${button}`}>
                {bank.pads[button].name}
              </LabelText>
            </SequencerBlock>
          );
        })}
      </SequencerRowsContainer>
    </SequencerOuter>
  );
};

export default Sequencer;
