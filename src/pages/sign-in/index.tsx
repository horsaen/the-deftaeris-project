import Head from "next/head"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import styles from './SignIn.module.css'

export default function SignIn () {

    const loginHandler = (e) => {
        e.preventDefault()
        const formDatas = new FormData()
        formDatas.append('username', e.target.username.value)
        formDatas.append('password', e.target.password.value)
        console.log(formDatas)
    }

    return (
        <>
            <Head>
                <title>Sign Up | The Deftaeris Project</title>
            </Head>
            <Navbar />
            <div className={styles.container}>
                <form onSubmit={loginHandler}>
                    <input id="username" placeholder="Username" />
                    <input id="password" type='password' placeholder="Password" />
                    <button type="submit">Sign In</button>
                </form>
                <div>
                    <Link href='sign-up'>
                        <span>Sign Up</span>
                    </Link>
                    <span> | </span>
                    <Link href='forgot'>
                        <span>Forgot Password?</span>
                    </Link>
                </div>
            </div>
        </>
    )
}