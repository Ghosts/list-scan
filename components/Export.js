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
                            <button className="button is-warning is-rounded" onClick={this.export.bind(this)}>Download CSV</button>
                            <button className="button is-warning is-rounded" onClick={this.email.bind(this)}>Email</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    email() {
        alert('email!')
    }

    export() {
        alert('export!')
    }
}
export default Export
