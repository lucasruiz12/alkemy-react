import { Link } from "react-router-dom";

function Header() {
    return (
        <>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/listado' className="nav-link active" aria-current="page" href="#">Listado</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contacto' className="nav-link active" aria-current="page" href="#">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
        </>
    )
}

export default Header;