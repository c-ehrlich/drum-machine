import React from "react";
import styled from "styled-components";
import useStore from "../store";

const StyledSettingsRow = styled.div`
  display: grid;
  grid-template-areas:
    "settings-row-title settings-row-toggle"
    "settings-row-description settings-row-toggle";
  column-gap: 8px;
`;

const SettingsRowTitle = styled.h3`
  margin: 0;
`;

const SettingsRowDescription = styled.div`
  color: grey;
  grid-area: settings-row-description;
  margin: 0;
`;

const SettingsRowToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SettingsRowToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  justify-self: end;
  align-self: center;

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SettingsRowToggleSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    border-radius: 50%;
  }

  ${SettingsRowToggleInput}:checked + & {
    background-color: #2196f3;
  }

  ${SettingsRowToggleInput}:focus + & {
    box-shadow: 0 0 1px #2196f3;
  }

  ${SettingsRowToggleInput}:checked + &:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const SettingsRow = ({ title, description, value, onClick }) => {
  const showFocus = useStore((state) => state.showFocus);

  return (
    <StyledSettingsRow>
      <SettingsRowTitle>{title}</SettingsRowTitle>
      <SettingsRowDescription>{description}</SettingsRowDescription>
      <SettingsRowToggle
        className={`switch settings-row-toggle ${
          !showFocus && "no-outline-on-focus-within"
        }`}
      >
        <SettingsRowToggleInput
          type="checkbox"
          checked={value}
          onChange={onClick}
        />
        <SettingsRowToggleSpan className="slider round"></SettingsRowToggleSpan>
      </SettingsRowToggle>
    </StyledSettingsRow>
  );
};

export default SettingsRow;
