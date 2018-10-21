import Main from '../layouts/Main'
import Head from 'next/head'

export default () => (
    <Main>
        <Head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </Head>
        <ul>
            <li>items scanned</li>
        </ul>
    </Main>
)
