import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar () {
    return (
        <div className={styles.navbar}>
            <div>
                <Link href='/'>Home</Link>
            </div>
            <div className={styles.right}>
                <Link href='/search'>Search</Link>
                <span> | </span>
                <Link href='/sign-in'>Sign In</Link>
            </div>
        </div>
    )
}