import { useLocation, Link } from 'react-router-dom'

function NoMatch() {
    let location = useLocation()

    return (
        <>
            <h1>Page introuvable</h1>

            <Link to="/" title="Revenir sur la page principale">
                Retour sur la page d&#39;accueil
            </Link>

            <br />

            <code>
                La page suivante : <b>{location.pathname}</b> est introuvable
            </code>
        </>
    )
}

export default NoMatch
