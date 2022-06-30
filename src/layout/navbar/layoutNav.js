import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

const LayoutNav = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default LayoutNav
