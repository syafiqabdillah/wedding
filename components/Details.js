import React from 'react'
import Counter from './Counter'

import LightText from './LightText'
import Section from './Section'

function Mempelai({ nama, ayah, ibu, tipe, className }) {
  return (
    <div
      data-aos="fade-up"
      className={`flex flex-col items-center ${className}`}
    >
      <div className="font-greatvibes text-3xl">{nama}</div>
      <LightText className="text-xs my-2">{tipe} dari</LightText>
      <LightText className="text-sm">
        Bp {ayah} & Ibu {ibu}
      </LightText>
    </div>
  )
}

function Event({ name, time, className, aos }) {
  return (
    <div
      data-aos={aos}
      className={`flex flex-col items-center gap-2 ${className}`}
    >
      <LightText className="text-xs">{name}</LightText>
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
        ayah="Bambang Dwi Laksono"
        ibu="Vera Adriana"
      />
      <Mempelai
        nama="Syafiq Abdillah Umarghanis"
        tipe="Putra"
        ayah="Isro Umarghani"
        ibu="Siti Aini Rochmah"
        className={'mt-8'}
      />
      <hr
        data-aos="zoom-in"
        className="border my-4 w-[300px] border-themeprimary"
      />
      <Event
        name="Akad"
        aos="flip-right"
        time="Ahad, 4 September 2022 08.00 WIB"
      />
      <Event
        name="Resepsi"
        aos="flip-left"
        time="Ahad, 4 September 2022 11.00 - 13.00 WIB"
        className="my-4"
      />
      <Counter />
    </Section>
  )
}

export default Details
