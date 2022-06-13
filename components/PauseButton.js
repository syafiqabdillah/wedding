import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

function PauseButton({ show, audio, mute, onToggleMute }) {
  if (audio && show)
    return (
      <div
        className="fixed top-4 right-4 bg-blue-200 rounded-full h-10 w-10 flex justify-center items-center"
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

export default PauseButton
