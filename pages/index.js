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
                <noscript>Your browser does not support JavaScript. Please enable JavaScript or use a different browser.</noscript>
                <Scanner/>
            </Main>
        )
    }

    componentDidMount = () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/static/sw.js")
                .catch(err => console.error("Service worker registration failed", err);
        } else {
            console.log("Service worker not supported");
        }
    }
}

export default Index
