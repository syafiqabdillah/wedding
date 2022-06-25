import React from 'react'

import Heading from './Heading'
import Section from './Section'

const IMG_SIZE = '150px'

function Image({ src }) {
  return (
    <div
      className={`h-40 w-40 bg-blue-200 border border-lg border-brownaccend`}
    >
      <img src={src} className="object-cover w-full h-full" />
    </div>
  )
}

function Gallery() {
  return (
    <Section>
      <Heading>Galeri Pernikahan</Heading>
      <div className="max-w-xl max-h-[60vh] overflow-y-auto flex flex-wrap gap-2 justify-center">
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
        <Image src="/img/afifa.jpg" />
      </div>
    </Section>
  )
}

export default Gallery
