import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import styles from '../../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <span className={styles.logo}>
            <Image src="/hiraya.svg" alt="Hiraya Moments Logo" width={50} height={50} />
            <Link href={"/"}>
                <a>
                    <h4>Hiraya Photos.</h4>
                </a>
            </Link>
        </span>
        <span>All rights reserved. {' '}</span>
    </footer>
  )
}

export default Footer