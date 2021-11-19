import React from "react";
import styled from "styled-components";
import useStore from "../store";

const PadButton = styled.div`
  border: 1px solid black;
  width: 200px;
  margin: auto;
`;

const Pad = ({ triggerKey }) => {
  const setDisplay = useStore((state) => state.setDisplay);
  const power = useStore((state) => state.power);

  const handleClick = () => {
    console.log(`playing ${triggerKey}.mp3`);
    setDisplay(`${triggerKey}.mp3`);
  };

  const handleKeyPress = (key) => {
    console.log(key);
  }

  return (
    <PadButton onKeyPress={(key) => handleKeyPress(key)}>
      <h3>{triggerKey}</h3>
      <button onClick={handleClick} disabled={!power}>
        Play {triggerKey}.mp3
      </button>
    </PadButton>
  );
};

export default Pad;
