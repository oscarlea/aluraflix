import "./Footer.css"
import Boton from "../Boton"

function Footer(props) {
    
    return <footer className="footer">
        <Boton titulo="Nuevo Video" onClick={props.cambiarMostrar} />

        <img src="/img/header.png" alt='AluraFlix' />

    </footer>

}

export default Footer