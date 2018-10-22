import Head from 'next/head'
import Results from './Results'

const Scanner = () => (
    <div>
        <Head>
            <script src='/static/jquery.js'></script>
            <link rel="stylesheet" type="text/css" href="/static/scanner.css" />
        </Head>
        <section className="hero is-light max-height">
            <div className="hero-body">
                <div className="container">
                    <div id="barcode-scanner" className="viewport"></div>
                </div>
            </div>
        </section>
        <Results />
    </div>
)

export default Scanner