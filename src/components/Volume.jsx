import React from 'react'
import useStore from '../store'

const Volume = () => {
  const volume = useStore(state => state.volume);
  const setVolume = useStore(state => state.setVolume);

  return (
    <div>
      Volume: {volume}
    </div>
  )
}

export default Volume
