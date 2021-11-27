import React, { useEffect, useCallback, useState, useRef } from "react";
import styled from "styled-components";
import useStore from "../store";
import PadLabel from "./PadLabel";

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

  &:hover {
    ${'' /* color: #bbbbbb; */}
    border-style: inset;
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const PadButtonText = styled.p`
  font-size: 48px;
  font-family: "Fredoka One", cursive;
  -webkit-text-stroke: 1px rgb(51, 51, 51);
`;

const Pad = ({ triggerKey }) => {
  const setDisplay = useStore((state) => state.setDisplay);
  const [fileName, setFileName] = useState("");
  const power = useStore((state) => state.power);
  const bank = useStore((state) => state.bank);
  const volume = useStore((state) => state.volume);
  const padButtonRef = useRef();
  const padAudioRef = useRef();

  const playSound = useCallback(() => {
    /*
     * plays a sound and does all the related side effects
     * */
    if (!power) {
      console.log("power is off");
      return;
    }

    setDisplay(bank.pads[triggerKey].name);
    const pad = padAudioRef.current;
    pad.pause();
    pad.currentTime = 0;
    pad.volume = volume / 100;
    pad.play();
  }, [power, setDisplay, triggerKey, volume, bank.pads]);

  useEffect(() => {
    setFileName(
      process.env.PUBLIC_URL +
        `/sounds/${bank.url}/${bank.pads[triggerKey].file}`
    );
    // putting this in here because it needs to be a callback with a huge
    // dependency array otherwise
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
    <PadContainer>
      <PadButton
        ref={padButtonRef}
        className="drum-pad"
        id={`drum-pad-${triggerKey}`}
        onClick={playSound}
        disabled={!power}
      >
        <PadButtonText>{triggerKey}</PadButtonText>
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
