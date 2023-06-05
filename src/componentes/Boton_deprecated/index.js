import "./Boton.css"

const Boton = (props) => {
    return <button className="boton" onClick={props.onClick}>{props.children}
    {props.titulo}
    
    </button>
}

export default Boton