import React, { useEffect } from "react";
import useStore from "../store";
import styled from "styled-components";
import playSound from "../tools/playsound";

const StyledSequencerButton = styled.button`
  height: 32px;
  width: 24px;
  background-color: rgb(118, 118, 118);

  border-radius: 4px;
  border-style: outset;
  border-color: rgba(255, 255, 255, 0.125);
  border-width: 2px;

  cursor: pointer;

  &.play {
    background-color: red;
    box-shadow: 0px 0px 10px 5px red;
  }

  &.hit {
    background-color: rgb(215, 215, 215);
    box-shadow: 0px 0px 6px 3px rgb(215, 215, 215);
  }

  &.pass {
    background-color: salmon;
    box-shadow: 0px 0px 10px 5px salmon;
  }

  &:hover {
    background-color: rgb(215, 215, 215);
    box-shadow: 0px 0px 10px 5px rgb(215, 215, 215);
  }

  &.pass:hover {
    background-color: rgb(255, 200, 200);
    box-shadow: 0px 0px 10px 5px rgb(255, 200, 200);
  }
`;

const SequencerButton = ({ button, step }) => {
  const power = useStore((state) => state.power);
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
      {/* <div>{isOn ? "x" : "o"}</div> */}
    </StyledSequencerButton>
  );
};

export default SequencerButton;
