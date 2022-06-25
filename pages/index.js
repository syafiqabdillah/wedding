import { useState, useEffect } from 'react'
import Head from 'next/head'

import Audio from '../components/Audio'
import Background from '../components/Background'
import Banner from '../components/Banner'
import Details from '../components/Details'
import Location from '../components/Location'
import PauseButton from '../components/PauseButton'
import Gallery from '../components/Gallery'
import Messages from '../components/Messages'
import Navigation from '../components/Navigation'

export default function Home() {
  const [audio, setAudio] = useState(null)
  const [mute, setMute] = useState(false)
  const [showCover, setShowCover] = useState(true)

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
      audio.volume = 0.6
      setMute(false)
    }
  }

  return (
    <div className="min-h-screen min-w-[360px]">
      <Head>
        <title>Wedding of Afifa & Syafiq</title>
        <meta
          name="description"
          content="Welcome to the wedding of Afifa & Syafiq"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col">
        <Background />
        <Banner />
        <Details />
        <Location />
        <Gallery />
        <Messages />
        <PauseButton
          audio={audio}
          mute={mute}
          showCover={showCover}
          setShowCover={setShowCover}
          onToggleMute={onToggleMute}
        />
        <Audio
          audio={audio}
          mute={mute}
          showCover={showCover}
          setShowCover={setShowCover}
        />
        <Navigation showCover={showCover} />
      </main>
    </div>
  )
}
