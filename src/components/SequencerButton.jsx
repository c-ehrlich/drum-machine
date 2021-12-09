import React, { useEffect } from "react";
import useStore from "../store";
import styled from "styled-components";
import playSound from "../tools/playSound";

const StyledSequencerButton = styled.button`
  height: 32px;
  width: 100%;
  background-color: rgb(118, 118, 118);
  border-radius: 4px;
  border-style: outset;
  border-color: rgba(255, 255, 255, 0.125);
  border-width: 2px;
  cursor: pointer;

  transition: 0ms;

  &:hover {
    background-color: rgba(215, 215, 215, 0.5);
    box-shadow: 0px 0px 10px 5px rgba(215, 215, 215, 0.5);
    z-index: 1;
  }

  &.play {
    background-color: red;
    box-shadow: 0px 0px 10px 5px red;
    transition: 200ms;
    z-index: 4;
  }

  &.hit {
    background-color: rgb(215, 215, 215);
    box-shadow: 0px 0px 6px 3px rgb(215, 215, 215);
    transition: 0ms;
    z-index: 2;
  }

  &.pass {
    background-color: salmon;
    box-shadow: 0px 0px 10px 5px salmon;
    transition: 500ms;
    z-index: 3;
  }

  &.pass:hover {
    transition: 100ms;
    box-shadow: 0px 0px 12px 6px salmon;
    z-index: 3;
  }

  &:disabled {
    box-shadow: none;
    background-color: rgb(118, 118, 118);
    cursor: default;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const SequencerButton = ({ button, step }) => {
  const power = useStore((state) => state.power);
  const isOn = useStore((state) => state.sequencer[button][step]);
  const toggleOn = useStore((state) => state.toggleSequencer);
  const currentStep = useStore((state) => state.currentStep);
  const volume = useStore((state) => state.volume);
  const showFocus = useStore((state) => state.showFocus);

  useEffect(() => {
    if (isOn && currentStep === step) {
      playSound({triggerKey: button, volume: volume });
    }
  }, [isOn, button, step, currentStep, volume]);

  const handleClick = () => {
    toggleOn({ button: button, step: step });
  };

  const assignButtonClass = () => {
    if (currentStep === step) {
      if (isOn) {
        return "play";
      } else {
        return "hit";
      }
    } else {
      if (isOn) {
        return "pass";
      } else {
        return null;
      }
    }
  };

  return (
    <StyledSequencerButton
      disabled = {!power}
      onClick={handleClick}
      className={`${assignButtonClass()} ${!showFocus && "no-outline-on-focus"}`}
    >
    </StyledSequencerButton>
  );
};

export default SequencerButton;
