import React from 'react'
import ImageGallery from 'react-image-gallery'

import Section from './Section'

const THUMBNAIL_CLASS = 'w-[100px] cover overflow-hidden object-bottom'

function getImageData(src) {
  return {
    original: `/img/edited/${src}`,
    originalClass: '',
    thumbnail: `/img/edited/${src}`,
    thumbnailClass: THUMBNAIL_CLASS,
    loading: 'lazy',
    thumbnailLoading: 'lazy',
  }
}

const FILE_NAMES = [
  'DSCF0274.JPG',
  'DSCF0337.JPG',
  'DSCF0471.JPG',
  'DSCF0663.JPG',
  'DSCF0693.JPG',
  'DSCF0772.JPG',
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
