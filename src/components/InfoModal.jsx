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
  margin: 16px;
`;

const InfoModal = ({ closeModal }) => {
  return (
    <SemiTransparentBackground onClick={() => closeModal()}>
      <StyledInfoModal onClick={(e) => e.stopPropagation()}>
        <h1>FCC3000 Drum Machine</h1>
        <p>Some stuff will go here, like:</p>
        <ul>
          <li>Info about the app</li>
          <li>Maybe some settings like turning on accessibility stuff</li>
          <li>TKTK Name: This setting deactivates TK KEYBOARD THING for all buttons and other interactive elements in the app. This makes makes the app look nicer, but it also breaks some accessibility features. This menu will always have all accessibility features enabled regardless of settings.</li>
        </ul>
        <button onClick={() => closeModal()}>close modal</button>
      </StyledInfoModal>
    </SemiTransparentBackground>
  );
};

export default InfoModal;
