import React, { useEffect } from "react";
import useStore from "../store";
import styled from "styled-components";
import playSound from "../tools/playSound";

const StyledSequencerButton = styled.button`
  height: 32px;
  width: 24px;
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
  }

  &.play {
    background-color: red;
    box-shadow: 0px 0px 10px 5px red;
    transition: 200ms;
  }

  &.hit {
    background-color: rgb(215, 215, 215);
    box-shadow: 0px 0px 6px 3px rgb(215, 215, 215);
    transition: 0ms;
  }

  &.pass {
    background-color: salmon;
    box-shadow: 0px 0px 10px 5px salmon;
    transition: 500ms;
  }

  &.pass:hover {
    transition: 100ms;
    box-shadow: 0px 0px 12px 6px salmon;
  }
`;

const SequencerButton = ({ button, step }) => {
  const power = useStore((state) => state.power);
  const isOn = useStore((state) => state.sequencer[button][step]);
  const toggleOn = useStore((state) => state.toggleSequencer);
  const currentStep = useStore((state) => state.currentStep);
  const volume = useStore((state) => state.volume);

  useEffect(() => {
    if (isOn && currentStep === step) {
      playSound({triggerKey: button, volume: volume });
    }
  }, [isOn, button, step, currentStep, volume]);

  const handleClick = () => {
    toggleOn({ button: button, step: step });
  };

  const assignButtonClass = () => {
    if (!power) return "power-off";
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
      onClick={handleClick}
      className={assignButtonClass()}
    >
    </StyledSequencerButton>
  );
};

export default SequencerButton;
