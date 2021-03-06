import React, { useCallback, useEffect } from "react";
import useStore from "../store";
import soundBanks from "../sounds.json";
import LabelText from "../styled";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const StyledBankSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BankSelectorRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

const BankSelectorButton = styled.button`
  height: 32px;
  width: 28px;
  background-color: rgb(118, 118, 118);

  border-radius: 4px;
  border-style: outset;
  border-color: rgba(255, 255, 255, 0.125);
  border-width: 2px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(215, 215, 215, 0.5);
    box-shadow: 0px 0px 10px 5px rgba(215, 215, 215, 0.5);
  }

  &:disabled {
    background-color: rgb(118, 118, 118);
    box-shadow: none;
    cursor: default;
  }
`;

const BankSelectorIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: rgb(80, 80, 80);
  filter: drop-shadow(0px -1px 0px black);
`;

const BankSelectorSelect = styled.select`
  width: 100%;
  color: rgb(209, 209, 209);
  background-color: rgb(59, 59, 59);
  border: 3px inset rgb(118, 118, 118);
  font-family: "Orbitron", sans-serif;
  border-radius: 4px;

  &.off {
    -webkit-appearance: none;
    -moz-appearance: none;
    color: transparent;
  }
`;

const BankSelector = () => {
  const bank = useStore((state) => state.bank);
  const setBank = useStore((state) => state.setBank);
  const power = useStore((state) => state.power);
  const setDisplay = useStore((state) => state.setDisplay);
  const showFocus = useStore((state) => state.showFocus);

  const handleChange = (e) => {
    setBank(e.target.value);
  };

  const prevBank = useCallback(() => {
    // set the current active sound bank to the previous one
    const currentIndex = soundBanks.soundBanks.findIndex(
      (element) => element === bank
    );
    const prevIndex =
      currentIndex === 0 ? soundBanks.soundBanks.length - 1 : currentIndex - 1;
    setBank(
      soundBanks.soundBanks[prevIndex % soundBanks.soundBanks.length].url
    );
  }, [bank, setBank]);

  const nextBank = useCallback(() => {
    // set the current active sound bank to the next one
    const nextIndex =
      soundBanks.soundBanks.findIndex((element) => element === bank) + 1;
    setBank(
      soundBanks.soundBanks[nextIndex % soundBanks.soundBanks.length].url
    );
  }, [bank, setBank]);

  useEffect(() => {
    setDisplay(bank.name);
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === "H" && power) prevBank();
      if (e.key.toUpperCase() === "J" && power) nextBank();
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [bank, setDisplay, nextBank, prevBank, power]);

  return (
    <StyledBankSelector>
      <BankSelectorRow>
        <BankSelectorButton
          onClick={prevBank}
          className={!showFocus && "no-outline-on-focus"}
          disabled={!power}
        >
          <BankSelectorIcon icon={faChevronLeft} />
        </BankSelectorButton>
        <BankSelectorSelect
          className={`${!showFocus && "no-outline-on-focus"} ${
            !power && "off"
          }`}
          onChange={(e) => handleChange(e)}
          value={bank.url}
          id="bank-select"
          name="bank"
          disabled={!power}
        >
          {Object.values(soundBanks.soundBanks).map((key) => {
            return (
              <option key={key.url} value={key.url}>
                {key.name}
              </option>
            );
          })}
        </BankSelectorSelect>
        <BankSelectorButton
          onClick={nextBank}
          className={!showFocus && "no-outline-on-focus"}
          disabled={!power}
        >
          <BankSelectorIcon icon={faChevronRight} />
        </BankSelectorButton>
      </BankSelectorRow>
      <LabelText>Sample Bank</LabelText>
    </StyledBankSelector>
  );
};

export default BankSelector;
