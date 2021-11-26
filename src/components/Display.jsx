import React from "react";
import useStore from "../store";
import styled from "styled-components";

const DisplayContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;
`;

const Display = () => {
  const display = useStore((state) => state.display);

  return (
    <DisplayContainer>
      <div id="display">{display}</div>
    </DisplayContainer>
  );
};

export default Display;
