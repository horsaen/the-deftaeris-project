import Head from "next/head"
import Link from "next/link"
import Navbar from "@/components/Navbar"

import styles from './SignUp.module.css'

export default function SignUp () {
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submit')
    }
    return (
        <>
            <Head>
                <title>Sign Up | The Deftaeris Project</title>
            </Head>
            <Navbar />
            <div className={styles.container}>
                <form onSubmit={submitHandler}>
                    <input id="username" placeholder="Username" />
                    <input id="password" placeholder="Password" />
                    <button type="submit">Sign Up</button>
                </form>
                <div>
                    <Link href='sign-in'>
                        <span>Sign In</span>
                    </Link>
                </div>
            </div>
        </>
    )
}