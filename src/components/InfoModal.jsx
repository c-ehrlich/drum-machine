import { useEffect } from "react";
import useStore from "../store";
import SettingsRow from "./SettingsRow";
import styled from "styled-components";

const SemiTransparentBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9;
`;

const StyledInfoModal = styled.div`
  max-width: 480px;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ModalContent = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

const CloseModalButton = styled.button`
  width: 100%;
  padding: 16px;
  cursor: pointer;
  font-size: 16px;
`;

const InfoModal = ({ closeModal }) => {
  const showFocus = useStore((state) => state.showFocus);
  const setShowFocus = useStore((state) => state.setShowFocus);

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  return (
    <SemiTransparentBackground onClick={() => closeModal()}>
      <StyledInfoModal onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <h1>FCC3000 Drum Machine</h1>
          <p>This app does not yet work properly in Safari due to HTML5 audio issues. But I'm working on it!</p>
          <div>
            <h3>Shortcuts</h3>
            <ul>
              <li>O - Turn power on / off</li>
              <li>Q-R, A-F, Z-V - play sounds</li>
              <li>Z, U - decrease / increase volume</li>
              <li>H, J - change sample bank</li>
              <li>N, M - decrease / increase BPM</li>
              <li>I - open / close info menu</li>
              <li>P - start / stop sequencer</li>
            </ul>
          </div>
          <SettingsRow
            title="Focus Indicator"
            description="Disabling this setting will disable the visual focus indicator on clickable elements. This improves aesthetics of the app, at the expense of accessibility. Regardless of settings, the button to open this menu and all elements within this menu will always remain accessible."
            value={showFocus}
            onClick={() => setShowFocus(!showFocus)}
          />
          <p>
            View the code for this project on{" "}
            <a href="https://github.com/c-ehrlich/drum-machine">Github</a>.
          </p>
        </ModalContent>
        <CloseModalButton onClick={() => closeModal()}>Close</CloseModalButton>
      </StyledInfoModal>
    </SemiTransparentBackground>
  );
};

export default InfoModal;
