import styled from "styled-components";

const LabelText = styled.div`
  color: #d1d1d1;
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  font-weight: 400;
  font-size: 10px;
`;

const PadLabel = ({ labelText, triggerKey }) => {
  return (
    <LabelText>{labelText}</LabelText>
  );
};

export default PadLabel;
