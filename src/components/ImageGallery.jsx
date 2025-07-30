import React, { useState, useRef } from 'react'
import { schoolGallery } from '../context/BrContent'
import Masonry from 'react-masonry-css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { motion, useInView } from 'framer-motion'

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
}

const ImageGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const openLightbox = (idx) => {
    setCurrentIndex(idx)
    setLightboxOpen(true)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h4
        className='h1-primary pb-2'
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Photo Gallery
      </motion.h4>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="gallery-masonry"
        columnClassName="gallery-masonry-column"
      >
        {schoolGallery.map((img, i) => (
          <motion.div
            key={img.id}
            className="gallery-masonry-item"
            onClick={() => openLightbox(i)}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.07 }}
            whileHover={{ scale: 1.04, boxShadow: '0 4px 16px rgba(0,0,0,0.12)',  }}
          >
            <motion.img
              src={img.src.replace('./public', '/public')}
              alt={`Gallery ${img.id}`}
              className="gallery-masonry-img"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
            />
          </motion.div>
        ))}
      </Masonry>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={schoolGallery.map(img => ({ src: img.src.replace('./public', '/public') }))}
        index={currentIndex}
        on={{ view: ({ index }) => setCurrentIndex(index) }}
      />
    </motion.div>
  )
}

export default ImageGallery