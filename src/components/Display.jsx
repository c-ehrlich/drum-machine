import React from "react";
import useStore from "../store";
import styled from "styled-components";


const DisplayContainer = styled.div`
  background-color: white;
  border: 2px inset rgba(0, 0, 0, 0.4);
  border-radius: 6px;

  box-shadow: 0px 0px 12px 2px salmon;

  &.off {
    box-shadow: none;
  }
`;

const StyledDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* font-family: "Press Start 2P", cursive; */}
  font-family: "DSDigitalBold";
  font-size: 32px;
  box-shadow: 0px 0px 6px 3px rgb(215, 215, 215);

  background: crimson;
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.2) 33.33333%,
      rgba(255, 255, 255, 0.4) 33.33333%,
      rgba(255, 255, 255, 0.4) 66.66666%,
      rgba(255, 255, 255, 0.6) 66.66666%
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 0.7) 33.33333%,
      rgba(0, 255, 0, 0.7) 33.33333%,
      rgba(0, 255, 0, 0.7) 66.66666%,
      rgba(0, 0, 255, 0.7) 66.66666%
    );
  background-size: 3px 3px;
  mix-blend-mode: multiply;

  ${"" /* text */}
  color: white;
  text-shadow: 2px 0 rgba(255, 0, 0, 0.9), -2px 0 rgba(0, 0, 255, 0.9),
    1px 1px 2px white, 0 0 1em red, 0 0 0.2em blue;

  &.off {
    background-color: black;
  }
`;

const Display = () => {
  const display = useStore((state) => state.display);
  const power = useStore((state) => state.power);

  return (
    <DisplayContainer className={power ? null : "off"}>
      <StyledDisplay className={power ? null : "off"}>
        <div id="display">{power ? display : null}</div>
      </StyledDisplay>
    </DisplayContainer>
  );
};

export default Display;
