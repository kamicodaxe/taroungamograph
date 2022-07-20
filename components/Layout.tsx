import Head from 'next/head'
import Footer from "./Footer"


interface Props extends React.PropsWithChildren {
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <div>
            <Head>
                <title>Taroungamograph</title>
                <meta name="description" content="Taroungamograph" />
                <link rel="icon" href="/favicon.svg" />
                <meta name="description" content="Bienvenue chez TaroungaMograph.Vous pouvez consulter ci dessous quelques unes de mes réalisations motion design." />
                <meta name="robots" content="max-image-preview:large" />
                <link rel="canonical" href="https://taroungamograph.com/" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:site_name" content="taroungamograph - Bienvenue chez TaroungaMograph" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Bienvenue chez TaroungaMograph - taroungamograph" />
                <meta property="og:description" content="Bienvenue chez TaroungaMograph.Vous pouvez consulter ci dessous quelques unes de mes réalisations motion design." />
                <meta property="og:url" content="https://taroungamograph.com/" />
                <meta property="og:image" content="https://taroungamograph.com/wp-content/uploads/2022/07/logo-site.svg" />
                <meta property="og:image:secure_url" content="https://taroungamograph.com/wp-content/uploads/2022/07/logo-site.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Bienvenue chez TaroungaMograph - taroungamograph" />
                <meta name="twitter:description" content="Bienvenue chez TaroungaMograph.Vous pouvez consulter ci dessous quelques unes de mes réalisations motion design." />
                <meta name="twitter:image" content="https://taroungamograph.com/wp-content/uploads/2022/07/logo-site.svg" />
            </Head>

            <body>
                <main>
                    {children}
                </main>
            </body>

            <Footer />
        </div>
    )
}

export default Layout