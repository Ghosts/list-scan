import Head from 'next/head'
const Scanner = () => (
    <div>
        <Head>
            <script src='/static/jquery.js'></script>
            <script src='/static/quagga.min.js'></script>
            <script src='/static/scanner.js'></script>
            <link rel="stylesheet" type="text/css" href="/static/scanner.css"/>
        </Head>
        <section className="hero is-dark">
            <div className="hero-body">
                <div id="barcode-scanner" className="viewport"></div>
            </div>
        </section>
        <ul id="scanned-codes"></ul>
    </div>
)

export default Scanner