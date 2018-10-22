$(document).ready(function () {
    let codes = [];

    var liveStreamConfig = {
        inputStream: {
            name: "Live",
            type: "LiveStream",
            constraints: {
                facingMode: "environment"
            },
            target: document.querySelector('#barcode-scanner')
        },
        locator: {
            patchSize: "medium",
            halfSample: true
        },
        numOfWorkers: (window.navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4),
        decoder: {
            readers: [
                "code_39_reader",
                "code_39_vin_reader",
            ],
        },
        locate: true
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
        if (result.codeResult.code && !$.inArray(code, codes)) {
            codes.push(code);
            $("#scanned").append(`
            <span class="tag is-success">
            ${code}
            <button onClick="removeCode('${code}')" class="delete is-small"></button>
            </span>
            `);
            window.navigator.vibrate(1000);
        }
    });

    function removeCode(code) {
        codes.splice( $.inArray(code, codes), 1 );
    }

});