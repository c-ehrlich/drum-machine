import React, { useEffect } from "react";
import useStore from "../store";
import soundBanks from "../sounds.json";
import LabelText from "../styled";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareLeft,
  faCaretSquareRight,
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

const BankSelectorIcon = styled(FontAwesomeIcon)`
  color: red;
  cursor: pointer;
`;

const BankSelectorSelect = styled.select`
  width: 100%;
  color: green;
`;

const BankSelector = () => {
  const bank = useStore((state) => state.bank);
  const setBank = useStore((state) => state.setBank);
  const power = useStore((state) => state.power);
  const setDisplay = useStore((state) => state.setDisplay);

  useEffect(() => {
    setDisplay(bank.name);
  }, [bank, setDisplay]);

  const handleChange = (e) => {
    setBank(e.target.value);
  };

  const prevBank = () => {
    // set the current active sound bank to the previous one
    const currentIndex = soundBanks.soundBanks.findIndex(
      (element) => element === bank
    );
    const prevIndex =
      currentIndex === 0 ? soundBanks.soundBanks.length - 1 : currentIndex - 1;
    setBank(
      soundBanks.soundBanks[prevIndex % soundBanks.soundBanks.length].url
    );
  };

  const nextBank = () => {
    // set the current active sound bank to the next one
    const nextIndex =
      soundBanks.soundBanks.findIndex((element) => element === bank) + 1;
    setBank(
      soundBanks.soundBanks[nextIndex % soundBanks.soundBanks.length].url
    );
  };

  return (
    <StyledBankSelector>
      <BankSelectorRow>
        <BankSelectorIcon icon={faCaretSquareLeft} size="2x" onClick={prevBank} />
        <BankSelectorSelect
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
        <BankSelectorIcon icon={faCaretSquareRight} size="2x" onClick={nextBank} />
      </BankSelectorRow>
      <LabelText>Sample Bank</LabelText>
    </StyledBankSelector>
  );
};

export default BankSelector;
