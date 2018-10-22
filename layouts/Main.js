import Scanner from '../components/Scanner'
import Head from 'next/head'

const layoutStyle = {
    margin: 20,
    padding: 20,
}

const Layout = (props) => (
    <div style={layoutStyle}>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
        <h1>List-Scan</h1>
        <Scanner />
        {props.children}
    </div>
)

export default Layout