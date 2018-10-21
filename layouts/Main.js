import Scanner from '../components/Scanner'

const layoutStyle = {
    margin: 20,
    padding: 20,
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <h1>List-Scan</h1>
        <Scanner />
        {props.children}
    </div>
)

export default Layout