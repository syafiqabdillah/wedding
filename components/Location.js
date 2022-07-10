import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import LightText from './LightText'
import Section from './Section'
import Button from './Button'
import Heading from './Heading'

function Location() {
  const Map = useMemo(
    () =>
      dynamic(
        () => import('../components/Map'), // replace '@components/map' with your component's location
        { ssr: false } // This line is important. It's what prevents server-side render
      ),
    []
  )

  function onClick() {
    window.open(
      'https://www.google.com/maps/place/Felfest+UI+Faculty+Club+Universitas+Indonesia/@-6.3508679,106.8290213,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69ec3a9517d101:0x895775594e85e9ac!8m2!3d-6.3508732!4d106.83121',
      '_blank'
    )
  }

  return (
    <Section id="lokasi">
      <div className="max-w-xl px-3 flex flex-col">
        <LightText className="text-left font-semibold text-themeprimary mt-2 mb-2">
          Felfest UI Faculty Club Universitas Indonesia
        </LightText>
        <LightText className="text-left text-xs tracking-wide">
          Kampus UI, Jl. Prof. DR. Miriam Budiardjo, RW.3, Srengseng Sawah, Kec.
          Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12640
        </LightText>
        <Map />
        <Button
          className="mt-8 flex justify-center items-center gap-2 w-full mx-auto"
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faLocationDot} className="inline-block h-4" />
          Buka di Google Maps
        </Button>
      </div>
    </Section>
  )
}

export default Location
