const Results = () => (
    <section className="hero is-info">
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    Scanned Codes
                </h1>
                <div id="scanned-codes" className="tags"></div>
                <div className="subtitle">
                    <a className="button is-rounded" onClick={removeAll()}>Remove All</a>
                </div>
            </div>
        </div>
    </section>
)
export default Results
