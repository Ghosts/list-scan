import Scanner from '../components/Scanner'
import Head from 'next/head'

const Layout = (props) => (
    <div>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
        <h1>List-Scan</h1>
        <Scanner />
        {props.children}
    </div>
)

export default Layout