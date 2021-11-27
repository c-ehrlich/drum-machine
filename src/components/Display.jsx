import React from "react";
import useStore from "../store";
import styled from "styled-components";

const DisplayContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(51, 152, 219, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;

  border: 2px inset rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  ${'' /* text */}
  color: white;

  &.off {
    background-color: darkblue;
  }
`;

const Display = () => {
  const display = useStore((state) => state.display);
  const power = useStore((state) => state.power);

  return (
    <DisplayContainer className={power ? null : "off"}>
      <div id="display">{power ? display : null}</div>
    </DisplayContainer>
  );
};

export default Display;
