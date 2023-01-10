import React, { useEffect } from "react";
import { useCycle } from "framer-motion";
import IconHolder from './IconHolder';
import ImageHolder from './ImageHolder';
import { kidsScene, familyScene, celebScene } from "../../utils/Scenes";
import Image from 'next/image'

const SLIDE_CHANGE_TIME_MS = 4000;

const Banner = () => {
  const [currentScene, setCurrentScene] = useCycle(
    kidsScene,
    familyScene,
    celebScene
  );

  useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
    return () => clearTimeout(timeOut);
  }, [currentScene, setCurrentScene]);

  return (
    <div className="hero">
      {/* <IconHolder icon={currentScene.icon} text={currentScene.text} desc={currentScene.desc}/> */}
      <IconHolder icon={" "} text={currentScene.text} desc={currentScene.desc}/>

      <ImageHolder 
        img={currentScene.image}
        className="banner-image"
      />
    </div>
  )
}

export default Banner