import React from 'react'
import useStore from '../store'

const SequencerIsPlaying = () => {
  const sequencerIsPlaying = useStore(state => state.sequencerIsPlaying)
  const toggleSequencerIsPlaying = useStore(state => state.toggleSequencerIsPlaying)

  const handleClick = () => {
    toggleSequencerIsPlaying();
  }

  return (
    <div>
      <button onClick={handleClick}>Sequencer: { sequencerIsPlaying ? ">" : "||" }</button>
    </div>
  )
}

export default SequencerIsPlaying
