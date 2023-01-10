import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion'

const chooseHiraya = [
    {id: 1, reason: "Experienced and professional photographers"},
    {id: 2, reason: "Fast turn around of edited images"},
    {id: 3, reason: "Natural and relaxed style of shooting"},
    {id: 4, reason: "Affordable rates for premium quality"},
    {id: 5, reason: "Fun and memorable photo sessions"},
]

const About = () => {
  return (
    <>
        <main className={styles.main}>
            <motion.div  
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 2,
            }}
            >
                <h1 className={styles.hiraya}>
                    We are Hiraya Photos.   
                </h1>
                
                <div className={styles.description}>
                    We offer wedding and lifestyle photography in Sydney, Australia.
                    <br/>
                </div>
                

                <div className={styles.grid}>
                    <div className={styles.card}>
                        Kids photo
                    </div>
                    <div className={styles.card}>
                        Family photo
                    </div>
                    <div className={styles.card}>
                        Event photo
                    </div>
                    <div className={styles.card}>
                        Kids photo
                    </div>
                    <div className={styles.card}>
                        Family photo
                    </div>
                    <div className={styles.card}>
                        Event photo
                    </div>
                </div>


                <div className={styles.grid} style={{background:"#fbfbfb",width:"100vw"}}>
                    <div>
                        <Image src="/photo.svg" alt="Hiraya Moments" width={650} height={355}/>
                    </div>
                    <div className={styles.reason__container}>
                        <h1 className={styles.title}>
                            Why book <a href="https://nextjs.org">us</a>
                        </h1>
                        {chooseHiraya.map ((item) => (
                            <div key={item.id} className={styles.reason}>
                                <Image src="/check.svg" alt="check" width={30} height={30}/>
                                <span className={styles.reason__text}>{item.reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
    </>
  )
}

export default About