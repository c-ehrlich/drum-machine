import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import useStore from "../store";
import PadLabel from "./PadLabel";
import playSound from "../tools/playSound";

const PadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PadButton = styled.button`
  ${"" /* layout */}
  width: 120px;
  height: 80px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(118, 118, 118);

  ${"" /* border */}
  border-radius: 8px;
  border-style: outset;
  border-color: rgba(255, 255, 255, 0.125);
  border-width: 2px;

  cursor: pointer;

  ${"" /* text */}
  color: transparent;

  transition: 200ms;

  &:hover {
    ${'' /* color: #bbbbbb; */}
    border-style: inset;
    border-color: rgba(255, 255, 255, 0.5);
  }

  &.hit {
    background-color: salmon;
    box-shadow: 0px 0px 10px 5px salmon;
    transition: 0ms;
  }
`;

const Pad = ({ triggerKey }) => {
  const [fileName, setFileName] = useState("");
  const power = useStore((state) => state.power);
  const bank = useStore((state) => state.bank);
  const volume = useStore((state) => state.volume);
  const padButtonRef = useRef();
  const padAudioRef = useRef();


  useEffect(() => {
    setFileName(
      process.env.PUBLIC_URL +
        `/sounds/${bank.url}/${bank.pads[triggerKey].file}`
    );
    // putting this in here because it needs to be a callback with a huge
    // dependency array otherwise
    const handleKeyPress = (e) => {
      if (e.key === triggerKey || e.key === triggerKey.toLowerCase()) {
        playSound({triggerKey: triggerKey, volume: volume });;
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [bank, triggerKey, volume]);

  return (
    <PadContainer>
      <PadButton
        ref={padButtonRef}
        className="drum-pad"
        id={`drum-pad-${triggerKey}`}
        onClick={() => {playSound({triggerKey: triggerKey, volume: volume})}}
        disabled={!power}
      >
        <audio
          ref={padAudioRef}
          className="clip"
          id={`pad-${triggerKey}`}
          src={fileName}
          type="audio/mpeg"
        >
          Your browser does not support HTML5 audio
        </audio>
      </PadButton>
      <PadLabel
        triggerKey={triggerKey}
        labelText={bank.pads[triggerKey].name}
      />
    </PadContainer>
  );
};

export default Pad;
