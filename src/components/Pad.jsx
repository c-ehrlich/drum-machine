import React, { useEffect, useCallback } from "react";
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

  const handleClick = useCallback(() => {
    console.log(`playing ${triggerKey}.mp3`);
    setDisplay(`${triggerKey}.mp3`);
  }, [setDisplay, triggerKey]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === triggerKey || e.key === triggerKey.toLowerCase()) {
        handleClick();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [triggerKey, handleClick]);

  return (
    <PadButton>
      <h3>{triggerKey}</h3>
      <button onClick={handleClick} disabled={!power}>
        Play {triggerKey}.mp3
      </button>
    </PadButton>
  );
};

export default Pad;
