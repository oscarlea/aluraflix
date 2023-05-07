import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => { 
    //    return <option></option>
    // })


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarCategoria(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Categorías</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoría</option>
            {props.categorias.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
        </select>
    </div>
}

export default ListaOpciones



