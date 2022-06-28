import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

function PauseButton({ audio, mute, showCover, onToggleMute }) {
  if (audio && !showCover)
    return (
      <div
        className="fixed top-4 right-4 bg-white border-2 border-themeprimary text-themeprimary rounded-full h-10 w-10 flex justify-center items-center z-100"
        onClick={() => onToggleMute()}
      >
        <FontAwesomeIcon
          icon={mute ? faVolumeMute : faVolumeUp}
          className="h-3 "
        />
      </div>
    )

  return null
}

export default PauseButton
