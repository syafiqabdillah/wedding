import Head from 'next/head'

import Audio from '../components/Audio'
import Background from '../components/Background'
import Banner from '../components/Banner'
import Location from '../components/Location'

export default function Home() {
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
        <Location />
      </main>
    </div>
  )
}
