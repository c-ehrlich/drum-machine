import React from "react";
import styled from "styled-components";
import Pad from "./Pad";

// TODO get this by iterating through the bank instead
// (after passing the FCC requirements, because those don't allow us to have more pads)
// also try to get 1, 2, 3, 4 back in the grid
const keys = [
  "Q",
  "W",
  "E",
  "R",
  "A",
  "S",
  "D",
  "F",
  "Z",
  "X",
  "C",
  "V",
];

const PadsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
`;

const Pads = () => {
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
