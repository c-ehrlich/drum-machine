import "./App.css";
import styled from "styled-components";
import Title from "./components/Title";
import Pads from "./components/Pads";
import Controls from "./components/Controls";
import Sequencer from "./components/Sequencer";
import PowerButton from "./components/PowerButton";
import GlobalFonts from "./fonts/fonts";

const AppDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: grey;
  background-image: url(${process.env.PUBLIC_URL + `/images/wood1.jpg`});
`;

const DrumMachineBorder = styled.div`
  background-image: url(${process.env.PUBLIC_URL + `/images/wood2.jpg`});
  background-size: cover;
  box-shadow: 0px 0px 15px 3px black;
`;

const DrumMachineOuterContainer = styled.div`
  background-color: #333333;
  background-image: linear-gradient(
    to right bottom,
    rgb(17, 17, 17) 12.5%,
    rgb(67, 67, 67) 25%,
    rgb(17, 17, 17) 50%,
    rgb(67, 67, 67) 75%,
    rgb(17, 17, 17) 100%
  );
  padding: 32px;
  margin: 0 32px; /* what does this do? */

  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const DrumMachineLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const DrumMachineLeftBottomContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
`
const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  // VIEWPORT WIDTH LESS THAN 1200: put in a column
  return (
    <AppDiv className="App">
      <GlobalFonts />
      <DrumMachineBorder>
        <DrumMachineOuterContainer>
          <DrumMachineLeftContainer>
            <HeaderRow>
              <PowerButton />
              <Title />
            </HeaderRow>
            <DrumMachineLeftBottomContainer>
              <Controls />
              <Pads />
            </DrumMachineLeftBottomContainer>
          </DrumMachineLeftContainer>
          <Sequencer />
        </DrumMachineOuterContainer>
      </DrumMachineBorder>
    </AppDiv>
  );
}

export default App;
