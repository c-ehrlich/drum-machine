import LabelText from "../styled";
import styled from "styled-components";

const StyledPadLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelTextKey = styled(LabelText)`
  user-select: none;

  @media (max-width: 400px) {
    display: none;
  }
`;

const PadLabel = ({ labelText, triggerKey }) => {
  return (
    <StyledPadLabel>
      <LabelText>{labelText}</LabelText>
      <LabelTextKey>{triggerKey}</LabelTextKey>
    </StyledPadLabel>
  );
};

export default PadLabel;
