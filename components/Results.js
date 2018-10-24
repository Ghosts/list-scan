import React from 'react'
import Export from '../components/Export'

class Results extends React.Component {

    constructor(props) {
        super(props)
        this.scanned_codes = React.createRef()
    }

    render() {
        return (
            <div>
                <section className="hero is-info is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Scanned Codes
                            </h1>
                            <div className="tags" ref={this.scanned_codes}>
                                {
                                    this.props.codes.map((code) => (
                                        <span className={`tag is-light is-large ${code}`}>
                                            {code}
                                            <button onClick={this.removeCode.bind(this, code)} className="delete"></button>
                                        </span>
                                    ))
                                }
                            </div>
                            {this.props.codes.length == 0 ? "Scanned codes will show up here." :
                                <div className="subtitle remove-all">
                                    <button className="button is-light is-rounded" onClick={this.removeAll.bind(this)}>Remove All</button>
                                </div>
                            }
                        </div>
                    </div>
                </section>
                <Export codes={this.props.codes} />
            </div>
        )
    }

    addResult(result) {
        let code = result.codeResult.code;
        if (code && ($.inArray(code, this.props.codes) === -1)) {
            let new_codes = this.props.codes;
            new_codes.push(code);
            this.setState({
                codes: new_codes
            });
            window.navigator.vibrate(500);
        }
    }

    removeAll() {
        let new_codes = [];
        this.setState({
            codes: new_codes
        });
    }

    removeCode(code) {
        let new_codes = this.props.codes;
        var i = new_codes.indexOf(code);
        if (i != -1) {
            new_codes.splice(i, 1);
        }
        this.setState({
            codes: new_codes
        });
    }

}

export default Results