import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => (
    <div>
    <style jsx>{`
        body { 
        overflow-x: hidden;
        }
    `}
    </style>
        <Head>
            <title>List-Scan</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="author" content="Caden Sumner"/>
            <meta name="theme-color" content="#FFDD57"/>
            <link rel="manifest" href="/static/manifest.json" />
            <link rel="icon" href="/static/images/icons/favicon.ico">
            <link rel="stylesheet" type="text/css" href="/static/bulma.min.css" />
        </Head>
        <Header />
        {props.children}
        <Footer />
    </div>
)

export default Layout