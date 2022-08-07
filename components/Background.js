import React from 'react'

import PauseButton from './PauseButton'

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-paper">
      <img
        className="-rotate-90 absolute top-2 w-[160px] -left-4"
        src="/img/flower.png"
        alt="flower 1"
      />
      <img
        className="rotate-90 absolute bottom-24 -mb-2 w-[160px] -right-4"
        src="/img/flower.png"
        alt="flower 1"
      />
    </div>
  )
}

export default Background
