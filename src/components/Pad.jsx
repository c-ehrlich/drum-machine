import React, { useEffect, useCallback, useState, useRef } from "react";
import styled from "styled-components";
import useStore from "../store";
import PadLabel from "./PadLabel";

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
    <div>
      <PadButton
        ref={padButtonRef}
        className="drum-pad"
        id={`drum-pad-${triggerKey}`}
        onClick={playSound}
        disabled={!power}
      >
        {triggerKey}
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
    </div>
  );
};

export default Pad;
