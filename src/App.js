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
`

const DrumMachineContainer = styled.div`
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
  display: flex;
  margin: 0 32px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  return (
    <AppDiv className="App">
      <GlobalFonts />
      <DrumMachineBorder>
        <DrumMachineContainer>
          <HeaderRow>
            <Title />
            <PowerButton />
          </HeaderRow>
          <Pads />
          <Controls />
          <Sequencer />
        </DrumMachineContainer>
      </DrumMachineBorder>
    </AppDiv>
  );
}

export default App;
