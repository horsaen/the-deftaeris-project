import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios'
import useSWR from 'swr'
import { useRouter } from 'next/router'

import styles from './Resource.module.css'

const fetcher = url => axios.get(url).then(res => res.data)

// i can't think of a better way to do this
function CheckPaid (props) {
    var type: string | undefined
    switch (props.free) {
        case true:
            type = "Free"
            break
        case false:
            type = "Paid"
            break
    }
    return (
        <span>{"Price: " + type}</span>
    )
}

function CheckType (props) {
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
    return (
        <span>{"Type: " + type}</span>
    )
}

// simple not found thing, i don't feel like doing anything more complicated
function NotFoundHandler () {
    return (
        <div className={styles.notFound} >
            <span>{"Oh no! There's no resouce for this language :("}</span>
            <Link href="/">
                Go back?
            </Link>
        </div>
    )
}

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
            {error ? <NotFoundHandler /> : null }
            <div className={styles.content}>
                <div className={styles.title}>
                    <div className={styles.titleContainer}>
                        <div className={styles.emoji}>
                            <span>{data?.emoji}</span>
                            <span> | </span>
                        </div>
                        <div className={styles.titleName}>
                            <span>{resource?.name}</span>
                        </div>
                    </div>
                </div>
                {/* i don't know why it does that but i don' t really care it looks better like this */}
                <span className={styles.titleDate}>{"Added " + date.toDateString()}</span>
                <div className={styles.main}>
                    <div id="main">
                        <div className={styles.about}>
                            <span>{resource?.about}</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.sidebar}>
                            <CheckPaid free={resource?.free} />
                            <CheckType type={resource?.type} />
                        </div>
                    </div>
                    <div className={styles.image}>
                        {/* this is so dumb */}
                        {resource?.name !== undefined ?
                        <Image alt="" src={'/api/language/vn/' + resource?.name + '/file'} fill sizes="100vw"/>
                        : null
                        }
                    </div>
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