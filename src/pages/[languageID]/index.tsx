import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import useSWR from 'swr'
import { useRouter } from "next/router"

import styles from './LanguageCollection.module.css'

const fetcher = url => axios.get(url).then(res => res.data)

const resources = [
    {name: 'Language Reactor', about: "Formerly called Language Learning with Netflix, Language Reactor is a tool which allows for the translation of YouTube substitles, dual subtitles, and a multitude of other features.", link: "https://www.languagereactor.com/"}
]

function LanguageCard (props) {
    // apparently i can't nest this as a component
    var type: string | undefined;
    switch (props.type) {
        case 'book':
            type = '📒 Book'
            break
        case 'general':
            type = 'General'
            break
        default:
            type = ''
            break
    }
    var free: string | undefined
    if(props.free == true){free = "Free"} else {free = "Paid"}
    return (
        <Link href={"/" + props.langId + "/" + props.name} className={styles.card}>
            <div className={styles.cardTitle}>
                <span>{props.name}</span>
            </div>
            <div className={styles.cardText}>
                <span>{free + " | " + type}</span>
            </div>
        </Link>
    )
}

export default function LanguageCollection() {
    const router = useRouter()
    const { languageID } = router.query
    const { data, error } = useSWR(languageID ? '/api/language/' + languageID : null , fetcher)
    return (
        <>
            <Head>
                <title>{data?.name + " | The Deftaeris Project"}</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.title}>
                    <span>{data?.name + " Resources"}</span>
                </div>
                <div className={styles.search}>
                    <input placeholder='Search for a resource:' />
                </div>
                <div className={styles.content}>
                    <div className={styles.initialCard}>
                        <div className={styles.initialTitle}>
                            <span>About</span>
                        </div>
                        <div className={styles.initialText}>
                            <span>{data?.about}</span>
                        </div>
                    </div>
                    {data && data.resource.map((language, i) => (
                        <LanguageCard
                            key={i}
                            langId={languageID}
                            name={language.name}
                            about={language.about}
                            type={language.type}
                            free={language.free}
                            link={language.link}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}