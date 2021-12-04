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
  cursor: pointer;

  ${"" /* border */}
  border-radius: 8px;
  border-style: outset;
  border-color: rgba(255, 255, 255, 0.125);
  border-width: 2px;

  ${"" /* text */}
  color: transparent;

  transition: 200ms;

  &:hover {
    background-color: rgba(215, 215, 215, 0.5);
    box-shadow: 0px 0px 10px 5px rgba(215, 215, 215, 0.5);
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
  const setDisplay = useStore((state) => state.setDisplay);
  const volume = useStore((state) => state.volume);
  const showFocus = useStore((state) => state.showFocus);
  const padButtonRef = useRef();
  const padAudioRef = useRef();

  useEffect(() => {
    setFileName(
      process.env.PUBLIC_URL +
        `/sounds/${bank.url}/${bank.pads[triggerKey].file}`
    );
  }, [bank, triggerKey, volume, setDisplay]);

  return (
    <PadContainer>
      <PadButton
        ref={padButtonRef}
        className={!showFocus && "no-outline-on-focus"}
        id={`drum-pad-${triggerKey}`}
        onClick={() => {
          if (fileName) {
            setDisplay(bank.pads[triggerKey].name);
            playSound({ triggerKey: triggerKey, volume: volume });
          } else {
            console.log("file not yet loaded");
          }
        }}
        disabled={!power}
      >
        {fileName ? (
          <audio
            preload="auto"
            ref={padAudioRef}
            className="clip"
            id={`pad-${triggerKey}`}
            src={fileName}
            type="audio/mpeg"
          >
            Your browser does not support HTML5 audio
          </audio>
        ) : null}
      </PadButton>
      <PadLabel
        triggerKey={triggerKey}
        labelText={bank.pads[triggerKey].name}
      />
    </PadContainer>
  );
};

export default Pad;
