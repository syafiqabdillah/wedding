import Head from 'next/head'
import { useState, useEffect } from 'react'

import Audio from '../components/Audio'
import Background from '../components/Background'
import Banner from '../components/Banner'
import Location from '../components/Location'
import PauseButton from '../components/PauseButton'

export default function Home() {
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
        <Audio />
        <PauseButton
          audio={audio}
          mute={mute}
          show={true}
          onToggleMute={onToggleMute}
        />
        <Location />
      </main>
    </div>
  )
}
