import "./Header.css";
//import Boton from "../Boton";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="header">

            <div>
            <Link to="/" className="headerLink">
                <img src="/img/header.png" alt="AluraFlix" />
            </Link>
            </div>

            <div>
            <nav className="menu-header">
                <ul className="menu-items">
                    <li>
                        <Link className="menu-item" to="/cosa">
                            Cosa
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/categorias">
                            Categorias
                        </Link>
                    </li>

                    <li>
                        <button className="menu-item" onClick={props.cambiarMostrar}>
                            Nuevo Video
                        </button>
                    </li>

                </ul>
            </nav>
            </div>
            
             {/* <Boton titulo="Nuevo Video" onClick={props.cambiarMostrar} />  */}
        </header>
    );
}

export default Header;
