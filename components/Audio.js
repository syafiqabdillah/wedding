import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import LightText from './LightText'

const VOLUME = 0.6

function Audio({ audio, showCover, setShowCover }) {
  const [removed, setRemoved] = useState(false)
  const [name, setName] = useState(null)
  const [location, setLocation] = useState(null)
  const router = useRouter()

  function playSound() {
    console.log('play')
    setShowCover(false)
    window.scroll(0, 0)

    setTimeout(() => {
      setRemoved(true)
      audio.volume = VOLUME
      audio.play()
    }, 700)
  }

  useEffect(() => {
    const query = router.query
    if (query.name && query.location) {
      setName(query.name)
      setLocation(query.location)
    } else {
      setName('Saudara/i')
      setLocation('Tempat')
    }
  }, [router.query])

  return (
    <div
      className={`z-10 fixed h-screen w-screen top-0 left-0 flex flex-col gap-4 justify-center transition-all duration-1000 items-center ${
        showCover ? 'bg-white' : 'opacity-0'
      } ${removed && 'hidden'}`}
    >
      <div
        className={`-z-10 half-left h-full w-full bg-paper bg-themepeach bg-blend-luminosity
         absolute transition duration-1000 left-0 top-0 ${
           showCover ? '' : ' -translate-x-[150%] opacity-0'
         }`}
      />
      <div
        className={`-z-10 half-right h-full w-full bg-paper bg-themepeach bg-blend-luminosity
         duration-1000 absolute transition left-0 top-0 ${
           showCover ? '' : ' translate-x-[150%] opacity-0'
         }`}
      />
      {showCover && (
        <React.Fragment>
          <img
            src="/img/cloud.png"
            alt="cloud"
            className="absolute bottom-4 right-0 -z-10"
          />
          <img
            src="/img/cloud.png"
            alt="cloud"
            className="absolute top-4 -left-10 -z-10 -translate-x-1"
          />
          <div className="text-5xl text-center text-themeprimary">
            <LightText className="text-sm mb-8 text-themeprimary bg-transparent">
              Welcome to The Wedding of
            </LightText>
            <div className="font-greatvibes tracking-wider">Afifa</div>
            <div className="font-greatvibes my-6">&</div>
            <div className="font-greatvibes tracking-wider">Syafiq</div>
          </div>
          <img
            src="/img/stamp.png"
            onClick={playSound}
            alt="stamp"
            height="250"
            width="250"
            className="cursor-pointer hover:rotate-12 transition duration-500"
          />
          <div className="h-[150px] text-sm border w-[300px] z-10 bg-white text-themeprimary rounded-xl flex flex-col justify-center item-center gap-2 text-center">
            <LightText className="text-lg">Yth.</LightText>
            <LightText className="text-lg">{name}</LightText>
            <LightText className="text-lg">
              di <span className="">{location}</span>
            </LightText>
          </div>
        </React.Fragment>
      )}

      <audio src="/music/kennyg-themoment.mp3" id="audio" loop />
      <style jsx>
        {`
          .half-left {
            clip-path: polygon(0 0, 0 100%, 100% 0);
          }
          .half-right {
            clip-path: polygon(100% 100%, 0 100%, 100% 0);
          }
        `}
      </style>
    </div>
  )
}

export default Audio
