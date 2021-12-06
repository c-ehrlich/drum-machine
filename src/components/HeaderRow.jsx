import React from "react";
import styled from "styled-components";

import PowerButton from "./PowerButton";
import Title from "./Title";

const StyledHeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    justify-content: flex-start;
    gap: 16px;
  }

  @media (max-width: 319px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderRow = () => {
  return (
    <StyledHeaderRow>
      <PowerButton />
      <Title />
    </StyledHeaderRow>
  );
};

export default HeaderRow;
