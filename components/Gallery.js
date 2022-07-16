import React from 'react'
import ImageGallery from 'react-image-gallery'

import Section from './Section'

const THUMBNAIL_CLASS =
  'h-[100px] w-[100px] cover overflow-hidden brightness-110'

function getImageData(src) {
  return {
    original: `/img/prewed/${src}`,
    originalClass: 'brightness-[150%]',
    thumbnail: `/img/prewed/${src}`,
    thumbnailClass: THUMBNAIL_CLASS,
    loading: 'lazy',
    thumbnailLoading: 'lazy',
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
      <div className="w-full max-w-[360px]">
        <ImageGallery
          items={IMAGES}
          infinite={true}
          lazyLoad={true}
          slideInterval={3000}
          slideDuration={700}
        />
      </div>
    </Section>
  )
}

export default Gallery
