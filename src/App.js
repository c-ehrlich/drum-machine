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
`;

const DrumMachineContainer = styled.div`
  background-color: #333333;
  margin-top: 32px;
  padding: 32px;
  display: flex;
  border-left: 32px solid black;
  border-right: 32px solid black;
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
      <DrumMachineContainer>
        <HeaderRow>
          <Title />
          <PowerButton />
        </HeaderRow>
        <Pads />
        <Controls />
        <Sequencer />
      </DrumMachineContainer>
    </AppDiv>
  );
}

export default App;
