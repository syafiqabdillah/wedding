import React from 'react'

import PauseButton from './PauseButton'

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 ">
      <img
        src="/img/flower.jpg"
        alt="flower-1"
        className="h-[120px] top-2 -left-3 md:h-[150px] md:top-3 md:-left-3 object-contain absolute -rotate-90 -z-10"
      />
      <img
        src="/img/flower.jpg"
        alt="flower-1"
        className="h-[120px] bottom-20 -right-3 md:h-[150px] object-contain absolute rotate-90 -z-10"
      />
    </div>
  )
}

export default Background
