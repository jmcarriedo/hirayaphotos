import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './components/About'
import Banner from './components/Banner'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hiraya Moments</title>
        <meta name="description" content="Hiraya Moments Sydney Photographer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <About />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact us <a href="https://nextjs.org">here</a>
        </h1>
         
        <div className={styles.description}>form here</div>
      </main>
    </div>
  )
}

export default Home
