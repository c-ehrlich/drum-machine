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
