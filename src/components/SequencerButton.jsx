import React, { useEffect } from 'react'
import useStore from '../store'
import playSound from '../tools/playsound'

const SequencerButton = ({ button, step }) => {
  const isOn = useStore(state => state.sequencer[button][step])
  const toggleOn = useStore(state => state.toggleSequencer);
  const currentStep = useStore(state => state.currentStep);

  useEffect(() => {
    if (isOn && currentStep === step) {
      console.log(`Button ${button}-${step} is playing`)
      // todo: make playsound its own external function, remove it from the pad?
      playSound(button);
    }
  }, [isOn, button, step, currentStep])

  const handleClick = () => {
    // console.log(`button = ${button} | step = ${step}`);
    toggleOn({button: button, step: step});
  }

  return (
    <div>
      <button onClick={handleClick} style={{backgroundColor: currentStep === step ? "#ff0000" : "#ffffff"}}>{isOn ? "x" : "o"}</button>
    </div>
  )
}

export default SequencerButton
