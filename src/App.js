import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import DrumMachine from "./components/DrumMachine";
import InfoModal from "./components/InfoModal";
import InfoModalOpenButton from "./components/InfoModalOpenButton";
import Sequencer from "./components/Sequencer";
import StylingContainer from "./components/StylingContainer";
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

  &.modalOpen {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
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
    <AppDiv className={`App ${modalOpen && "modalOpen"}`}>
      <GlobalFonts />
      <InfoModalOpenButton openModal={() => setModalOpen(true)} />
      {modalOpen && <InfoModal closeModal={() => setModalOpen(false)} />}
      <StylingContainer>
        <DrumMachine />
        <Sequencer />
      </StylingContainer>
    </AppDiv>
  );
}

export default App;
