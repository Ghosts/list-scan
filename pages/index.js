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
            <noscript> Your browser does not support JavaScript.Please enable JavaScript or use a different browser. </noscript> 
            <Scanner/>
            </Main>
        )
    }

    componentDidMount = () => {
        //Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
        if (navigator.serviceWorker.controller) {
            console.log('[PWA Builder] active service worker found, no need to register')
        } else {
            //Register the ServiceWorker
            navigator.serviceWorker.register('/static/sw.js', {
                scope: './'
            }).then(function (reg) {
                console.log('Service worker has been registered for scope:' + reg.scope);
            });
        }
    }

}

export default Index