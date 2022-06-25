import React from 'react'
import Counter from './Counter'

import LightText from './LightText'
import Section from './Section'

function Mempelai({ nama, ayah, ibu, tipe, className }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="font-greatvibes text-3xl">{nama}</div>
      <LightText className="text-xs my-2">{tipe} dari</LightText>
      <LightText className="text-sm">
        Bp {ayah} & Ibu {ibu}
      </LightText>
    </div>
  )
}

function Event({ name, time, className }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="text-2xl font-greatvibes">{name}</div>
      <LightText className="text-sm">{time}</LightText>
    </div>
  )
}

function Details() {
  return (
    <Section id="acara">
      <Mempelai
        nama="Afifa Sausan Shadrina"
        tipe="Putri"
        ayah="John Doe"
        ibu="John Doe"
      />
      <Mempelai
        nama="Syafiq Abdillah Umarghanis"
        tipe="Putra"
        ayah="John Doe"
        ibu="John Doe"
        className={'mt-8'}
      />
      <hr className="border my-8 w-[300px] border-brownsecondary" />
      <Event name="Akad" time="Sabtu, 4 September 2022 08.00 WIB" />
      <Event
        name="Resepsi"
        time="Sabtu, 4 September 2022 10.00 WIB"
        className="my-4"
      />
      <Counter />
    </Section>
  )
}

export default Details
