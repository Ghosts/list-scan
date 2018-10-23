import Head from 'next/head'
import Quagga from 'quagga'
import Results from './Results'

class Scanner extends React.Component {
    constructor(props) {
        super(props);
        this.results = React.createRef();
    }

    render() {
        return (<div>
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
            <Results ref={this.results} />
        </div>
        )
    }

    // Quagga code
    onProcessed() {
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
    }

    onDetected() {
        Quagga.onDetected(function (result) {
            this.results.current.AddResult(result);
        });
    }

    init(liveStreamConfig) {
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
    }


    componentDidMount() {
        var liveStreamConfig = {
            inputStream: {
                name: "Live",
                type: "LiveStream",
                constraints: {
                    facingMode: "environment",
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
                target: document.querySelector('#barcode-scanner')
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            area: {
                top: "0%",
                right: "0%",
                left: "0%",
                bottom: "0%"
            },
            numOfWorkers: (window.navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4),
            decoder: {
                readers: ["code_39_reader", "code_39_vin_reader", "code_128_reader"]
            },
            locate: true,
            multiple: true
        }

        this.init(liveStreamConfig)
        this.onDetected()
        this.onProcessed()
    }
}

export default Scanner