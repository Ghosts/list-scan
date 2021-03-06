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
                            <br/>
                            <small className="subtitle has-text-centered">There are {this.props.codes.length} scanned codes.</small>
                        </h1>
                        <div className="buttons is-centered">
                            {/* <CSVLink className="button is-warning is-rounded" data={this.props.codes.toString()} filename={`list-scan-${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`}>Download CSV</CSVLink> */}
                            <a href={`mailto:?subject=list-scan-${new Date().toLocaleDateString().replace(/\//g, '-')}&body=${this.props.codes.toString().split(',').join("%0D%0A")}`} className="button is-warning is-rounded">Email</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Export