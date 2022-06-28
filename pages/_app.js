import { useEffect } from 'react'
import '../styles/globals.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 200,
      mirror: true,
    })
  })
  return <Component {...pageProps} />
}

export default MyApp
