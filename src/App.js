import "./App.css";
import styled from "styled-components";
import Title from "./components/Title";
import Pads from "./components/Pads";
import Controls from "./components/Controls";
import Sequencer from "./components/Sequencer";
import PowerButton from "./components/PowerButton";
import GlobalFonts from "./fonts/fonts";
import useWindowSize from "./hooks/useWindowSize";

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
`;
const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ScreenSizeReminder = styled.h1`
  margin: 32px;
  color: white;
  text-shadow: 2px 2px 2px black;
  text-align: center;
`;

const Credits = styled.div`
  font-family: 'Shadows Into Light', cursive;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
`;

const GitHubLink = styled.a`
  color: rgba(0, 0, 0, 0.25);

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`

function App() {
  const windowSize = useWindowSize();

  return (
    <AppDiv className="App">
      {windowSize.width > 800 ? (
        <>
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
        </>
      ) : (
        <div>
          <ScreenSizeReminder>
            Display width needs to be at least 800px. This app is designed for
            tablets and PCs, but not for phones and other small-screen devices.
          </ScreenSizeReminder>
        </div>
      )}
      <Credits>MADE WITH LOVE BY <GitHubLink href="https://www.github.com/c-ehrlich/">CHRISTOPHER EHRLICH</GitHubLink></Credits>
    </AppDiv>
  );
}

export default App;
