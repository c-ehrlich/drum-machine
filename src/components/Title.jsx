import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
  color: #d1d1d1;
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
`;

const ContrastText = styled.span`
  color: #ff0000;
`;

const Title = () => {
  return (
    <>
      <TitleText>
        <ContrastText>FCC</ContrastText>3000
      </TitleText>
    </>
  );
};

export default Title;
