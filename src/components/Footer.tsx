import styles from './Footer.module.css'

import { GoMarkGithub, GoMail } from 'react-icons/go'

export default function Footer () {
    return (
        <div className={styles.footer}>
            <a rel="noreferrer"  href='/info.txt'>Legal & Other Info</a>
            <span>{"Made with <3 by "}<a href="https://github.com/horsaen">Horsaën</a></span>
            <div>
                <a rel="noreferrer" target='_blank' href="https://github.com/horsaen/the-deftaeris-project"><GoMarkGithub /></a>
                <a rel="noreferrer" target='_blank' href="mailto:atealltheglue@protonmail.com"><GoMail /></a>
            </div>
        </div>
    )
}