import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Pads from "./components/Pads";
import Controls from "./components/Controls";
import InfoModal from "./components/InfoModal";
import InfoModalOpenButton from "./components/InfoModalOpenButton";
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
  background-size: cover;
  gap: 0px;
`;

const DrumMachineBorder = styled.div`
  margin: 16px;
  background-image: url(${process.env.PUBLIC_URL + `/images/wood2.jpg`});
  background-size: cover;
  box-shadow: 0px 0px 15px 3px black;

  @media (max-width: 650px) {
    width: 100%;
    margin: 0;
    background-image: none;
    box-shadow: none;
  }
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
  margin: 0 32px;

  display: flex;
  flex-direction: row;
  gap: 64px;

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  @media (max-width: 650px) {
    width: 100% !important;
    margin: 0;
    padding: 16px;
    box-sizing: border-box;
  }

  @media (max-width: 374px) {
    padding: 8px;
  }
`;

const DrumMachineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const DrumMachineBottomContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
`;

const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === "I") {
        setModalOpen(!modalOpen);
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <AppDiv className="App">
      <GlobalFonts />
      <InfoModalOpenButton openModal={() => setModalOpen(true)} />

      {modalOpen && <InfoModal closeModal={() => setModalOpen(false)} />}
      <DrumMachineBorder>
        <DrumMachineOuterContainer>
          <DrumMachineContainer>
            <HeaderRow>
              <PowerButton />
              <Title />
            </HeaderRow>
            <DrumMachineBottomContainer>
              <Controls />
              <Pads />
            </DrumMachineBottomContainer>
          </DrumMachineContainer>
          <Sequencer />
        </DrumMachineOuterContainer>
      </DrumMachineBorder>
    </AppDiv>
  );
}

export default App;
