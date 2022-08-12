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
        <LightText className="text-left text-xs tracking-wide mb-2">
          Kampus UI, Jl. Prof. DR. Miriam Budiardjo, RW.3, Srengseng Sawah, Kec.
          Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12640
        </LightText>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3336207216585!2d106.82920475043181!3d-6.350834695381669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec3a9517d101%3A0x895775594e85e9ac!2sFelfest%20UI%20Faculty%20Club%20Universitas%20Indonesia!5e0!3m2!1sen!2sid!4v1660143891103!5m2!1sen!2sid"
          width="600"
          height="450"
          style={{ border: 0, width: '100%' }}
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
