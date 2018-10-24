import React from 'react'
import Main from '../layouts/Main'
import Scanner from '../components/Scanner'
import Export from '../components/Export'

class Index extends React.Component {
    constructor(props) {
        super()
        this.results = React.createRef()
        this.state = {
            codes: []
        }
    }
    
    render() {
        return (
            <Main>
                <Scanner codes = {this.state.codes} />
                <Export codes={this.state.codes} />
            </Main>
        )
    }
}

export default Index
