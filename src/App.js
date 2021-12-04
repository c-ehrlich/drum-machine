import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Pads from "./components/Pads";
import Controls from "./components/Controls";
import InfoModal from "./components/InfoModal";
import Sequencer from "./components/Sequencer";
import PowerButton from "./components/PowerButton";
import GlobalFonts from "./fonts/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

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

const ModalButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 32px;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 100%;
`;

const ModalButtonIcon = styled(FontAwesomeIcon)`
  filter: drop-shadow(0 0 3px red);
`;

const DrumMachineBorder = styled.div`
  margin: 16px;
  background-image: url(${process.env.PUBLIC_URL + `/images/wood2.jpg`});
  background-size: cover;
  margin: 16px;
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
  gap: 64px;

  @media (max-width: 1280px) {
    flex-direction: column;
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

  return (
    <AppDiv className="App">
      <GlobalFonts />
      <ModalButton onClick={() => setModalOpen(true)}>
        <ModalButtonIcon 
          icon={faQuestionCircle}
        />
      </ModalButton>
      {modalOpen && <InfoModal setModalOpen={setModalOpen} />}
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
