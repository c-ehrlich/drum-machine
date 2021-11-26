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

const Controls = () => {
  return (
    <ControlsContainer>
      <Display />
      <div>
        <Volume />
        <BankSelector />
      </div>
    </ControlsContainer>
  );
};

export default Controls;
