import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import axios from 'axios';

import { registrarVideo } from '../../api/api';

//import URLParse from "url-parse"   // eliminar-desinstalar
//import { parser } from 'html-metadata-parser'; // eliminar-desinstalar

const Formulario = (props) => {

    // Videos
    const [id_categoria, actualizarIdCategoria] = useState("")
    const [videoUrl, actualizarVideoUrl] = useState("");
    // categorias

    const [nombre, actualizarNombre] = useState("")
    const [color, actualizarColor] = useState("")
    const [descripcionC, actualizarDescripcionC] = useState("")

    const [mostrarSegundoFormulario, setMostrarSegundoFormulario] = useState(false);

    const {  registrarCategoria, agregarNuevoVideo } = props

    const nuevoVideo = async (e) => {
        e.preventDefault();
        const videoID = getVideoId(videoUrl);
        const id = uuidv4();
        const datosAEnviar = {
            id,
            id_categoria,
            titulo: "",
            videoUrl,
            thumbnail_url: "",
            author_name: "",
            videoID
        };
        const videoInfo = await getVideoInfo(videoUrl);
        datosAEnviar.titulo = videoInfo.title;
        datosAEnviar.thumbnail_url = videoInfo.thumbnail_url;
        datosAEnviar.author_name = videoInfo.author_name;
        registrarVideo(datosAEnviar);
        agregarNuevoVideo(datosAEnviar);
    };

    const getVideoInfo = async (url) => {
        const response = await axios.get(`https://www.youtube.com/oembed?url=${url}&format=json`);
        return response.data;
    };

    const getVideoId = (url) => {
        const match = url.match(/youtube\.com\/watch\?v=(\w+)/);
        return match ? match[1] : "";
    };

    const nuevaCategoria = (e) => {
        e.preventDefault()
        registrarCategoria({ nombre: nombre, colorPrimario: color, descripcion: descripcionC })
    }

    return <section className="formulario">

        <form onSubmit={nuevoVideo} >
            <h2>Nuevo Video</h2>
            <ListaOpciones
                valor={id_categoria}
                actualizarIdCategoria={actualizarIdCategoria}
                categorias={props.categorias}
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
                <Boton titulo="Nueva Categoría" onClick={() => setMostrarSegundoFormulario(true)} />
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