import Head from 'next/head'

import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className='min-h-screen min-w-[360px]'>
      <Head>
        <title>Wedding of Afifa & Syafiq</title>
        <meta name="description" content="Welcome to the wedding of Afifa & Syafiq" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
      </main>

    </div>
  )
}
