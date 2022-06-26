import React from 'react'
import ImageGallery from 'react-image-gallery'

import Heading from './Heading'
import Section from './Section'

const THUMBNAIL_CLASS = 'h-[100px] w-[100px] cover overflow-hidden'

function getImageData(src) {
  return {
    original: src,
    thumbnail: src,
    thumbnailClass: THUMBNAIL_CLASS,
  }
}

const IMAGES = [
  getImageData('/img/afifa.jpg'),
  getImageData('/img/afifa.jpg'),
  getImageData('/img/afifa.jpg'),
  getImageData('/img/afifa.jpg'),
  getImageData('/img/afifa.jpg'),
  getImageData('/img/afifa.jpg'),
]

function Gallery() {
  return (
    <Section id="galeri">
      <Heading>Galeri</Heading>
      <div className="max-w-[300px]">
        <ImageGallery
          items={IMAGES}
          autoPlay={true}
          infinite={true}
          lazyLoad={true}
          slideInterval={5000}
        />
      </div>
    </Section>
  )
}

export default Gallery
