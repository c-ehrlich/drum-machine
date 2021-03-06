import React, { useEffect } from "react";
import useStore from "../store";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const StyledPowerButton = styled.button`
  height: 48px;
  width: 48px;
  background: conic-gradient(
    #d7d7d7,
    #c3c3c3,
    #cccccc,
    #c6c6c6,
    #d7d7d7,
    #c3c3c3,
    #cccccc,
    #c6c6c6,
    #d7d7d7,
    #c3c3c3,
    #cccccc,
    #c6c6c6,
    #d7d7d7,
    #c3c3c3,
    #cccccc,
    #c6c6c6,
    #d7d7d7
  );
  border-radius: 100%;
  border: 3px solid;
  border-color: #888888;
  color: black;
  cursor: pointer;

  &.on {
    border-color: red;
    color: red;

    box-shadow: 0px 0px 5px 1px #ffa98f;
  }
`;

const PowerIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const PowerButton = () => {
  const power = useStore((state) => state.power);
  const togglePower = useStore((state) => state.togglePower);
  const setCurrentStep = useStore((state) => state.setCurrentStep);
  const showFocus = useStore((state) => state.showFocus);

  const toggleOnSound = new Audio(
    process.env.PUBLIC_URL + "/sounds/buttons/switch-on.mp3"
  );
  const toggleOffSound = new Audio(
    process.env.PUBLIC_URL + "/sounds/buttons/switch-off.mp3"
  );

  const handleTogglePower = () => {
    if (power) {
      setCurrentStep(0);
      toggleOffSound.play();
    } else {
      toggleOnSound.play();
    }
    togglePower();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === "O") {
        handleTogglePower();
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  })

  return (
    <StyledPowerButton onClick={handleTogglePower} className={`${power && "on"} ${!showFocus && "no-outline-on-focus"}`}>
      <PowerIcon icon={faPowerOff} />
    </StyledPowerButton>
  );
};

export default PowerButton;
