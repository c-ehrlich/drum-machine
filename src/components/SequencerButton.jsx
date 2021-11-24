import React, { useEffect } from 'react'
import useStore from '../store'
import playSound from '../tools/playsound'

const SequencerButton = ({ button, step }) => {
  const isOn = useStore(state => state.sequencer[button][step])
  const toggleOn = useStore(state => state.toggleSequencer);
  const currentStep = useStore(state => state.currentStep);

  useEffect(() => {
    if (isOn && currentStep === step) {
      playSound(button);
    }
  }, [isOn, button, step, currentStep])

  const handleClick = () => {
    toggleOn({button: button, step: step});
  }

  return (
    <div>
      <button onClick={handleClick} style={{backgroundColor: currentStep === step ? "#ff0000" : "#ffffff"}}>
      <div style={{backgroundColor: isOn ? "#00ff00" : "#ffffff"}}>{isOn ? "x" : "o"}</div></button>
    </div>
  )
}

export default SequencerButton
