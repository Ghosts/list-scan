import React from 'react'
import Quagga from 'quagga'

class Results extends React.Component {
    codes = [];

    constructor(props) {
        super(props);
        this.scanned_codes = React.createRef();
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
        };

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
            let code = result.codeResult.code;
            if (code && ($.inArray(code, codes) === -1)) {
                codes.push(code);
                document.querySelector("#scanned-codes").appendChild(`
                    <span class="tag is-light is-large ${code}">
                    ${code}
                    <button onClick="removeCode('${code}')" class="delete"></button>
                    </span>
                    `);
                window.navigator.vibrate(500);
            }
        });

        function removeCode(code) {
            var i = codes.indexOf(code);
            if (i != -1) {
                codes.splice(i, 1);
            }
            document.querySelector(`.${code}`).remove();
        }
    }

    render() {
        return (
            <section className="hero is-info">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Scanned Codes
                        </h1>
                        <div id="scanned-codes" ref={this.scanned_codes} className="tags"></div>
                        <div className="subtitle remove-all">
                            <a className="button is-rounded" onClick={this.removeAll.bind(this)}>Remove All</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    removeAll() {
        this.codes = [];
        const results = this.scanned_codes.curent;
        while (results.hasChildNodes()) {
            results.removeChild(results.lastChild);
        }
    }
}


export default Results