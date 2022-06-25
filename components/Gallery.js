import React from 'react'
import ImageGallery from 'react-image-gallery'

import Heading from './Heading'
import Section from './Section'

const IMAGE_CLASS = 'h-[57vh] w-full'

const IMAGES = [
  {
    original: '/img/afifa.jpg',
    thumbnail: '/img/afifa.jpg',
    originalClass: IMAGE_CLASS,
  },
  {
    original: '/img/afifa.jpg',
    thumbnail: '/img/afifa.jpg',
    originalClass: IMAGE_CLASS,
  },
  {
    original: '/img/afifa.jpg',
    thumbnail: '/img/afifa.jpg',
    originalClass: IMAGE_CLASS,
  },
  {
    original: '/img/afifa.jpg',
    thumbnail: '/img/afifa.jpg',
    originalClass: IMAGE_CLASS,
  },
]

function Gallery() {
  return (
    <Section id="galeri">
      <Heading>Galeri</Heading>
      <div className="max-w-xs">
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
