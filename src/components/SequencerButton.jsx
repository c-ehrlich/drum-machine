import React, { useEffect } from "react";
import useStore from "../store";
import styled from "styled-components";
import playSound from "../tools/playsound";

const StyledSequencerButton = styled.button`
  height: 32px;
  width: 24px;
  background-color: rgb(118, 118, 118);
  border: 1px transparent;
  border-radius: 4px;
  cursor: pointer;

  &.play {
    background-color: red;
  }

  &.hit {
    background-color: white;
  }

  &.pass {
    background-color: salmon;
  }
`;

const SequencerButton = ({ button, step }) => {
  const isOn = useStore((state) => state.sequencer[button][step]);
  const toggleOn = useStore((state) => state.toggleSequencer);
  const currentStep = useStore((state) => state.currentStep);

  useEffect(() => {
    if (isOn && currentStep === step) {
      playSound(button);
    }
  }, [isOn, button, step, currentStep]);

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
      onClick={handleClick}
      className={assignButtonClass()}
    >
      {/* <div>{isOn ? "x" : "o"}</div> */}
    </StyledSequencerButton>
  );
};

export default SequencerButton;
