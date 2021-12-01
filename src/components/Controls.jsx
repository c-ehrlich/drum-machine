import React from "react";
import styled from "styled-components";
import Display from "./Display";
import Volume from "./Volume";
import BankSelector from "./BankSelector";

const ControlsContainer = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  gap: 32px;
  grid-template-rows 1fr 1fr;
`;

const ControlsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Controls = () => {
  return (
    <ControlsContainer>
      <Display />
      <ControlsRow>
        <Volume />
        <BankSelector />
      </ControlsRow>
    </ControlsContainer>
  );
};

export default Controls;
