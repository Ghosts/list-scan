import Head from 'next/head'
const Scanner = () => (
    <div>
        <Head>
            <script src='/static/jquery.js'></script>
            <script src='/static/quagga.min.js'></script>
            <script src='/static/scanner.js'></script>
        </Head>
        <section className="hero is-dark">
            <div className="hero-body">
                <div className="container">
                    <div id="barcode-scanner">
                    </div>
                </div>
            </div>
        </section>
        <ul id="scanned-codes"></ul>
    </div>
)

export default Scanner