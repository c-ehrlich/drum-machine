import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
  color: #d1d1d1;
  margin: 0;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  text-shadow: 0px -2px 0px #000, 0px 1px 1px #666;
  user-select: none;

  @media (max-width: 279px) {
    font-size: 24px;
  }
`;

const ContrastText = styled.span`
  color: #ff0000;
`;

const Title = () => {
  return (
    <TitleText>
      <ContrastText>FCC</ContrastText>3000
    </TitleText>
  );
};

export default Title;
