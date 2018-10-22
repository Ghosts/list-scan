import Header from '../components/Header'
import Head from 'next/head'

const Layout = (props) => (
    <div>

    <style jsx global>{`
      body { 
        overflow-x: hidden;
      }
    `}</style>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" type="text/css" href="/static/bulma.min.css"/>
    </Head>
        <Header/>
        {props.children}
    </div>
)

export default Layout