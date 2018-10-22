import Scanner from '../components/Scanner'
import Head from 'next/head'

const layoutStyle = {
    margin: 0,
    padding: 0,

}

const Layout = (props) => (
    <div style={layoutStyle} className="columns">
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="/static/bulma.min.css" type="text/stylesheet"/>
    </Head>
    <div className="column">
        <h1>List-Scan</h1>
        <Scanner />
        {props.children}
        </div>
    </div>
)

export default Layout