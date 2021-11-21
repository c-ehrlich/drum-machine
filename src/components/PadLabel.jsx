import styled from "styled-components";
import rotations from "../rotations.json";

const LabelText = styled.h4`
  width: 100%;
  margin: 0;
  font-family: "Amatic SC", cursive;
  font-size: 20px;
  background: url(images/check.png) repeat-x 0 0px;
  display: inline-block;
  padding: 5px 0px;
`;

const PadLabel = ({ labelText, triggerKey }) => {
  const styles={
    transform: `rotate(${rotations[triggerKey]}deg)`
  }

  return <LabelText style={styles}>{labelText}</LabelText>;
};

export default PadLabel;
