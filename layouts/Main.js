import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => (
    <div>
        <style jsx>{`
      body { 
        overflow-x: hidden;
      }
    `}</style>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" type="text/css" href="/static/bulma.min.css" />
        </Head>
        <Header />
        {props.children}
        <Footer />
    </div>
)

export default Layout