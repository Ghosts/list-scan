import React from 'react'
import Main from '../layouts/Main'
import Scanner from '../components/Scanner'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Main>
                <Scanner/>
            </Main>
        )
    }
}

export default Index
