import React from "react";
import styled from "styled-components";

import Controls from "./components/Controls";
import HeaderRow from "./components/HeaderRow";
import Pads from "./components/Pads";
import PowerButton from "./components/PowerButton";
import Title from "./components/Title";

const StyledDrumMachine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const DrumMachineBottomContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
`;

const DrumMachine = () => {
  return (
    <StyledDrumMachine>
      <HeaderRow>
        <PowerButton />
        <Title />
      </HeaderRow>
      <DrumMachineBottomContainer>
        <Controls />
        <Pads />
      </DrumMachineBottomContainer>
    </StyledDrumMachine>
  );
};

export default DrumMachine;
