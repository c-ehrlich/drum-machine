import React from 'react'
import useStore from '../store'

const SequencerBPM = () => {
  const power = useStore(state => state.power);
  const sequencerBPM = useStore(state => state.sequencerBPM);
  const setSequencerBPM = useStore(state => state.setSequencerBPM);

  return (
    <div>
      <div>{sequencerBPM}</div>
      <input
          type="range"
          min="50"
          max="180"
          value={sequencerBPM}
          onChange={(e) => setSequencerBPM(e.target.value)}
          className="slider"
          id="myRange"
          disabled={!power}
        />
    </div>
  )
}

export default SequencerBPM
