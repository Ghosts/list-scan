import React from 'react'
import Main from '../layouts/Main'
import Scanner from '../components/Scanner'
import Results from '../components/Results'
import Export from '../components/Export'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.results = React.createRef()
        this.state = {
            codes: []
        }
    }
    
    render() {
        return (
            <Main>
                <Scanner results={this.results} />
                <Results ref={this.results} codes={this.state.codes} />
                <Export codes={this.state.codes} />
            </Main>
        )
    }
}

export default Index
