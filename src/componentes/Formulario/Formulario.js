import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [categoria, actualizarCategoria] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [videoUrl, actualizarVideoUrl] = useState("");
    /* const [videoID, actualizarVideoID] = useState("") */


    
    const { registrarVideo } = props

    const manejarEnvio = (e) => {
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

    function getVideoId(url) {
        const match = url.match(/youtube\.com\/watch\?v=(\w+)/);
        return match ? match[1] : "";
    }

      

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Nuevo Video</h2>
            <ListaOpciones
                valor={categoria}
                actualizarCategoria={actualizarCategoria}
                categorias={props.categorias}
            />
            <CampoTexto
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto
                titulo="Descripcion"
                placeholder="Ingresar descripcion"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />
            <CampoTexto
                titulo="URL del Video"
                placeholder="URL del Video"
                required
                valor={videoUrl}
                actualizarValor={actualizarVideoUrl}
            />

            <CampoTexto
                /* titulo="ID del Video" */
                /* placeholder="Puedes encontrar el ID de un video de YouTube en la URL del video después del v=" */
                /* required */
                /* valor={videoID} */
                /* actualizarValor={actualizarVideoID} */
            />


            <div className="button-container">
                <Boton titulo="Guardar" />
                <Boton titulo="Limpiar" disabled={true} />
                <Boton titulo="Nueva Categoría" />
            </div>

        </form>
    </section>
}

export default Formulario