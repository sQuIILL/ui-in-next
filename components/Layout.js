import Header from './Header'
import Footer from './Footer'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default function Layout({ children } ) {

    return (
        <>
            <Head >
                <title>Sklep internetowy</title>
            </Head>
            <Header />
            <main >
                {children}
            </main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
}