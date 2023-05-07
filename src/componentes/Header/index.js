import "./Header.css"
import Boton from "../Boton"

function Header(props) {
    
    return <header className="header">
        <img src="/img/header.png" alt='AluraFlix' />
        <Boton titulo="Nuevo Video" onClick={props.cambiarMostrar} />
    </header>

}

export default Header

