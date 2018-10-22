import Head from 'next/head'
const Scanner = () => (
    <div>
        <Head>
            <script src='/static/jquery.js'></script>
            <script src='/static/quagga.min.js'></script>
        </Head>
        <div>
            <div>
                <div>
                    <input id="scanner_input" placeholder="Click the button to scan an EAN..." type="text" />
                    <button id="livestream_scanner">
                        Scan Barcodes
                        </button>
                </div>
            </div>
        </div>
    </div>
)
Scanner.getInitialProps = async ({ req }) => {
        var liveStreamConfig = {
            inputStream: {
                type: "LiveStream",
                constraints: {
                    width: { min: 640 },
                    height: { min: 480 },
                    aspectRatio: { min: 1, max: 100 },
                    facingMode: "environment"
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: (navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4),
            decoder: {
                "readers": [
                    { "format": "ean_reader", "config": {} }
                ]
            },
            locate: true
        };

        $('#livestream_scanner').on('click', function (e) {
            Quagga.init(
                liveStreamConfig,
                function (err) {
                    if (err) {
                        console.log(err);
                        Quagga.stop();
                        return;
                    }
                    Quagga.start();
                }
            );
        });

        Quagga.onProcessed(function (result) {
            var drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                    result.boxes.filter(function (box) {
                        return box !== result.box;
                    }).forEach(function (box) {
                        Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                    });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
                }
            }
        });

        Quagga.onDetected(function (result) {
            if (result.codeResult.code) {
                $('#scanner_input').val(result.codeResult.code);
                Quagga.stop();
            }
        });
}

export default Scanner