import React, { useMemo } from 'react'
import LightText from './LightText'
import dynamic from 'next/dynamic'

import Section from './Section'
import Button from './Button'

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
        <h2 className="text-4xl font-macondo mb-4 tracking-widest uppercase">
          Lokasi
        </h2>
        <LightText className="text-left font-semibold mb-2 font-macon">
          Felfest UI Faculty Club Universitas Indonesia
        </LightText>
        <LightText className="text-left">
          Kampus UI, Jl. Prof. DR. Miriam Budiardjo, RW.3, Srengseng Sawah, Kec.
          Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12640
        </LightText>
        <Map />
        <Button className="mt-4" onClick={onClick}>
          Lihat di Google Maps
        </Button>
      </div>
    </Section>
  )
}

export default Location
