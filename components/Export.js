import { CSVLink} from "react-csv"

class Export extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title has-text-centered is-bold">
                            Export
                        </h1>
                        <div className="buttons is-centered">
                            <CSVLink className="button is-warning is-rounded" data={this.props.codes} filename={`list-scan-${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`}>Download CSV</CSVLink>
                            <a href={this.getMailto()} className="button is-warning is-rounded">Email</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    getMailto() {
        return `mailto:?subject=list-scan-${new Date().toLocaleDateString().replace(/\//g, '-')}&body=${this.props.codes.toString().split(',').join("<br/>")}`
    }
}
export default Export
