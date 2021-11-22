import React from 'react'
import useStore from '../store'

const SequencerButton = ({ button, step }) => {
  const sequencer = useStore(state => state.sequencer);
  const toggleOn = useStore(state => state.toggleSequencer);

  const handleClick = () => {
    console.log(`button = ${button} | step = ${step}`);
    toggleOn(button, step);
  }

  return (
    <div>
      {button} {step} {sequencer[button][step] ? "x" : "o" }
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default SequencerButton
