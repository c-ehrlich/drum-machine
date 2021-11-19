import React, { useEffect } from "react";
import styled from "styled-components";
import Pad from "./Pad";

const keys = [
  "1", "2", "3", "4",
  "q", "w", "e", "r",
  "a", "s", "d", "f",
  "z", "x", "c", "v",
]

const PadsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
`;

const Pads = () => {
  useEffect(() => {
    // we want to send the event to the component and trigger that component's onClick or whatever
    // maybe achieve this by making the onClick function a hook instead?
    console.log("hi");
  }, [])

  return (
    <PadsGrid>
      { keys.map(key => <Pad triggerKey={key} />)}
    </PadsGrid>
  );
};

export default Pads;
