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
                    <div id="barcode-scanner">
                        <video src=""></video>
                        <canvas class="drawingBuffer"></canvas>
                    </div>
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