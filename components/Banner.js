import React, { useEffect } from 'react'

import Counter from './Counter'
import LightText from './LightText'

function Banner() {
  useEffect(() => {
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative text-center">
      <img
        src="/img/flower.jpg"
        alt="flower-1"
        className="h-[100px] object-contain absolute top-0 translate-x-4 translate-y-6 scale-150 left-0 -rotate-90"
      />
      <img
        src="/img/flower.jpg"
        alt="flower-1"
        className="h-[100px] object-contain absolute bottom-0 scale-150 right-0 rotate-90 -translate-y-6 -translate-x-4"
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
      <Counter />
    </section>
  )
}

export default Banner
