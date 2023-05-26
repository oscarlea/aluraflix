import { useState} from "react"
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
//import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import axios from 'axios';
import { StyledForm, StyledTituloCategoria, StyledboxFormulario } from "../../UI";

import { registrarVideo } from '../../api/api';


const FormularioVideos = (props) => {
    
    const navigate = useNavigate();

    const [id_categoria, actualizarIdCategoria] = useState("")
    const [videoUrl, actualizarVideoUrl] = useState("");

     
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

        console.log(videoInfo)

        datosAEnviar.titulo = videoInfo.title;
        datosAEnviar.thumbnail_url = videoInfo.thumbnail_url;
        datosAEnviar.author_name = videoInfo.author_name;
        registrarVideo(datosAEnviar);
        navigate('/');
        //agregarNuevoVideo(datosAEnviar);
    };

 
/* 
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
          videoID,
        };
    
        try {
          const encodedUrl = encodeURIComponent(videoUrl);
          const videoInfo = await getVideoInfo(encodedUrl);
    
          datosAEnviar.titulo = videoInfo.title;
          datosAEnviar.thumbnail_url = videoInfo.thumbnail_url;
          datosAEnviar.author_name = videoInfo.author_name;
          registrarVideo(datosAEnviar);
          navigate("/");
        } catch (error) {
          console.error("Error al obtener la información del video:", error);
          // Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
        }
      };
 */

/* 
    const getVideoInfo = async (url) => {
        const encodedUrl = encodeURIComponent(url);
        const response = await axios.get(`https://www.youtube.com/oembed?url=${encodedUrl}&format=json`);
        console.log("response.data..: " , response.data)
        return response.data;
    };
  */

    const getVideoInfo = async (url) => {
        try {
          const encodedUrl = encodeURIComponent(url);
          const response = await axios.get(
            `https://www.youtube.com/oembed?url=${encodedUrl}&format=json`
          );
          console.log("response.data: ", response.data);
          return response.data;
        } catch (error) {
          if (error.response && error.response.status === 401) {
            console.log("El propietario del video inhabilitó la reproducción en otros sitios web.");
            alert("El propietario del video inhabilitó la reproducción en otros sitios web.")
            navigate('/');
            return null; // O retorna un objeto con valores predeterminados
          } else {
            console.error("Error al realizar la solicitud GET:", error);
            throw error;
          }
        }
      };
       

    const getVideoId = (url) => {
        const match = url.match(/youtube\.com\/watch\?v=(\w+)/);
        return match ? match[1] : "";
    };

    return <StyledboxFormulario>

        <StyledForm onSubmit={nuevoVideo} >
            <StyledTituloCategoria>Nuevo Video</StyledTituloCategoria>
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
            </div>
        </StyledForm>

    </StyledboxFormulario>
}

export default FormularioVideos