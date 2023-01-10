import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type iconItem = {
  icon: any,
  text: string
}

const ANIMATION_DURATION_S = 0.8;

const getVariants = (direction: any) => ({
  initial: {
    y: direction === "top" ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
});

const IconHolder = ({ icon, text, desc }: any) => {
  return (
    <div className="icon-holder">
      <AnimatePresence>
        <motion.div
            className="icon-holder__icon"
            key={text + "icon"}
            variants={getVariants("top")}
            initial={"initial"}
            exit={"initial"}
            animate={"animate"}
          >
            <img src={icon.src} alt={icon.alt} />
          </motion.div>

          <motion.h1
            className="icon-holder__text"
            key={text}
            variants={getVariants("bottom")}
            initial={"initial"}
            exit={"initial"}
            animate={"animate"}
          >
            {/* {text} */}
            
            {/* <div className="icon-holder__desc">
              {desc}
            </div> */}
          </motion.h1>
          
      </AnimatePresence>
    </div>
  )
}

export default IconHolder