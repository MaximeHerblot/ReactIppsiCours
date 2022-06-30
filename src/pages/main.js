import Card from '../components/card/card'
import LogoReact from '../img/logo192.png'

const Main = () => {
    return (
        <>
            <h1>Main</h1>
            <Card title="Je suis un titre" desc="lorem ipsum..." image={LogoReact} />

            <Card title="rfrg" desc="lorem ipsum..." image={LogoReact} />
        </>
    )
}

export default Main
