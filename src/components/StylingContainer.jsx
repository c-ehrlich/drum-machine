import React from "react";
import styled from "styled-components";

const StyledStylingContainer = styled.div`
  margin: 16px;
  background-image: url(${process.env.PUBLIC_URL + `/images/wood2.jpg`});
  background-size: cover;
  box-shadow: 0px 0px 15px 3px black;

  @media (max-width: 650px) {
    width: 100%;
    margin: 0;
    background-image: none;
    box-shadow: none;
  }
`;

const DrumMachineOuterContainer = styled.div`
  background-color: #333333;
  background-image: linear-gradient(
    to right bottom,
    rgb(17, 17, 17) 12.5%,
    rgb(67, 67, 67) 25%,
    rgb(17, 17, 17) 50%,
    rgb(67, 67, 67) 75%,
    rgb(17, 17, 17) 100%
  );
  padding: 32px;
  margin: 0 32px;

  display: flex;
  flex-direction: row;
  gap: 64px;

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  @media (max-width: 650px) {
    width: 100% !important;
    margin: 0;
    padding: 16px;
    box-sizing: border-box;
  }

  @media (max-width: 374px) {
    padding: 8px;
  }
`;

const StylingContainer = (props) => {
  return (
    <StyledStylingContainer>
      <DrumMachineOuterContainer>{props.children}</DrumMachineOuterContainer>
    </StyledStylingContainer>
  );
};

export default StylingContainer;
