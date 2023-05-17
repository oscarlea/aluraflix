import "./Header.css"
import Boton from "../Boton"
import { Link } from "react-router-dom"

function Header(props) {

    return <header className="header">

        

        <Link to="/" className="headerLink">
            <img src="/img/header.png" alt='AluraFlix' />
        </Link>


        <nav className="menu-header">
            <ul className="menu-items">

                <li><Link className="menu-item" to="/cosa">Cosa</Link></li> 

            </ul>
        </nav>

    


        <Boton titulo="Nuevo Video" onClick={props.cambiarMostrar} />
    </header>

}

export default Header

