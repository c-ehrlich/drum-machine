import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import useStore from "../store";

const PadButton = styled.div`
  border: 1px solid black;
  width: 200px;
  margin: auto;
`;

const Pad = ({ triggerKey }) => {
  const setDisplay = useStore((state) => state.setDisplay);
  const [fileName, setFileName] = useState("");
  const power = useStore((state) => state.power);
  const bank = useStore((state) => state.bank);

  const handleClick = useCallback(() => {
    console.log(`playing ${fileName}`);
    setDisplay(bank.pads[triggerKey].file.slice(0, -4));
    document.querySelector(`#${triggerKey}`).play();
  }, [fileName, setDisplay, triggerKey, bank.pads]);

  useEffect(() => {
    setFileName(`/sounds/${bank.url}/${bank.pads[triggerKey].file}`);
    const handleKeyPress = (e) => {
      if (e.key === triggerKey || e.key === triggerKey.toLowerCase()) {
        handleClick();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [bank, handleClick, triggerKey]);

  return (
    <PadButton>
      <h3>{triggerKey}</h3>
      <button onClick={handleClick} disabled={!power}>
        Play {fileName}
      </button>
      <audio className="clip" id={triggerKey}
        src={fileName} type="audio/mpeg">
        Your browser does not support HTML5 audio
      </audio>
    </PadButton>
  );
};

export default Pad;
