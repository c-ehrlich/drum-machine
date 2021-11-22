import React from 'react'
import useStore from '../store'

const PowerButton = () => {
  const power = useStore(state => state.power);
  const togglePower = useStore(state => state.togglePower)

  const toggleOnSound = new Audio(process.env.PUBLIC_URL + '/sounds/buttons/switch-on.mp3');
  const toggleOffSound = new Audio(process.env.PUBLIC_URL + '/sounds/buttons/switch-off.mp3');

  const handleClick = () => {
    power
      ? toggleOffSound.play()
      : toggleOnSound.play();
    
    togglePower();
  }

  return (
    <div>
      <button onClick={handleClick}>Power: { power ? "on" : "off" }</button>
    </div>
  )
}

export default PowerButton
