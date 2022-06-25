import React, { useEffect } from 'react'

import Button from './Button'
import Counter from './Counter'
import Details from './Details'
import LightText from './LightText'
import Section from './Section'

function Banner() {
  useEffect(() => {}, [])

  return (
    <Section
      id="home"
      className="overflox-x-hidden overflow-y-visible flex flex-col items-center gap-2"
    >
      <LightText className="mb-4">The wedding of</LightText>
      <h1 className="italic text-6xl opacity-80">
        <div className="w-[130px] flex flex-col items-center gap-3 justify-center">
          <div data-aos="fade-right" className="font-greatvibes tracking-wider">
            Afifa
          </div>
          <div className="font-smooch">&</div>
          <div data-aos="fade-left" className="font-greatvibes tracking-wider">
            Syafiq
          </div>
        </div>
      </h1>
      <LightText className="mt-4 font-extralight">
        Sabtu, 4 September 2022
      </LightText>
      <Counter />
    </Section>
  )
}

export default Banner
