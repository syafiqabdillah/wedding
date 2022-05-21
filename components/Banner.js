import React from 'react'

import LightText from './LightText'

function Banner() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative text-center">
      <img
        src="/img/afifasyafiq.webp"
        className="absolute -z-10 left-0 top-0 w-full h-full object-cover"
        style={{ opacity: '50%' }}
        alt=""
      />
      <LightText className="mb-4">The wedding of</LightText>
      <h1 className="italic text-5xl opacity-80">
        <div className="w-[130px] h-[180px] flex flex-col gap-3 justify-center">
          <div data-aos="fade-right" className="font-macondo tracking-wider">
            Afifa
          </div>
          <div className="font-smooch">&</div>
          <div data-aos="fade-left" className="font-macondo tracking-wider">
            Syafiq
          </div>
        </div>
      </h1>
      <LightText className="mt-4 font-extralight">
        Sabtu, 4 September 2022
      </LightText>
    </section>
  )
}

export default Banner
