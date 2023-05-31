import Head from "next/head";
import Script from "next/script";

export default function Layout ({ children }) {
    return (
        <>
            { children }
            {/* uncommment for prod */}
            <Script async src={process.env.NEXT_PUBLIC_WEBURL || ""} data-website-id={process.env.NEXT_PUBLIC_WEBID || ""} />
        </>
    )
}