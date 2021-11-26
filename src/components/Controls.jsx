import React from "react";
import styled from "styled-components";
import Display from "./Display";
import Volume from "./Volume";
import BankSelector from "./BankSelector";

const ControlsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

const ControlsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Controls = () => {
  return (
    <ControlsContainer>
      <Display />
      <ControlsColumn>
        <Volume />
        <BankSelector />
      </ControlsColumn>
    </ControlsContainer>
  );
};

export default Controls;
