import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/" title="redirection sur la home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cv" title="redirection sur la home">
                            CV
                        </Link>
                    </li>
                    <li>
                        <Link to="/projets" title="redirection sur la page Projet">
                            Projet
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" title="redirection sur la page contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
