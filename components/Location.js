import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import LightText from './LightText'
import Section from './Section'
import Button from './Button'
import Heading from './Heading'

function Location() {
  function onClick() {
    window.open('https://goo.gl/maps/8riHDm1ReB33RA9j6', '_blank')
  }

  return (
    <Section id="lokasi">
      <div className="max-w-xl px-3 flex flex-col">
        <LightText className="text-left font-semibold text-themeprimary mt-2 mb-2">
          Grand Equator Hotel
        </LightText>
        <LightText className="text-left text-xs tracking-wide mb-2">
          Jl. Pupuk Raya No.1, Guntung, Kec. Bontang Utara, Kota Bontang,
          Kalimantan Timur 75313
        </LightText>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.18935236301!2d117.4757408!3d0.1858178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd604b84a9ad7dd59!2sEquator%20Hotel!5e0!3m2!1sen!2sid!4v1664371730381!5m2!1sen!2sid"
          width="600"
          height="450"
          className="w-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
