import React from 'react'

class Results extends React.Component {

    constructor(props) {
        super(props)
        this.scanned_codes = React.createRef()
    }

    render() {
        return (
            <section className="hero is-info">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Scanned Codes
                        </h1>
                        <ScannedCodes id="scanned_codes" ref={this.scanned_codes} className="tags" />
                        <div className="subtitle remove-all">
                            <a className="button is-rounded" onClick={this.removeAll}>Remove All</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    removeAll() {
        this.scanned_codes.current.RemoveAll();
    }

    AddResult(result) {
        const scanned_codesRef = this.scanned_codes.current;
        scanned_codesRef.AddResult(result);
    }
}

class ScannedCodes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            codes: []
        }
    }

    AddResult(result) {
        let code = result.codeResult.code;
        if (code && ($.inArray(code, this.state.codes) === -1)) {
            let new_codes = this.state.codes;
            new_codes.push(code);
            this.setState({
                codes: new_codes
            });
            window.navigator.vibrate(500);
        }
    }

    removeAll() {
        this.state.codes = [];
        const results = this.scanned_codes.curent;
        while (results.hasChildNodes()) {
            results.removeChild(results.lastChild);
        }
    }

    removeCode(code) {
        var i = this.state.codes.indexOf(code);
        if (i != -1) {
            this.state.codes.splice(i, 1);
        }
        document.querySelector(`.${code}`).remove();
    }

    render() {
        const codes = this.state.codes;
        return (
            <div>
                {
                    codes.map(function (code, idx) {
                        return (
                            <span className={`tag is-light is-large ${code}`}>
                                {code}
                                <button onClick={this.removeCode(code)} className="delete"></button>
                            </span>
                        )
                    })
                }
            </div>
        )
    }
}


export default Results