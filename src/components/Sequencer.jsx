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
  width: 528px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${
    "" /* TODO this 25px gap is a dumb hack
  to align things vertically. figure out
  the correct way of doing it. */
  }
  gap: 25px;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const SequencerControls = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;

  @media (max-width: 650px) {
    gap: 16px;
  }
`;

const SequencerRowsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

// the 16 pads
const SequencerRow = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: row;
  align-items: center;
`;

const SequencerBlock = styled.div`
  width: 100%;
  ${
    "" /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  }
  display: grid;
  grid-template-columns: auto min-content;
  grid-template-areas:
    "pads   delete"
    "label  .";
  column-gap: 16px;
  row-gap: 0;

  @media (max-width: 374px) {
    column-gap: 8px;
  }
`;

const SequencerButtonBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  justify-content: space-between;
  column-gap: 8px;

  @media (max-width: 550px) {
    grid-template-columns: repeat(8, 1fr);
    row-gap: 8px;
  }

  @media (max-width: 300px) {
    column-gap: 4px;
  }
`;

const DeleteRowButton = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: 0;
`;

const DeleteRowIcon = styled(FontAwesomeIcon)`
  color: rgb(118, 118, 118);
  font-size: 24px;
  cursor: pointer;
  ${
    "" /* TODO figure out a good way to offset the icons
  probably don't want to put them on a background/button
  so maybe a good drop-shadow? */
  }
  ${"" /* filter: drop-shadow(0px 2px 0px rgba(255, 255, 255, 0.125)); */}

  &:hover {
    color: rgb(215, 215, 215);
  }

  &.disabled {
    color: rgb(118, 118, 118);
    cursor: default;
  }
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
  const showFocus = useStore((state) => state.showFocus);

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
        <SequencerIsPlaying />
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
              </SequencerRow>
              <DeleteRowButton
                disabled={!power}
                onClick={() => clearSequencerRow(button)}
                className={`slider ${!showFocus && "no-outline-on-focus"}`}
              >
                <DeleteRowIcon
                  icon={faTrash}
                  className={!power && "disabled"}
                />
              </DeleteRowButton>
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
