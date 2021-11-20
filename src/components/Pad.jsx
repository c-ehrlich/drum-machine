import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import useStore from "../store";

const PadButton = styled.button`
  border: 1px solid black;
  width: 200px;
  margin: auto;
`;

const Pad = ({ triggerKey }) => {
  const setDisplay = useStore((state) => state.setDisplay);
  const [fileName, setFileName] = useState("");
  const power = useStore((state) => state.power);
  const bank = useStore((state) => state.bank);
  const volume = useStore((state) => state.volume);

  const playSound = useCallback(() => {
    console.log(`playing ${fileName}`);
    setDisplay(bank.pads[triggerKey].file.slice(0, -4));
    const pad = document.querySelector(`#${triggerKey}`);
    pad.pause();
    pad.currentTime = 0;
    pad.volume = volume / 100;
    pad.play();
  }, [fileName, setDisplay, triggerKey, bank.pads, volume]);

  useEffect(() => {
    setFileName(`sounds/${bank.url}/${bank.pads[triggerKey].file}`);
    const handleKeyPress = (e) => {
      if (e.key === triggerKey || e.key === triggerKey.toLowerCase()) {
        playSound();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [bank, playSound, triggerKey]);

  return (
    <PadButton
      className="drum-pad"
      id={`drum-pad-${triggerKey}`}
      onClick={playSound}
      disabled={!power}
    >
      {triggerKey}
      <audio className="clip" id={triggerKey} src={fileName} type="audio/mpeg">
        Your browser does not support HTML5 audio
      </audio>
    </PadButton>
  );
};

export default Pad;
