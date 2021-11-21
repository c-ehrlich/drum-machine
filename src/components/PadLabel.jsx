import styled from "styled-components";
import rotations from "../rotations.json";

const PadLabel = ({ labelText, triggerKey }) => {
  const LabelText = styled.h4`
    width: 100%;
    margin: 0;
    font-family: "Amatic SC", cursive;
    font-size: 20px;
    transform: rotate(${rotations[triggerKey]}deg);
    background: url(images/check.png) repeat-x 0 0px;
    display: inline-block;
    padding: 5px 0px;
  `;

  return (
    <LabelText>
      {triggerKey} - {labelText}
    </LabelText>
  );
};

export default PadLabel;
