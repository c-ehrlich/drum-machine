import React from 'react'
import useStore from '../store'

const SequencerButton = ({ button, step }) => {
  const isOn = useStore(state => state.sequencer[button][step])
  const toggleOn = useStore(state => state.toggleSequencer);

  const handleClick = () => {
    console.log(`button = ${button} | step = ${step}`);
    toggleOn({button: button, step: step});
  }

  return (
    <div>
      {step} {isOn ? "x" : "o" }
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default SequencerButton
