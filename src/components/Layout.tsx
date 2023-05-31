import Head from "next/head";

export default function Layout ({ children }) {
    return (
        <>
            { children }
            {/* uncommment for prod */}
            {/* <script async src="https://analytics.horsaen.com/script.js" data-website-id="bab3ec41-f2f4-4ed5-895b-2e63c5365c06"></script> */}
        </>
    )
}