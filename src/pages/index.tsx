import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import { FaSearch } from 'react-icons/fa'

function LanguageCard(props) {
  return (
    <div>
      <span>{props.emoji}</span>
      <span>{props.language}</span>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>The Deftaeris Project</title>
        <meta name="description" content="The Deftaeris Project is an open source repository of language learning materials, open to everyone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.landing}>
          <div className={styles.title}>
            <span>{`Finding language learning resources shouldn't be difficult or costly.`}</span>
            <span>{`We compile the best resources for as many languages as we possibly can, so anyone, no matter what language they're trying to learn, can find quality resources :)`}</span>
            <div className={styles.buttonContainer}>

            </div>
          </div>
        </div>
        <div id="languageContainer" className={styles.languageContainer}>

        </div>
      </main>
    </>
  )
}
