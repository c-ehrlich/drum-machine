import styled from "styled-components";
import rotations from "../rotations.json";

const LabelTextContainer = styled.div`
  margin: 4px 0px;
`;
const LabelText = styled.h4`
  width: 100px;
  margin: 0;
  font-family: "Amatic SC", cursive;
  font-size: 20px;
  background: url(${process.env.PUBLIC_URL + '/images/check.png'}) repeat-x 0 0px;
  display: inline-block;
  padding: 5px 0px;
`;

const PadLabel = ({ labelText, triggerKey }) => {
  const styles={
    transform: `rotate(${rotations[triggerKey]}deg)`
  }

  return <LabelTextContainer><LabelText style={styles}>{labelText}</LabelText></LabelTextContainer>;
};

export default PadLabel;
