import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {

        console.log("cambio", e.target.value)
        props.actualizarIdCategoria(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Categorías</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoría</option>
            {props.categorias.map((categoria) => (<option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
            ))}
        </select>
    </div>
}

export default ListaOpciones
