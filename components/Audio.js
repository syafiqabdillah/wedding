import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const VOLUME = 0.3

function PauseButton({ show }) {
  const [audio, setAudio] = useState(null)
  const [mute, setMute] = useState(false)

  useEffect(() => {
    setAudio(document.getElementById('audio'))
  }, [])

  function onToggleMute() {
    if (audio.volume != 0) {
      audio.volume = 0
      setMute(true)
    } else {
      audio.volume = VOLUME
      setMute(false)
    }
  }

  if (audio && show)
    return (
      <div
        className="absolute cursor-pointer top-4 right-4 bg-blue-200 rounded-full h-10 w-10 flex justify-center items-center"
        onClick={() => onToggleMute()}
      >
        <FontAwesomeIcon
          icon={mute ? faVolumeMute : faVolumeUp}
          className="h-3 text-blue-500"
        />
      </div>
    )

  return null
}

function Audio() {
  const [show, setShow] = useState(true)
  const [showMuteToggle, setShowMuteToggle] = useState(false)

  function playSound() {
    let audio = document.getElementById('audio')
    audio.volume = VOLUME
    audio.play()
    setShow(false)
    setShowMuteToggle(true)
  }

  return (
    <div
      className={`fixed h-screen w-screen top-0 left-0 flex justify-center transition-all duration-1000 items-center ${
        show ? 'bg-opacity-80' : 'bg-opacity-0'
      }`}
    >
      {show && (
        <div
          data-aos="fade-up"
          onClick={playSound}
          className="bg-blue-200 hover:brightness-125 transition-all duration-300 font-macondo text-2xl cursor-pointer h-32 w-32 rounded-full flex justify-center items-center text-center z-10 opacity-100 "
        >
          Open
        </div>
      )}
      <div className={`half-left h-full w-full bg-gray-600 opacity-70 absolute transition duration-500 left-0 top-0 ${ show ? '' : ' -translate-x-[40%] opacity-0' }`} />
      <div className={`half-right h-full w-full bg-gray-600 opacity-70 absolute transition duration-500 left-0 top-0 ${ show ? '' : ' translate-x-[40%] opacity-0' }`} />
      <PauseButton show={showMuteToggle} />
      <audio src="/music/akuma-no-ko.mp3" id="audio" />
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
