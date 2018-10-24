import React from 'react'
import Main from '../layouts/Main'
import Scanner from '../components/Scanner'

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
                <Scanner codes={this.state.codes} />
            </Main>
        )
    }
}

export default Index
