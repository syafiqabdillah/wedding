import React from 'react'

function Banner() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative text-center">
      <img
        src="/img/afifasyafiq.webp"
        className="absolute -z-10 left-0 top-0 w-full h-full object-cover"
        style={{ opacity: '50%' }}
        alt=""
      />
      <p className="mb-4 font-extralight">The wedding of</p>
      <h1 className="italic text-5xl">
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
    </section>
  )
}

export default Banner
