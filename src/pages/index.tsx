import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import useSWR from 'swr'
const fetcher = url => axios.get(url).then(res => res.data)

import { FaSearch } from 'react-icons/fa'

// allows for smooth scrolling to anchor
const scrollToLanguage = (e) => {
  e.preventDefault();
  const element = document.getElementById('languageContainer');
  if (element) {
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth' // smooth scroll
    })
  }
};


function LanguageCard (props) {
  return (
    <Link href={props.code} className={styles.languageCardContainer}>
      <span>{props.emoji}</span>
      <span>{props.language}</span>
    </Link>
  )
}

export default function Home() {
  const { data } = useSWR('/api/language', fetcher)
  return (
    <>
      <Head>
        <title>The Deftaeris Project</title>
        <meta name="description" content="The Deftaeris Project is an open source repository of language learning materials, open to everyone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className={styles.landing}>
          <div className={styles.title}>
            <span className={styles.heading}>{`Finding language learning resources shouldn't be difficult or costly.`}</span>
            <span>{`We compile the best resources for as many languages as we possibly can, so anyone, no matter what language they're trying to learn, can find quality resources :)`}</span>
            <div className={styles.buttonContainer}>
              <a onClick={scrollToLanguage} href="#languageContainer">
                Learn More
              </a>
              <Link href="sign-up">
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
          <div className={styles.hello}>
            <span>hello bonjour привет cześć 안녕하세요 xin chào こんにちは سلام sawubona hej مرحبا здравейте שלום ciao 你好 jambo halo สวัสดี szia नमस्ते :)</span>
          </div>
        </div>
        <div id="languageContainer" className={styles.languageContainer}>
          <div className={styles.languageSearch}>
            <input placeholder='Search for a language: (en-US, english)' />
          </div>
          <div className={styles.languageCards}>
            {data && data.map((data, i) => (
              <LanguageCard key={i} emoji={data.emoji} language={data.name} code={data.code} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}