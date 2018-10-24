import { CSVLink} from "react-csv"

class Export extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            codes: this.props.codes,
            mailto: `mailto:?subject=list-scan-${new Date().toLocaleDateString().replace(/\//g, '-')}&body=${this.props.codes.toString().split(',').join("<br/>")}`
        }
    }

    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title has-text-centered is-bold">
                            Export
                            <div>Scanned: {this.state.codes.length}</div>
                        </h1>
                        <div className="buttons is-centered">
                            <CSVLink className="button is-warning is-rounded" data={this.state.codes} filename={`list-scan-${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`}>Download CSV</CSVLink>
                            <a href={this.state.mailto} className="button is-warning is-rounded">Email</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Export
