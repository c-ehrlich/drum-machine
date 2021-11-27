import LabelText from "../styled";
import styled from "styled-components";

const StyledPadLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PadLabel = ({ labelText, triggerKey }) => {
  return (
    <StyledPadLabel>
      <LabelText>{labelText}</LabelText>
      <LabelText>{triggerKey}</LabelText>
    </StyledPadLabel>
  );
};

export default PadLabel;
