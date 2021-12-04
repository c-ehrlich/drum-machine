import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const ModalButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  margin: 8px;
  width: 32px;
  height: 32px;
  font-size: 16px;
  cursor: pointer;
  background: none;
  border-style: outset;
  border-color: rgba(255, 255, 255, 0.125);
  border-width: 2px;
  border-radius: 100%;
  background-color: white;
  color: black;

  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);

  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover {
    top: 10px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.5), 0 8px 15px rgba(0, 0, 0, 0.2);
  }

`;

const InfoModalOpenButton = ({ openModal }) => {
  return (
    <ModalButton onClick={openModal}>
      <FontAwesomeIcon icon={faInfo} />
    </ModalButton>
  );
};

export default InfoModalOpenButton;
