import React, { useEffect, useState } from 'react'

import Button from './Button'
import Counter from './Counter'
import Details from './Details'
import LightText from './LightText'
import Section from './Section'

function Banner() {
  return (
    <Section
      id="home"
      className="overflox-x-hidden overflow-y-visible flex flex-col items-center gap-2"
    >
      <LightText className="mb-4">The wedding of</LightText>
      <h1 className="italic text-6xl">
        <div className="w-[130px] flex flex-col items-center gap-3 justify-center text-themeprimary ">
          <div
            className={`font-greatvibes tracking-wider transition duration-500 hover:-translate-x-3 `}
          >
            Afifa
          </div>
          <div className="font-smooch">&</div>
          <div
            className={`font-greatvibes tracking-wider transition duration-500 hover:translate-x-3 `}
          >
            Syafiq
          </div>
        </div>
      </h1>
      <LightText className="mt-4 font-extralight">
        Sabtu, 4 September 2022
      </LightText>
    </Section>
  )
}

export default Banner
