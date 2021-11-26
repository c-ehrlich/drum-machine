import React from "react";
import useStore from "../store";
import styled from "styled-components";

const DisplayContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;

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
