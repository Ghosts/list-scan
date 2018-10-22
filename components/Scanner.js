import Head from 'next/head'
const Scanner = () => (
    <div>
        <Head>
            <script src='/static/jquery.js'></script>
            <script src='/static/quagga.min.js'></script>
            <script src='/static/scanner.js'></script>
        </Head>
        <div>
            <div>
                <div>
                    <div id="scanner"></div>
                    <input id="scanner_input" placeholder="Click the button to scan an EAN..." type="text" />
                    <button id="livestream_scanner">
                        Scan Barcodes
                    </button>
                </div>
                <div>
                    <ul id="scanned">

                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Scanner