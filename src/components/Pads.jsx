import React, { useEffect } from "react";
import styled from "styled-components";
import Pad from "./Pad";
import keys from "../tools/keys";
import useStore from "../store";
import playSound from "../tools/playSound";

// TODO get this by iterating through the bank instead
// (after passing the FCC requirements, because those don't allow us to have more pads)
// also try to get 1, 2, 3, 4 back in the grid
const PadsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 120px);
  gap: 16px;

  @media (max-width: 650px) {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }

  @media (max-width: 374px) {
    gap: 8px;
  }
`;

const Pads = () => {
  const bank = useStore((state) => state.bank);
  const setDisplay = useStore((state) => state.setDisplay);
  const volume = useStore((state) => state.volume);

  useEffect(() => {
    // putting this in here because it needs to be a callback with a huge
    // dependency array otherwise
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase();
      if (keys.includes(key)) {
        setDisplay(bank.pads[key].name);
        playSound({ triggerKey: key, volume: volume });
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [bank, setDisplay, volume])

  return (
    <PadsGrid>
      {keys.map((key, index) => (
        <Pad
          triggerKey={key}
          key={`pad-${key}`}
        />
      ))}
    </PadsGrid>
  );
};

export default Pads;
