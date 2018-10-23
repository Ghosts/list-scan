import React from 'react'

class Results extends React.Component {

    constructor(props) {
        super(props);
    }

    AddResult(result) {
        let code = result.codeResult.code;
        if (code && ($.inArray(code, this.props.codes) === -1)) {
            this.props.codes.push(code);
            window.navigator.vibrate(500);
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
                        <ScannedCodes id="scanned_codes" ref={this.scanned_codes} codes={this.props.codes} className="tags" />
                        <div className="subtitle remove-all">
                            <a className="button is-rounded" onClick={this.removeAll.bind(this)}>Remove All</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    removeAll() {
        this.props.codes = [];
        const results = this.scanned_codes.curent;
        while (results.hasChildNodes()) {
            results.removeChild(results.lastChild);
        }
    }
}

class ScannedCodes extends React.Component {

    removeCode(code) {
        var i = this.props.codes.indexOf(code);
        if (i != -1) {
            this.props.codes.splice(i, 1);
        }
        document.querySelector(`.${code}`).remove();
    }

    render() {
        const codes = this.props.codes;
        return (
            <div>
            {
                codes.map(function(code, idx) {
                    return (
                        <span className={`tag is-light is-large ${code}`}>
                        {code}
                        <button onClick={removeCode(code)} className="delete"></button>
                        </span>
                      )
                })
            }
            </div>
         )
       }
}


export default Results