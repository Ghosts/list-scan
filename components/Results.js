import React from 'react'

class Results extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            codes: []
        }
        this.scanned_codes = React.createRef()
    }

    render() {
        return (
            <section className="hero is-info">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            Scanned Codes
                        </h1>
                        <div className="tags" ref={this.scanned_codes}>
                            {
                                this.state.codes.map(function (code, idx) {
                                    <span className={`tag is-light is-large ${code}`}>
                                        {code}
                                        <button onClick={removeCode(code).bind(this)} className="delete"></button>
                                    </span>
                                })
                            }
                        </div>
                        <div className="subtitle remove-all">
                            <a className="button is-rounded" onClick={this.removeAll}>Remove All</a>
                        </div>
                    </div>
                </div>
            </section>
        )
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
        const results = this.scanned_codes.curent;
        while (results.hasChildNodes()) {
            results.removeChild(results.lastChild);
        }
        this.setState({
            codes: []
        });
    }

    removeCode(code) {
        let new_codes = this.state.codes;
        var i = new_codes.indexOf(code);
        if (i != -1) {
            new_codes.splice(i, 1);
        }
        this.setState({
            codes: new_codes
        });
        document.querySelector(`.${code}`).remove();
    }

}


export default Results