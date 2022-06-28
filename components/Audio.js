import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import LightText from './LightText'

const VOLUME = 0.6

function Audio({ audio, showCover, setShowCover }) {
  const [removed, setRemoved] = useState(false)
  const [name, setName] = useState(null)
  const [location, setLocation] = useState(null)
  const router = useRouter()

  function playSound() {
    setShowCover(false)
    window.scroll(0, 0)
    initializeSnow()

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
      setName('kamu')
      setLocation('manapun kau berada')
    }
  }, [router.query])

  return (
    <div
      className={`z-10 fixed h-screen w-screen top-0 left-0 flex flex-col gap-6 justify-center transition-all duration-1000 items-center ${
        showCover ? 'bg-white' : 'opacity-0'
      } ${removed && 'hidden'}`}
    >
      {showCover && (
        <React.Fragment>
          <div className="text-6xl text-center text-themetext">
            <LightText className="text-sm mb-8">
              Welcome to The Wedding of
            </LightText>
            <div
              data-aos="fade-right"
              className="font-greatvibes tracking-wider"
            >
              Afifa
            </div>
            <div className="font-smooch">&</div>
            <div
              data-aos="fade-left"
              className="font-greatvibes tracking-wider"
            >
              Syafiq
            </div>
          </div>
          <div
            onClick={() => playSound()}
            className="bg-themeprimary text-white hover:brightness-110 transition-all duration-1000 font-greatvibes text-2xl cursor-pointer p-8 h-[150px] w-[150px] rounded-full flex justify-center items-center text-center z-10 opacity-100 tracking-widest hover:scale-110"
          >
            Buka Undangan
          </div>
          <div
            data-aos="fade-up"
            className="h-[150px] border w-[300px] z-10 bg-white border-themeprimary rounded-xl flex flex-col justify-center item-center gap-4 text-center"
          >
            <LightText className="text-xs">Yth.</LightText>
            <LightText className="capitalize">{name}</LightText>
            <LightText className="">
              di <span className="capitalize">{location}</span>
            </LightText>
          </div>
        </React.Fragment>
      )}
      <div
        className={`half-left h-full w-full bg-white opacity-30 absolute transition duration-1000 left-0 top-0 ${
          showCover ? '' : ' -translate-x-[150%] opacity-0'
        }`}
      />
      <div
        className={`half-right h-full w-full bg-white opacity-30 duration-1000 absolute transition left-0 top-0 ${
          showCover ? '' : ' translate-x-[150%] opacity-0'
        }`}
      />
      <audio src="/music/akuma-no-ko.mp3" id="audio" loop />
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
