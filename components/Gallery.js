import React from 'react'
import ImageGallery from 'react-image-gallery'

import Heading from './Heading'
import Section from './Section'

const THUMBNAIL_CLASS = 'h-[100px] w-[100px] cover overflow-hidden'

function getImageData(src) {
  return {
    original: `/img/prewed/${src}`,
    thumbnail: `/img/prewed/${src}`,
    thumbnailClass: THUMBNAIL_CLASS,
  }
}

const FILE_NAMES = [
  'DSCF0299.JPG',
  'DSCF0323.JPG',
  'DSCF0324.JPG',
  'DSCF0325.JPG',
  'DSCF0364.JPG',
  'DSCF0403.JPG',
  'DSCF0412.JPG',
  'DSCF0414.JPG',
  'DSCF0416.JPG',
  'DSCF0517.JPG',
  'DSCF0535.JPG',
  'DSCF0539.JPG',
  'DSCF0586.JPG',
  'DSCF0635.JPG',
  'DSCF0658.JPG',
  'DSCF0669.JPG',
  'DSCF0672.JPG',
  'DSCF0722.JPG',
  'DSCF0748.JPG',
  'DSCF0842.JPG',
  'DSCF0865.JPG',
  'DSCF0877.JPG',
  'DSCF0915.JPG',
  'DSCF0926.JPG',
]

const IMAGES = FILE_NAMES.map((file) => getImageData(file))

function Gallery() {
  return (
    <Section id="galeri">
      <div className="max-w-[300px]" data-aos="fade-up">
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
