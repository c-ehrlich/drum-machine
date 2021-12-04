import React from "react";
import styled from "styled-components";

const SemiTransparentBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1;
`;

const StyledInfoModal = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
`;

const InfoModal = ({ setModalOpen }) => {
  return (
    <SemiTransparentBackground onClick={() => setModalOpen(false)}>
      <StyledInfoModal onClick={(e) => e.stopPropagation()}>
        <h1>FCC3000 Drum Machine</h1>
        <p>Some stuff will go here, like:</p>
        <ul>
          <li>Info about the app</li>
          <li>Maybe some settings like turning on accessibility stuff</li>
        </ul>
        <button onClick={() => setModalOpen(false)}>close modal</button>
      </StyledInfoModal>
    </SemiTransparentBackground>
  );
};

export default InfoModal;
