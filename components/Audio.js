import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const VOLUME = 0.6

function PauseButton({ show }) {
  const [audio, setAudio] = useState(null)
  const [mute, setMute] = useState(false)

  useEffect(() => {
    setAudio(document.getElementById('audio'))
  }, [])

  useEffect(() => {
    if (audio) {
      handleChangeTab()
    }
  }, [audio])

  function handleChangeTab() {
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        onToggleMute(true)
      }
    })
  }

  function onToggleMute(force = false) {
    if (audio.volume != 0 || force) {
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
    setTimeout(() => {
      initializeSnow()
    }, 1000)
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
      <div
        className={`half-left h-full w-full bg-gray-600 opacity-70 absolute transition duration-500 left-0 top-0 ${
          show ? '' : ' -translate-x-[40%] opacity-0'
        }`}
      />
      <div
        className={`half-right h-full w-full bg-gray-600 opacity-70 absolute transition duration-500 left-0 top-0 ${
          show ? '' : ' translate-x-[40%] opacity-0'
        }`}
      />
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

function initializeSnow() {
  window.$ = window.jQuery = require('jquery')
  /*
Snow Fall 1 - no images - Java Script
Visit http://rainbow.arch.scriptmania.com/scripts/
for this script and many more
*/

  // Set the number of snowflakes (more than 30 - 40 not recommended)
  var snowmax = 30

  // Set the colors for the snow. Add as many colors as you like
  var snowcolor = new Array(
    '#c0f3f4',
    '#ddfffa',
    '#d7fde2',
    '#f3f3f3',
    '#f0ffff',
    '#ffffff'
  )

  // Set the fonts, that create the snowflakes. Add as many fonts as you like
  var snowtype = new Array('Times', 'Arial', 'Times', 'Verdana')

  // Set the letter that creates your snowflake (recommended: * )
  var snowletter = '.'

  // Set the speed of sinking (recommended values range from 0.3 to 2)
  var sinkspeed = 0.6

  // Set the maximum-size of your snowflakes
  var snowmaxsize = 50

  // Set the minimal-size of your snowflakes
  var snowminsize = 15

  // Set the snowing-zone
  // Set 1 for all-over-snowing, set 2 for left-side-snowing
  // Set 3 for center-snowing, set 4 for right-side-snowing
  var snowingzone = 1

  ///////////////////////////////////////////////////////////////////////////
  // CONFIGURATION ENDS HERE
  ///////////////////////////////////////////////////////////////////////////

  // Do not edit below this line
  var snow = new Array()
  var marginbottom
  var marginright
  var timer
  var i_snow = 0
  var x_mv = new Array()
  var crds = new Array()
  var lftrght = new Array()
  var browserinfos = navigator.userAgent
  var ie5 =
    document.all && document.getElementById && !browserinfos.match(/Opera/)
  var ns6 = document.getElementById && !document.all
  var opera = browserinfos.match(/Opera/)
  var browserok = ie5 || ns6 || opera

  function randommaker(range) {
    let rand = Math.floor(range * Math.random())
    return rand
  }

  function movesnow() {
    for (let i = 0; i <= snowmax; i++) {
      crds[i] += x_mv[i]
      snow[i].posy += snow[i].sink
      snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + 'px'
      snow[i].style.top = snow[i].posy + 'px'

      if (
        snow[i].posy >= marginbottom - 2 * snow[i].size ||
        parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]
      ) {
        if (snowingzone == 1) {
          snow[i].posx = randommaker(marginright - snow[i].size)
        }
        if (snowingzone == 2) {
          snow[i].posx = randommaker(marginright / 2 - snow[i].size)
        }
        if (snowingzone == 3) {
          snow[i].posx =
            randommaker(marginright / 2 - snow[i].size) + marginright / 4
        }
        if (snowingzone == 4) {
          snow[i].posx =
            randommaker(marginright / 2 - snow[i].size) + marginright / 2
        }
        snow[i].posy = 0
      }
    }
    var timer = setTimeout(() => {
      movesnow()
    }, 50)
  }

  function initsnow() {
    if (ie5 || opera) {
      marginbottom = document.body.scrollHeight
      marginright = document.body.clientWidth - 15
    } else if (ns6) {
      marginbottom = document.body.scrollHeight
      marginright = window.innerWidth - 15
    }
    var snowsizerange = snowmaxsize - snowminsize
    for (let i = 0; i <= snowmax; i++) {
      crds[i] = 0
      lftrght[i] = Math.random() * 15
      x_mv[i] = 0.03 + Math.random() / 10
      snow[i] = document.getElementById('s' + i)
      snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)]
      snow[i].size = randommaker(snowsizerange) + snowminsize
      snow[i].style.fontSize = snow[i].size + 'px'
      snow[i].style.color = snowcolor[randommaker(snowcolor.length)]
      snow[i].style.zIndex = 1000
      snow[i].sink = (sinkspeed * snow[i].size) / 5
      if (snowingzone == 1) {
        snow[i].posx = randommaker(marginright - snow[i].size)
      }
      if (snowingzone == 2) {
        snow[i].posx = randommaker(marginright / 2 - snow[i].size)
      }
      if (snowingzone == 3) {
        snow[i].posx =
          randommaker(marginright / 2 - snow[i].size) + marginright / 4
      }
      if (snowingzone == 4) {
        snow[i].posx =
          randommaker(marginright / 2 - snow[i].size) + marginright / 2
      }
      snow[i].posy = randommaker(
        2 * marginbottom - marginbottom - 2 * snow[i].size
      )
      snow[i].style.left = snow[i].posx + 'px'
      snow[i].style.top = snow[i].posy + 'px'
    }
    movesnow()
  }

  for (let i = 0; i <= snowmax; i++) {
    $('body').append(
      "<span id='s" +
        i +
        "' style='z-index:99999999;position:absolute;top:-" +
        snowmaxsize +
        "'>" +
        snowletter +
        '</span>'
    )
  }

  initsnow()
}

export default Audio
