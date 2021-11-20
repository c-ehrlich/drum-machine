import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import useStore from "../store";
import soundBanks from "../sounds.json"

const PadButton = styled.div`
  border: 1px solid black;
  width: 200px;
  margin: auto;
`;

const Pad = ({ triggerKey }) => {
  const setDisplay = useStore((state) => state.setDisplay);
  const power = useStore((state) => state.power);
  const bank = useStore((state) => state.bank);

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
      <audio controls>
        <source src={soundBanks.soundBanks[bank]} type="audio/mpeg" />
        Your browser does not support HTML5 audio
      </audio>
    </PadButton>
  );
};

export default Pad;
