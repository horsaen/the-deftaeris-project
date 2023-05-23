import Head from "next/head";
import Link from "next/link";
import axios from 'axios'
import useSWR from 'swr'
import { useRouter } from 'next/router'

import styles from './Resource.module.css'

const fetcher = url => axios.get(url).then(res => res.data)

export default function Resource () {
    const router = useRouter()
    const { languageID, resourceID } = router.query

    const { data, error } = useSWR('/api/language/' + languageID + '/' + resourceID, fetcher)
    // alias the data array >:(
    var resource = data?.resource[0]
    // temp date handling
    const date = new Date(Date.parse(resource?.date))
    return (
        <>
            <Head>
                <title>{resource?.name + ' | The Deftaeris Project'}</title>
            </Head>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>{data?.emoji + " | " + resource?.name}</span>
                    <span className={styles.titleDate}>{"Added " + date.toDateString()}</span>
                </div>
                <div className={styles.about}>

                </div>
                {resource?.link ?
                    <div className={styles.toLink}>
                        <Link rel="noreferrer" target="_blank" href={resource?.link}>Learn More</Link>
                    </div>
                : null}
            </div>
            <div className={styles.discussion}>

            </div>
        </>
    )
}