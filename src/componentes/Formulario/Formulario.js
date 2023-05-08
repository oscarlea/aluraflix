import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    // Videos
    const [categoria, actualizarCategoria] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [videoUrl, actualizarVideoUrl] = useState("");
    // categorias
    const [nombre, actualizarNombre] = useState("")
    const [color, actualizarColor] = useState("")
    const [descripcionC, actualizarDescripcionC] = useState("")

    const [mostrarSegundoFormulario, setMostrarSegundoFormulario] = useState(false);


    
    const { registrarVideo, registrarCategoria } = props
  

    const nuevoVideo = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        const videoID = getVideoId(videoUrl);
        let datosAEnviar = {
            categoria,
            descripcion,
            titulo,
            videoUrl,
            videoID
        }
        registrarVideo(datosAEnviar)
    }

    const nuevaCategoria = (e) => {
        e.preventDefault()
        registrarCategoria({nombre: nombre, colorPrimario: color, descripcion: descripcionC})
    }

    function getVideoId(url) {
        const match = url.match(/youtube\.com\/watch\?v=(\w+)/);
        return match ? match[1] : "";
    }



    return <section className="formulario">
        
        <form onSubmit={nuevoVideo} >
            <h2>Nuevo Video</h2>
            <ListaOpciones
                valor={categoria}
                actualizarCategoria={actualizarCategoria}
                categorias={props.categorias}
            />
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Descripcion"
                placeholder="Ingresar descripcion"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />
            <Campo
                titulo="URL del Video"
                placeholder="URL del Video"
                required
                valor={videoUrl}
                actualizarValor={actualizarVideoUrl}
            />
            <div className="button-container">
                <Boton titulo="Guardar" />
                <Boton titulo="Limpiar" disabled={true} />
                <Boton titulo="Nueva Categoría" onClick={() => setMostrarSegundoFormulario(true)}  />
            </div>
        </form>
        
        {mostrarSegundoFormulario && 
        
        <form onSubmit={nuevaCategoria} >
            <h2>Nueva categoria</h2>
            <Campo
                titulo="Nombre"
                placeholder="Nombre de la categoría"
                required
                 valor={nombre}
                actualizarValor={actualizarNombre} 
            />
                <Campo
                    titulo="Descripción"
                    placeholder="Ingresar descripción"
                    required
                    valor={descripcionC}
                    actualizarValor={actualizarDescripcionC}
            />

            <Campo
                titulo="Color"
                placeholder="Ingresar color hexadecimal"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color" 
            />

            <div className="button-container">
                <Boton titulo="Guardar" />
            </div>

        </form>
}

    </section>
}

export default Formulario