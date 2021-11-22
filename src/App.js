import "./App.css";
import BankSelector from "./components/BankSelector";
import Display from "./components/Display";
import PowerButton from "./components/PowerButton";
import Pads from "./components/Pads";
import Volume from "./components/Volume";
import Sequencer from "./components/Sequencer";

function App() {
  return (
    <div className="App" id="drum-machine">
      <PowerButton />
      <Display />
      <Volume />
      <BankSelector />
      <Pads />
      <Sequencer />
    </div>
  );
}

export default App;
