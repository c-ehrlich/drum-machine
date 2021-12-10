import React from "react";
import styled from "styled-components";

import Controls from "./Controls";
import HeaderRow from "./HeaderRow";
import Pads from "./Pads";
import PowerButton from "./PowerButton";
import Title from "./Title";

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
