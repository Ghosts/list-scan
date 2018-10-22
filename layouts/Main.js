import Header from '../components/Header'
import Head from 'next/head'

const layoutStyle = {
    margin: 0,
    padding: 0,
}

const Layout = (props) => (
    <div>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" type="text/css" href="/static/bulma.min.css"/>
    </Head>
        <Header/>
        {props.children}
    </div>
)

export default Layout