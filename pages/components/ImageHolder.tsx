import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type imageItem = {
  img: any,
  className: string
}

const TRANSITION_TIME_OPACITY_S = 1;
const TRANSITION_TIME_ROTATE_S = { MIN: 1.5, MAX: 2.5 };

const getRandomNumberBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * max) + min;
}
const getRandomDelay = (min: number, max: number): number => {
  return Math.floor(Math.random() * max) + min;
}


const ImageHolder = ({img, className}: imageItem) => {
  return (
    <AnimatePresence>
      <motion.div
          key={img.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{
              duration: TRANSITION_TIME_OPACITY_S,
              rotate: {
                yoyo: Infinity,
                duration: getRandomNumberBetween(
                  TRANSITION_TIME_ROTATE_S.MIN,
                  TRANSITION_TIME_ROTATE_S.MAX
                ),
                delay: getRandomDelay(TRANSITION_TIME_ROTATE_S.MIN, TRANSITION_TIME_ROTATE_S.MAX),
              },
          }}
          className={className ? className : ""}
      >
          <img src={img.src} alt={img.alt} />
      </motion.div>
    </AnimatePresence>
  )
}

export default ImageHolder