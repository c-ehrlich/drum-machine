import "./App.css";
import BankSelector from "./components/BankSelector";
import Display from "./components/Display";
import PowerButton from "./components/PowerButton";
import Pads from "./components/Pads";
import Reverb from "./components/Reverb";
import Volume from "./components/Volume";

function App() {
  return (
    <div className="App" id="drum-machine">
      <h1>Barebones Version for FreeCodeCamp</h1>
      <div>This version passes all FreeCodeCamp Tests.</div>
      <div>The final version that I will post to GitHub pages etc will not pass all tests because the FCC tests check for some specific DOM layouts that make it difficult to add some features that I would like to add. However it will continue to satisfy the spirit of the project, and add more features. I am keeping this branch around in case I ever need to show anyone that I was able to pass the FCC requirements.</div>
      <PowerButton />
      <Display />
      <Volume />
      <Reverb />
      <BankSelector />
      <Pads />
    </div>
  );
}

export default App;
