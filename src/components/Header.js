import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src="https://iconarchive.com/download/i61405/hadezign/hobbies/Movies.ico" style={{maxWidth:'48px', maxHeight: '48px', cursor:'pointer'}} />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/listado' className="nav-link active" aria-current="page">Listado</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/instrucciones' className="nav-link active" aria-current="page">Instrucciones</Link>
                            </li>
                        </ul>
                    </div>
                    <Buscador />
                </nav>
            </header>
        </>
    )
}

export default Header;