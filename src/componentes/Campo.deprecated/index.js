import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onInput={manejarCambio}
            type={type}
            /* actualizarColor={actualizarColor} */
            
        />
    </div>
}

export default Campo 