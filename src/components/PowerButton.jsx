import React from 'react'
import useStore from '../store'

const PowerButton = () => {
  const power = useStore(state => state.power);
  const togglePower = useStore(state => state.togglePower)

  return (
    <div>
      <button onClick={togglePower}>Power: { power ? "on" : "off" }</button>
    </div>
  )
}

export default PowerButton
