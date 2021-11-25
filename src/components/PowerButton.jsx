import React from "react";
import useStore from "../store";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const PowerButton = () => {
  const power = useStore((state) => state.power);
  const togglePower = useStore((state) => state.togglePower);

  const PowerButtonOuter = styled.button`
    height: 48px;
    width: 48px;
    border-radius: 100%;
    border: 3px solid;
    border-color: ${power ? "lightgreen" : "#888888"};
    color: ${power ? "lightgreen" : "black"};
  `;

  const toggleOnSound = new Audio(
    process.env.PUBLIC_URL + "/sounds/buttons/switch-on.mp3"
  );
  const toggleOffSound = new Audio(
    process.env.PUBLIC_URL + "/sounds/buttons/switch-off.mp3"
  );

  const handleClick = () => {
    power ? toggleOffSound.play() : toggleOnSound.play();

    togglePower();
  };

  return (
    <>
      <PowerButtonOuter onClick={handleClick} classList={power ? "on" : null}>
        <FontAwesomeIcon icon={faPowerOff} />
      </PowerButtonOuter>
    </>
  );
};

export default PowerButton;
