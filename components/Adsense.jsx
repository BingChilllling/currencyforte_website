import Head from "next/head";

export default function Adsense({ title, description}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />

            {typeof window !== 'undefined' && (
                process.env.NODE_ENV === 'production' && (
                    <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6469406013541860"
                        crossorigin="anonymous"
                    >
                    </script>
                )
            )}
        </Head>
    )
}