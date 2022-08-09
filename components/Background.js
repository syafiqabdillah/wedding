import React from 'react'

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-themepeach bg-paper bg-blend-luminosity">
      <img
        className="absolute w-[160px] -left-0 -top-24 md:scale-150 md:left-10"
        src="/img/flower1.png"
        alt="flower 1"
      />
      <img
        className="absolute w-[160px] right-0 -top-32 -scale-x-100 md:scale-y-150 md:-scale-x-150 md:right-6"
        src="/img/flower1.png"
        alt="flower 1"
      />
      <img
        className="absolute rotate-45 -bottom-16 -mb-2 w-[160px] -right-10"
        src="/img/flower2.png"
        alt="flower 1"
      />
      <img
        className="rotate-[135deg] absolute -bottom-16 -mb-2 w-[160px] -left-2 scale-90"
        src="/img/flower2.png"
        alt="flower 1"
      />
    </div>
  )
}

export default Background
